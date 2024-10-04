import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// Fetch all issues
export async function GET() {
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
