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
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="w-full sm:w-auto">
                All Categories <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                All Tags <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-1 flex-col gap-2 sm:flex-row">
              <Input className="w-full" placeholder="Search topics..." />
              <Link href="/forum/create-post" className="w-full sm:w-auto">
                <Button className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Post
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr,300px]">
            <div className="rounded-lg bg-card shadow">
              <div className="flex items-center justify-between border-b p-4">
                <h3 className="font-semibold">Topic</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="secondary" size="sm">
                    Latest
                  </Button>
                  <Button variant="ghost" size="sm">
                    Top
                  </Button>
                </div>
                <div className="hidden space-x-12 text-sm text-muted-foreground sm:flex">
                  <span>Replies</span>
                  <span>Views</span>
                  <span>Author</span>
                </div>
              </div>
              <div className="divide-y">
                <div className="flex flex-col p-4 hover:bg-accent sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Tips for balancing academic and social life?
                      </h4>
                    </Link>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">Campus Life</Badge>
                      <span className="text-xs text-muted-foreground">
                        student-wellness
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground sm:mt-0 sm:space-x-12">
                    <span className="sm:hidden">24 replies • 1.2k views</span>
                    <span className="hidden sm:inline">24</span>
                    <span className="hidden sm:inline">1.2k</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex flex-col p-4 hover:bg-accent sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Study group for Advanced Calculus (MATH301)
                      </h4>
                    </Link>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">Academic Discussions</Badge>
                      <span className="text-xs text-muted-foreground">
                        math, study-group
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground sm:mt-0 sm:space-x-12">
                    <span className="sm:hidden">8 replies • 342 views</span>
                    <span className="hidden sm:inline">8</span>
                    <span className="hidden sm:inline">342</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex flex-col p-4 hover:bg-accent sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Upcoming career fair - Companies list and preparation
                        tips
                      </h4>
                    </Link>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">Career Services</Badge>
                      <span className="text-xs text-muted-foreground">
                        job-search, networking
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground sm:mt-0 sm:space-x-12">
                    <span className="sm:hidden">16 replies • 789 views</span>
                    <span className="hidden sm:inline">16</span>
                    <span className="hidden sm:inline">789</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex flex-col p-4 hover:bg-accent sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Wi-Fi issues in the library - Any solutions?
                      </h4>
                    </Link>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">Tech Support</Badge>
                      <span className="text-xs text-muted-foreground">
                        wifi, library
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground sm:mt-0 sm:space-x-12">
                    <span className="sm:hidden">32 replies • 1.5k views</span>
                    <span className="hidden sm:inline">32</span>
                    <span className="hidden sm:inline">1.5k</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>TH</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex flex-col p-4 hover:bg-accent sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Link href="/forum/detail">
                      <h4 className="font-medium hover:underline">
                        Volunteer opportunities for environmental science
                        students
                      </h4>
                    </Link>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">Student Organizations</Badge>
                      <span className="text-xs text-muted-foreground">
                        volunteering, environment
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground sm:mt-0 sm:space-x-12">
                    <span className="sm:hidden">12 replies • 567 views</span>
                    <span className="hidden sm:inline">12</span>
                    <span className="hidden sm:inline">567</span>
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
