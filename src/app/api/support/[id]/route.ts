import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Fetch a specific issue by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const supabase = createClient();
  const { id } = params;

  try {
    const { data: issue, error } = await supabase
      .from("support_issues")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching issue:", {
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

    return NextResponse.json({ issue }, { status: 200 });
  } catch (error) {
    console.error("Error processing GET request:", error);
    return NextResponse.json(
      { message: "Failed to fetch issue" },
      { status: 500 },
    );
  }
}
