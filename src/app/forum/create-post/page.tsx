"use client";
// https://v0.dev/chat/6HkyJghwPBd
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
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
import { message } from "antd";
import { BookOpen, Coffee, Briefcase, Users, Wifi, Flame } from "lucide-react";

export default function CreatePost() {
  const handleClick = () => {
    message.success("New topic has been added successfully!");
  };
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 border-r p-4 lg:block">
        <nav className="space-y-2">
          <h2 className="mb-2 font-semibold">Categories</h2>
          <a
            className="flex items-center rounded px-2 py-1 text-primary hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Academic Discussions
          </a>
          <a
            className="flex items-center rounded px-2 py-1 hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            <Coffee className="mr-2 h-4 w-4" />
            Campus Life
          </a>
          <a
            className="flex items-center rounded px-2 py-1 hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Career Services
          </a>
          <a
            className="flex items-center rounded px-2 py-1 hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            <Users className="mr-2 h-4 w-4" />
            Student Organizations
          </a>
          <a
            className="flex items-center rounded px-2 py-1 hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            <Wifi className="mr-2 h-4 w-4" />
            Tech Support
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <div className="container mx-auto space-y-6">
          {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="#" className="hover:underline">
              Home
            </a>
            <span>/</span>
            <span>Post New Topic</span>
          </div> */}

          <Card>
            <CardHeader>
              <h1 className="text-2xl font-bold">Post New Topic</h1>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter the topic title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">
                        Academic Discussions
                      </SelectItem>
                      <SelectItem value="campus">Campus Life</SelectItem>
                      <SelectItem value="career">Career Services</SelectItem>
                      <SelectItem value="organizations">
                        Student Organizations
                      </SelectItem>
                      <SelectItem value="tech">Tech Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="Enter tags separated by commas"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your topic content here"
                    rows={10}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleClick}>Post Topic</Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <aside className="hidden w-64 border-l p-4 xl:block">
        <h3 className="mb-4 flex items-center font-semibold">
          <Flame className="mr-2 h-5 w-5 text-orange-500" />
          Trending Topics
        </h3>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-sm font-medium hover:underline">
              New campus gym opening next month
            </a>
            <p className="mt-1 text-xs text-muted-foreground">
              32 replies • 2h ago
            </p>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:underline">
              Spring break travel plans discussion
            </a>
            <p className="mt-1 text-xs text-muted-foreground">
              45 replies • 5h ago
            </p>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:underline">
              Course registration tips for next semester
            </a>
            <p className="mt-1 text-xs text-muted-foreground">
              28 replies • 1d ago
            </p>
          </li>
          <li>
            <a href="#" className="text-sm font-medium hover:underline">
              Campus sustainability initiative launch
            </a>
            <p className="mt-1 text-xs text-muted-foreground">
              19 replies • 2d ago
            </p>
          </li>
        </ul>
      </aside>
    </div>
  );
}
