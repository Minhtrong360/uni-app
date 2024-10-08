"use client";
// https://v0.dev/chat/D6OQRxKn032
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LayoutGrid,
  List,
  Plus,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Search,
  ArrowUpDown,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useRouter } from "next/navigation";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Internship",
    salary: 25,
    posted: "2023-09-15",
    tags: ["React", "Node.js", "TypeScript"],
    description:
      "Join our team for a summer internship focused on building cutting-edge web applications.",
    logo: "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/job/360_F_476493399_pIec8myjtnJ79cNJUkijMDSTNU1yYWqm.jpg",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Data Insights Inc.",
    location: "New York, NY",
    type: "Full-time",
    salary: 75,
    posted: "2023-09-14",
    tags: ["SQL", "Python", "Tableau"],
    description:
      "We're seeking a data analyst to help derive insights from our vast datasets.",
    logo: "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/job/images%20(2).jpg",
  },
  {
    id: 3,
    title: "Marketing Assistant",
    company: "Brand Builders",
    location: "Chicago, IL",
    type: "Part-time",
    salary: 20,
    posted: "2023-09-13",
    tags: ["Social Media", "Content Creation", "SEO"],
    description:
      "Help us create engaging content and manage our social media presence.",
    logo: "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/job/360_F_605368357_f2Ei6zdU39beEEogvcrP6SQqUfXQYURp.jpg",
  },
  {
    id: 4,
    title: "Research Assistant",
    company: "University Lab",
    location: "Boston, MA",
    type: "Part-time",
    salary: 22,
    posted: "2023-09-12",
    tags: ["Lab Work", "Data Analysis", "Scientific Writing"],
    description:
      "Assist in groundbreaking research in our state-of-the-art laboratory.",
    logo: "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/job/minimalist-coding-logo-design-template-modern-style-programmer-logo_1064784-6286.avif",
  },
  {
    id: 5,
    title: "UX Designer",
    company: "Creative Solutions",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: 90,
    posted: "2023-09-11",
    tags: ["Figma", "User Research", "Prototyping"],
    description:
      "Join our design team to create intuitive and beautiful user experiences.",
    logo: "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/job/security-logo-design-with-shield-and-lock-key-vector-53214383.jpg",
  },
];

const allTags = Array.from(
  new Set(jobListings.flatMap((job) => job.tags)),
).slice(0, 4);

export default function JobBoard() {
  const [viewMode, setViewMode] = useState<"table" | "card">("table");
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("All");
  const [salaryRange, setSalaryRange] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"title" | "salary" | "posted">("posted");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredAndSortedJobs = useMemo(() => {
    return jobListings
      .filter((job) => {
        const matchesSearch =
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = jobType === "All" || job.type === jobType;
        const matchesSalary =
          salaryRange === "All" ||
          (salaryRange === "0-25" && job.salary <= 25) ||
          (salaryRange === "26-50" && job.salary > 25 && job.salary <= 50) ||
          (salaryRange === "51-75" && job.salary > 50 && job.salary <= 75) ||
          (salaryRange === "76+" && job.salary > 75);
        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.some((tag) => job.tags.includes(tag));
        return matchesSearch && matchesType && matchesSalary && matchesTags;
      })
      .sort((a, b) => {
        if (sortBy === "salary") {
          return sortOrder === "asc"
            ? a.salary - b.salary
            : b.salary - a.salary;
        } else if (sortBy === "posted") {
          return sortOrder === "asc"
            ? new Date(a.posted).getTime() - new Date(b.posted).getTime()
            : new Date(b.posted).getTime() - new Date(a.posted).getTime();
        } else {
          return sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
      });
  }, [searchTerm, jobType, salaryRange, selectedTags, sortBy, sortOrder]);

  const handleSort = (column: "title" | "salary" | "posted") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const router = useRouter(); // Initialize useRouter

  const handleRowClick = (id: number) => {
    // Navigate to the job detail page when a row is clicked
    router.push(`/job-connect/detail/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">University Job Board</h1>
      <div className="mb-4 flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h2 className="text-xl font-semibold">Job Listings</h2>
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Create Job
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Job Listing</DialogTitle>
              </DialogHeader>
              <form className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input id="title" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="company" className="text-right">
                    Company
                  </Label>
                  <Input id="company" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input id="location" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Type
                  </Label>
                  <Input id="type" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="salary" className="text-right">
                    Salary
                  </Label>
                  <Input id="salary" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tags" className="text-right">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    className="col-span-3"
                    placeholder="Comma-separated tags"
                  />
                </div>
                <Button type="submit" className="ml-auto">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("table")}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "card" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("card")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mb-6 space-y-4">
        <div className="flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-[200px]"
            />
          </div>
          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </SelectContent>
          </Select>
          <Select value={salaryRange} onValueChange={setSalaryRange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select salary range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Ranges</SelectItem>
              <SelectItem value="0-25">$0k - $25k</SelectItem>
              <SelectItem value="26-50">$26k - $50k</SelectItem>
              <SelectItem value="51-75">$51k - $75k</SelectItem>
              <SelectItem value="76+">$76k+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap gap-4">
          {allTags.map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox
                id={tag}
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => handleTagChange(tag)}
              />
              <label
                htmlFor={tag}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {tag}
              </label>
            </div>
          ))}
        </div>
      </div>
      {viewMode === "table" ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  Title{" "}
                  {sortBy === "title" && (
                    <ArrowUpDown className="ml-2 inline h-4 w-4" />
                  )}
                </TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("salary")}
                >
                  Salary{" "}
                  {sortBy === "salary" && (
                    <ArrowUpDown className="ml-2 inline h-4 w-4" />
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("posted")}
                >
                  Posted{" "}
                  {sortBy === "posted" && (
                    <ArrowUpDown className="ml-2 inline h-4 w-4" />
                  )}
                </TableHead>
                <TableHead>Tags</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedJobs.map((job) => (
                <TableRow
                  key={job.id}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleRowClick(job.id)} // Handle row click
                >
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>${job.salary}k</TableCell>
                  <TableCell>{job.posted}</TableCell>
                  <TableCell>
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="mr-1">
                        {tag}
                      </Badge>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedJobs.map((job) => (
            <Card
              key={job.id}
              className="flex cursor-pointer flex-col hover:bg-gray-100"
              onClick={() => handleRowClick(job.id)} // Handle row click
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={500}
                    height={500}
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
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
                    <span>${job.salary}k</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Posted: {job.posted}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {job.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
