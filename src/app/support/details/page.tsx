"use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export default function Component() {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <div className="flex items-center space-x-4">
//           <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
//             SC
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold">Student Support Center</h1>
//             <p className="text-sm text-gray-500">Empowering College Students</p>
//           </div>
//         </div>
//         <div className="flex space-x-2">
//           <Button variant="outline">Contact Support</Button>
//           <Button variant="outline">Latest News</Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2">
//           <p className="mb-4">The Student Support Center is dedicated to addressing the challenges faced by college students, from academic stress to personal well-being. We provide resources, mentorship, and community-driven solutions to ensure every student succeeds.</p>
//           <Image
//             src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=400&width=800"
//             alt="Student Support Team"
//             width={800}
//             height={400}
//             className="rounded-lg mb-4 w-full h-auto"
//           />
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
//             {[
//               { label: "Location", value: "Main Campus, Building B" },
//               { label: "Services", value: "Counseling, Academic Help" },
//               { label: "Hours", value: "Mon-Fri, 9 AM - 5 PM" },
//               { label: "Contact", value: "support@university.edu" },
//               { label: "Mentors", value: "20+ Professionals" },
//               { label: "Students Helped", value: "500+" },
//             ].map((item, index) => (
//               <Card key={index}>
//                 <CardContent className="p-4">
//                   <p className="text-lg font-semibold">{item.value}</p>
//                   <p className="text-sm text-gray-500">{item.label}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//           <Tabs defaultValue="overview" className="w-full">
//             <TabsList className="grid w-full grid-cols-3">
//               <TabsTrigger value="overview">Overview</TabsTrigger>
//               <TabsTrigger value="services">Services</TabsTrigger>
//               <TabsTrigger value="team">Team</TabsTrigger>
//             </TabsList>
//             <TabsContent value="overview">
//               <Card>
//                 <CardContent className="p-4">
//                   <h2 className="text-xl font-semibold mb-2">About Us</h2>
//                   <p>The Student Support Center is committed to helping students navigate the complex issues of college life. Whether it is stress from exams, managing mental health, or finding the right career path, we are here to help. Our experienced staff and peer mentors offer personalized support to help students succeed both academically and personally.</p>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="services">
//               <Card>
//                 <CardContent className="p-4">
//                   <h2 className="text-xl font-semibold mb-2">Our Services</h2>
//                   <ul className="list-disc list-inside">
//                     <li>Counseling for academic and personal challenges</li>
//                     <li>Mentorship programs for career guidance</li>
//                     <li>Workshops on time management and stress relief</li>
//                     <li>Financial aid resources and scholarship support</li>
//                   </ul>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="team">
//               <Card>
//                 <CardContent className="p-4">
//                   <h2 className="text-xl font-semibold mb-2">Meet Our Team</h2>
//                   <p>Our dedicated team consists of professional counselors, academic advisors, and student peer mentors who are passionate about helping students thrive. Led by Dr. Emily Tran, we work together to provide tailored support for every individual.</p>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//           <Button className="mt-4">Get Support Now</Button>
//         </div>
//         <div>
//           <Input type="search" placeholder="Search support topics..." className="mb-4" />
//           <Card className="mb-4">
//             <CardContent className="p-4">
//               <h2 className="font-semibold mb-2">Categories</h2>
//               <ul className="list-disc list-inside">
//                 <li>Mental Health</li>
//                 <li>Academic Success</li>
//                 <li>Career Guidance</li>
//                 <li>Financial Support</li>
//               </ul>
//             </CardContent>
//           </Card>
//           <Card className="mb-4">
//             <CardContent className="p-4">
//               <h2 className="font-semibold mb-2">Recent News</h2>
//               <ul className="space-y-2">
//                 <li>New Mentorship Program Launched</li>
//                 <li>Stress Management Workshops This Fall</li>
//                 <li>Financial Aid Resources for 2024</li>
//               </ul>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <h2 className="font-semibold mb-2">Join Our Community</h2>
//               <p className="mb-2">Be part of a supportive network for students.</p>
//               <Input type="email" placeholder="Enter your email" className="mb-2" />
//               <Button className="w-full">Subscribe for Updates</Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// https://v0.dev/chat/_nc0b0lhbPc
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function StudentSupportCenter() {
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-0 py-8 lg:w-[75%]">
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
        <Link href="/support/dashboard">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
          <div className="bg-blue-600 text-white p-2 rounded-md">
          
            <span className="text-2xl font-bold">SC</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">SSC</h1>
            <p className="text-sm text-gray-600">Empowering College Students</p>
          </div>
        </div>
        <div className="space-x-4">
          <Button variant="outline">Contact Support</Button>
          <Button variant="outline">Latest News</Button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="mb-4">
            The Student Support Center is dedicated to addressing the challenges faced by college students, from academic stress to personal well-being. We provide resources, mentorship, and community-driven solutions to ensure every student succeeds.
          </p>
          <Card className="mb-8">
            <CardContent className="p-0 relative">
              <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogTrigger asChild>
                  <Image
                    src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg"
                    alt="Supportive image"
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-t-lg cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <Image
                    src="/placeholder.svg"
                    alt="Supportive image"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </DialogContent>
              </Dialog>
              <div className="absolute top-2 right-2 flex flex-wrap gap-2 max-w-[calc(100%-1rem)]">
                <Badge className="bg-blue-500 text-white">Mental Health</Badge>
                <Badge className="bg-yellow-500 text-white">In Progress</Badge>
                <Badge className="bg-red-500 text-white">High Priority</Badge>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Badge variant="secondary" className="justify-start">
                    <span className="font-semibold mr-1">Location:</span>
                    <span className="truncate">Main Campus, Building B</span>
                  </Badge>
                  <Badge variant="secondary" className="justify-start">
                    <span className="font-semibold mr-1">Ticket Issued:</span>
                    <span className="truncate">2023-09-19 14:30</span>
                  </Badge>
                  <Badge variant="secondary" className="justify-start">
                    <span className="font-semibold mr-1">Student Email:</span>
                    <span className="truncate">student@university.edu</span>
                  </Badge>
                  <Badge variant="secondary" className="justify-start">
                    <span className="font-semibold mr-1">Student Name:</span>
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
                    The Student Support Center is committed to helping students navigate the complex issues of college life. Whether it is stress from exams, managing mental health, or finding the right career path, we are here to help. Our experienced staff and peer mentors offer personalized support to help students succeed both academically and personally.
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
          <Button className="mt-4">Get Support Now</Button>
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
          <Card>
            <CardHeader>
              <CardTitle>Recent News</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>New Mentorship Program Launched</li>
                <li>Stress Management Workshops This Fall</li>
                <li>Financial Aid Resources for 2024</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Join Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Be part of a supportive network for students.</p>
              <Input placeholder="Enter your email" className="mb-2" />
              <Button className="w-full">Subscribe for Updates</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}