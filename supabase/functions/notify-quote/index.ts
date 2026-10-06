import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const BUSINESS_EMAIL = "srindhuenterprises@gmail.com";
const BUSINESS_PHONE = "86886 58358";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();

    if (!body || !body.name || !body.phone || !body.items_needed) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, phone, items_needed" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const {
      name,
      organisation,
      phone,
      email,
      items_needed,
      preferred_date,
    } = body;

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { data, error: dbError } = await supabase
      .from("quote_requests")
      .insert({
        name: String(name).trim(),
        organisation: organisation ? String(organisation).trim() : null,
        phone: String(phone).trim(),
        email: email ? String(email).trim() : null,
        items_needed: String(items_needed).trim(),
        preferred_date: preferred_date || null,
      })
      .select("id")
      .single();

    if (dbError) {
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send email notification via Supabase's built-in email
    const emailSubject = `New Quote Request from ${name}${organisation ? ` (${organisation})` : ""}`;
    const emailHtml = `
      <h2>New Quote Request</h2>
      <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
        <tr><td style="padding:6px 12px;font-weight:bold;">Name:</td><td style="padding:6px 12px;">${name}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Organisation:</td><td style="padding:6px 12px;">${organisation || "—"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Phone:</td><td style="padding:6px 12px;">${phone}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Email:</td><td style="padding:6px 12px;">${email || "—"}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Preferred Date:</td><td style="padding:6px 12px;">${preferred_date || "—"}</td></tr>
      </table>
      <h3 style="font-family:Arial,sans-serif;font-size:14px;">Items Requested:</h3>
      <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;border:1px solid #e2e8f0;padding:12px;border-radius:8px;background:#f8fafc;">${items_needed}</p>
      <hr style="margin:20px 0;border:none;border-top:1px solid #e2e8f0;" />
      <p style="font-family:Arial,sans-serif;font-size:12px;color:#64748b;">
        This request was submitted from the Bezawada Basket website.<br/>
        Contact the customer at ${phone}${email ? ` or ${email}` : ""}.<br/>
        Business phone: ${BUSINESS_PHONE}
      </p>
    `;

    // Use Resend if available, otherwise just log
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Bezawada Basket <onboarding@resend.dev>",
          to: [BUSINESS_EMAIL],
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      if (!resendResponse.ok) {
        const resendError = await resendResponse.text();
        console.error("Resend error:", resendError);
      }
    } else {
      console.log("Email notification (no RESEND_API_KEY configured):");
      console.log("To:", BUSINESS_EMAIL);
      console.log("Subject:", emailSubject);
      console.log("Body:", items_needed);
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Quote notification error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
