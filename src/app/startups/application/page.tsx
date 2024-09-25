"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;
const ACCEPTED_DOCUMENT_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
] as const;

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
    .max(500, {
      message: "Product description must not exceed 500 characters.",
    }),
  problemStatement: z
    .string()
    .min(50, { message: "Problem statement must be at least 50 characters." })
    .max(500, { message: "Problem statement must not exceed 500 characters." }),
  targetMarket: z
    .string()
    .min(20, {
      message: "Target market description must be at least 20 characters.",
    })
    .max(200, {
      message: "Target market description must not exceed 200 characters.",
    }),
  competitiveAdvantage: z
    .string()
    .min(50, {
      message: "Competitive advantage must be at least 50 characters.",
    })
    .max(500, {
      message: "Competitive advantage must not exceed 500 characters.",
    }),
  revenueModel: z
    .string()
    .min(20, { message: "Revenue model must be at least 20 characters." })
    .max(200, { message: "Revenue model must not exceed 200 characters." }),
  traction: z
    .string()
    .min(20, { message: "Traction details must be at least 20 characters." })
    .max(200, { message: "Traction details must not exceed 200 characters." }),
  goals: z
    .string()
    .min(50, { message: "Goals must be at least 50 characters." })
    .max(500, { message: "Goals must not exceed 500 characters." }),
  images: z
    .array(
      z.object({
        name: z.string(),
        size: z.number().max(MAX_FILE_SIZE, "File size must be less than 10MB"),
        type: z.enum(ACCEPTED_IMAGE_TYPES, {
          errorMap: () => ({
            message: "Only .jpg, .jpeg, .png and .webp formats are supported",
          }),
        }),
      }),
    )
    .optional(),
  pptxFile: z
    .object({
      name: z.string(),
      size: z.number().max(MAX_FILE_SIZE, "File size must be less than 10MB"),
      type: z.literal(
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ),
    })
    .optional(),
  pitchDeckPdf: z
    .object({
      name: z.string(),
      size: z.number().max(MAX_FILE_SIZE, "File size must be less than 10MB"),
      type: z.literal("application/pdf"),
    })
    .optional(),
  youtubeLink: z
    .string()
    .url("Please enter a valid URL")
    .regex(
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
      "Please enter a valid YouTube URL",
    )
    .optional(),
  supportingDocuments: z
    .array(
      z.object({
        name: z.string(),
        size: z.number().max(MAX_FILE_SIZE, "File size must be less than 10MB"),
        type: z.enum(ACCEPTED_DOCUMENT_TYPES, {
          errorMap: () => ({
            message: "Only .pdf and .pptx formats are supported",
          }),
        }),
      }),
    )
    .optional(),
  termsAgreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Form submitted successfully!",
        description: "Thank you for submitting your startup details.",
      });
      setIsSubmitting(false);
    }, 2000);
  }

  const nextPhase = () => {
    if (phase < 4) {
      setPhase(phase + 1);
    }
  };

  const prevPhase = () => {
    if (phase > 1) {
      setPhase(phase - 1);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-4xl">
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                            field.onChange(
                              files.map((file) => ({
                                name: file.name,
                                size: file.size,
                                type: file.type,
                              })),
                            );
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload images related to your startup (max 10MB each,
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
                              field.onChange({
                                name: file.name,
                                size: file.size,
                                type: file.type,
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload a PowerPoint presentation about your startup (max
                        10MB, .pptx)
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
                              field.onChange({
                                name: file.name,
                                size: file.size,
                                type: file.type,
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload your pitch deck in PDF format (max 10MB)
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
                            field.onChange(
                              files.map((file) => ({
                                name: file.name,
                                size: file.size,
                                type: file.type,
                              })),
                            );
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload any additional supporting documents (max 10MB
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
