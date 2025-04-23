
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"
import { renderAsync } from 'npm:@react-email/components@0.0.12'
import { RegistrationConfirmEmail } from "./_templates/registration-confirm.tsx"
import { DealApprovalEmail } from "./_templates/deal-approval.tsx"
import { ShareCertificateEmail } from "./_templates/share-certificate.tsx"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { 
      headers: {
        ...corsHeaders,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Max-Age": "86400"
      }
    })
  }

  try {
    const { 
      type,
      fullName, 
      email,
      confirmationLink,
      dealName,
      investmentAmount,
      approvalLink,
      certificateNumber,
      viewLink
    } = await req.json()

    let html;
    let subject;

    switch (type) {
      case 'registration':
        html = await renderAsync(
          RegistrationConfirmEmail({ 
            fullName, 
            confirmationLink 
          })
        )
        subject = "Complete Your MCA Direct Registration"
        break;
      
      case 'deal_approval':
        html = await renderAsync(
          DealApprovalEmail({ 
            fullName, 
            dealName, 
            investmentAmount, 
            approvalLink 
          })
        )
        subject = "Your MCA Direct Investment is Ready for Approval"
        break;
      
      case 'share_certificate':
        html = await renderAsync(
          ShareCertificateEmail({ 
            fullName, 
            dealName, 
            certificateNumber, 
            viewLink 
          })
        )
        subject = "Your MCA Direct Share Certificate is Ready"
        break;
      
      default:
        throw new Error("Invalid email type")
    }
    
    const data = await resend.emails.send({
      from: "Luthando Maduna Chartered Accountants <info@madunacas.com>",
      to: [email],
      subject: subject,
      html: html,
      reply_to: "info@madunacas.com",
    })

    return new Response(JSON.stringify(data), {
      headers: { 
        ...corsHeaders, 
        "Content-Type": "application/json",
      },
      status: 200,
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
        },
        status: 500,
      }
    )
  }
})
