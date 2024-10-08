"use client";
// https://v0.dev/chat/xgbN3mqcSQf

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function TaskCreate() {
  const [members, setMembers] = useState([
    { name: "Alice", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Bob", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Charlie", avatar: "/placeholder.svg?height=32&width=32" },
  ]);
  const [newMemberEmail, setNewMemberEmail] = useState("");

  const handleAddMember = () => {
    if (newMemberEmail) {
      setMembers([
        ...members,
        { name: newMemberEmail, avatar: "/placeholder.svg?height=32&width=32" },
      ]);
      setNewMemberEmail("");
    }
  };

  const router = useRouter();

  return (
    <div className="container mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">
                Project Details
              </CardTitle>
              <CardDescription>
                Information about the group project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/support-images/Urban.jfif"
                    alt="Project Image"
                    width={600}
                    height={300}
                    className="h-[200px] w-full object-cover md:h-[300px]"
                  />
                </CardContent>
              </Card>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Project Title</h3>
                <p className="text-muted-foreground">
                  Innovative Solutions for Sustainable Urban Development
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Description</h3>
                <p className="text-muted-foreground">
                  Develop a comprehensive plan to address urban challenges using
                  sustainable and smart technologies.
                </p>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Deadline: May 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>Group Size: 3-5 members</span>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Objectives</h3>
                <ul className="list-inside list-disc text-muted-foreground">
                  <li>Identify key urban challenges</li>
                  <li>Research sustainable technologies</li>
                  <li>Develop innovative solutions</li>
                  <li>Create a detailed implementation plan</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Evaluation Criteria
                </h3>
                <ul className="list-inside list-disc text-muted-foreground">
                  <li>Creativity and innovation</li>
                  <li>Feasibility and practicality</li>
                  <li>Environmental impact</li>
                  <li>Presentation quality</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="flex h-full flex-col">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              Group Formation
            </CardTitle>
            <CardDescription>
              Create or join a group for this project
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-6">
            <div className="space-y-2">
              <Label htmlFor="group-name">Group Name</Label>
              <Input id="group-name" placeholder="Enter your group name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="class-id">Class ID</Label>
              <Input id="class-id" placeholder="Enter your class ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <Select>
                <SelectTrigger id="semester">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall2023">Fall 2023</SelectItem>
                  <SelectItem value="spring2024">Spring 2024</SelectItem>
                  <SelectItem value="fall2024">Fall 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="group-description">Group Description</Label>
              <Textarea
                id="group-description"
                placeholder="Briefly describe your group's focus or approach"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="group-size">Group Size</Label>
              <Select>
                <SelectTrigger id="group-size">
                  <SelectValue placeholder="Select group size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 members</SelectItem>
                  <SelectItem value="4">4 members</SelectItem>
                  <SelectItem value="5">5 members</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills-needed">Skills Needed</Label>
              <Input
                id="skills-needed"
                placeholder="e.g., Programming, Design, Research"
              />
            </div>
            <div className="space-y-2">
              <Label>Current Members</Label>
              <div className="flex flex-wrap items-center gap-2">
                <TooltipProvider>
                  {members.map((member, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger>
                        <Avatar>
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{member.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <UserPlus className="h-4 w-4" />
                        <span className="sr-only">Add member</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add New Member</DialogTitle>
                        <DialogDescription>
                          Enter the email address of the new member you'd like
                          to invite to your group.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="new-member-email"
                            className="text-right"
                          >
                            Email
                          </Label>
                          <Input
                            id="new-member-email"
                            value={newMemberEmail}
                            onChange={(e) => setNewMemberEmail(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" onClick={handleAddMember}>
                          Add Member
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-4 flex flex-col justify-between gap-4 sm:flex-row">
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              className="w-full sm:w-auto"
              onClick={() => router.push("/task/detail")}
            >
              Create Group
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
