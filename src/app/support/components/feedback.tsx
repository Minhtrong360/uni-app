import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  Clock,
  UserCheck,
  MessageSquare,
} from "lucide-react";

export default function StudentFeedback() {
  const [overallRating, setOverallRating] = useState<number>(3);
  const [responseTime, setResponseTime] = useState<number>(3);
  const [staffKnowledge, setStaffKnowledge] = useState<number>(3);
  const [problemResolution, setProblemResolution] = useState<number>(3);

  const emojis = ["😠", "🙁", "😐", "🙂", "😄"];
  const explanations = [
    "Not satisfied",
    "Slightly satisfied",
    "Moderately satisfied",
    "Very satisfied",
    "Extremely satisfied",
  ];

  // Type definitions for the StarRating component props
  interface StarRatingProps {
    value: number;
    onChange: (rating: number) => void;
    name: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const StarRating = ({ value, onChange, name }: StarRatingProps) => (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <Button
            key={rating}
            variant={rating <= value ? "default" : "outline"}
            size="icon"
            onClick={() => onChange(rating)}
          >
            <Star className={rating <= value ? "fill-primary" : "fill-none"} />
          </Button>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-2xl">{emojis[value - 1]}</span>
        <span className="text-sm text-muted-foreground">
          {explanations[value - 1]}
        </span>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Student Support Center Feedback
          </CardTitle>
          <CardDescription>
            Your feedback is valuable to us. Please take a moment to rate your
            experience with the ticket you issued.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="ticket-id">Ticket ID</Label>
            <Input id="ticket-id" placeholder="Enter your ticket ID" />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center space-x-2">
              <span>Overall Satisfaction</span>
              <Star className="h-4 w-4" />
            </Label>
            <StarRating
              value={overallRating}
              onChange={setOverallRating}
              name="overall"
            />
          </div>

          <div className="space-y-4">
            <Label className="flex items-center space-x-2">
              <span>Response Time</span>
              <Clock className="h-4 w-4" />
            </Label>
            <StarRating
              value={responseTime}
              onChange={setResponseTime}
              name="response-time"
            />
          </div>

          <div className="space-y-4">
            <Label className="flex items-center space-x-2">
              <span>Staff Knowledge and Professionalism</span>
              <UserCheck className="h-4 w-4" />
            </Label>
            <StarRating
              value={staffKnowledge}
              onChange={setStaffKnowledge}
              name="staff-knowledge"
            />
          </div>

          <div className="space-y-4">
            <Label className="flex items-center space-x-2">
              <span>Problem Resolution</span>
              <MessageSquare className="h-4 w-4" />
            </Label>
            <StarRating
              value={problemResolution}
              onChange={setProblemResolution}
              name="problem-resolution"
            />
          </div>

          <div className="space-y-2">
            <Label>Was your issue resolved?</Label>
            <RadioGroup defaultValue="yes">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="issue-resolved-yes" />
                <Label htmlFor="issue-resolved-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="partially"
                  id="issue-resolved-partially"
                />
                <Label htmlFor="issue-resolved-partially">Partially</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="issue-resolved-no" />
                <Label htmlFor="issue-resolved-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="support-channel">Support Channel Used</Label>
            <Select>
              <SelectTrigger id="support-channel">
                <SelectValue placeholder="Select the support channel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="chat">Live Chat</SelectItem>
                <SelectItem value="in-person">In-Person</SelectItem>
                <SelectItem value="video">Video Call</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Would you recommend our support center to others?</Label>
            <div className="flex space-x-4">
              <Button variant="outline" className="w-full">
                <ThumbsUp className="mr-2 h-4 w-4" /> Yes
              </Button>
              <Button variant="outline" className="w-full">
                <ThumbsDown className="mr-2 h-4 w-4" /> No
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="staff-name">
              Name of staff member who assisted you (if known)
            </Label>
            <Input id="staff-name" placeholder="Enter staff member's name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="positive-feedback">What did we do well?</Label>
            <Textarea
              id="positive-feedback"
              placeholder="Please share any positive aspects of your experience"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="improvement-feedback">How can we improve?</Label>
            <Textarea
              id="improvement-feedback"
              placeholder="Please share any suggestions for improvement"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-comments">Additional Comments</Label>
            <Textarea
              id="additional-comments"
              placeholder="Any other thoughts or feedback you'd like to share"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit Feedback</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
