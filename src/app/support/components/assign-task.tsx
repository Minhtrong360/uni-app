'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UploadIcon, XIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AssignTask() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Assign Task to PIC</CardTitle>
        <CardDescription>Please provide detailed information for task assignment</CardDescription>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="flex items-center justify-center w-full">
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
                  <img src="/placeholder.svg?height=40&width=40" alt="Attached image thumbnail" className="w-10 h-10 rounded" />
                  <span className="text-sm font-medium">error_screenshot.png</span>
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
          <Button className="w-full" type="submit">
            Assign Task
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}