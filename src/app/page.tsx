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
  Bell,
  Book,
  Users,
  HelpCircle,
  Telescope,
  CircleGauge,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="container mx-auto p-6 bg-background">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => router.push("/notifications")}
            variant="outline"
            size="icon"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Link href="/user/user-setting">
            <Image
              src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/home/3d-illustration-person-with-sunglasses_23-2149436188.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ob21lLzNkLWlsbHVzdHJhdGlvbi1wZXJzb24td2l0aC1zdW5nbGFzc2VzXzIzLTIxNDk0MzYxODguYXZpZiIsImlhdCI6MTcyNzIzNjM3OSwiZXhwIjoxNzU4NzcyMzc5fQ.QTNyhP1dkzWDZ6TFFYVvVRc4sKy5J7t5xBHN2j6qtdg&t=2024-09-25T03%3A52%3A58.974Z"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <section className="bg-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Engagement</h2>
            <Progress value={65} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">
              65% of services utilized this semester
            </p>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Student Services</h2>
              <Button variant="link">See all</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/support/dashboard">
                <div className="bg-secondary p-6 rounded-lg">
                  <HeartHandshake className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Student Support Center
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Open: 9 AM - 5 PM
                  </p>
                </div>
              </Link>
              <Link href="/events">
                <div className="bg-secondary p-6 rounded-lg">
                  <CalendarDays className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Student Events</h3>
                  <p className="text-sm text-muted-foreground">
                    3 upcoming this week
                  </p>
                </div>
              </Link>
              <Link href="/store">
                <div className="bg-secondary p-6 rounded-lg">
                  <ShoppingBag className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Student Shops</h3>
                  <p className="text-sm text-muted-foreground">
                    New merch available
                  </p>
                </div>
              </Link>
              <Link href="/academic">
                <div className="bg-secondary p-6 rounded-lg">
                  <Rocket className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Startups Contest
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Submissions due in 2 weeks
                  </p>
                </div>
              </Link>

              <Link href="/task">
                <div className="bg-secondary p-6 rounded-lg">
                  <Book className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Project Management
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 online access
                  </p>
                </div>
              </Link>
              <Link href="/startups/application">
                <div className="bg-secondary p-6 rounded-lg">
                  <Telescope className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Startup Application
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    View today is menu
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
          <section className="bg-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Event</h2>
            <div className="flex items-center space-x-4">
              <Image
                src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/home/AdobeStock_473119551-vert-scaled.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ob21lL0Fkb2JlU3RvY2tfNDczMTE5NTUxLXZlcnQtc2NhbGVkLmpwZyIsImlhdCI6MTcyNzIzNjYxOSwiZXhwIjoxNzU4NzcyNjE5fQ.t4Oek9DO9O5lsu8lFXiLjfb30-_XAyNmJ90q03uVLKE&t=2024-09-25T03%3A56%3A59.082Z"
                alt="Event illustration"
                width={80}
                height={80}
                className="rounded-lg max-h-[80px] object-cover"
              />
              <div>
                <h3 className="font-semibold">Career Fair</h3>
                <p className="text-sm text-muted-foreground">In 3 days</p>
              </div>
            </div>
            <Button
              onClick={() => router.push(`/events`)}
              className="w-full mt-4"
            >
              View all events
            </Button>
          </section>

          <section className="bg-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <nav className="space-y-2">
              <Link href="/admin/dashboard">
                <Button variant="ghost" className="w-full justify-start">
                  <CircleGauge className="mr-2 h-4 w-4" /> Admin Dashboard
                </Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start">
                <ShoppingBag className="mr-2 h-4 w-4" /> Campus Store
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <HeartHandshake className="mr-2 h-4 w-4" /> Counseling Services
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Rocket className="mr-2 h-4 w-4" /> Career Center
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" /> Student Organizations
              </Button>
              <Button
                onClick={() => router.push(`/support/faqs`)}
                variant="ghost"
                className="w-full justify-start"
              >
                <HelpCircle className="mr-2 h-4 w-4" /> FAQs
              </Button>
            </nav>
          </section>
        </div>
      </div>
    </div>
  );
}
