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
  const [viewType, setViewType] = useState<"table" | "cards">("table");
  const router = useRouter();

  const [issues, setIssues] = useState<Issue[]>([]); // Use the Issue[] type
  const [loading, setLoading] = useState(true);

  // Fetch issues from the API
  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await fetch("/api/support");
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

  if (loading) return <p>Loading support issues...</p>;

  if (!issues || issues.length === 0) return <p>No support issues found.</p>;
  // const supportRequests = [
  //   {
  //     id: 1,
  //     student: "Alice Johnson",
  //     issue: "Difficulty with Math homework",
  //     category: "Academic",
  //     status: "Open",
  //     priority: "High",
  //     date: "2023-06-01",
  //     description:
  //       "Alice is struggling with her Algebra II homework and needs additional support.",
  //     image:
  //       "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/ssc/ssc_1.jpg",
  //   },
  //   {
  //     id: 2,
  //     student: "Bob Smith",
  //     issue: "Conflict with classmate",
  //     category: "Social",
  //     status: "In Progress",
  //     priority: "Medium",
  //     date: "2023-06-02",
  //     description:
  //       "Bob has reported ongoing conflicts with a classmate during lunch periods.",
  //     image:
  //       "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/ssc/ssc_2.jpg",
  //   },
  //   {
  //     id: 3,
  //     student: "Charlie Brown",
  //     issue: "Missed soccer practice",
  //     category: "Extracurricular",
  //     status: "Closed",
  //     priority: "Low",
  //     date: "2023-06-03",
  //     description:
  //       "Charlie has missed several soccer practices and needs to discuss team commitment.",
  //     image:
  //       "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/ssc/ssc_3.jpg",
  //   },
  //   {
  //     id: 4,
  //     student: "Diana Prince",
  //     issue: "Struggling with essay writing",
  //     category: "Academic",
  //     status: "Open",
  //     priority: "High",
  //     date: "2023-06-04",
  //     description:
  //       "Diana is having difficulty structuring her essays for English class and requires writing support.",
  //     image:
  //       "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/ssc/ssc_4.jpg",
  //   },
  //   {
  //     id: 5,
  //     student: "Ethan Hunt",
  //     issue: "Anxiety about upcoming exams",
  //     category: "Wellbeing",
  //     status: "In Progress",
  //     priority: "Medium",
  //     date: "2023-06-05",
  //     description:
  //       "Ethan is experiencing high levels of anxiety due to upcoming final exams.",
  //     image:
  //       "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/ssc/ssc_5.jpg",
  //   },
  // ];

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
                        <TableCell>{issue.full_name}</TableCell>
                        <TableCell>{issue.title}</TableCell>
                        <TableCell>{issue.request_type}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              issue.status === "Open"
                                ? "destructive"
                                : issue.status === "In Progress"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {issue.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{issue.urgency}</TableCell>
                        <TableCell>{issue.created_at}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() =>
                              router.push(`/support/details/${issue.id}`)
                            }
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
                    className="overflow-hidden bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-60 w-full">
                      <Image
                        src={`${issue.image}`}
                        alt={`Support request for ${issue.full_name}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge>{issue.urgency}</Badge>
                        <Badge
                          variant={
                            issue.status === "Open"
                              ? "destructive"
                              : issue.status === "In Progress"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {issue.status}
                        </Badge>
                      </div>
                      <div className="mb-2 text-sm text-muted-foreground">
                        <h3 className="text-lg font-semibold">{issue.title}</h3>
                        <p className="text-sm">{issue.full_name}</p>
                      </div>
                      <div className="mb-2 text-sm text-muted-foreground">
                        Priority: {issue.priority}
                      </div>
                      <div className="mb-2 text-sm text-muted-foreground">
                        Date: {issue.created_at}
                      </div>
                      <p className="line-clamp-2 text-sm">
                        {issue.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() =>
                          router.push(`/support/details/${issue.id}`)
                        }
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

// ///
// 'use client';

// // import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui';
// import { useEffect, useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//     Card,
//     CardContent,
//     // CardDescription,
//     CardHeader,
//     CardTitle,
//     CardFooter,
//   } from "@/components/ui/card";
// import Link from 'next/link';

// // Define the type for an issue
// interface Issue {
//   id: number;
//   full_name: string;
//   email: string;
//   student_id: string;
//   request_type: string;
//   urgency: string;
//   description: string;
//   contact_method: string;
//   image: string | null;
//   status: string;
//   priority: string;
//   created_at: string;
//   updated_at: string;
// }

//   export default function SupportPage() {
//     const [issues, setIssues] = useState<Issue[]>([]); // Use the Issue[] type
//     const [loading, setLoading] = useState(true);

//     // Fetch issues from the API
//     useEffect(() => {
//       async function fetchIssues() {
//         try {
//           const response = await fetch('/api/support');
//           const data = await response.json();
//           setIssues(data.issues || []);
//           setLoading(false);
//         } catch (error) {
//           console.error('Failed to fetch issues:', error);
//           setLoading(false);
//         }
//       }

//       fetchIssues();
//     }, []);

//     if (loading) return <p>Loading support issues...</p>;

//     if (!issues || issues.length === 0) return <p>No support issues found.</p>;

//     return (
//       <div>
//         <h1>Support Requests</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Student</th>
//               <th>Issue</th>
//               <th>Status</th>
//               <th>Priority</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {issues.map((issue) => (
//               <tr key={issue.id}>
//                 <td>{issue.id}</td>
//                 <td>{issue.full_name}</td>
//                 <td>{issue.description}</td>
//                 <td>{issue.status}</td>
//                 <td>{issue.priority}</td>
//                 <td>
//                   <Link href={`/support/details/${issue.id}`}>
//                   <Button >View Details</Button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
