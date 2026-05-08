import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ error: "stripe_not_configured" }, { status: 503 });
  }

  let body: { locale?: string; amount?: number; currency?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const locale = body.locale === "zh" ? "zh" : "en";
  const amountMajor = Math.max(1, Math.floor(Number(body.amount) || 50));
  const currency = (body.currency || "usd").toLowerCase();
  const site =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

  try {
    const stripe = new Stripe(secret);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency,
            unit_amount: amountMajor * 100,
            product_data: {
              name: "JBJT Global — online payment",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${site}/${locale}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${site}/${locale}/pay`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "stripe_checkout_failed" }, { status: 502 });
  }
}
