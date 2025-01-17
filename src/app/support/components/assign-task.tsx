"use client";
// https://v0.dev/chat/_22qfnAlbv1
import { Button } from "@/components/ui/button";
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
import { UploadIcon, XIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { message } from "antd";

export default function AssignTask() {
  const handleClick = () => {
    message.success("Task has been assigned successfully!");
  };
  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Assign Task to PIC</CardTitle>
        <CardDescription>
          Please provide detailed information for task assignment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="assign-to">Assign to</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select PIC" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-doe">John Doe</SelectItem>
                <SelectItem value="jane-smith">Jane Smith</SelectItem>
                <SelectItem value="alex-johnson">Alex Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ticket-id">Ticket ID</Label>
              <Input id="ticket-id" value="TKT-2023-0042" readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student">Student</Label>
              <Input id="student" value="Jane Doe" readOnly />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" value="Technical Support" readOnly />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select defaultValue="in-progress">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Select priority level" />
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
              className="min-h-[100px]"
              id="description"
              value="Hello this is ticket"
              readOnly
            />
          </div>
          <div className="space-y-2">
            <Label>Attached Image</Label>
            <div className="flex w-full items-center justify-center">
              <Button className="w-full py-8" variant="outline">
                <UploadIcon className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Card className="p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    width={3000}
                    height={3000}
                    src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/ssc/ssc_3.jpg"
                    alt="Attached image thumbnail"
                    className="h-10 w-10 rounded object-cover"
                  />
                  <span className="text-sm font-medium">
                    error_screenshot.png
                  </span>
                </div>
                <Button variant="ghost" size="icon">
                  <XIcon className="h-4 w-4" />
                  <span className="sr-only">Remove image</span>
                </Button>
              </div>
            </Card>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-method">Preferred Contact Method</Label>
            <Select defaultValue="email">
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
          <div className="space-y-2">
            <Label>Post Type</Label>
            <RadioGroup defaultValue="private" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public">Public</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private">Private</Label>
              </div>
            </RadioGroup>
          </div>
          <Button onClick={handleClick} className="w-full" type="submit">
            Assign Task
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
