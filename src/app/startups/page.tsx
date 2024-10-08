"use client";
// https://v0.dev/chat/7dQ6Sq01Ydo
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileText,
  Search,
  Filter,
  Download,
  ExternalLink,
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup1.jpg", // Added image
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup2.jpg", // Added image
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup3.jpg", // Added image
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup4.jpg", // Added image
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup5.png", // Added image
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup6.jpg", // Added image
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup1.jpg", // Added image
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup6.jpg", // Added image
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
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/startups/startup4.jpg", // Added image
  },
];

// Type definitions for the data structure
type ItemType = {
  id: number;
  title?: string;
  name?: string;
  author?: string;
  student?: string;
  founder?: string;
  abstract?: string;
  keywords?: string[];
  tags?: string[];
  image: string;
  published?: string;
  citations?: number;
  doi?: string;
  supervisor?: string;
  department?: string;
  progress?: number;
  completion?: string;
  description?: string;
  founded?: string;
  teamSize?: number;
  fundingStage?: string;
  mentor?: string;
  supporters?: number;
};

// Reusable Card component
const ItemCard = ({
  item,
  imageSrc,
  extraContent,
  avatarFallback,
  onView,
  onAction,
}: {
  item: ItemType;
  imageSrc: string;
  extraContent: JSX.Element;
  avatarFallback: string;
  onView?: () => void;
  onAction?: () => void;
}) => (
  <Card className="flex flex-col">
    <Image
      width={1000}
      height={600}
      src={imageSrc}
      alt="Thumbnail"
      className="h-64 w-full object-cover"
    />
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span className="truncate text-lg">{item.title || item.name}</span>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">{extraContent}</div>
          </PopoverContent>
        </Popover>
      </CardTitle>

      <div className="flex items-center space-x-2">
        <Avatar className="h-6 w-6">
          <AvatarImage
            src={`https://i.pravatar.cc/150?u=${item.id}`}
            alt="Avatar"
          />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>{item.author || item.founder || item.student}</div>
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="mb-4 flex flex-wrap gap-2">
        {(item.keywords || item.tags)?.map((keyword, index) => (
          <Badge key={index} variant="secondary">
            {keyword}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" onClick={onView}>
        <FileText className="mr-2 h-4 w-4" />
        {onView ? "View Details" : "Read Abstract"}
      </Button>
      {onAction && (
        <Button variant="ghost" size="icon" onClick={onAction}>
          <ExternalLink className="h-4 w-4" />
        </Button>
      )}
    </CardFooter>
  </Card>
);

// Reusable Table component
const ItemTable = ({
  items,
  columns,
  actions,
}: {
  items: ItemType[];
  columns: string[];
  actions: { icon: JSX.Element; onClick?: () => void }[];
}) => (
  <Table>
    <TableHeader>
      <TableRow>
        {columns.map((col, index) => (
          <TableHead key={index}>{col}</TableHead>
        ))}
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map((item) => (
        <TableRow key={item.id}>
          {columns.map((col, index) => (
            <TableCell key={index}>
              {(item as ItemType)[col.toLowerCase() as keyof ItemType]}
            </TableCell>
          ))}
          <TableCell>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={action.onClick}
              >
                {action.icon}
              </Button>
            ))}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

// Rendering views for Papers, Theses, and Startups
const renderItemView = (
  items: ItemType[],
  viewMode: string,
  columns: string[],
  extraContent: (item: ItemType) => JSX.Element,
  avatarFallback: (item: ItemType) => string,
  onView?: () => void,
  onAction?: () => void,
) => {
  return viewMode === "card" ? (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          imageSrc={item.image}
          extraContent={extraContent(item)}
          avatarFallback={avatarFallback(item)}
          onView={onView}
          onAction={onAction}
        />
      ))}
    </div>
  ) : (
    <ItemTable
      items={items}
      columns={columns}
      actions={[
        { icon: <FileText className="h-4 w-4" />, onClick: onView },
        { icon: <ExternalLink className="h-4 w-4" />, onClick: onAction },
      ]}
    />
  );
};

export default function Component() {
  const [activeTab, setActiveTab] = useState<string>("papers");
  const [viewMode, setViewMode] = useState<string>("card");

  const extraContentPapers = (item: ItemType) => (
    <>
      <div className="text-sm font-medium">Abstract</div>
      <div className="text-sm">{item.abstract}</div>
      <div className="text-sm font-medium">Published: {item.published}</div>
      <div className="text-sm font-medium">Citations: {item.citations}</div>
      <div className="text-sm font-medium">DOI: {item.doi}</div>
    </>
  );

  const extraContentTheses = (item: ItemType) => (
    <>
      <div className="text-sm font-medium">Abstract</div>
      <div className="text-sm">{item.abstract}</div>
      <div className="text-sm font-medium">Supervisor: {item.supervisor}</div>
      <div className="text-sm font-medium">Department: {item.department}</div>
      <div className="text-sm font-medium">Completion: {item.completion}</div>
    </>
  );

  const extraContentStartups = (item: ItemType) => (
    <>
      <div className="text-sm">{item.description}</div>
      <div className="text-sm font-medium">Founded: {item.founded}</div>
      <div className="text-sm font-medium">Team Size: {item.teamSize}</div>
      <div className="text-sm font-medium">
        Funding Stage: {item.fundingStage}
      </div>
      <div className="text-sm font-medium">Mentor: {item.mentor}</div>
    </>
  );

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
        <TabsList className="mx-auto mb-8 grid w-fit grid-cols-3">
          <TabsTrigger value="papers">Academic Papers</TabsTrigger>
          <TabsTrigger value="theses">Graduation Theses</TabsTrigger>
          <TabsTrigger value="startups">Student Startups</TabsTrigger>
        </TabsList>

        <TabsContent value="papers">
          {renderItemView(
            fakePapers,
            viewMode,
            ["Title", "Author", "Keywords", "Published", "Citations"],
            extraContentPapers,
            (item) => item.author![0],
            () => console.log("View Paper"),
            () => console.log("External Link"),
          )}
        </TabsContent>

        <TabsContent value="theses">
          {renderItemView(
            fakeTheses,
            viewMode,
            ["Title", "Student", "Keywords", "Supervisor", "Progress"],
            extraContentTheses,
            (item) => item.student![0],
            () => console.log("Read Abstract"),
            () => console.log("Message"),
          )}
        </TabsContent>

        <TabsContent value="startups">
          {renderItemView(
            fakeStartups,
            viewMode,
            [
              "Name",
              "Founder",
              "Tags",
              "Founded",
              "Funding Stage",
              "Supporters",
            ],
            extraContentStartups,
            (item) => item.founder![0],
            () => console.log("View Pitch Deck"),
            () => console.log("External Link"),
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
