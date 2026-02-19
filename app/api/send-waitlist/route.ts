import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    const { email } = await req.json();
    await resend.emails.send({
    from: "Labelshot <noreply@labelshot.io>",
    to: email,
    subject: "You're on the list — Labelshot 💜",
    text: `You're officially on the Labelshot waitlist.

We’re building the fastest way to turn supplement labels into studio-ready product images.

We’ll let you know as soon as early access opens.

— Labelshot`,
    html: `
      <div style="font-family: Inter, system-ui, -apple-system, sans-serif; background:#f5f5f5; padding:40px;">
        <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:16px; padding:40px;">
          
          <h1 style="margin-top:0; font-size:28px;">
            You're in 💜
          </h1>

          <p style="font-size:16px; color:#555; line-height:1.6;">
            You’re officially on the <strong>Labelshot</strong> waitlist.
          </p>

          <p style="font-size:16px; color:#555; line-height:1.6;">
            We’re building the fastest way to turn your flat supplement label
            into a <strong>studio-ready product image</strong>.
          </p>

          <div style="margin:28px 0; padding:20px; background:#f3f0ff; border-radius:12px;">
            <p style="margin:0; font-size:15px; color:#4c1d95;">
              No distorted ingredients.  
              No AI-mangled text.  
              Just clean, photorealistic renders.
            </p>
          </div>

          <p style="font-size:15px; color:#666;">
            We’ll email you as soon as early access opens.
          </p>

          <hr style="margin:32px 0; border:none; border-top:1px solid #eee;" />

          <p style="font-size:14px; color:#888;">
            Labelshot<br/>
            <span style="color:#7c3aed; font-weight:600;">
              Your label. Perfectly rendered.
            </span>
          </p>

        </div>
      </div>
    `,
  });
}