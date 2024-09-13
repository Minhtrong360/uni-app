"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            SC
          </div>
          <div>
            <h1 className="text-2xl font-bold">Student Support Center</h1>
            <p className="text-sm text-gray-500">Empowering College Students</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Contact Support</Button>
          <Button variant="outline">Latest News</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <p className="mb-4">The Student Support Center is dedicated to addressing the challenges faced by college students, from academic stress to personal well-being. We provide resources, mentorship, and community-driven solutions to ensure every student succeeds.</p>
          <Image
            src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=400&width=800"
            alt="Student Support Team"
            width={800}
            height={400}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {[
              { label: "Location", value: "Main Campus, Building B" },
              { label: "Services", value: "Counseling, Academic Help" },
              { label: "Hours", value: "Mon-Fri, 9 AM - 5 PM" },
              { label: "Contact", value: "support@university.edu" },
              { label: "Mentors", value: "20+ Professionals" },
              { label: "Students Helped", value: "500+" },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <p className="text-lg font-semibold">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">About Us</h2>
                  <p>The Student Support Center is committed to helping students navigate the complex issues of college life. Whether it is stress from exams, managing mental health, or finding the right career path, we are here to help. Our experienced staff and peer mentors offer personalized support to help students succeed both academically and personally.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Our Services</h2>
                  <ul className="list-disc list-inside">
                    <li>Counseling for academic and personal challenges</li>
                    <li>Mentorship programs for career guidance</li>
                    <li>Workshops on time management and stress relief</li>
                    <li>Financial aid resources and scholarship support</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Meet Our Team</h2>
                  <p>Our dedicated team consists of professional counselors, academic advisors, and student peer mentors who are passionate about helping students thrive. Led by Dr. Emily Tran, we work together to provide tailored support for every individual.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <Button className="mt-4">Get Support Now</Button>
        </div>
        <div>
          <Input type="search" placeholder="Search support topics..." className="mb-4" />
          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Categories</h2>
              <ul className="list-disc list-inside">
                <li>Mental Health</li>
                <li>Academic Success</li>
                <li>Career Guidance</li>
                <li>Financial Support</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Recent News</h2>
              <ul className="space-y-2">
                <li>New Mentorship Program Launched</li>
                <li>Stress Management Workshops This Fall</li>
                <li>Financial Aid Resources for 2024</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Join Our Community</h2>
              <p className="mb-2">Be part of a supportive network for students.</p>
              <Input type="email" placeholder="Enter your email" className="mb-2" />
              <Button className="w-full">Subscribe for Updates</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
