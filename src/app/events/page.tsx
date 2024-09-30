// https://v0.dev/chat/MAcb32KlLGb
"use client";
import Image from "next/image";
import {
  Menu,
  MoreHorizontal,
  Home,
  Store,
  Calendar,
  HeartHandshake,
  Rocket,
  Plus,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
const eventImage = [
  {
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151927756_5c6578ab3ed356343373be07921c6a7b.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTkyNzc1Nl81YzY1NzhhYjNlZDM1NjM0MzM3M2JlMDc5MjFjNmE3Yi5qcGciLCJpYXQiOjE3MjcyMzc4MDYsImV4cCI6MTc1ODc3MzgwNn0.ahUGsB5znjQqY9Xcq5uUhJ6Wnv8f99i5EOGZ5frwWoo&t=2024-09-25T04%3A16%3A45.796Z",
  },
  {
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151942366_c7dfbb24e5155a800c488d602bfb787b.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTk0MjM2Nl9jN2RmYmIyNGU1MTU1YTgwMGM0ODhkNjAyYmZiNzg3Yi5qcGciLCJpYXQiOjE3MjcyMzgwNjksImV4cCI6MTc1ODc3NDA2OX0.RGX8di6Pe1zJzI0_KU_2GHV2SREkBdgibQaP2ZZJ0sc&t=2024-09-25T04%3A21%3A08.517Z",
  },
  {
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151957064_cc53e4db9f48b6c8d8d24f9263cb0616.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTk1NzA2NF9jYzUzZTRkYjlmNDhiNmM4ZDhkMjRmOTI2M2NiMDYxNi5qcGciLCJpYXQiOjE3MjcyMzgwODIsImV4cCI6MTc1ODc3NDA4Mn0.BjVYn3p-7llsislm7Qpv2xHJhBQppXeeCo6tzf-4jCw&t=2024-09-25T04%3A21%3A21.774Z",
  },
];
export default function Component() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 space-y-6 p-4 md:p-6">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-4 lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Home
                    onClick={() => router.push("/")}
                    className="mr-2 h-4 w-4"
                  />
                  <span>Home</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Store
                    onClick={() => router.push("/store")}
                    className="mr-2 h-4 w-4"
                  />
                  <span>Store</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Calendar
                    onClick={() => router.push("/events")}
                    className="mr-2 h-4 w-4"
                  />
                  <span>Events</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HeartHandshake
                    onClick={() => router.push("/support")}
                    className="mr-2 h-4 w-4"
                  />
                  <span>Student Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Rocket
                    onClick={() => router.push("/academic")}
                    className="mr-2 h-4 w-4"
                  />
                  <span>Startup Projects</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <h2 className="ml-9 text-2xl font-bold sm:ml-0">Featured Events</h2>
            <div className="flex items-center space-x-2">
              <Button onClick={() => router.push(`/events/create`)}>
                <Plus className="mr-2 h-4 w-4" /> New Event
              </Button>
              <Button variant="outline" size="icon">
                <Star
                  onClick={() => router.push("/events/recommended")}
                  className="h-4 w-4"
                />
                <span className="sr-only">Recommend</span>
              </Button>
              {/* <CirclePlus onClick={() => router.push('/events/create')} /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent
                  onClick={() => router.push("/events/booking")}
                  className="p-0"
                >
                  <Image
                    // src={`https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=200&width=400&text=Event+${i}`}
                    // src={`${eventImage}?height=200&width=400`}
                    src={`${eventImage[i - 1].image}`}
                    alt={`Featured Event ${i}`}
                    width={640}
                    height={540}
                    className="max-h-[400px] w-full rounded-t-lg object-cover object-top"
                  />
                  <div className="space-y-2 p-4">
                    <p className="text-sm text-muted-foreground">
                      Student Union
                    </p>
                    <h3 className="font-semibold">
                      Annual University Fair: Explore Your Future
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Tomorrow, 10 AM - 4 PM</span>
                      <Button onClick={() => router.push("/events/booking")}>
                        Booking
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button variant="outline">See all</Button>
          </div>
          <Tabs defaultValue="academic" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex w-full sm:w-auto">
                <TabsTrigger value="academic" className="flex-1 sm:flex-none">
                  Academic
                </TabsTrigger>
                <TabsTrigger value="sports" className="flex-1 sm:flex-none">
                  Sports
                </TabsTrigger>
                <TabsTrigger value="cultural" className="flex-1 sm:flex-none">
                  Cultural
                </TabsTrigger>
                <TabsTrigger value="career" className="flex-1 sm:flex-none">
                  Career
                </TabsTrigger>
              </TabsList>
            </ScrollArea>
            {["academic", "sports", "cultural", "career"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[1, 2].map((i) => (
                    <Card key={i}>
                      <CardContent
                        onClick={() => router.push("/events/booking")}
                        className="flex items-center space-x-4 p-4"
                      >
                        <div className="flex-grow">
                          <p className="text-sm text-muted-foreground">
                            {getCategoryLocation(category)}
                          </p>
                          <h3 className="font-semibold">
                            {getCategoryEvent(category)}
                          </h3>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{getCategoryDate(category)}</span>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                        <Image
                          // src={`https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=80&width=80&text=${category}+${i}`}
                          src={`${getImages(category)[i - 1]}`}
                          alt={`${category} Event ${i}`}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
    </div>
  );
}

function getCategoryLocation(category: string) {
  switch (category) {
    case "academic":
      return "Science Building";
    case "sports":
      return "Sports Complex";
    case "cultural":
      return "Auditorium";
    case "career":
      return "Career Center";
    default:
      return "Campus";
  }
}

function getCategoryEvent(category: string) {
  switch (category) {
    case "academic":
      return "Guest Lecture: Advancements in AI";
    case "sports":
      return "Inter-University Basketball Tournament";
    case "cultural":
      return "Annual Cultural Festival: Harmony";
    case "career":
      return "Tech Industry Job Fair";
    default:
      return "Campus Event";
  }
}

function getCategoryDate(category: string) {
  switch (category) {
    case "academic":
      return "Sep 15, 2:00 PM";
    case "sports":
      return "Sep 18-20, All Day";
    case "cultural":
      return "Sep 25-27, 6:00 PM";
    case "career":
      return "Sep 30, 10:00 AM - 4:00 PM";
    default:
      return "Upcoming";
  }
}

function getImages(category: string) {
  switch (category) {
    case "academic":
      return [
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/home/AdobeStock_473119551-vert-scaled.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ob21lL0Fkb2JlU3RvY2tfNDczMTE5NTUxLXZlcnQtc2NhbGVkLmpwZyIsImlhdCI6MTcyNzIzNjYxOSwiZXhwIjoxNzU4NzcyNjE5fQ.t4Oek9DO9O5lsu8lFXiLjfb30-_XAyNmJ90q03uVLKE&t=2024-09-25T03%3A56%3A59.082Z",
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151927756_5c6578ab3ed356343373be07921c6a7b.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTkyNzc1Nl81YzY1NzhhYjNlZDM1NjM0MzM3M2JlMDc5MjFjNmE3Yi5qcGciLCJpYXQiOjE3MjcyMzkwODEsImV4cCI6MTc1ODc3NTA4MX0.y6-OeS5Vtv5f_JnaI_RiR3mqPnEBU-jXgyPGjIOi1mA&t=2024-09-25T04%3A38%3A00.909Z",
      ];
    case "sports":
      return [
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151970462_be5d1faffb53da034f2f51da2ae5b4e0.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTk3MDQ2Ml9iZTVkMWZhZmZiNTNkYTAzNGYyZjUxZGEyYWU1YjRlMC5qcGciLCJpYXQiOjE3MjcyMzc3ODgsImV4cCI6MjA0MjU5Nzc4OH0.Dr0ZqBeoRsR21KoBJ2vGGQBHT_UrCr_as9FVq4bT7E0",
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151984769_141ed137042a3b13301ff8f6bbd40c04.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTk4NDc2OV8xNDFlZDEzNzA0MmEzYjEzMzAxZmY4ZjZiYmQ0MGMwNC5qcGciLCJpYXQiOjE3MjcyMzc3OTIsImV4cCI6MjA0MjU5Nzc5Mn0.VuGFLQQDh8gpdbsNNEqJExPApynmqyuNLeXDtdeWqTg",
      ];
    case "cultural":
      return [
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151957064_cc53e4db9f48b6c8d8d24f9263cb0616.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTk1NzA2NF9jYzUzZTRkYjlmNDhiNmM4ZDhkMjRmOTI2M2NiMDYxNi5qcGciLCJpYXQiOjE3MjcyMzk2OTAsImV4cCI6MTc1ODc3NTY5MH0.D2om2OEqisgVVqUR4id5vbGoD8c6FX_L61NNpvpXzR0&t=2024-09-25T04%3A48%3A09.900Z",
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151942366_c7dfbb24e5155a800c488d602bfb787b.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTk0MjM2Nl9jN2RmYmIyNGU1MTU1YTgwMGM0ODhkNjAyYmZiNzg3Yi5qcGciLCJpYXQiOjE3MjcyNDAwNDUsImV4cCI6MTc1ODc3NjA0NX0.cRFGavGAQYA2ApStDMVZCS4S5gBDNv0NOVrkDWCkjSo&t=2024-09-25T04%3A54%3A04.861Z",
      ];
    case "career":
      return [
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/home/AdobeStock_473119551-vert-scaled.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ob21lL0Fkb2JlU3RvY2tfNDczMTE5NTUxLXZlcnQtc2NhbGVkLmpwZyIsImlhdCI6MTcyNzIzNjYxOSwiZXhwIjoxNzU4NzcyNjE5fQ.t4Oek9DO9O5lsu8lFXiLjfb30-_XAyNmJ90q03uVLKE&t=2024-09-25T03%3A56%3A59.082Z",
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/event/z5865151927756_5c6578ab3ed356343373be07921c6a7b.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ldmVudC96NTg2NTE1MTkyNzc1Nl81YzY1NzhhYjNlZDM1NjM0MzM3M2JlMDc5MjFjNmE3Yi5qcGciLCJpYXQiOjE3MjcyMzkwODEsImV4cCI6MTc1ODc3NTA4MX0.y6-OeS5Vtv5f_JnaI_RiR3mqPnEBU-jXgyPGjIOi1mA&t=2024-09-25T04%3A38%3A00.909Z",
      ];
    default:
      return [
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/home/AdobeStock_473119551-vert-scaled.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9ob21lL0Fkb2JlU3RvY2tfNDczMTE5NTUxLXZlcnQtc2NhbGVkLmpwZyIsImlhdCI6MTcyNzIzNjYxOSwiZXhwIjoxNzU4NzcyNjE5fQ.t4Oek9DO9O5lsu8lFXiLjfb30-_XAyNmJ90q03uVLKE&t=2024-09-25T03%3A56%3A59.082Z",
        "https://www.juicer.io/api/posts/485231740/images.jpg?external_id=C_ioAKvxWQ4&s=d5996e1c6f96011d8dd43f0d4bfa93c71d42fab6",
      ];
  }
}
