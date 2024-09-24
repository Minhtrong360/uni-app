"use client";

// https://v0.dev/chat/h00S61BwDRA
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
  Bell,
  Plus,
  ArrowLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function SchoolSupportDashboard() {
  const [viewType, setViewType] = useState<"table" | "cards">("table");
  const router = useRouter();

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <Link href="/">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link> */}
          <Button
            onClick={() => router.push("/")}
            size="icon"
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white ml-2">
            SSD
          </h1>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-white dark:bg-gray-800">
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
          <Card className="bg-white dark:bg-gray-800">
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
          <Card className="bg-white dark:bg-gray-800">
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
          <Card className="bg-white dark:bg-gray-800">
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
        <Card className="bg-white dark:bg-gray-800 mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Support Request Management</CardTitle>
              <CardDescription>
                Manage and track student support requests
              </CardDescription>
            </div>
            <Button onClick={() => router.push(`/support/create-ticket`)}>
              <Plus className="mr-2 h-4 w-4" /> New Issue
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
                <Input
                  className="max-w-sm"
                  placeholder="Search support requests..."
                />
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
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
                <Button className="w-full sm:w-auto">
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
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Student</TableHead>
                      <TableHead>Issue</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {supportRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">
                          {request.id}
                        </TableCell>
                        <TableCell>{request.student}</TableCell>
                        <TableCell>{request.issue}</TableCell>
                        <TableCell>{request.category}</TableCell>
                        <TableCell>
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
                        </TableCell>
                        <TableCell>{request.priority}</TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() => router.push(`/support/details`)}
                            variant="outline"
                            size="sm"
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {supportRequests.map((request) => (
                  <Card
                    key={request.id}
                    className="bg-white dark:bg-gray-800 overflow-hidden"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={`https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=192&width=384`}
                        alt={`Support request for ${request.student}`}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-semibold text-white">
                          {request.student}
                        </h3>
                        <p className="text-sm text-gray-200">{request.issue}</p>
                      </div>
                    </div>
                    <CardContent className="pt-4">
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
                      <p className="text-sm line-clamp-2">
                        {request.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => router.push(`/support/details`)}
                        className="w-full"
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
