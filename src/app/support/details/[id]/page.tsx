// https://v0.dev/chat/_nc0b0lhbPc
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import {
  UserPlus,
  MessageSquare,
  MapPin,
  Calendar,
  Mail,
  User,
  ThumbsUp,
} from "lucide-react";

import AssignTask from "../../components/assign-task";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import StudentFeedback from "../../components/feedback";
import LoadingButtonClick from "@/components/loading";

export default function StudentSupportCenter() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFBModalVisible, setIsFBModalVisible] = useState(false);
  const router = useRouter();

  // Hook để vô hiệu hóa cuộn khi mở modal
  useEffect(() => {
    if (isModalVisible || isFBModalVisible) {
      document.body.style.overflow = "hidden"; // Vô hiệu hóa cuộn trên body khi mở modal
    } else {
      document.body.style.overflow = "auto"; // Bật lại cuộn khi đóng modal
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup khi component unmount
    };
  }, [isModalVisible, isFBModalVisible]);

  // Define the type for an issue
  interface Issue {
    id: number;
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

  const [issue, setIssue] = useState<Issue | null>(null); // Use the Issue type
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // Fetch the specific issue from the API
  useEffect(() => {
    async function fetchIssue() {
      try {
        const response = await fetch(`/api/support/${id}`);
        const data = await response.json();
        setIssue(data.issue);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch issue:", error);
        setLoading(false);
      }
    }

    fetchIssue();
  }, [id]);

  if (loading) return <LoadingButtonClick isLoading={loading} />;
  if (!issue) return <p>Issue not found</p>;
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const openFBModal = () => {
    setIsFBModalVisible(true);
  };
  const closeFBModal = () => {
    setIsFBModalVisible(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:w-[75%] lg:px-0">
      <header className="mb-8 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="rounded-md bg-blue-600 p-2 text-white">
            <span className="text-2xl font-bold">SC</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">SSC</h1>
            <p className="text-sm text-gray-600">Empowering College Students</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" onClick={openModal}>
                <UserPlus className="mr-2 h-4 w-4" /> Assign Task
              </Button>
            </DialogTrigger>
          </Dialog>
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/support/details/reply")}
          >
            <MessageSquare className="mr-2 h-4 w-4" /> Reply
          </Button>
          <Button variant="outline" size="sm" onClick={openFBModal}>
            <ThumbsUp className="mr-2 h-4 w-4" /> Feedback
          </Button>
        </div>
        <Modal
          title="Issue Details"
          open={isFBModalVisible}
          onCancel={closeFBModal}
          footer={null}
          centered
        >
          <StudentFeedback />
        </Modal>
        <Modal
          title="Assign Task"
          open={isModalVisible}
          onCancel={closeModal}
          footer={null}
          centered
        >
          <AssignTask />
        </Modal>
      </header>

      <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="mb-4">{issue.description}</p>
          <Card className="mb-8">
            <CardContent className="relative p-0">
              <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogTrigger asChild>
                  <Image
                    src={`${issue.image}`}
                    alt="Supportive image"
                    width={1400}
                    height={400}
                    className="h-64 w-full cursor-pointer rounded-t-lg object-cover sm:h-80 md:h-96"
                    // style={{objectFit: "contain"}}
                  />
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <Image
                    src={`${issue.image}`}
                    alt="Supportive image"
                    width={600}
                    height={400}
                    className="h-auto w-full object-contain"
                    // style={{objectFit: "contain"}}
                  />
                </DialogContent>
              </Dialog>
              <div className="absolute right-2 top-2 flex max-w-[calc(100%-1rem)] flex-wrap gap-2">
                <Badge className="bg-blue-500 text-white">
                  {issue.request_type}
                </Badge>
                <Badge className="bg-yellow-500 text-white">In Progress</Badge>
                <Badge className="bg-red-500 text-white">{issue.urgency}</Badge>
              </div>

              <Card className="m-4">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Main Campus, Building B</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {new Date(issue.created_at)
                          .toLocaleString("en-GB", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            // hour: '2-digit',
                            // minute: '2-digit',
                            second: undefined,
                            hour12: false,
                          })
                          .replace(",", "")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm"> {issue.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm"> {issue.full_name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          <Tabs defaultValue="overview">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>About Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The Student Support Center is committed to helping students
                    navigate the complex issues of college life. Whether it is
                    stress from exams, managing mental health, or finding the
                    right career path, we are here to help. Our experienced
                    staff and peer mentors offer personalized support to help
                    students succeed both academically and personally.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle>Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Information about services would go here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team">
              <Card>
                <CardHeader>
                  <CardTitle>Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Information about the team would go here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <Button className="mb-8 mt-4">Get Support Now</Button>
          <Card>
            <CardHeader>
              <CardTitle>Activities Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    September 19, 2023, 14:30
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Ticket Issued
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Student submitted a support request.
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    September 19, 2023, 15:00
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Admin Accepted
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Support request was reviewed and accepted by an
                    administrator.
                  </p>
                </li>
                <li className="ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    September 19, 2023, 15:30
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Task Allocated
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Support request was assigned to a specialist for further
                    assistance.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Mental Health</li>
                <li>Academic Success</li>
                <li>Career Guidance</li>
                <li>Financial Support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
