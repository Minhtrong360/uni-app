// https://v0.dev/chat/hXFtQhvdTHQ
"use client";

import Link from "next/link";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  HeartHandshake,
  CalendarDays,
  ShoppingBag,
  Rocket,
  Book,
  HelpCircle,
  Telescope,
  CircleGauge,
  TicketCheck,
  CalendarPlus2,
  DollarSign,
  BriefcaseBusiness,
  HelpCircleIcon,
  MessagesSquare,
  Coffee,
  BookOpen,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log("Trick");

  return (
    <div className="relative mx-auto -mt-[64px] bg-background">
      {/* Hero Section */}
      <div className="relative mb-8 bg-black bg-cover bg-center px-6 py-20 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 mx-auto flex flex-col items-start justify-between space-y-4">
          <h1 className="text-4xl font-bold">Welcome back, Takegawa!</h1>
          <div className="text-sm">
            <p>Student ID: 20230915</p>
            <p>Last Login: 2024-09-29 15:43 JST</p>
            <p>Meal Plan: Unlimited | Balance: ¥15,000</p>
            <p>Campus Access Card: Valid until 2025-03-31</p>
            <p>Library Books: 3 checked out, 1 due in 5 days</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-4">
        <div className="space-y-6 lg:col-span-3">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-secondary p-6">
              <Coffee className="mb-2 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Campus Engagement</h3>
              <Progress value={75} className="mb-2 h-2" />
              <p className="text-sm text-muted-foreground">75% Active</p>
            </div>
            <div className="rounded-lg bg-secondary p-6">
              <BookOpen className="mb-2 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Study Hours</h3>
              <Progress value={60} className="mb-2 h-2" />
              <p className="text-sm text-muted-foreground">60 hrs this month</p>
            </div>
            <div className="rounded-lg bg-secondary p-6">
              <User className="mb-2 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Group Projects</h3>
              <Progress value={40} className="mb-2 h-2" />
              <p className="text-sm text-muted-foreground">2 active projects</p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-secondary p-6">
              <Image
                src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/home/22_USU_No22_UST.jpg"
                alt="Student studying"
                width={1600}
                height={900}
                className="mb-4 h-72 w-full rounded-lg object-cover object-top"
              />
              <h3 className="mb-2 text-xl font-semibold">Study Resources</h3>
              <p className="text-sm text-muted-foreground">
                Access online libraries and study materials
              </p>
            </div>
            <div className="overflow-hidden rounded-lg bg-secondary p-6">
              <Image
                src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/home/1545822339php3Ddi0O.jpeg?t=2024-09-30T02%3A28%3A00.735Z"
                alt="Campus life"
                width={600}
                height={400}
                className="mb-4 h-72 w-full rounded-lg object-cover object-top"
              />
              <h3 className="mb-2 text-xl font-semibold">Campus Life</h3>
              <p className="text-sm text-muted-foreground">
                Explore events and activities on campus
              </p>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Student Services</h2>
              <Button variant="link">See all</Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/support">
                <div className="rounded-lg bg-secondary p-6">
                  <HeartHandshake className="mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-xl font-semibold">
                    Student Support Center
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Open: 9 AM - 5 PM
                  </p>
                </div>
              </Link>
              <Link href="/events">
                <div className="rounded-lg bg-secondary p-6">
                  <CalendarDays className="mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-xl font-semibold">Student Events</h3>
                  <p className="text-sm text-muted-foreground">
                    3 upcoming this week
                  </p>
                </div>
              </Link>
              <Link href="/store">
                <div className="rounded-lg bg-secondary p-6">
                  <ShoppingBag className="mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-xl font-semibold">Student Shops</h3>
                  <p className="text-sm text-muted-foreground">
                    New merch available
                  </p>
                </div>
              </Link>
              <Link href="/academic">
                <div className="rounded-lg bg-secondary p-6">
                  <Rocket className="mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-xl font-semibold">
                    Startups Contest
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Submissions due in 2 weeks
                  </p>
                </div>
              </Link>

              <Link href="/task">
                <div className="rounded-lg bg-secondary p-6">
                  <Book className="mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-xl font-semibold">
                    Project Management
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 online access
                  </p>
                </div>
              </Link>
              <Link href="/startups/application">
                <div className="rounded-lg bg-secondary p-6">
                  <Telescope className="mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-xl font-semibold">
                    Startup Application
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    View today is menu
                  </p>
                </div>
              </Link>
              <Link href="/donate-sponsor">
                <div className="rounded-lg bg-secondary p-6">
                  <DollarSign size={24} className="mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold">Donate & Sponsor</h3>
                  <p className="text-sm text-muted-foreground">
                    Support our initiatives
                  </p>
                </div>
              </Link>

              <Link href="/job-connect">
                <div className="rounded-lg bg-secondary p-6">
                  <BriefcaseBusiness size={24} className="mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold">Job Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    Support our initiatives
                  </p>
                </div>
              </Link>

              <Link href="/forum">
                <div className="rounded-lg bg-secondary p-6">
                  <HelpCircleIcon size={24} className="mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold">
                    Community Help & Share
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Support our initiatives
                  </p>
                </div>
              </Link>

              {/* <div className="bg-secondary p-6 rounded-lg">
								<Dumbbell className="w-10 h-10 mb-4" />
								<h3 className="text-xl font-semibold mb-2">Fitness Center</h3>
								<p className="text-sm text-muted-foreground">Book a class</p>
							</div>
							<div className="bg-secondary p-6 rounded-lg">
								<Bus className="w-10 h-10 mb-4" />
								<h3 className="text-xl font-semibold mb-2">Campus Shuttle</h3>
								<p className="text-sm text-muted-foreground">
									Check routes and schedules
								</p>
							</div>
							<div className="bg-secondary p-6 rounded-lg">
								<Laptop className="w-10 h-10 mb-4" />
								<h3 className="text-xl font-semibold mb-2">IT Help Desk</h3>
								<p className="text-sm text-muted-foreground">
									Get tech support
								</p>
							</div> */}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-lg bg-secondary p-6">
            <h2 className="mb-4 text-2xl font-semibold">Upcoming Event</h2>
            <div className="flex items-center space-x-4">
              <Image
                src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/home/job-search-600x600.png"
                alt="Event illustration"
                width={80}
                height={80}
                className="max-h-[80px] rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">Career Fair</h3>
                <p className="text-sm text-muted-foreground">In 3 days</p>
              </div>
            </div>
            <Button
              onClick={() => router.push(`/events`)}
              className="mt-4 w-full"
            >
              View all events
            </Button>
          </section>

          <section className="rounded-lg bg-secondary p-6">
            <h2 className="mb-4 text-2xl font-semibold">Quick Links</h2>
            <nav className="space-y-2">
              <Link href="/admin">
                <Button
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <CircleGauge className="mr-2 h-4 w-4" /> Admin Dashboard
                </Button>
              </Link>

              <Link href="/support">
                <Button
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <HeartHandshake className="mr-2 h-4 w-4" /> Student Support
                  Center
                </Button>
              </Link>

              <Link href="/store">
                <Button
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" /> Campus Store
                </Button>
              </Link>

              <Link href="/events/bookvenue">
                <Button
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <TicketCheck className="mr-2 h-4 w-4" /> Book Venue
                </Button>
              </Link>
              <Link href="/events/create">
                <Button
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <CalendarPlus2 className="mr-2 h-4 w-4" /> Create event
                </Button>
              </Link>
              <Link href="/academic">
                <Button
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <Rocket className="mr-2 h-4 w-4" /> Academic
                </Button>
              </Link>

              <Link href="/forum">
                <Button
                  onClick={() => router.push(`/forum`)}
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <MessagesSquare className="mr-2 h-4 w-4" /> Forum
                </Button>
              </Link>

              <Link href="/job-connect">
                <Button
                  onClick={() => router.push(`/job-connect`)}
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <BriefcaseBusiness className="mr-2 h-4 w-4" /> Job Connect
                </Button>
              </Link>

              <Link href="/donate-sponsor">
                <Button
                  onClick={() => router.push(`/donate-sponsor`)}
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <DollarSign className="mr-2 h-4 w-4" /> Donate & Sponsor
                </Button>
              </Link>

              <Link href="/support/faqs">
                <Button
                  onClick={() => router.push(`/support/faqs`)}
                  variant="ghost"
                  className="w-full items-center justify-start"
                >
                  <HelpCircle className="mr-2 h-4 w-4" /> FAQs
                </Button>
              </Link>
            </nav>
          </section>
        </div>
      </div>
    </div>
  );
}
