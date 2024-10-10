"use client";
// https://v0.dev/chat/zugWFB9pPdK

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CalendarIcon,
  DollarSignIcon,
  UsersIcon,
  GlobeIcon,
  PlayIcon,
  PlusIcon,
  SearchIcon,
  LayoutGridIcon,
  TableIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingButtonClick from "@/components/loading";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

interface Startup {
  id: number;
  foundername: string;
  email: string;
  startupname: string;
  website: string | null;
  foundingdate: string;
  industry: string;
  teamsize: number;
  fundingstage: string;
  fundingamount: number;
  productdescription: string;
  problemstatement: string;
  targetmarket: string;
  competitiveadvantage: string;
  revenuemodel: string;
  traction: string;
  goals: string;
  youtubelink: string | null;
  images: string[] | null;
}

export default function UniversityStartupProjects() {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [industryFilter, setIndustryFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const router = useRouter();

  // Fetch startups from Supabase
  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const { data, error } = await supabase
          .from("startups")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching startups:", error.message);
          throw error;
        } else {
          setStartups(data || []);
        }
      } catch (error) {
        console.error("Error fetching startups:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStartups();
  }, []);

  const filteredStartups = startups.filter(
    (startup) =>
      startup.startupname.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (industryFilter === "All" || startup.industry === industryFilter),
  );
  console.log("filteredStartups", filteredStartups);
  const industries = [
    "All",
    ...new Set(startups.map((startup) => startup.industry)),
  ];

  return (
    <>
      {isLoading ? (
        <LoadingButtonClick isLoading={isLoading} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-center text-4xl font-bold">
            University Startup Showcase
          </h1>
          <h2 className="mb-6 text-2xl font-semibold">
            Innovative Projects from Bright Minds
          </h2>
          <div className="mb-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="mr-4 flex-1">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search startups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <SearchIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                    size={20}
                  />
                </div>
              </div>
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                className="ml-4"
                type="button"
                onClick={() => router.push("/startups/application")}
              >
                <PlusIcon className="mr-2 h-4 w-4" /> Add Project
              </Button>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">View:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }
                >
                  <LayoutGridIcon className="mr-2 h-4 w-4" />
                  Grid
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("table")}
                  className={
                    viewMode === "table"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }
                >
                  <TableIcon className="mr-2 h-4 w-4" />
                  Table
                </Button>
              </div>
            </div>
          </div>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStartups.map((startup) => (
                <Card
                  key={startup.id}
                  className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <div
                    className="relative w-full pt-[56.25%]"
                    onClick={() => router.push(`/startups/${startup.id}`)}
                  >
                    <Image
                      src={
                        startup.images?.[0] ||
                        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt={`${startup.startupname} image`}
                      layout="fill"
                      objectFit="cover"
                      className="absolute left-0 top-0 h-full w-full transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-grow flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold">
                        {startup.startupname}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {startup.industry}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="space-y-3">
                        <p className="line-clamp-3 min-h-[60px] text-sm">
                          {startup.productdescription}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CalendarIcon className="h-4 w-4" />
                          <span>
                            Founded:{" "}
                            {new Date(
                              startup.foundingdate,
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <UsersIcon className="h-4 w-4" />
                          <span>Team size: {startup.teamsize}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <DollarSignIcon className="h-4 w-4" />
                          <span>
                            Funding: ${startup.fundingamount.toLocaleString()}
                          </span>
                        </div>
                        <Badge variant="secondary" className="mt-2">
                          {startup.fundingstage}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      {startup.website && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mr-2 flex-1"
                          type="button"
                          onClick={() =>
                            startup?.website && window.open(startup.website)
                          }
                        >
                          <GlobeIcon className="mr-2 h-4 w-4" />
                          Website
                        </Button>
                      )}
                      {startup.youtubelink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-2 flex-1"
                          type="button"
                          onClick={() =>
                            startup.youtubelink &&
                            window.open(startup.youtubelink)
                          }
                        >
                          <PlayIcon className="mr-2 h-4 w-4" />
                          Watch Pitch
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Founding Date</TableHead>
                  <TableHead>Team Size</TableHead>
                  <TableHead>Funding Stage</TableHead>
                  <TableHead>Funding Amount</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStartups.map((startup) => (
                  <TableRow
                    key={startup.id}
                    onClick={() => router.push(`/startups/${startup.id}`)}
                  >
                    <TableCell>{startup.startupname}</TableCell>
                    <TableCell>{startup.industry}</TableCell>
                    <TableCell>
                      {new Date(startup.foundingdate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{startup.teamsize}</TableCell>
                    <TableCell>{startup.fundingstage}</TableCell>
                    <TableCell>
                      ${startup.fundingamount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {startup.website && (
                          <Button variant="outline" size="sm">
                            <GlobeIcon className="h-4 w-4" />
                          </Button>
                        )}
                        {startup.youtubelink && (
                          <Button variant="outline" size="sm">
                            <PlayIcon className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      )}
    </>
  );
}
