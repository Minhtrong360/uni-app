import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
export async function POST(request: Request) {
  const supabase = createClient();
  try {
    const formData = await request.formData(); // Using formData to handle the file and other fields
    const title = formData.get("title"); // New title field
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const studentId = formData.get("studentId");
    const requestType = formData.get("requestType");
    const urgency = formData.get("urgency");
    const description = formData.get("description");
    const contactMethod = formData.get("contactMethod");
    const image = formData.get("image") as File; // Get image file from formData

    let imageUrl = "";

    if (image) {
      const fileName = `${Date.now()}_${image.name}`; // Unique filename

      // Upload the image to Supabase storage
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, error: uploadError } = await supabase.storage
        .from("support-images") // Make sure you have a storage bucket named 'support-images'
        .upload(fileName, image);

      if (uploadError) {
        console.error("Error uploading image:", uploadError.message);
        return NextResponse.json(
          { message: uploadError.message },
          { status: 500 },
        );
      }

      // Get the public URL of the uploaded image
      const { data: publicUrl } = supabase.storage
        .from("support-images")
        .getPublicUrl(fileName);

      if (!publicUrl) {
        console.error("Error generating public URL");
        return NextResponse.json(
          { message: "Error generating public URL" },
          { status: 500 },
        );
      }

      imageUrl = publicUrl.publicUrl;
    }

    // Insert data into the database
    const { data: insertData, error: insertError } = await supabase
      .from("support_issues")
      .insert([
        {
          title,
          full_name: fullName,
          email,
          student_id: studentId,
          request_type: requestType,
          urgency,
          description,
          contact_method: contactMethod,
          image: imageUrl, // Store the public URL of the image
        },
      ]);

    if (insertError) {
      console.error("Error inserting data:", insertError.message);
      return NextResponse.json(
        { message: insertError.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Issue created successfully", data: insertData },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      { message: "Failed to process request" },
      { status: 500 },
    );
  }
}
