"use client";
// https://v0.dev/chat/7dQ6Sq01Ydo
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BookOpen,
  FileText,
  Rocket,
  Search,
  Filter,
  Download,
  ExternalLink,
  ThumbsUp,
  MessageSquare,
  Info,
  LayoutGrid,
  LayoutList,
} from "lucide-react";
import Image from "next/image";

const fakePapers = [
  {
    id: 1,
    title: "Quantum Computing Breakthroughs",
    author: "Dr. Jane Doe",
    abstract:
      "Recent advancements in quantum computing stability and error correction.",
    keywords: ["Quantum Computing", "Computer Science", "Physics"],
    published: "2023-06-15",
    citations: 42,
    doi: "10.1234/qc.2023.01.001",
  },
  {
    id: 2,
    title: "AI in Climate Change Modeling",
    author: "Prof. John Smith",
    abstract:
      "Applying artificial intelligence to improve climate change predictions and mitigation strategies.",
    keywords: ["AI", "Climate Change", "Environmental Science"],
    published: "2023-05-22",
    citations: 38,
    doi: "10.5678/ai.2023.05.002",
  },
  {
    id: 3,
    title: "Nanotechnology in Drug Delivery",
    author: "Dr. Emily Chen",
    abstract:
      "Innovative nanotechnology approaches for targeted drug delivery in cancer treatment.",
    keywords: ["Nanotechnology", "Pharmacology", "Oncology"],
    published: "2023-07-03",
    citations: 29,
    doi: "10.9101/nano.2023.07.003",
  },
];

const fakeTheses = [
  {
    id: 1,
    title:
      "Machine Learning in Healthcare Diagnostics: Improving Accuracy and Efficiency of Medical Diagnoses through Advanced Algorithms",
    student: "Alice Smith",
    abstract:
      "Investigating machine learning algorithms for improving medical diagnoses accuracy.",
    keywords: ["Machine Learning", "Healthcare", "Data Science"],
    supervisor: "Prof. Robert Johnson",
    department: "Computer Science",
    progress: 75,
    completion: "2024-05",
  },
  {
    id: 2,
    title:
      "Sustainable Urban Planning Strategies for Future Smart Cities: Integrating Green Technologies and Social Equity",
    student: "Tom Brown",
    abstract:
      "Developing eco-friendly urban planning methodologies for future smart cities.",
    keywords: ["Urban Planning", "Sustainability", "Smart Cities"],
    supervisor: "Dr. Lisa Green",
    department: "Environmental Studies",
    progress: 60,
    completion: "2024-08",
  },
  {
    id: 3,
    title:
      "Neurolinguistic Patterns in Bilingual Speakers: A Comprehensive Study of Language Switching and Cognitive Load",
    student: "Maria Garcia",
    abstract:
      "Analyzing brain activity patterns in bilingual individuals during language switching.",
    keywords: ["Neuroscience", "Linguistics", "Bilingualism"],
    supervisor: "Prof. David Lee",
    department: "Psychology",
    progress: 90,
    completion: "2023-12",
  },
];

const fakeStartups = [
  {
    id: 1,
    name: "EcoTech Solutions",
    founder: "Michael Johnson",
    description:
      "Developing IoT devices for smart homes to reduce energy consumption.",
    tags: ["Green Tech", "IoT", "Sustainability"],
    founded: "2022",
    teamSize: 5,
    fundingStage: "Seed",
    mentor: "Sarah Lee, CEO of GreenFuture Inc.",
    supporters: 128,
  },
  {
    id: 2,
    name: "HealthAI",
    founder: "Jessica Wong",
    description:
      "AI-powered personal health assistant for preventive care and early disease detection.",
    tags: ["Healthcare", "AI", "MedTech"],
    founded: "2021",
    teamSize: 8,
    fundingStage: "Series A",
    mentor: "Dr. Mark Thompson, Former CTO of MedTech Corp",
    supporters: 256,
  },
  {
    id: 3,
    name: "EduVR",
    founder: "Alex Patel",
    description:
      "Virtual reality platform for immersive educational experiences across various subjects.",
    tags: ["EdTech", "VR", "E-learning"],
    founded: "2023",
    teamSize: 4,
    fundingStage: "Pre-seed",
    mentor: "Prof. Rachel Adams, Education Innovation Expert",
    supporters: 75,
  },
];

export default function Component() {
  const [activeTab, setActiveTab] = useState("papers");
  const [viewMode, setViewMode] = useState("card");

  const renderPapersView = () => {
    if (viewMode === "card") {
      return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fakePapers.map((paper) => (
            <Card key={paper.id} className="flex flex-col">
              <Image
                width={400}
                height={200}
                src={`https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=400`}
                alt="Paper thumbnail"
                className="h-40 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="truncate text-lg">{paper.title}</span>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Abstract</p>
                        <p className="text-sm">{paper.abstract}</p>
                        <p className="text-sm font-medium">
                          Published: {paper.published}
                        </p>
                        <p className="text-sm font-medium">
                          Citations: {paper.citations}
                        </p>
                        <p className="text-sm font-medium">DOI: {paper.doi}</p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${paper.id}`}
                        alt="Author"
                      />
                      <AvatarFallback>
                        {paper.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{paper.author}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  View Paper
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
    } else {
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Keywords</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Citations</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakePapers.map((paper) => (
              <TableRow key={paper.id}>
                <TableCell>{paper.title}</TableCell>
                <TableCell>{paper.author}</TableCell>
                <TableCell>{paper.keywords.join(", ")}</TableCell>
                <TableCell>{paper.published}</TableCell>
                <TableCell>{paper.citations}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }
  };

  const renderThesesView = () => {
    if (viewMode === "card") {
      return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fakeTheses.map((thesis) => (
            <Card key={thesis.id} className="flex flex-col">
              <Image
                width={400}
                height={200}
                src={`https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=400`}
                alt="Thesis thumbnail"
                className="h-40 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-help truncate text-lg">
                          {thesis.title}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{thesis.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Abstract</p>
                        <p className="text-sm">{thesis.abstract}</p>
                        <p className="text-sm font-medium">
                          Supervisor: {thesis.supervisor}
                        </p>
                        <p className="text-sm font-medium">
                          Department: {thesis.department}
                        </p>
                        <p className="text-sm font-medium">
                          Expected Completion: {thesis.completion}
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${thesis.id + 10}`}
                        alt="Student"
                      />
                      <AvatarFallback>
                        {thesis.student
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{thesis.student}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {thesis.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{thesis.progress}%</span>
                  </div>
                  <Progress value={thesis.progress} className="w-full" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Abstract
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
    } else {
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Keywords</TableHead>
              <TableHead>Supervisor</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeTheses.map((thesis) => (
              <TableRow key={thesis.id}>
                <TableCell>{thesis.title}</TableCell>
                <TableCell>{thesis.student}</TableCell>
                <TableCell>{thesis.keywords.join(", ")}</TableCell>
                <TableCell>{thesis.supervisor}</TableCell>
                <TableCell>
                  <Progress value={thesis.progress} className="w-full" />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }
  };

  const renderStartupsView = () => {
    if (viewMode === "card") {
      return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fakeStartups.map((startup) => (
            <Card key={startup.id} className="flex flex-col">
              <Image
                width={400}
                height={200}
                src={`https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=400`}
                alt="Startup thumbnail"
                className="h-40 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="truncate text-lg">{startup.name}</span>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <p className="text-sm">{startup.description}</p>
                        <p className="text-sm font-medium">
                          Founded: {startup.founded}
                        </p>
                        <p className="text-sm font-medium">
                          Team Size: {startup.teamSize}
                        </p>
                        <p className="text-sm font-medium">
                          Funding Stage: {startup.fundingStage}
                        </p>
                        <p className="text-sm font-medium">
                          Mentor: {startup.mentor}
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${startup.id + 20}`}
                        alt="Founder"
                      />
                      <AvatarFallback>
                        {startup.founder
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{startup.founder}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {startup.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{startup.supporters} Supporters</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Rocket className="mr-2 h-4 w-4" />
                  View Pitch Deck
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
    } else {
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Founder</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Founded</TableHead>
              <TableHead>Funding Stage</TableHead>
              <TableHead>Supporters</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeStartups.map((startup) => (
              <TableRow key={startup.id}>
                <TableCell>{startup.name}</TableCell>
                <TableCell>{startup.founder}</TableCell>
                <TableCell>{startup.tags.join(", ")}</TableCell>
                <TableCell>{startup.founded}</TableCell>
                <TableCell>{startup.fundingStage}</TableCell>
                <TableCell>{startup.supporters}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Rocket className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }
  };

  return (
    <div className="container mx-auto space-y-6 p-4 sm:p-6">
      <h1 className="text-2xl font-bold sm:text-3xl">
        University Academic Hub
      </h1>

      <div className="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="eng">Engineering</SelectItem>
              <SelectItem value="bio">Biology</SelectItem>
              <SelectItem value="psych">Psychology</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button
            variant="outline"
            onClick={() => setViewMode(viewMode === "card" ? "table" : "card")}
          >
            {viewMode === "card" ? (
              <LayoutList className="mr-2 h-4 w-4" />
            ) : (
              <LayoutGrid className="mr-2 h-4 w-4" />
            )}
            {viewMode === "card" ? "Table View" : "Card View"}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="papers">Academic Papers</TabsTrigger>
          <TabsTrigger value="theses">Graduation Theses</TabsTrigger>
          <TabsTrigger value="startups">Student Startups</TabsTrigger>
        </TabsList>

        <TabsContent value="papers">{renderPapersView()}</TabsContent>

        <TabsContent value="theses">{renderThesesView()}</TabsContent>

        <TabsContent value="startups">{renderStartupsView()}</TabsContent>
      </Tabs>
    </div>
  );
}
