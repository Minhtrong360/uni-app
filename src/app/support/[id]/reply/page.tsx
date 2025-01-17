"use client";
// https://v0.dev/chat/l6P1S5hdkxx
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
import {
  XIcon,
  CheckCircle,
  Clock,
  AlertCircle,
  Paperclip,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
function PendingTasks() {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="rounded-xl bg-white text-black">
        <CardTitle className="text-xl sm:text-2xl">Pending Tasks</CardTitle>
        <CardDescription className="text-gray-600">
          Your upcoming tasks and their status
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {[
            {
              id: 1,
              title: "Review Course Material",
              status: "urgent",
              dueIn: "1 day",
            },
            {
              id: 2,
              title: "Prepare Lecture Slides",
              status: "normal",
              dueIn: "3 days",
            },
            {
              id: 3,
              title: "Grade Assignments",
              status: "completed",
              dueIn: "Completed",
            },
            {
              id: 4,
              title: "Schedule Office Hours",
              status: "normal",
              dueIn: "5 days",
            },
            {
              id: 5,
              title: "Update Syllabus",
              status: "urgent",
              dueIn: "2 days",
            },
          ].map((task) => (
            <Card key={task.id} className="p-4">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="font-semibold">{task.title}</h3>
                <Badge
                  variant={
                    task.status === "urgent"
                      ? "destructive"
                      : task.status === "completed"
                        ? "secondary"
                        : "default"
                  }
                >
                  {task.status}
                </Badge>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-xs text-gray-500">
                  {task.status === "completed" ? (
                    <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  ) : task.status === "urgent" ? (
                    <AlertCircle className="mr-1 h-4 w-4 text-red-500" />
                  ) : (
                    <Clock className="mr-1 h-4 w-4 text-blue-500" />
                  )}
                  {task.dueIn}
                </span>
                <Button size="sm">View</Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Reply() {
  const router = useRouter();
  // Function to handle redirection
  const handleRedirect = () => {
    router.push("/support");
  };
  return (
    <div className="h-screen bg-gray-100 p-4">
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-4 pb-4 sm:flex-row">
          <div className="flex-1">
            <Card className="w-full shadow-lg">
              <CardHeader className="rounded-xl bg-white text-black">
                <CardTitle className="text-xl sm:text-2xl">
                  Reply to Issue
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Please provide detailed information for your reply
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="ticket-id">Ticket ID</Label>
                      <Input
                        id="ticket-id"
                        value="TKT-2023-0042"
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student">Student</Label>
                      <Input
                        id="student"
                        value="Jane Doe"
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      Category: Technical Support
                    </Badge>
                    <Badge variant="outline">Status: In Progress</Badge>
                    <Badge>Priority: Medium</Badge>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="your-answer">Your answer</Label>
                    <Textarea
                      className="min-h-[150px]"
                      id="your-answer"
                      placeholder="Type your answer here..."
                    />
                  </div>
                  <div className="flex items-center space-x-2 border-t pt-4">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Paperclip className="mr-2 h-3 w-3" />
                      Attach Files
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      error_screenshot.png
                    </span>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <XIcon className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button
                      onClick={handleRedirect}
                      variant="outline"
                      type="button"
                      size="sm"
                    >
                      Cancel
                    </Button>
                    <Button type="button" size="sm" onClick={handleRedirect}>
                      Reply
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="w-full sm:w-96">
            <PendingTasks />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
