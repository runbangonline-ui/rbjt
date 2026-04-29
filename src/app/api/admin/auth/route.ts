import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ||
    "postgresql://rbjtglobal_admin:zzb12580@localhost:5432/rbjtglobal_prod",
});

// Simple session token store (in production, use Redis or JWT)
const sessions = new Map<string, { email: string; expires: number }>();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const result = await pool.query(
      "SELECT * FROM admin_users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password_hash);

    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create session token
    const token = crypto.randomUUID();
    sessions.set(token, {
      email: user.email,
      expires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  if (token) {
    sessions.delete(token);
  }

  const response = NextResponse.json({ success: true });
  response.cookies.delete("admin_token");
  return response;
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const session = sessions.get(token);
  if (!session || session.expires < Date.now()) {
    sessions.delete(token);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true, email: session.email });
}
