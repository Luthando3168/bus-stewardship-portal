
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
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { fullName, email } = await req.json()

    if (!fullName || !email) {
      throw new Error("Full name and email are required")
    }

    const html = await renderAsync(
      WelcomeEmail({ fullName })
    )

    const data = await resend.emails.send({
      from: "Luthando Maduna CA <info@madunacas.com>",
      to: [email],
      subject: "Welcome to Luthando Maduna Chartered Accountants",
      html: html,
    })

    console.log("Welcome email sent successfully:", data)

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    console.error("Error sending welcome email:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    )
  }
})
