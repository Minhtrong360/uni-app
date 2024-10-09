// https://v0.dev/chat/rYVUms5CwCt

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  DollarSignIcon,
  UsersIcon,
  GlobeIcon,
  PlayIcon,
  RocketIcon,
  LightbulbIcon,
  TrendingUpIcon,
  MailIcon,
  FileIcon,
  LayersIcon,
} from "lucide-react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/supabaseClient";
import LoadingButtonClick from "@/components/loading";

interface Startup {
  id: number;
  foundername: string;
  email: string;
  startupname: string;
  website: string | null;
  foundingdate: string;
  industry: string | string[]; // Có thể là chuỗi hoặc mảng chuỗi
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

  // Thêm các thuộc tính này
  pitchdeckpdf: string | null;
  pptxfile: string | null;
  supportingdocuments: string[] | null;
}

const trendingStartups = [
  { name: "EcoTech Solutions", industry: "CleanTech", fundingStage: "Seed" },
  { name: "HealthAI", industry: "HealthTech", fundingStage: "Series B" },
  { name: "CryptoSafe", industry: "Blockchain", fundingStage: "Series A" },
];

const similarStartups = [
  { name: "ProductivePro", industry: "Productivity", fundingStage: "Seed" },
  { name: "AIAssist", industry: "AI", fundingStage: "Series A" },
  {
    name: "WorkflowGenius",
    industry: "Enterprise Software",
    fundingStage: "Series B",
  },
];

export default function StartupDetail() {
  const [activeTab, setActiveTab] = useState("overview");
  const [startup, setStartup] = useState<Startup | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); // Extract id from the route parameters

  useEffect(() => {
    const fetchStartup = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("startups")
          .select("*")
          .eq("id", id)
          .single(); // Fetch a single startup based on id

        if (error) {
          console.error("Error fetching startup:", error);
        } else {
          setStartup({
            ...data,
            industry: Array.isArray(data.industry)
              ? data.industry
              : [data.industry], // Đảm bảo industry là mảng
            images: data.images ? data.images : ["/placeholder.svg"], // Đảm bảo có ít nhất một hình ảnh
            supportingdocuments: data.supportingdocuments || [], // Đảm bảo là mảng không null
            fundingamount: data.fundingamount > 0 ? data.fundingamount : "N/A", // Kiểm tra số tiền hợp lệ
            pptxfile: data.pptxfile || "No presentation available", // Kiểm tra file pptx
            youtubelink: data.youtubelink || null, // Nếu không có video YouTube, không hiển thị
          });
        }
      } catch (error) {
        console.error("Error fetching startup:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchStartup();
    }
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  // if (!startup) {
  //   return <p>Startup not found.</p>;
  // }

  return (
    <>
      {isLoading ? (
        <LoadingButtonClick isLoading={isLoading} />
      ) : (
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 min-h-[300px] md:h-full">
                    <Image
                      src={startup.images?.[0] || "/placeholder.svg"}
                      alt={`${startup.startupname} image`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <h1 className="mb-2 text-3xl font-bold">
                        {startup.startupname}
                      </h1>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {Array.isArray(startup.industry) ? (
                          startup.industry.map((industry, index) => (
                            <Badge key={index} variant="secondary">
                              {industry}
                            </Badge>
                          ))
                        ) : (
                          <Badge variant="secondary">{startup.industry}</Badge>
                        )}
                      </div>
                      <Badge variant="secondary" className="mb-4 text-lg">
                        {startup.fundingstage}
                      </Badge>
                      <div className="mb-4 flex flex-wrap justify-between gap-2">
                        {startup.website && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1"
                          >
                            <a
                              href={startup.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GlobeIcon className="mr-2 h-4 w-4" />
                              Visit Website
                            </a>
                          </Button>
                        )}
                        {startup.youtubelink && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1"
                          >
                            <a
                              href={startup.youtubelink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <PlayIcon className="mr-2 h-4 w-4" />
                              Watch Pitch
                            </a>
                          </Button>
                        )}
                      </div>
                      <p className="mb-4">{startup.productdescription}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="product">Product</TabsTrigger>
                      <TabsTrigger value="market">Market</TabsTrigger>
                      <TabsTrigger value="financials">Financials</TabsTrigger>
                      <TabsTrigger value="files">Files</TabsTrigger>
                    </TabsList>
                    <div className="p-6">
                      <TabsContent value="overview">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="flex items-center space-x-2">
                              <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                              <span>
                                Founded: {formatDate(startup.foundingdate)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <UsersIcon className="h-5 w-5 text-muted-foreground" />
                              <span>Team: {startup.teamsize}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <DollarSignIcon className="h-5 w-5 text-muted-foreground" />
                              <span>
                                Funding: $
                                {startup.fundingamount.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <Separator />
                          <h3 className="text-xl font-semibold">Traction</h3>
                          <p>{startup.traction}</p>
                          <Separator />
                          <h3 className="text-xl font-semibold">Goals</h3>
                          <p>{startup.goals}</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="product">
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">
                              Problem Statement
                            </h3>
                            <p>{startup.problemstatement}</p>
                          </div>
                          <Separator />
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">
                              Competitive Advantage
                            </h3>
                            <p>{startup.competitiveadvantage}</p>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="market">
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">
                              Target Market
                            </h3>
                            <p>{startup.targetmarket}</p>
                          </div>
                          <Separator />
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">
                              Revenue Model
                            </h3>
                            <p>{startup.revenuemodel}</p>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="financials">
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">
                              Funding Details
                            </h3>
                            <p>Stage: {startup.fundingstage}</p>
                            <p>
                              Amount Raised: $
                              {startup.fundingamount.toLocaleString()}
                            </p>
                          </div>
                          <Separator />
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">
                              Traction
                            </h3>
                            <p>{startup.traction}</p>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="files">
                        <div className="space-y-4">
                          <h3 className="mb-2 text-xl font-semibold">
                            Attached Files
                          </h3>

                          {/* Hiển thị pitchdeckpdf nếu có */}
                          {startup.pitchdeckpdf && (
                            <div className="flex items-center space-x-2">
                              <FileIcon className="h-5 w-5 text-muted-foreground" />
                              <a
                                href={startup.pitchdeckpdf}
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Pitch Deck PDF
                              </a>
                            </div>
                          )}

                          {/* Hiển thị pptxfile nếu có */}
                          {startup.pptxfile && (
                            <div className="flex items-center space-x-2">
                              <FileIcon className="h-5 w-5 text-muted-foreground" />
                              <a
                                href={startup.pptxfile}
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Presentation (PPTX)
                              </a>
                            </div>
                          )}

                          {/* Hiển thị supportingdocuments nếu có */}
                          {startup.supportingdocuments &&
                            startup.supportingdocuments.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold">
                                  Supporting Documents
                                </h4>
                                {startup.supportingdocuments.map(
                                  (doc, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center space-x-2"
                                    >
                                      <FileIcon className="h-5 w-5 text-muted-foreground" />
                                      <a
                                        href={doc}
                                        className="text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Supporting Document {index + 1}
                                      </a>
                                    </div>
                                  ),
                                )}
                              </div>
                            )}
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Founder</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-200"></div>
                    <h3 className="text-xl font-semibold">
                      {startup.foundername}
                    </h3>
                    <p className="text-muted-foreground">{startup.email}</p>
                    <Button variant="outline" className="mt-4" asChild>
                      <a href={`mailto:${startup.email}`}>
                        <MailIcon className="mr-2 h-4 w-4" />
                        Contact Founder
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <RocketIcon className="h-5 w-5 text-muted-foreground" />
                      <span>
                        Founded in{" "}
                        {new Date(startup.foundingdate).getFullYear()}
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <UsersIcon className="h-5 w-5 text-muted-foreground" />
                      <span>{startup.teamsize} team members</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <LightbulbIcon className="h-5 w-5 text-muted-foreground" />
                      <span>
                        {Array.isArray(startup.industry)
                          ? startup.industry.join(", ")
                          : startup.industry}
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <TrendingUpIcon className="h-5 w-5 text-muted-foreground" />
                      <span>{startup.traction}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUpIcon className="mr-2 h-5 w-5" />
                    Trending Startups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {trendingStartups.map((startup, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="font-medium">{startup.name}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{startup.industry}</Badge>
                          <Badge variant="outline">
                            {startup.fundingStage}
                          </Badge>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LayersIcon className="mr-2 h-5 w-5" />
                    Similar Startups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {similarStartups.map((startup, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="font-medium">{startup.name}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{startup.industry}</Badge>
                          <Badge variant="outline">
                            {startup.fundingStage}
                          </Badge>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
