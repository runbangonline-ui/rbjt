import { NextResponse } from "next/server";

export async function POST() {
  const url = process.env.NEXT_PUBLIC_AIRWALLEX_CHECKOUT_URL;
  if (!url) {
    return NextResponse.json({ error: "airwallex_not_configured" }, { status: 503 });
  }
  return NextResponse.json({ url });
}
