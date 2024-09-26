// https://v0.dev/chat/_nc0b0lhbPc
"use client";
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { UserPlus, MessageSquare, ArrowLeft } from "lucide-react";

import AssignTask from "../components/assign-task";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
export default function StudentSupportCenter() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:w-[75%] lg:px-0">
      <header className="mb-8 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => router.push("/support")}
            size="icon"
            variant="outline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <div className="rounded-md bg-blue-600 p-2 text-white">
            <span className="text-2xl font-bold">SC</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">SSC</h1>
            <p className="text-sm text-gray-600">Empowering College Students</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" onClick={openModal}>
            <UserPlus className="mr-2 h-4 w-4" /> Assign Task
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/support/details/reply")}
          >
            <MessageSquare className="mr-2 h-4 w-4" /> Reply
          </Button>
        </div>
        <Modal
          title="Assign Task"
          open={isModalVisible}
          onCancel={closeModal}
          footer={null}
        >
          <AssignTask />
        </Modal>
      </header>

      <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="mb-4">
            The Student Support Center is dedicated to addressing the challenges
            faced by college students, from academic stress to personal
            well-being. We provide resources, mentorship, and community-driven
            solutions to ensure every student succeeds.
          </p>
          <Card className="mb-8">
            <CardContent className="relative p-0">
              <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogTrigger asChild>
                  <Image
                    src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/ssc/ssc_1.jpg"
                    alt="Supportive image"
                    width={600}
                    height={400}
                    className="h-64 w-full cursor-pointer rounded-t-lg object-cover sm:h-80 md:h-96"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <Image
                    src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/ssc/ssc_1.jpg"
                    alt="Supportive image"
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                  />
                </DialogContent>
              </Dialog>
              <div className="absolute right-2 top-2 flex max-w-[calc(100%-1rem)] flex-wrap gap-2">
                <Badge className="bg-blue-500 text-white">Mental Health</Badge>
                <Badge className="bg-yellow-500 text-white">In Progress</Badge>
                <Badge className="bg-red-500 text-white">High Priority</Badge>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Badge variant="secondary" className="justify-start">
                    <span className="mr-1 font-semibold">Location:</span>
                    <span className="truncate">Main Campus, Building B</span>
                  </Badge>
                  <Badge variant="secondary" className="justify-start">
                    <span className="mr-1 font-semibold">Ticket Issued:</span>
                    <span className="truncate">2023-09-19 14:30</span>
                  </Badge>
                  <Badge variant="secondary" className="justify-start">
                    <span className="mr-1 font-semibold">Student Email:</span>
                    <span className="truncate">student@university.edu</span>
                  </Badge>
                  <Badge variant="secondary" className="justify-start">
                    <span className="mr-1 font-semibold">Student Name:</span>
                    <span className="truncate">John Doe</span>
                  </Badge>
                </div>
              </div>
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
