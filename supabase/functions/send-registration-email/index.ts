
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { renderAsync } from 'npm:@react-email/components@0.0.12';
import { ShareCertificateEmail } from "./_templates/share-certificate.tsx";
import { RegistrationConfirmEmail } from "./_templates/registration-confirm.tsx";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  fullName: string;
  email: string;
  confirmationLink?: string;
  dealName?: string;
  certificateNumber?: string;
  viewLink?: string;
}

export const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: EmailRequest = await req.json();
    const { fullName, email } = body;

    if (!email || !fullName) {
      throw new Error("Missing required fields: email and fullName are required");
    }

    // Determine which email template to use based on the request
    let emailHtml: string;
    let subject: string;

    if (body.certificateNumber && body.dealName && body.viewLink) {
      // Share certificate email
      emailHtml = await renderAsync(
        ShareCertificateEmail({
          fullName,
          dealName: body.dealName,
          certificateNumber: body.certificateNumber,
          viewLink: body.viewLink,
        })
      );
      subject = "Your MCA Direct Share Certificate is Ready";
    } else {
      // Registration confirmation email
      emailHtml = await renderAsync(
        RegistrationConfirmEmail({
          fullName,
          confirmationLink: body.confirmationLink || `${req.headers.get("origin") || ""}/complete-registration`,
        })
      );
      subject = "Complete Your MCA Direct Registration";
    }

    console.log(`Sending ${subject} email to ${email}`);
    
    const emailResponse = await resend.emails.send({
      from: "MCA Direct <onboarding@resend.dev>",
      to: [email],
      subject: subject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
