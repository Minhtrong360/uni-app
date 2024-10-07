import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// Fetch all issues
export async function GET() {
  const supabase = createClient();

  try {
    const { data: issues, error } = await supabase
      .from("support_issues")
      .select("*");

    if (error) {
      console.error("Error fetching issues:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return NextResponse.json(
        { message: error.message, details: error.details },
        { status: 500 },
      );
    }

    return NextResponse.json({ issues }, { status: 200 });
  } catch (error) {
    console.error("Error processing GET request:", error);
    return NextResponse.json(
      { message: "Failed to fetch issues" },
      { status: 500 },
    );
  }
}
