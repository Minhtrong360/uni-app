"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { message } from "antd";
import Image from "next/image";

interface FormData {
  title: string;
  fullName: string;
  email: string;
  studentId: string;
  requestType: string;
  urgency: string;
  description: string;
  contactMethod: string;
  image: File | null;
}

export default function CreateTicket() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    fullName: "",
    email: "",
    studentId: "",
    requestType: "",
    urgency: "",
    description: "",
    contactMethod: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // State for image preview
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, image: file });

    // Create image preview URL
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview); // Set preview URL
    } else {
      setPreviewUrl(null); // Reset preview if no file is selected
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    message.success("Issue has been created successful");
    e.preventDefault();
    const form = new FormData(); // Use FormData to handle file uploads
    form.append("title", formData.title);
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("studentId", formData.studentId);
    form.append("requestType", formData.requestType);
    form.append("urgency", formData.urgency);
    form.append("description", formData.description);
    form.append("contactMethod", formData.contactMethod);
    if (formData.image) {
      form.append("image", formData.image); // Append image file
    }

    try {
      const response = await axios.post("/api/create-ticket", form);
      console.log("Server response:", response.data);
      if (response.status === 200) {
        router.push("/support");
      }
    } catch (error) {
      console.error("Failed to create ticket:", error);
    }
  };

  return (
    <Card className="mx-auto mb-8 w-full max-w-3xl md:mt-4">
      <CardHeader>
        <CardTitle>Advanced Student Support Request</CardTitle>
        <CardDescription>
          Please provide detailed information for your support request
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="student-id">Student ID</Label>
            <Input
              id="studentId"
              placeholder="Enter your student ID"
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter your title"
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="request-type">Request Type</Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("requestType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select request type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency</Label>
              <Select
                onValueChange={(value) => handleSelectChange("urgency", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              onChange={handleInputChange}
              className="min-h-[100px]"
              id="description"
              placeholder="Describe your request in detail"
            />
          </div>
          <div className="space-y-2">
            <Label>Attach Image</Label>
            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-secondary transition-colors hover:bg-secondary/80"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <UploadIcon className="mb-4 h-8 w-8 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <Input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </Label>
            </div>
            {previewUrl && ( // Display image preview if available
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Image Preview:</p>
                <Image
                  width={800}
                  height={400}
                  src={previewUrl}
                  alt="Preview"
                  className="h-auto w-full max-w-xs rounded-md"
                />
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-method">Preferred Contact Method</Label>
            <Select
              onValueChange={(value) =>
                handleSelectChange("contactMethod", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select contact method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="text">Text Message</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the terms and conditions
            </Label>
          </div>
          <Button className="w-full" type="submit">
            Submit Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
