// https://v0.dev/chat/BBE7-k_-gKb
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Book,
  Calendar,
  GraduationCap,
  Search,
  Users,
  LayoutGrid,
  List,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SchoolSupportDashboard() {
  const [viewType, setViewType] = useState<"table" | "cards">("table");

  const supportRequests = [
    {
      id: 1,
      student: "Alice Johnson",
      issue: "Difficulty with Math homework",
      category: "Academic",
      status: "Open",
      priority: "High",
      date: "2023-06-01",
      description:
        "Alice is struggling with her Algebra II homework and needs additional support.",
    },
    {
      id: 2,
      student: "Bob Smith",
      issue: "Conflict with classmate",
      category: "Social",
      status: "In Progress",
      priority: "Medium",
      date: "2023-06-02",
      description:
        "Bob has reported ongoing conflicts with a classmate during lunch periods.",
    },
    {
      id: 3,
      student: "Charlie Brown",
      issue: "Missed soccer practice",
      category: "Extracurricular",
      status: "Closed",
      priority: "Low",
      date: "2023-06-03",
      description:
        "Charlie has missed several soccer practices and needs to discuss team commitment.",
    },
    {
      id: 4,
      student: "Diana Prince",
      issue: "Struggling with essay writing",
      category: "Academic",
      status: "Open",
      priority: "High",
      date: "2023-06-04",
      description:
        "Diana is having difficulty structuring her essays for English class and requires writing support.",
    },
    {
      id: 5,
      student: "Ethan Hunt",
      issue: "Anxiety about upcoming exams",
      category: "Wellbeing",
      status: "In Progress",
      priority: "Medium",
      date: "2023-06-05",
      description:
        "Ethan is experiencing high levels of anxiety due to upcoming final exams.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Student Support Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Academic Support
            </CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              +15% from last semester
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Extracurricular Activities
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              +5% from last semester
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Social Support
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              -3% from last semester
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Student Wellbeing
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">
              +8% from last semester
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Support Request Management</CardTitle>
          <CardDescription>
            Manage and track student support requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Input
                className="max-w-sm"
                placeholder="Search support requests..."
              />
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="extracurricular">
                    Extracurricular
                  </SelectItem>
                  <SelectItem value="wellbeing">Wellbeing</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button
                variant={viewType === "table" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewType("table")}
              >
                <List className="h-4 w-4" />
                <span className="sr-only">Table view</span>
              </Button>
              <Button
                variant={viewType === "cards" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewType("cards")}
              >
                <LayoutGrid className="h-4 w-4" />
                <span className="sr-only">Card view</span>
              </Button>
            </div>
          </div>
          {viewType === "table" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {supportRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.student}</TableCell>
                    <TableCell>{request.issue}</TableCell>
                    <TableCell>{request.category}</TableCell>
                    <TableCell>{request.status}</TableCell>
                    <TableCell>{request.priority}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {supportRequests.map((request) => (
                <Card key={request.id}>
                  <CardHeader>
                    <CardTitle>{request.student}</CardTitle>
                    <CardDescription>{request.issue}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <Badge>{request.category}</Badge>
                      <Badge
                        variant={
                          request.status === "Open"
                            ? "destructive"
                            : request.status === "In Progress"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Priority: {request.priority}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Date: {request.date}
                    </div>
                    <p className="text-sm mb-4">{request.description}</p>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
