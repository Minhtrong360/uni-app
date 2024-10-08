"use client";
// https://v0.dev/chat/dqUOm05gELm

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  HeartIcon,
  Share2Icon,
  CalendarIcon,
  UserIcon,
  ClockIcon,
  DollarSignIcon,
} from "lucide-react";
import Image from "next/image";

export default function SponsorDetail() {
  const [donationAmount, setDonationAmount] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission logic here
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-48 md:h-full">
                  <Image
                    src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/support-images/amazon.jfif?t=2024-10-08T09%3A21%3A44.675Z"
                    alt="Amazon Rainforest"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <h1 className="mb-4 text-2xl font-bold md:text-3xl">
                  Save the Amazon Rainforest
                </h1>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    Environmental
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    Conservation
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    Climate Change
                  </Badge>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Help protect and restore critical areas of the Amazon,
                  preserving biodiversity and combating global climate change.
                </p>
                <Button variant="outline" size="sm">
                  <Share2Icon className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>About This Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Amazon rainforest, often referred to as the "lungs of
                    the Earth," is facing unprecedented threats from
                    deforestation, climate change, and human activities. This
                    project aims to protect and restore critical areas of the
                    Amazon, preserving biodiversity and combating global climate
                    change.
                  </p>
                  <p>Your donation will directly support:</p>
                  <ul className="list-inside list-disc space-y-1">
                    <li>Reforestation efforts in degraded areas</li>
                    <li>
                      Indigenous communities protecting their ancestral lands
                    </li>
                    <li>
                      Scientific research on biodiversity and climate impact
                    </li>
                    <li>
                      Education programs for sustainable forest management
                    </li>
                  </ul>
                  <p>
                    By contributing to this project, you're not just saving
                    trees – you're helping to maintain a crucial ecosystem that
                    plays a vital role in regulating our planet's climate and
                    supporting countless species.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="updates">
              <Card>
                <CardHeader>
                  <CardTitle>Project Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">
                        New Reforestation Site Established
                      </h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        Posted on July 15, 2023
                      </p>
                      <p>
                        We're excited to announce that we've established a new
                        reforestation site covering 500 hectares in the heart of
                        the Amazon. This area will be planted with native
                        species over the next six months.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Partnership with Indigenous Community
                      </h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        Posted on June 1, 2023
                      </p>
                      <p>
                        We've formed a partnership with the Kayapo indigenous
                        community to protect 10,000 hectares of pristine
                        rainforest. This collaboration will support sustainable
                        livelihoods and traditional forest management practices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="comments">
              <Card>
                <CardHeader>
                  <CardTitle>Supporter Comments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 flex items-center">
                        <UserIcon className="mr-2 h-5 w-5" />
                        <span className="font-semibold">Sarah J.</span>
                      </div>
                      <p>
                        This project is so important for our planet's future.
                        Proud to support it!
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <div className="mb-2 flex items-center">
                        <UserIcon className="mr-2 h-5 w-5" />
                        <span className="font-semibold">Michael T.</span>
                      </div>
                      <p>
                        I visited the Amazon last year and was amazed by its
                        beauty. We must protect it at all costs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Support This Project</CardTitle>
              <CardDescription>
                Help us reach our goal and save the Amazon
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Progress value={65} className="mb-2 h-2" />
                <div className="flex justify-between text-sm font-medium">
                  <span>$650,000 raised</span>
                  <span>$1,000,000 goal</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <HeartIcon className="mr-2 h-5 w-5 text-red-500" />
                  <span>1,245 supporters</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  <span>30 days left</span>
                </div>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full">Donate Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Make a Donation</DialogTitle>
                    <DialogDescription>
                      Your contribution will help save the Amazon rainforest.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleDonationSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="Enter donation amount"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" placeholder="Your message" />
                    </div>
                    <Button type="submit" className="w-full">
                      Complete Donation
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold">Project Details</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClockIcon className="mr-2 h-5 w-5" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This is a 5-year project starting from January 2023. We have
                milestones set for each year to track our progress in
                reforestation and conservation efforts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSignIcon className="mr-2 h-5 w-5" />
                Budget Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-1">
                <li>Reforestation: 40%</li>
                <li>Community Support: 25%</li>
                <li>Research: 20%</li>
                <li>Education: 10%</li>
                <li>Administration: 5%</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserIcon className="mr-2 h-5 w-5" />
                Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team consists of environmental scientists, indigenous
                leaders, community organizers, and volunteers dedicated to
                preserving the Amazon rainforest.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
