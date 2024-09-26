"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  GraduationCap,
  Rocket,
  Calendar,
  User,
  LayoutGrid,
  LayoutList,
  Clock,
  Tag,
  FileText,
  Plus,
  Search,
} from "lucide-react";
import Image from "next/image";
import { message } from "antd";

export default function Component() {
  const [viewMode, setViewMode] = React.useState<"table" | "card">("card");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProjectType, setSelectedProjectType] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("All");
  const [selectedProjectTypeFilter, setSelectedProjectTypeFilter] =
    React.useState("All");
  const [selectedTagFilter, setSelectedTagFilter] = React.useState("All");
  const handleClick = () => {
    message.success("New project has been added successfully!");
  };
  const projectTypes = [
    {
      name: "Academic Papers",
      icon: BookOpen,
      count: 45,
      completed: 32,
      inProgress: 10,
      pending: 3,
    },
    {
      name: "Graduation Theses",
      icon: GraduationCap,
      count: 78,
      completed: 50,
      inProgress: 25,
      pending: 3,
    },
    {
      name: "Startup Activities",
      icon: Rocket,
      count: 23,
      completed: 15,
      inProgress: 5,
      pending: 3,
    },
  ];

  const projects = {
    "Academic Papers": [
      {
        id: 1,
        title: "AI in Education",
        author: "Dr. Smith",
        date: "2023-09-15",
        image:
          "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup1.jpg?t=2024-09-25T09%3A27%3A41.667Z",
        status: "In Progress",
        progress: 75,
        tags: ["AI", "Education"],
        abstract:
          "This paper explores the impact of AI on modern educational practices...",
        lastUpdated: "2023-09-20",
        estimatedCompletion: "2023-10-15",
        estimatedLaunch: "",
      },
      {
        id: 2,
        title: "Machine Learning in Healthcare",
        author: "Dr. Johnson",
        date: "2023-09-12",
        image:
          "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup2.jpg?t=2024-09-25T09%3A27%3A41.667Z",
        status: "Completed",
        progress: 100,
        tags: ["Machine Learning", "Healthcare"],
        abstract:
          "An in-depth analysis of machine learning applications in healthcare...",
        lastUpdated: "2023-09-18",
        estimatedCompletion: "2023-09-18",
        estimatedLaunch: "",
      },
    ],
    "Graduation Theses": [
      {
        id: 1,
        title: "Sustainable Energy Solutions",
        author: "Jane Doe",
        date: "2023-09-14",
        image:
          "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup3.jpg?t=2024-09-25T09%3A27%3A41.667Z",
        status: "In Progress",
        progress: 60,
        tags: ["Sustainability", "Energy"],
        abstract:
          "Investigating innovative approaches to sustainable energy production and distribution...",
        lastUpdated: "2023-09-19",
        estimatedCompletion: "2023-12-01",
        estimatedLaunch: "",
      },
      {
        id: 2,
        title: "Urban Planning Strategies",
        author: "Mike Johnson",
        date: "2023-09-11",
        image:
          "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup4.jpg?t=2024-09-25T09%3A27%3A41.667Z",
        status: "In Review",
        progress: 95,
        tags: ["Urban Planning"],
        abstract:
          "Analyzing effective urban planning strategies for rapidly growing cities...",
        lastUpdated: "2023-09-16",
        estimatedCompletion: "2023-09-30",
        estimatedLaunch: "",
      },
    ],
    "Startup Activities": [
      {
        id: 1,
        title: "EduTech Platform",
        author: "John Brown",
        date: "2023-09-13",
        image:
          "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup5.png?t=2024-09-25T09%3A27%3A41.667Z",
        status: "Seed Funding",
        progress: 30,
        tags: ["EdTech", "SaaS"],
        abstract:
          "Developing an AI-driven educational technology platform for personalized learning...",
        lastUpdated: "2023-09-18",
        estimatedLaunch: "2024-03-01",
        estimatedCompletion: "",
      },
      {
        id: 2,
        title: "Green Energy Startup",
        author: "Sarah Wilson",
        date: "2023-09-10",
        image:
          "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup6.jpg?t=2024-09-25T09%3A27%3A41.667Z",
        status: "Prototype",
        progress: 50,
        tags: ["Green Energy", "Sustainability"],
        abstract:
          "Creating innovative solar energy solutions for residential use...",
        lastUpdated: "2023-09-16",
        estimatedLaunch: "2024-06-15",
        estimatedCompletion: "",
      },
    ],
  };

  const allTags = Array.from(
    new Set(
      Object.values(projects).flatMap((projectList) =>
        projectList.flatMap((project) => project.tags),
      ),
    ),
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  const renderForm = () => {
    switch (selectedProjectType) {
      case "Academic Papers":
        return (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Paper Title</Label>
              <Input id="title" placeholder="Enter paper title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="authors">Authors</Label>
              <Input
                id="authors"
                placeholder="Enter authors (comma-separated)"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="abstract">Abstract</Label>
              <Textarea id="abstract" placeholder="Enter paper abstract" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="journal">Journal</Label>
              <Input id="journal" placeholder="Enter journal name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="publication-date">Publication Date</Label>
              <Input id="publication-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                placeholder="Enter keywords (comma-separated)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="doi">DOI</Label>
              <Input id="doi" placeholder="Enter DOI" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="paper-upload">Upload Paper (PDF)</Label>
              <Input id="paper-upload" type="file" accept=".pdf" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cover-image">Cover Image</Label>
              <Input id="cover-image" type="file" accept="image/*" />
            </div>
          </div>
        );
      case "Graduation Theses":
        return (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Thesis Title</Label>
              <Input id="title" placeholder="Enter thesis title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input id="author" placeholder="Enter author name" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="abstract">Abstract</Label>
              <Textarea id="abstract" placeholder="Enter thesis abstract" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supervisor">Supervisor</Label>
              <Input id="supervisor" placeholder="Enter supervisor name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Enter department name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="defense-date">Defense Date</Label>
              <Input id="defense-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                placeholder="Enter keywords (comma-separated)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="thesis-upload">Upload Thesis (PDF)</Label>
              <Input id="thesis-upload" type="file" accept=".pdf" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="presentation-upload">
                Upload Presentation (PPTX)
              </Label>
              <Input id="presentation-upload" type="file" accept=".pptx" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cover-image">Cover Image</Label>
              <Input id="cover-image" type="file" accept="image/*" />
            </div>
          </div>
        );
      case "Startup Activities":
        return (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="startup-name">Startup Name</Label>
              <Input id="startup-name" placeholder="Enter startup name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="founder">Founder(s)</Label>
              <Input id="founder" placeholder="Enter founder name(s)" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter startup description"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" placeholder="Enter industry" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="founding-date">Founding Date</Label>
              <Input id="founding-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="funding-stage">Funding Stage</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select funding stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seed">Seed</SelectItem>
                  <SelectItem value="Series A">Series A</SelectItem>
                  <SelectItem value="Series B">Series B</SelectItem>
                  <SelectItem value="Series C">Series C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="funding-amount">Funding Amount</Label>
              <Input
                id="funding-amount"
                type="number"
                placeholder="Enter funding amount"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="team-size">Team Size</Label>
              <Input
                id="team-size"
                type="number"
                placeholder="Enter team size"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pitch-deck">Upload Pitch Deck (PDF)</Label>
              <Input id="pitch-deck" type="file" accept=".pdf" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-plan">Upload Business Plan (PDF)</Label>
              <Input id="business-plan" type="file" accept=".pdf" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logo">Upload Logo</Label>
              <Input id="logo" type="file" accept="image/*" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const filteredProjects = Object.entries(projects).flatMap(
    ([type, projectList]) => {
      return projectList.filter((project) => {
        const matchesSearch =
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.abstract.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus =
          selectedStatus === "All" || project.status === selectedStatus;
        const matchesProjectType =
          selectedProjectTypeFilter === "All" ||
          type === selectedProjectTypeFilter;
        const matchesTag =
          selectedTagFilter === "All" ||
          project.tags.includes(selectedTagFilter);
        return (
          matchesSearch && matchesStatus && matchesProjectType && matchesTag
        );
      });
    },
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow bg-gray-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((type) => (
              <Card key={type.name}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {type.name}
                  </CardTitle>
                  <type.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{type.count}</div>
                  <p className="text-xs text-muted-foreground">
                    Total projects
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Completed</span>
                      <span>{type.completed}</span>
                    </div>
                    <Progress
                      value={(type.completed / type.count) * 100}
                      className="h-1"
                    />
                    <div className="flex justify-between text-xs">
                      <span>In Progress</span>
                      <span>{type.inProgress}</span>
                    </div>
                    <Progress
                      value={(type.inProgress / type.count) * 100}
                      className="h-1"
                    />
                    <div className="flex justify-between text-xs">
                      <span>Pending</span>
                      <span>{type.pending}</span>
                    </div>
                    <Progress
                      value={(type.pending / type.count) * 100}
                      className="h-1"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Projects</CardTitle>
              <div className="flex space-x-2">
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="default" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle>Add New Project</DialogTitle>
                      <DialogDescription>
                        Enter the details for the new project. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[60vh] overflow-y-auto">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-type">Project Type</Label>
                          <Select
                            onValueChange={(value) =>
                              setSelectedProjectType(value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Academic Papers">
                                Academic Papers
                              </SelectItem>
                              <SelectItem value="Graduation Theses">
                                Graduation Theses
                              </SelectItem>
                              <SelectItem value="Startup Activities">
                                Startup Activities
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {renderForm()}
                        <Button onClick={handleClick} type="submit">
                          Save
                        </Button>
                      </form>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
                <Button
                  variant={viewMode === "table" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "card" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("card")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <div className="relative flex-grow">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
                <Select
                  value={selectedProjectTypeFilter}
                  onValueChange={setSelectedProjectTypeFilter}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    <SelectItem value="Academic Papers">
                      Academic Papers
                    </SelectItem>
                    <SelectItem value="Graduation Theses">
                      Graduation Theses
                    </SelectItem>
                    <SelectItem value="Startup Activities">
                      Startup Activities
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={selectedTagFilter}
                  onValueChange={setSelectedTagFilter}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by tag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Tags</SelectItem>
                    {allTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="In Review">In Review</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {viewMode === "table" ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Last Updated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell>{project.title}</TableCell>
                        <TableCell>{project.author}</TableCell>
                        <TableCell>
                          {Object.keys(projects).find((key) =>
                            projects[key as keyof typeof projects].includes(
                              project,
                            ),
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              project.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Progress
                            value={project.progress}
                            className="h-2 w-24"
                          />
                        </TableCell>
                        <TableCell>{project.lastUpdated}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project) => (
                    <Card key={project.id}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1440}
                        height={960}
                        className="mb-2 h-[250px] w-full rounded-t-lg object-cover"
                      />
                      <CardContent>
                        <h3 className="mb-2 font-semibold">{project.title}</h3>
                        <div className="mb-2 flex items-center justify-between">
                          <Badge
                            variant={
                              project.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.status}
                          </Badge>
                          <Progress
                            value={project.progress}
                            className="h-2 w-24"
                          />
                        </div>
                        <p className="mb-1 flex items-center text-sm text-gray-500">
                          <User className="mr-2 h-4 w-4" /> {project.author}
                        </p>
                        <p className="mb-1 flex items-center text-sm text-gray-500">
                          <Calendar className="mr-2 h-4 w-4" /> {project.date}
                        </p>
                        <p className="mb-1 flex items-center text-sm text-gray-500">
                          <Clock className="mr-2 h-4 w-4" /> Last updated:{" "}
                          {project.lastUpdated}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              <Tag className="mr-1 h-3 w-3" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <details className="mt-2">
                          <summary className="cursor-pointer text-sm font-medium">
                            Abstract
                          </summary>
                          <p className="mt-1 text-sm text-gray-500">
                            {project.abstract}
                          </p>
                        </details>
                        {"estimatedCompletion" in project && (
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <FileText className="mr-2 h-4 w-4" /> Est.
                            Completion: {project.estimatedCompletion}
                          </p>
                        )}
                        {"estimatedLaunch" in project && (
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <Rocket className="mr-2 h-4 w-4" /> Est. Launch:{" "}
                            {project.estimatedLaunch}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
