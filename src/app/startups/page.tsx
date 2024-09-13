
// https://v0.dev/chat/b/2jNxrtA
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, LayoutGrid, List, Bell, ChevronLeft, DollarSign, Rocket, Handshake, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SchoolSupportDashboard() {
  const [viewType, setViewType] = useState<"table" | "cards">("table")
  const router = useRouter()
  const startupListings = [
    { id: 1, startup: "Tech Innovators", issue: "Seeking Seed Funding", category: "Funding", status: "Open", priority: "High", date: "2024-09-01", description: "Tech Innovators is looking for seed funding to develop their AI-powered product." },
    { id: 2, startup: "Eco Solutions", issue: "Hiring Full Stack Developer", category: "Hiring", status: "In Progress", priority: "Medium", date: "2024-09-02", description: "Eco Solutions is looking to hire a full stack developer for their eco-friendly tech platform." },
    { id: 3, startup: "Green Energy", issue: "Partnership Opportunities", category: "Partnership", status: "Closed", priority: "Low", date: "2024-09-03", description: "Green Energy is exploring partnership opportunities to expand their sustainable energy solutions." },
    { id: 4, startup: "HealthTech Co.", issue: "Launching New Product", category: "Launch", status: "Open", priority: "High", date: "2024-09-04", description: "HealthTech Co. is preparing to launch their new wearable health monitoring device." },
    { id: 5, startup: "EduFuture", issue: "Seeking Series A Funding", category: "Funding", status: "In Progress", priority: "Medium", date: "2024-09-05", description: "EduFuture is seeking Series A funding to scale their online education platform."}
    ]
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Student Support Dashboard</h1>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
  <Card className="bg-white dark:bg-gray-800">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Startups Seeking Funding</CardTitle>
      <DollarSign className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">42</div>
      <p className="text-xs text-muted-foreground">+20% from last quarter</p>
    </CardContent>
  </Card>
  <Card className="bg-white dark:bg-gray-800">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">New Product Launches</CardTitle>
      <Rocket className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">28</div>
      <p className="text-xs text-muted-foreground">+10% from last quarter</p>
    </CardContent>
  </Card>
  <Card className="bg-white dark:bg-gray-800">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Partnership Opportunities</CardTitle>
      <Handshake className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">15</div>
      <p className="text-xs text-muted-foreground">-5% from last quarter</p>
    </CardContent>
  </Card>
  <Card className="bg-white dark:bg-gray-800">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Hiring Activity</CardTitle>
      <Briefcase className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">35</div>
      <p className="text-xs text-muted-foreground">+12% from last quarter</p>
    </CardContent>
  </Card>
</div>

        <Card className="bg-white dark:bg-gray-800 mb-8">
    <CardHeader>
        <CardTitle>Startup Listing Management</CardTitle>
        <CardDescription>Manage and track startup listings</CardDescription>
    </CardHeader>
    <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
            <Input className="max-w-sm" placeholder="Search startup listings..." />
            <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="funding">Funding</SelectItem>
                <SelectItem value="hiring">Hiring</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="launch">Launch</SelectItem>
            </SelectContent>
            </Select>
            <Button className="w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" /> Search
            </Button>
        </div>
        <div className="flex space-x-2">
            <Button
            variant={viewType === "table" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewType("table")}
            >
            <List className="h-4 w-4" />
            <span className="sr-only">Table view</span>
            </Button>
            <Button
            variant={viewType === "cards" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewType("cards")}
            >
            <LayoutGrid className="h-4 w-4" />
            <span className="sr-only">Card view</span>
            </Button>
        </div>
        </div>
        {viewType === "table" ? (
        <div className="overflow-x-auto">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Startup</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {startupListings.map((listing) => (
                <TableRow key={listing.id}>
                    <TableCell className="font-medium">{listing.id}</TableCell>
                    <TableCell>{listing.startup}</TableCell>
                    <TableCell>{listing.issue}</TableCell>
                    <TableCell>{listing.category}</TableCell>
                    <TableCell>
                    <Badge variant={listing.status === "Open" ? "destructive" : listing.status === "In Progress" ? "default" : "secondary"}>
                        {listing.status}
                    </Badge>
                    </TableCell>
                    <TableCell>{listing.priority}</TableCell>
                    <TableCell>{listing.date}</TableCell>
                    <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                        View
                    </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
        ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startupListings.map((listing) => (
            <Card key={listing.id} className="bg-white dark:bg-gray-800 overflow-hidden">
                <div className="relative h-48 w-full">
                <Image
                    src={`https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg`}
                    alt={`Startup listing for ${listing.startup}`}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white">{listing.startup}</h3>
                    <p className="text-sm text-gray-200">{listing.issue}</p>
                </div>
                </div>
                <CardContent className="pt-4">
                <div className="flex justify-between items-center mb-2">
                    <Badge>{listing.category}</Badge>
                    <Badge variant={listing.status === "Open" ? "destructive" : listing.status === "In Progress" ? "default" : "secondary"}>
                    {listing.status}
                    </Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                    Priority: {listing.priority}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                    Date: {listing.date}
                </div>
                <p className="text-sm line-clamp-2">{listing.description}</p>
                </CardContent>
                <CardFooter>
                <Button onClick= {() => router.push(`/startups/details`)} className="w-full">View Details</Button>
                </CardFooter>
            </Card>
            ))}
        </div>
        )}
    </CardContent>
    </Card>
      </main>
    </div>
  )
}