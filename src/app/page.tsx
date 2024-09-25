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
  Users,
  HelpCircle,
  Telescope,
  CircleGauge,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log("Trick");

  return (
    <div className="relative mx-auto -mt-[64px] bg-background">
      <div
        className="relative mb-8 bg-cover bg-center px-6 py-20 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold">Welcome back, Alex!</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-4">
        <div className="space-y-6 lg:col-span-3">
          <section className="rounded-lg bg-secondary p-6">
            <h2 className="mb-4 text-2xl font-semibold">Your Engagement</h2>
            <Progress value={65} className="mb-2 h-2" />
            <p className="text-sm text-muted-foreground">
              65% of services utilized this semester
            </p>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-secondary p-6">
              <Image
                src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/premium/prem9.jpg"
                alt="Student studying"
                width={400}
                height={300}
                className="mb-4 h-72 w-full rounded-lg object-cover object-top"
              />
              <h3 className="mb-2 text-xl font-semibold">Study Resources</h3>
              <p className="text-sm text-muted-foreground">
                Access online libraries and study materials
              </p>
            </div>
            <div className="overflow-hidden rounded-lg bg-secondary p-6">
              <Image
                src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/premium/prem5.jpg"
                alt="Campus life"
                width={400}
                height={300}
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
              <Link href="/support/dashboard">
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
                src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/home/AdobeStock_473119551-vert-scaled.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ob21lL0Fkb2JlU3RvY2tfNDczMTE5NTUxLXZlcnQtc2NhbGVkLmpwZyIsImlhdCI6MTcyNzIzNjYxOSwiZXhwIjoxNzU4NzcyNjE5fQ.t4Oek9DO9O5lsu8lFXiLjfb30-_XAyNmJ90q03uVLKE&t=2024-09-25T03%3A56%3A59.082Z"
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
