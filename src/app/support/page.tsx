"use client";

// https://v0.dev/chat/h00S61BwDRA
import { useEffect, useState } from "react";
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
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import { useRouter } from "next/navigation";
import LoadingButtonClick from "@/components/loading";

// Define the type for an issue
interface Issue {
  id: number;
  title: string;
  full_name: string;
  email: string;
  student_id: string;
  request_type: string;
  urgency: string;
  description: string;
  contact_method: string;
  image: string | null;
  status: string;
  priority: string;
  created_at: string;
  updated_at: string;
}

export default function SchoolSupportDashboard() {
  const [viewType, setViewType] = useState<"table" | "cards">("cards");
  const router = useRouter();

  const [issues, setIssues] = useState<Issue[]>([]); // Use the Issue[] type
  const [loading, setLoading] = useState(true);

  // Fetch issues from the API
  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await fetch("/api/support");
        console.log("response", response);
        const data = await response.json();

        setIssues(data.issues || []);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch issues:", error);
        setLoading(false);
      }
    }

    fetchIssues();
  }, []);

  if (loading)
    return (
      <div>
        <LoadingButtonClick isLoading={loading} />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
        <Card className="mb-8 bg-white dark:bg-gray-800">
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
            <div className="mb-6 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
              <div className="flex w-full flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0 md:w-auto">
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
                    {issues.map((issue) => (
                      <TableRow key={issue.id}>
                        <TableCell className="font-medium">
                          {issue.id}
                        </TableCell>
                        <TableCell
                          className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap"
                          style={{ maxHeight: "3rem", lineHeight: "1.5rem" }}
                        >
                          {issue.full_name}
                        </TableCell>
                        <TableCell
                          className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap"
                          style={{ maxHeight: "3rem", lineHeight: "1.5rem" }}
                        >
                          {issue.title}
                        </TableCell>
                        <TableCell>{issue.request_type}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              issue.status === "Open"
                                ? "destructive"
                                : "default"
                            }
                          >
                            {issue.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{issue.urgency}</TableCell>
                        <TableCell>
                          {new Date(issue.created_at)
                            .toLocaleString("en-GB", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(",", "")}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() => router.push(`/support/${issue.id}`)}
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
              <div className="grid gap-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {issues.map((issue) => (
                  <Card
                    key={issue.id}
                    className="flex flex-col justify-between overflow-hidden bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-60 w-full">
                      <Image
                        src={`${issue.image}`}
                        alt={`Support request for ${issue.full_name}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardContent className="flex flex-grow flex-col justify-between pt-4">
                      {/* Phần Title */}
                      <div className="mb-4">
                        <h3 className="min-h-[2rem] text-lg font-semibold">
                          {issue.title}
                        </h3>
                      </div>

                      {/* Thông tin thêm */}
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">
                          {issue.full_name}
                        </p>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <p>Priority: {issue.priority}</p>
                          <p>
                            Date:{" "}
                            {new Date(issue.created_at)
                              .toLocaleString("en-GB", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              })
                              .replace(",", "")}
                          </p>
                        </div>
                      </div>

                      <p className="mb-4 line-clamp-2 text-sm">
                        {issue.description}
                      </p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button
                        onClick={() => router.push(`/support/${issue.id}`)}
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
