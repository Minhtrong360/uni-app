import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 font-bold text-white">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="mb-4">
            EcoPlant is an innovative student project from Vietnam focusing on
            sustainable urban gardening solutions.
          </p>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="EcoPlant team photo"
            width={800}
            height={400}
            className="mb-4 h-auto w-full rounded-lg"
          />
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="secondary">University Project</Badge>
            <Badge variant="secondary">Hanoi, Vietnam</Badge>
            <Badge variant="secondary">Started 2023</Badge>
            <Badge variant="secondary">5 Team Members</Badge>
            <Badge variant="secondary">IoT</Badge>
            <Badge variant="secondary">Mobile App</Badge>
            <Badge variant="secondary">Funded $5,000</Badge>
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
                  <h2 className="mb-2 text-xl font-semibold">About EcoPlant</h2>
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
                  <h2 className="mb-2 text-xl font-semibold">Key Features</h2>
                  <ul className="list-inside list-disc">
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
                  <h2 className="mb-2 text-xl font-semibold">Our Team</h2>
                  <p>
                    Our diverse team of five passionate students brings together
                    expertise in computer science, environmental studies, and
                    agriculture. Led by Minh Nguyen, we're committed to making
                    urban gardening accessible and sustainable for everyone in
                    Vietnam.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <Button className="mt-4">Support Project</Button>
        </div>
        <div>
          <Input type="search" placeholder="Search..." className="mb-4" />
          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="mb-2 font-semibold">Categories</h2>
              <div className="flex flex-wrap gap-2">
                <Badge>Sustainability</Badge>
                <Badge>Urban Agriculture</Badge>
                <Badge>IoT</Badge>
                <Badge>Mobile App</Badge>
                <Badge>Student Project</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="mb-2 font-semibold">Recent Updates:</h2>
              <ul className="space-y-2">
                <li>EcoPlant wins university innovation award</li>
                <li>Beta testing phase launched</li>
                <li>Partnership with local community gardens</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="mb-2 font-semibold">Get Involved</h2>
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
