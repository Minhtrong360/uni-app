"use client";
// https://v0.dev/chat/W1aPvdprydA
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { StarIcon } from "lucide-react";

const aspects = [
  { name: "Content Quality", id: "content" },
  { name: "Speaker/Presenter", id: "speaker" },
  { name: "Organization", id: "organization" },
  { name: "Venue/Platform", id: "venue" },
  { name: "Overall Experience", id: "overall" },
];

export default function Feedback() {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (aspect: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [aspect]: rating }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Thank You for Your Feedback!</CardTitle>
          <CardDescription>
            Your detailed feedback has been successfully submitted and will help
            us improve future events.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Event Feedback</CardTitle>
        <CardDescription>
          We value your detailed feedback to enhance our future events.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Your email"
                type="email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="event">Event Name</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select the event you attended" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="workshop">
                  Professional Development Workshop
                </SelectItem>
                <SelectItem value="seminar">Academic Seminar Series</SelectItem>
                <SelectItem value="conference">
                  Annual Student Conference
                </SelectItem>
                <SelectItem value="career-fair">Career Fair</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Event Date</Label>
            <Input id="date" type="date" required />
          </div>
          <div className="space-y-4">
            <Label>Event Ratings</Label>
            {aspects.map((aspect) => (
              <div
                key={aspect.id}
                className="flex items-center justify-between"
              >
                <span>{aspect.name}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`w-6 h-6 cursor-pointer ${
                        star <= (ratings[aspect.id] || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => handleRating(aspect.id, star)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Label htmlFor="highlights">Event Highlights</Label>
            <Textarea
              id="highlights"
              placeholder="What aspects of the event did you find most valuable?"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="improvements">Suggested Improvements</Label>
            <Textarea
              id="improvements"
              placeholder="How could we enhance this event in the future?"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="topics">Future Topics of Interest</Label>
            <Textarea
              id="topics"
              placeholder="What topics would you like to see covered in future events?"
            />
          </div>
          <div className="space-y-2">
            <Label>Would you recommend this event to others?</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select your recommendation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="highly-recommend">
                  Highly Recommend
                </SelectItem>
                <SelectItem value="recommend">Recommend</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="not-recommend">
                  Would Not Recommend
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
