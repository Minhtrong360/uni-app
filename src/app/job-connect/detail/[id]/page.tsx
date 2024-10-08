"use client";
// https://v0.dev/chat/npjT42G35oO

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Building,
  Clock,
  DollarSign,
  Calendar,
  Briefcase,
  Users,
  Globe,
  Phone,
  Mail,
  Share2,
  Bookmark,
  ChevronLeft,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function JobDescription() {
  const [isSaved, setIsSaved] = useState(false);

  const job = {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2023-10-01",
    applicationDeadline: "2023-11-15",
    startDate: "2024-01-15",
    department: "Engineering",
    reportsTo: "Engineering Manager",
    about:
      "TechCorp Solutions is a leading innovator in cloud-based enterprise solutions. We're on a mission to transform how businesses operate in the digital age.",
    description:
      "We are seeking a talented and passionate Senior Software Engineer to join our dynamic team. In this role, you will be at the forefront of developing cutting-edge software solutions that drive business transformation for our clients.",
    responsibilities: [
      "Design, develop, and maintain high-performance, reusable, and reliable Java code",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Continuously discover, evaluate, and implement new technologies to maximize development efficiency",
      "Ensure the best possible performance, quality, and responsiveness of applications",
      "Identify and correct bottlenecks and fix bugs",
      "Help maintain code quality, organization, and automatization",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Engineering or a related field",
      "5+ years of professional software development experience",
      "Strong proficiency in Java, with a good knowledge of its ecosystems",
      "Solid understanding of object-oriented programming",
      "Familiarity with various design and architectural patterns",
      "Experience with cloud technologies (AWS, Azure, or GCP)",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token",
      "Familiarity with continuous integration and deployment (CI/CD) pipelines",
    ],
    niceToHave: [
      "Experience with Spring Framework",
      "Knowledge of reactive programming",
      "Understanding of containerization technologies like Docker",
      "Experience with microservices architecture",
      "Contributions to open source projects",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) plan with company match",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Generous paid time off",
      "Parental leave",
      "Regular team building events and activities",
    ],
    tags: ["Java", "Spring", "AWS", "Microservices", "DevOps"],
    applicationProcess: [
      "Initial application review",
      "Phone screening with HR",
      "Technical coding challenge",
      "Virtual on-site interview with team members",
      "Final interview with senior leadership",
    ],
    diversityStatement:
      "TechCorp Solutions is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.",
    logo: "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/job/360_F_476493399_pIec8myjtnJ79cNJUkijMDSTNU1yYWqm.jpg",
    companySize: "500-1000 employees",
    fundingStage: "Series C",
    website: "https://www.techcorpsolutions.com",
    socialMedia: {
      linkedin: "https://www.linkedin.com/company/techcorp-solutions",
      twitter: "https://twitter.com/techcorpsolutions",
      facebook: "https://www.facebook.com/techcorpsolutions",
    },
    profileImage:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/job/360_F_476493399_pIec8myjtnJ79cNJUkijMDSTNU1yYWqm.jpg",
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Link
        href="/job-connect"
        className="mb-4 inline-flex items-center text-primary hover:underline"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Job Listings
      </Link>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 flex items-center space-x-4 sm:mb-0">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold sm:text-3xl">{job.title}</h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  {job.company}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsSaved(!isSaved)}
                    >
                      <Bookmark
                        className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`}
                      />
                      <span className="sr-only">
                        {isSaved ? "Unsave" : "Save"} job
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isSaved ? "Unsave" : "Save"} job</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share job</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share job</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Posted: {job.posted}</span>
            </div>
          </div>

          <Separator />

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="application">Application</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-6">
              <section>
                <h2 className="mb-4 text-2xl font-semibold">Job Description</h2>
                <p>{job.description}</p>
              </section>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="responsibilities">
                  <AccordionTrigger>Responsibilities</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-5">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="requirements">
                  <AccordionTrigger>Requirements</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-5">
                      {job.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="niceToHave">
                  <AccordionTrigger>Nice to Have</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-5">
                      {job.niceToHave.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-5">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="company">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">About the Company</h2>
                <p>{job.about}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Size: {job.companySize}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Funding: {job.fundingStage}</span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Social Media</h3>
                  <div className="flex space-x-4">
                    <Link
                      href={job.socialMedia.linkedin}
                      className="text-primary hover:underline"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href={job.socialMedia.twitter}
                      className="text-primary hover:underline"
                    >
                      Twitter
                    </Link>
                    <Link
                      href={job.socialMedia.facebook}
                      className="text-primary hover:underline"
                    >
                      Facebook
                    </Link>
                  </div>
                </div>
              </section>
            </TabsContent>
            <TabsContent value="application">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Application Process</h2>
                <ol className="list-decimal space-y-2 pl-5">
                  {job.applicationProcess.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Diversity Statement
                  </h3>
                  <p>{job.diversityStatement}</p>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={job.profileImage}
                  alt="Job Profile"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <h2 className="text-center text-xl font-semibold">
                  {job.title}
                </h2>
                <p className="text-center text-muted-foreground">
                  {job.company}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Job Overview</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Department: {job.department}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Reports To: {job.reportsTo}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Application Deadline: {job.applicationDeadline}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Start Date: {job.startDate}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>careers@techcorpsolutions.com</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Link
                    href={job.website}
                    className="text-primary hover:underline"
                  >
                    Company Website
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
