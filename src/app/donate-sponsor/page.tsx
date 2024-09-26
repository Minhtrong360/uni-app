////
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Textarea } from "@/components/ui/textarea";
import {
  SearchIcon,
  FilterIcon,
  HeartIcon,
  GraduationCapIcon,
} from "lucide-react";

interface Case {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: "project" | "person";
  goal: number;
  raised: number;
}

const cases: Case[] = [
  {
    id: 1,
    title: "Renewable Energy Research",
    description:
      "Funding needed for groundbreaking renewable energy research project led by Dr. Jane Smith.",
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/donation/dr-pezzolessi-in-lab.jpg",
    tags: ["Research", "Energy", "Sustainability"],
    type: "project",
    goal: 50000,
    raised: 15000,
  },
  {
    id: 2,
    title: "John Doe's Tuition Fund",
    description:
      "Help John Doe, a promising computer science student, complete his degree.",
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/donation/dsc-news.jpg",
    tags: ["Student", "Computer Science", "Tuition"],
    type: "person",
    goal: 20000,
    raised: 5000,
  },
  {
    id: 3,
    title: "AI Ethics Lab Equipment",
    description:
      "Support our AI Ethics Lab in acquiring cutting-edge equipment for research.",
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/donation/data-management-sq.png",
    tags: ["AI", "Ethics", "Equipment"],
    type: "project",
    goal: 75000,
    raised: 30000,
  },
  {
    id: 4,
    title: "Maria Garcia's Medical Research Internship",
    description:
      "Fund Maria Garcia's internship at a leading medical research facility.",
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/donation/ks041316_BCH_02-1024x576.jpg",
    tags: ["Medical", "Research", "Internship"],
    type: "person",
    goal: 15000,
    raised: 7500,
  },
];

export default function DonationPageWithForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredCases = cases.filter(
    (c) =>
      (c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterType === "all" || c.type === filterType),
  );

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">University Donation Cases</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Support our projects and students in need. Your contribution can make
          a significant impact on research and education.
        </p>
      </header>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="all">All Cases</TabsTrigger>
          <TabsTrigger value="project">Projects</TabsTrigger>
          <TabsTrigger value="person">People</TabsTrigger>
        </TabsList>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search cases..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <FilterIcon className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cases</SelectItem>
              <SelectItem value="project">Projects</SelectItem>
              <SelectItem value="person">People</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TabsContent value="all">
          <CaseGrid cases={filteredCases} />
        </TabsContent>
        <TabsContent value="project">
          <CaseGrid cases={filteredCases.filter((c) => c.type === "project")} />
        </TabsContent>
        <TabsContent value="person">
          <CaseGrid cases={filteredCases.filter((c) => c.type === "person")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function CaseGrid({ cases }: { cases: Case[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cases.map((c) => (
        <Card
          key={c.id}
          className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <CardHeader className="p-0">
            <img
              src={c.image}
              alt={c.title}
              className="h-48 w-full object-cover"
            />
          </CardHeader>
          <CardContent className="flex-grow p-6">
            <div className="mb-2 flex items-center">
              {c.type === "project" ? (
                <HeartIcon className="mr-2 h-5 w-5 text-red-500" />
              ) : (
                <GraduationCapIcon className="mr-2 h-5 w-5 text-blue-500" />
              )}
              <CardTitle className="text-xl">{c.title}</CardTitle>
            </div>
            <CardDescription className="mt-2 line-clamp-3">
              {c.description}
            </CardDescription>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4 bg-secondary/10 p-6">
            <div className="h-2.5 w-full rounded-full bg-secondary">
              <div
                className="h-2.5 rounded-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${(c.raised / c.goal) * 100}%` }}
              ></div>
            </div>
            <div className="flex w-full justify-between text-sm font-medium">
              <span>Raised: ${c.raised.toLocaleString()}</span>
              <span>Goal: ${c.goal.toLocaleString()}</span>
            </div>
            <DonationDialog caseTitle={c.title} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function DonationDialog({ caseTitle }: { caseTitle: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Donate Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donate to {caseTitle}</DialogTitle>
          <DialogDescription>
            Please provide your information so we can contact you about your
            donation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Donation Amount ($)</Label>
            <Input id="amount" type="number" min="1" step="1" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea id="message" />
          </div>
          <Button type="submit" className="w-full">
            Submit Donation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
