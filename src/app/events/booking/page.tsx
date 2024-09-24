"use client";
// https://v0.dev/chat/MAcb32KlLGb
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { message } from "antd";
export default function StudentEventBooking() {
  const router = useRouter();
  const handleBooking = () => {
    message.success("Booking successful");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    dietaryRequirements: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Booking submitted", formData);
  };

  // Mock event data
  const eventData = {
    name: "Annual University Fair: Explore Your Future",
    description:
      "Join us for an exciting opportunity to explore various academic programs, meet faculty members, and learn about career prospects in different fields.",
    date: new Date(2023, 8, 15),
    startTime: "10:00 AM",
    endTime: "4:00 PM",
    location: "University Main Campus",
    organizer: "Student Affairs Office",
    maxAttendees: 500,
    currentAttendees: 350,
    tags: ["Career", "Education", "Networking"],
    imageUrl:
      "https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=300&width=500&text=University+Fair",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-7xl mx-auto  sm:px-0  py-4 flex items-center">
          <Button
            onClick={() => router.push("/events")}
            size="icon"
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="sr-only">Back</span>
          </Button>
          {/* <ChevronLeft onClick={() => router.push('/events')} className="h-6 w-6 text-gray-500 mr-4 cursor-pointer" /> */}
          <h1 className="text-2xl font-semibold text-gray-900 ml-2">
            Event Booking
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-48 md:h-64">
              <Image
                src={eventData.imageUrl}
                alt={eventData.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{eventData.name}</h2>
                <p className="text-gray-600 mt-2">{eventData.description}</p>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span>{format(eventData.date, "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-500" />
                <span>
                  {eventData.startTime} - {eventData.endTime}
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                <span>{eventData.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-gray-500" />
                <span>
                  {eventData.currentAttendees} / {eventData.maxAttendees}{" "}
                  attendees
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {eventData.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Organized by: {eventData.organizer}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Book Your Spot</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="studentId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Student ID
                  </label>
                  <Input
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your student ID"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dietaryRequirements"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Dietary Requirements (Optional)
                  </label>
                  <Textarea
                    id="dietaryRequirements"
                    name="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={handleInputChange}
                    placeholder="Enter any dietary requirements or restrictions"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  onClick={handleBooking}
                >
                  Book Event
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
