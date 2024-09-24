"use client";
// https://v0.dev/chat/b/e06gpLx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
            EP
          </div>
          <div>
            <h1 className="text-2xl font-bold">EcoPlant</h1>
            <p className="text-sm text-gray-500">Student Project</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Contact Team</Button>
          <Button variant="outline">Project Updates</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <p className="mb-4">
            EcoPlant is an innovative student project from Vietnam focusing on
            sustainable urban gardening solutions.
          </p>
          <Image
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=400&width=800"
            alt="EcoPlant team photo"
            width={800}
            height={400}
            className="rounded-lg mb-4 w-full h-auto max-h-[500px] object-cover"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {[
              { label: "University", value: "Van Lang University" },
              { label: "Location", value: "Hanoi, Vietnam" },
              { label: "Project Start", value: "2023" },
              { label: "Team Size", value: "5" },
              { label: "Technology", value: "IoT, Mobile App" },
              { label: "Funding", value: "$5,000" },
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
              <TabsTrigger value="overview">Project Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">About EcoPlant</h2>
                  <p>
                    EcoPlant is a student-led initiative aimed at promoting
                    sustainable urban gardening in Vietnam. Our project combines
                    IoT technology with a user-friendly mobile app to help city
                    dwellers grow their own food efficiently and sustainably.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                  <ul className="list-disc list-inside">
                    <li>Smart soil sensors for optimal plant care</li>
                    <li>Mobile app for remote monitoring and control</li>
                    <li>AI-powered plant health diagnostics</li>
                    <li>Community feature for sharing tips and harvests</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Our Team</h2>
                  <p>
                    Our diverse team of five passionate students brings together
                    expertise in computer science, environmental studies, and
                    agriculture. Led by Minh Nguyen, we are committed to making
                    urban gardening accessible and sustainable for everyone in
                    Vietnam.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <Button className="mt-4">Support Project</Button>
        </div>
        <div className=" col-span-1">
          <Input type="search" placeholder="Search..." className="mb-4" />
          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Categories</h2>
              <ul className="list-disc list-inside">
                <li>Sustainability</li>
                <li>Urban Agriculture</li>
                <li>IoT</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Recent Updates:</h2>
              <ul className="space-y-2">
                <li>EcoPlant wins university innovation award</li>
                <li>Beta testing phase launched</li>
                <li>Partnership with local community gardens</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Get Involved</h2>
              <p className="mb-2">
                Join our mission for sustainable urban gardening.
              </p>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mb-2"
              />
              <Button className="w-full">Join EcoPlant Community</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
