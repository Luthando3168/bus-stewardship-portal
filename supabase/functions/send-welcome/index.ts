
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { renderAsync } from 'npm:@react-email/components@0.0.12'
import { Resend } from "npm:resend@2.0.0"
import { WelcomeEmail } from "./_templates/welcome.tsx"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  // Enhanced CORS handling
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
    // More flexible authentication - allow both JWT and anonymous access for initial registration
    let isAuthenticated = false;
    const jwt = req.headers.get("authorization")?.replace("Bearer ", "")
    
    if (jwt) {
      isAuthenticated = true;
      console.log("Request authenticated with JWT");
    } else {
      // For initial registrations, allow anonymous access with logging
      console.log("Anonymous welcome email request - this is normal for initial registrations");
    }

    const { fullName, email, emailType, subject: customSubject, body: customBody } = await req.json()

    // Enhanced input validation
    if (!fullName || typeof fullName !== 'string') {
      throw new Error("Full name is required and must be a string")
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      throw new Error("Valid email is required")
    }

    console.log(`Rendering email template for ${fullName} at ${email}`)
    
    // Determine whether to use custom content or WelcomeEmail template
    let html;
    let subject;
    
    if (customBody) {
      html = customBody;
      subject = customSubject || "Welcome to Luthando Maduna Chartered Accountants";
      console.log("Using custom email content");
    } else {
      html = await renderAsync(
        WelcomeEmail({ fullName })
      );
      subject = "Welcome to Luthando Maduna Chartered Accountants";
      console.log("Using WelcomeEmail template");
    }
    
    console.log("Email HTML rendered successfully")

    // Send email with strict content security policies
    const data = await resend.emails.send({
      from: "Luthando Maduna Chartered Accountants <info@madunacas.com>",
      to: [email],
      subject: subject,
      html: html,
      reply_to: "info@madunacas.com",
      headers: {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Content-Security-Policy": "default-src 'self'"
      }
    })

    console.log("Email sending response:", data)

    if (data.error) {
      throw new Error(`Resend API error: ${JSON.stringify(data.error)}`)
    }

    console.log("Welcome email sent successfully")

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      headers: { 
        ...corsHeaders, 
        "Content-Type": "application/json",
        "X-Content-Type-Options": "nosniff" 
      },
      status: 200,
    })
  } catch (error) {
    console.error("Error sending welcome email:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "X-Content-Type-Options": "nosniff" 
        },
        status: 500,
      }
    )
  }
})
