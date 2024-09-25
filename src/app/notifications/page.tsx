"use client";
// https://v0.dev/chat/MJHHSARTqOd
import { Bell, Clock, AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="p-4 space-y-4 max-w-4xl mx-auto">
      <div className="max-w-7xl mx-auto   py-4 flex items-center">
        {/* <ChevronLeft onClick={() => router.push('/store')} className="h-6 w-6 text-gray-500 mr-4 cursor-pointer" /> */}
        <h1 className="text-2xl font-semibold text-gray-900 ml-2">
          Admin Notifications
        </h1>
      </div>
      {/* New Ticket Notification */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Bell className="h-6 w-6 text-blue-500" />
          <div>
            <CardTitle>New Support Ticket</CardTitle>
            <CardDescription>
              Student ID: 12345 | Timestamp: 2023-09-23 10:30 AM
            </CardDescription>
          </div>
          <Badge className="ml-auto">New</Badge>
        </CardHeader>
        <CardContent>
          <p>
            A student has submitted a new ticket regarding an issue with course
            registration.
          </p>
          <div className="mt-2">
            <Badge variant="outline">Course Registration</Badge>
            <Badge variant="outline" className="ml-2">
              Technical Support
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Reminder */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Clock className="h-6 w-6 text-yellow-500" />
          <div>
            <CardTitle>Reminder</CardTitle>
            <CardDescription>Follow-up Required</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            Please follow up on the course registration issue ticket within the
            next 24 hours.
          </p>
        </CardContent>
      </Card>

      {/* Alert */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>High Priority Ticket</AlertTitle>
        <AlertDescription>
          The submitted ticket has been flagged as high priority and requires
          immediate attention.
        </AlertDescription>
      </Alert>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Update</Badge>
              <span>Ticket #5678 status changed to In Progress</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Resolved</Badge>
              <span>Ticket #9012 has been closed</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
