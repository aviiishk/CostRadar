import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient(); // 🔥 REQUIRED
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Always redirect (success OR failure)
  return NextResponse.redirect(new URL("/", request.url));
}
