"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, X, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function AdminEventCreationComponent() {
  const [eventDate, setEventDate] = useState<Date>();
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventCategory: "",
    location: "",
    organizer: "",
    maxAttendees: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted", { ...formData, eventDate, tags });
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentTag.trim() !== "") {
      e.preventDefault();
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-bold">Create University Event</h1>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="eventName"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Event Name
                    </label>
                    <Input
                      id="eventName"
                      name="eventName"
                      placeholder="Enter event name"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eventDescription"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Event Description
                    </label>
                    <Textarea
                      id="eventDescription"
                      name="eventDescription"
                      placeholder="Describe the event"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eventCategory"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Event Category
                    </label>
                    <Select
                      name="eventCategory"
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          eventCategory: value,
                        }))
                      }
                    >
                      <SelectTrigger id="eventCategory">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="cultural">Cultural</SelectItem>
                        <SelectItem value="career">Career</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="eventDate"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Event Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !eventDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {eventDate ? (
                            format(eventDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={eventDate}
                          onSelect={setEventDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="startTime"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Start Time
                      </label>
                      <Input
                        id="startTime"
                        name="startTime"
                        type="time"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="endTime"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        End Time
                      </label>
                      <Input
                        id="endTime"
                        name="endTime"
                        type="time"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Enter event location"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organizer"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Organizer
                    </label>
                    <Input
                      id="organizer"
                      name="organizer"
                      placeholder="Enter organizer name"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="maxAttendees"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Maximum Attendees
                    </label>
                    <Input
                      id="maxAttendees"
                      name="maxAttendees"
                      type="number"
                      min="1"
                      placeholder="Enter maximum number of attendees"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eventImage"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Event Image
                    </label>
                    <Input
                      id="eventImage"
                      type="file"
                      accept="image/*"
                      className="cursor-pointer"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eventTags"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Event Tags
                    </label>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="px-2 py-1 text-sm"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1 text-gray-500 hover:text-gray-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <Input
                      id="eventTags"
                      placeholder="Add tags and press Enter"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={handleAddTag}
                    />
                  </div>

                  <div>
                    <Button type="submit" className="w-full">
                      Create Event
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="w-full lg:w-1/2">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  width={400}
                  height={200}
                  src="/placeholder.svg?height=200&width=400"
                  alt="Event preview"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="mb-2 text-2xl font-bold">
                  {formData.eventName || "Event Name"}
                </h2>
                <p className="mb-4 text-gray-600">
                  {formData.eventDescription ||
                    "Event description will appear here. Provide a brief overview of your event to attract attendees."}
                </p>
                <div className="mb-4 flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <span>
                    {eventDate
                      ? format(eventDate, "MMMM d, yyyy")
                      : "Date not set"}
                  </span>
                </div>
                <div className="mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-gray-500" />
                  <span>
                    {formData.startTime && formData.endTime
                      ? `${formData.startTime} - ${formData.endTime}`
                      : "Time not set"}
                  </span>
                </div>
                <div className="mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{formData.location || "Location not set"}</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {tags.length > 0 ? (
                    tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))
                  ) : (
                    <Badge variant="secondary" className="text-xs">
                      No tags added
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Organized by: {formData.organizer || "TBA"}
                  </span>
                  <Badge variant="outline">
                    {formData.maxAttendees
                      ? `${formData.maxAttendees} attendees max`
                      : "Attendees limit not set"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
