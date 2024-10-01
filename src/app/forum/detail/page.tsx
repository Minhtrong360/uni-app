"use client";
// http://localhost:3000/forum
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  MessageSquare,
  ThumbsUp,
  Share2,
  Flag,
  MoreHorizontal,
  Coffee,
  Briefcase,
  Users,
  Wifi,
  Flame,
} from "lucide-react";

export default function TopicDetail() {
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
            <a href="#" className="hover:underline">
              Academic Discussions
            </a>
            <span>/</span>
            <span>Study group for Advanced Calculus (MATH301)</span>
          </div> */}

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">
                    Study group for Advanced Calculus (MATH301)
                  </h1>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Academic Discussions</Badge>
                    <span className="text-sm text-muted-foreground">math</span>
                    <span className="text-sm text-muted-foreground">
                      study-group
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Alice Smith</p>
                  <p className="text-sm text-muted-foreground">
                    Posted on August 15, 2023 at 14:30
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p>
                  Hi everyone! I'm looking to form a study group for Advanced
                  Calculus (MATH301) this semester. The course covers topics
                  like multivariable calculus, vector analysis, and differential
                  equations. I think it would be great to have a group where we
                  can discuss complex problems, share notes, and prepare for
                  exams together.
                </p>
                <p>Here's what I'm proposing:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Weekly meetings (maybe Tuesdays and Thursdays, 7-9 PM)
                  </li>
                  <li>Location: Library study rooms or online via Zoom</li>
                  <li>
                    Focus on problem-solving and explaining difficult concepts
                    to each other
                  </li>
                  <li>Create a shared Google Drive for notes and resources</li>
                  <li>
                    Maybe invite a TA or tutor for occasional sessions if we're
                    struggling with certain topics
                  </li>
                </ul>
                <p>
                  If you're interested, please comment below with your
                  availability and any ideas you have for the group. I'm
                  thinking we should limit it to about 6-8 people to keep it
                  manageable. Looking forward to conquering this challenging
                  course together!
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center justify-between">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Like (23)
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Reply (8)
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  <Flag className="mr-2 h-4 w-4" />
                  Report
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Separator />

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Replies (8)</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>BJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Bob Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      August 15, 2023 at 15:45
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  This sounds great! I'm definitely interested in joining.
                  Tuesdays and Thursdays work well for me. I've used Notion for
                  collaborative note-taking before, and it might be a good
                  option for us to consider alongside Google Drive.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Like (5)
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>EL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Emma Lee</p>
                    <p className="text-sm text-muted-foreground">
                      August 15, 2023 at 16:20
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Count me in! I've been worried about this class, so a study
                  group would be really helpful. I can make those times work.
                  Also, I know a great TA from last semester who might be
                  willing to help us out occasionally. Should we create a group
                  chat to coordinate?
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Like (3)
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <h3 className="font-semibold">Leave a Reply</h3>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full rounded-md border p-2"
                rows={4}
                placeholder="Type your reply here..."
              ></textarea>
            </CardContent>
            <CardFooter>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Post Reply
              </Button>
            </CardFooter>
          </Card>

          <div className="flex items-center justify-between">
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              View All Topics
            </Button>
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              Reply to Topic
            </Button>
          </div>
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
