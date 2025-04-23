
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"
import { renderAsync } from 'npm:@react-email/components@0.0.12'
import { RegistrationApprovedEmail } from "./_templates/registration-approved.tsx"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  // Handle CORS preflight requests
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
      fullName, 
      email, 
      clientNumber, 
      bankAccountNumber, 
      bankAccountBranch 
    } = await req.json()

    const html = await renderAsync(
      RegistrationApprovedEmail({ 
        fullName, 
        clientNumber, 
        bankAccountNumber, 
        bankAccountBranch 
      })
    )
    
    const data = await resend.emails.send({
      from: "Luthando Maduna Chartered Accountants <info@madunacas.com>",
      to: [email],
      subject: "Your MCA Direct Registration is Approved!",
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
    console.error("Error sending registration approval email:", error)
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
