"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/lib/supabase/supabaseClient"; // Import Supabase client
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { message } from "antd";

// Modify the form schema to handle File[] for images and documents
const formSchema = z.object({
  founderName: z
    .string()
    .min(2, { message: "Founder name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  startupName: z
    .string()
    .min(2, { message: "Startup name must be at least 2 characters." }),
  website: z
    .string()
    .url({ message: "Invalid URL." })
    .optional()
    .or(z.literal("")),
  foundingDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Please use YYYY-MM-DD format." }),
  industry: z.string().min(1, { message: "Please select an industry." }),
  teamSize: z
    .number()
    .int()
    .positive({ message: "Team size must be a positive number." }),
  fundingStage: z.enum([
    "Pre-seed",
    "Seed",
    "Series A",
    "Series B",
    "Series C",
    "Series D+",
  ]),
  fundingAmount: z
    .number()
    .nonnegative({ message: "Funding amount must be a non-negative number." }),
  productDescription: z
    .string()
    .min(50, { message: "Product description must be at least 50 characters." })
    .max(500),
  problemStatement: z
    .string()
    .min(50, { message: "Problem statement must be at least 50 characters." })
    .max(500),
  targetMarket: z
    .string()
    .min(20, {
      message: "Target market description must be at least 20 characters.",
    })
    .max(200),
  competitiveAdvantage: z
    .string()
    .min(50, {
      message: "Competitive advantage must be at least 50 characters.",
    })
    .max(500),
  revenueModel: z
    .string()
    .min(20, { message: "Revenue model must be at least 20 characters." })
    .max(200),
  traction: z
    .string()
    .min(20, { message: "Traction details must be at least 20 characters." })
    .max(200),
  goals: z
    .string()
    .min(50, { message: "Goals must be at least 50 characters." })
    .max(500),
  youtubeLink: z.string().url("Please enter a valid URL").optional(),
  termsAgreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
  images: z.array(z.any()).optional(), // Store File[] objects here
  pptxFile: z.any().optional(), // Store File object
  pitchDeckPdf: z.any().optional(), // Store File object
  supportingDocuments: z.array(z.any()).optional(), // Store File[] objects
});

export default function StartupContestForm() {
  const [phase, setPhase] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      founderName: "",
      email: "",
      startupName: "",
      website: "",
      foundingDate: "",
      industry: "",
      teamSize: 1,
      fundingStage: "Pre-seed",
      fundingAmount: 0,
      productDescription: "",
      problemStatement: "",
      targetMarket: "",
      competitiveAdvantage: "",
      revenueModel: "",
      traction: "",
      goals: "",
      images: [],
      pptxFile: undefined,
      pitchDeckPdf: undefined,
      youtubeLink: "",
      supportingDocuments: [],
      termsAgreed: false,
    },
  });

  // Type for the file parameter
  async function uploadToBucket(
    file: File,
    bucketName: string,
  ): Promise<string> {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) {
      console.log("Error uploading file:", error);
      throw error;
    }

    // Return the public URL of the uploaded file
    const { publicUrl } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath).data;
    return publicUrl;
  }

  // Type for values parameter
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values before submission:", values); // Kiểm tra giá trị form trước khi submit
    setIsSubmitting(true);
    console.log("Form is being submitted..."); // Log khi bắt đầu submit
    try {
      // Handle image uploads to `vlu-app-img` bucket
      console.log("Uploading images..."); // Log khi upload image
      const imageUrls = await Promise.all(
        (values.images || []).map((file: File) =>
          uploadToBucket(file, "vlu-app-img"),
        ),
      );

      // Handle document uploads to `startup-files` bucket
      console.log("Uploading pptx and pdf files..."); // Log khi upload file
      const pptxUrl = values.pptxFile
        ? await uploadToBucket(values.pptxFile as File, "startup-files")
        : null;
      const pdfUrl = values.pitchDeckPdf
        ? await uploadToBucket(values.pitchDeckPdf as File, "startup-files")
        : null;
      const supportingDocUrls = await Promise.all(
        (values.supportingDocuments || []).map((file: File) =>
          uploadToBucket(file, "startup-files"),
        ),
      );

      // Insert into Supabase
      console.log("Inserting data into Supabase..."); // Log trước khi insert vào Supabase
      const { error } = await supabase.from("startups").insert([
        {
          foundername: values.founderName,
          email: values.email,
          startupname: values.startupName,
          website: values.website,
          foundingdate: values.foundingDate,
          industry: values.industry,
          teamsize: values.teamSize,
          fundingstage: values.fundingStage,
          fundingamount: values.fundingAmount,
          productdescription: values.productDescription,
          problemstatement: values.problemStatement,
          targetmarket: values.targetMarket,
          competitiveadvantage: values.competitiveAdvantage,
          revenuemodel: values.revenueModel,
          traction: values.traction,
          goals: values.goals,
          youtubelink: values.youtubeLink,
          termsagreed: values.termsAgreed,
          images: imageUrls, // Store image URLs
          pptxfile: pptxUrl, // Store PPTX URL
          pitchdeckpdf: pdfUrl, // Store PDF URL
          supportingdocuments: supportingDocUrls, // Store supporting document URLs
        },
      ]);

      if (error) {
        console.error("Error inserting data into Supabase:", error); // Log lỗi khi insert dữ liệu vào Supabase
        throw error;
      }

      toast({
        title: "Success",
        description: "Your startup has been successfully submitted!",
      });

      message.success("Your startup has been successfully submitted!");
    } catch (error) {
      console.error("Form submission error:", error); // Log khi có lỗi trong quá trình submit form
      toast({
        title: "Error",
        description:
          "There was an issue submitting the form. Please try again.",
      });
      message.error(
        "There was an issue submitting the form. Please try again.",
      );
    }

    setIsSubmitting(false);
  }

  // Trigger validation chỉ cho các field trong phase hiện tại
  const triggerValidationForPhase = async () => {
    let fieldsToValidate: Array<keyof z.infer<typeof formSchema>> = []; // Khai báo fieldsToValidate với kiểu hợp lệ

    if (phase === 1) {
      fieldsToValidate = [
        "founderName",
        "email",
        "startupName",
        "website",
        "foundingDate",
        "industry",
        "teamSize",
      ];
    } else if (phase === 2) {
      fieldsToValidate = [
        "fundingStage",
        "fundingAmount",
        "productDescription",
        "problemStatement",
      ];
    } else if (phase === 3) {
      fieldsToValidate = [
        "targetMarket",
        "competitiveAdvantage",
        "revenueModel",
        "traction",
        "goals",
      ];
    } else if (phase === 4) {
      fieldsToValidate = [
        "images",
        "pptxFile",
        "pitchDeckPdf",
        "youtubeLink",
        "supportingDocuments",
        "termsAgreed",
      ];
    }

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const nextPhase = async () => {
    const isValid = await triggerValidationForPhase();
    if (isValid) {
      setPhase((prevPhase) => prevPhase + 1);
    } else {
      console.log("Validation failed, cannot move to the next phase");
    }
  };

  const prevPhase = () => {
    if (phase > 1) {
      setPhase(phase - 1);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-4xl md:mb-8 md:mt-4">
      <CardHeader>
        <CardTitle>Startup Contest Submission Form</CardTitle>
        <CardDescription>
          Please fill out the form below to submit your startup for the
          university contest.
        </CardDescription>
        <Progress value={(phase / 4) * 100} className="mt-4 w-full" />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Ngăn form submit mặc định
              if (phase === 4) {
                // Chỉ submit khi đang ở phase cuối cùng
                form.handleSubmit(onSubmit)(e);
              }
            }}
            className="space-y-8"
          >
            {phase === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">
                  Phase 1: Founder and Startup Basics
                </h2>
                <FormField
                  control={form.control}
                  name="founderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Founder Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startupName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Startup Name</FormLabel>
                      <FormControl>
                        <Input placeholder="My Awesome Startup" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://www.example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="foundingDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Founding Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="E-commerce">E-commerce</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Size</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value, 10))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {phase === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">
                  Phase 2: Funding and Product
                </h2>
                <FormField
                  control={form.control}
                  name="fundingStage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Funding Stage</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select funding stage" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pre-seed">Pre-seed</SelectItem>
                          <SelectItem value="Seed">Seed</SelectItem>
                          <SelectItem value="Series A">Series A</SelectItem>
                          <SelectItem value="Series B">Series B</SelectItem>
                          <SelectItem value="Series C">Series C</SelectItem>
                          <SelectItem value="Series D+">Series D+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fundingAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Funding Amount (USD)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your product or service in detail..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a clear and concise description of your product
                        or service (50-500 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="problemStatement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Problem Statement</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What problem does your startup solve?"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Clearly articulate the problem your startup aims to
                        solve (50-500 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {phase === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">
                  Phase 3: Market and Strategy
                </h2>
                <FormField
                  control={form.control}
                  name="targetMarket"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Market</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your target market..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Define your target market and potential customers
                        (20-200 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="competitiveAdvantage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Competitive Advantage</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What sets your startup apart from competitors?"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Explain your unique value proposition and competitive
                        edge (50-500 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="revenueModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Revenue Model</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How does your startup generate revenue?"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Describe your business model and revenue streams (20-200
                        characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="traction"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Traction</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your startup's traction and milestones..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Highlight key metrics, user growth, or notable
                        achievements (20-200 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Future Goals</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What are your startup's short-term and long-term goals?"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Outline your startup&apos;s vision and key objectives
                        for the next 1-5 years (50-500 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {phase === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">
                  Phase 4: Additional Materials
                </h2>
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Images</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".jpg,.jpeg,.png,.webp"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files || []);
                            field.onChange(files);
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload images related to your startup (max 20MB each,
                        .jpg, .jpeg, .png, .webp)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pptxFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PowerPoint Presentation</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pptx"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              field.onChange(file);
                            }
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload a PowerPoint presentation about your startup (max
                        20MB, .pptx)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pitchDeckPdf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pitch Deck (PDF)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              field.onChange(file);
                            }
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload your pitch deck in PDF format (max 20MB)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="youtubeLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YouTube Video Link</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://www.youtube.com/watch?v=..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a link to a YouTube video about your startup
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="supportingDocuments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Supporting Documents</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf,.pptx"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files || []);
                            field.onChange(files);
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload any additional supporting documents (max 20MB
                        each, .pdf, .pptx)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="termsAgreed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the terms and conditions
                        </FormLabel>
                        <FormDescription>
                          By submitting this form, you agree to our{" "}
                          <a href="#" className="text-primary underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-primary underline">
                            Privacy Policy
                          </a>
                          .
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            )}

            <div className="flex justify-between">
              <Button type="button" onClick={prevPhase} disabled={phase === 1}>
                Previous
              </Button>
              {phase < 4 ? (
                <Button type="button" onClick={nextPhase}>
                  Next
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-gray-500">
          All fields are required unless marked as optional.
        </p>
      </CardFooter>
    </Card>
  );
}
