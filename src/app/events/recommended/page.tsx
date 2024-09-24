"use client"
// https://v0.dev/chat/QzgE90RGPCA
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Modal } from "antd"
import Feedback from "../components/Feedback"

const recommendedEvents = [
  {
    id: 1,
    title: "AI and Machine Learning Workshop",
    category: "Technology",
    date: "2024-03-15",
    time: "14:00 - 17:00",
    location: "Virtual",
    attendees: 50,
    description: "Learn about the latest advancements in AI and machine learning in this interactive workshop."
  },
  {
    id: 2,
    title: "Career Fair: Tech Industry",
    category: "Career",
    date: "2024-03-20",
    time: "10:00 - 16:00",
    location: "University Main Hall",
    attendees: 200,
    description: "Connect with top tech companies and explore internship and job opportunities."
  },
  {
    id: 3,
    title: "Hackathon: Solve for Good",
    category: "Technology",
    date: "2024-04-01",
    time: "09:00 - 21:00",
    location: "Innovation Center",
    attendees: 100,
    description: "Join a 12-hour hackathon to develop solutions for social good using technology."
  }
]

export default function Component() {
  const [savedEvents, setSavedEvents] = useState<number[]>([])

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true); 
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleSaveEvent = (eventId: number) => {
    setSavedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    )
  }

//   const handleFeedback = (eventId: number) => {
//     console.log(`Provide feedback for event ${eventId}`)
//     // Here you would typically open a modal or navigate to a feedback page
//   }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Recommended Events</CardTitle>
        <CardDescription>Based on your preferences, we think you will love these events!</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          {recommendedEvents.map(event => (
            <Card key={event.id} className="mb-4">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </div>
                  <Badge>{event.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
              </CardContent>
              <CardFooter>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => toggleSaveEvent(event.id)}
                    variant={savedEvents.includes(event.id) ? "secondary" : "default"}
                  >
                    {savedEvents.includes(event.id) ? "Unsave Event" : "Save Event"}
                  </Button>
                  <Button
                    onClick={showModal}
                    variant="outline"
                  >
                    Feedback
                  </Button>
                  
                </div>
              </CardFooter>
            </Card>
          ))}
        </ScrollArea>
        <Modal
                    title="Feedback Form"
                    open={isModalVisible}
                    onCancel={handleCancel}
                    footer={null} 
                    >   
                    <Feedback />
                </Modal>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Events are recommended based on your preferences. Update your preferences to see different events.
        </p>
      </CardFooter>
    </Card>
  )
}