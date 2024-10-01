"use client";
// https://v0.dev/chat/6HkyJghwPBd
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  BookOpen,
  Coffee,
  Briefcase,
  Users,
  Wifi,
  PlusCircle,
  Flame,
} from "lucide-react";
import Link from "next/link";

export default function Forum() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1">
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
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <Button variant="outline">
              All Categories <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              All Tags <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary">Latest</Button>
            <Button variant="ghost">Top</Button>
            <Input
              className="ml-auto max-w-xs"
              placeholder="Search topics..."
            />
            <Link href="/forum/create-post">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Post
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr,300px]">
            <div className="rounded-lg bg-card shadow">
              <div className="flex items-center justify-between border-b p-4">
                <h3 className="font-semibold">Topic</h3>
                <div className="flex space-x-12 text-sm text-muted-foreground">
                  <span>Replies</span>
                  <span>Views</span>
                  <span>Author</span>
                </div>
              </div>
              <div className="divide-y">
                <div className="flex items-center justify-between p-4 hover:bg-accent">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Tips for balancing academic and social life?
                      </h4>
                    </Link>
                    <div className="mt-1 flex items-center space-x-2">
                      <Badge variant="secondary">Campus Life</Badge>
                      <span className="text-xs text-muted-foreground">
                        student-wellness
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-12 text-sm text-muted-foreground">
                    <span>24</span>
                    <span>1.2k</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 hover:bg-accent">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Study group for Advanced Calculus (MATH301)
                      </h4>
                    </Link>
                    <div className="mt-1 flex items-center space-x-2">
                      <Badge variant="secondary">Academic Discussions</Badge>
                      <span className="text-xs text-muted-foreground">
                        math, study-group
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-12 text-sm text-muted-foreground">
                    <span>8</span>
                    <span>342</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 hover:bg-accent">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Upcoming career fair - Companies list and preparation
                        tips
                      </h4>
                    </Link>
                    <div className="mt-1 flex items-center space-x-2">
                      <Badge variant="secondary">Career Services</Badge>
                      <span className="text-xs text-muted-foreground">
                        job-search, networking
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-12 text-sm text-muted-foreground">
                    <span>16</span>
                    <span>789</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 hover:bg-accent">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Wi-Fi issues in the library - Any solutions?
                      </h4>
                    </Link>
                    <div className="mt-1 flex items-center space-x-2">
                      <Badge variant="secondary">Tech Support</Badge>
                      <span className="text-xs text-muted-foreground">
                        wifi, library
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-12 text-sm text-muted-foreground">
                    <span>32</span>
                    <span>1.5k</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>TH</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 hover:bg-accent">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Volunteer opportunities for environmental science
                        students
                      </h4>
                    </Link>
                    <div className="mt-1 flex items-center space-x-2">
                      <Badge variant="secondary">Student Organizations</Badge>
                      <span className="text-xs text-muted-foreground">
                        volunteering, environment
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-12 text-sm text-muted-foreground">
                    <span>12</span>
                    <span>567</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>EG</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-card p-4 shadow">
                <h3 className="mb-4 flex items-center font-semibold">
                  <Flame className="mr-2 h-5 w-5 text-orange-500" />
                  Hot Topics
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
