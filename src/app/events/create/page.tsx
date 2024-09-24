// https://v0.dev/chat/tPXRRIu2jmV
'use client'


import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, X, Clock, ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent} from "@/components/ui/card"
import { useRouter } from 'next/navigation'

export default function AdminEventCreation() {
  const router = useRouter()
  const [eventDate, setEventDate] = useState<Date>()
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState('')
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    eventCategory: '',
    location: '',
    organizer: '',
    maxAttendees: '',
    startTime: '',
    endTime: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted', { ...formData, eventDate, tags })
  }

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim() !== '') {
      e.preventDefault()
      setTags([...tags, currentTag.trim()])
      setCurrentTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleBookVenue = () => {
    router.push('/events/bookvenue')
    console.log('Book Venue clicked')
    // Implement venue booking logic here
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
     
        <div className="max-w-7xl mx-auto  sm:px-0  py-4 flex items-center">
      <Button
          onClick={() => router.push('/events')}
          size="icon" variant="outline">
            <ArrowLeft className="w-4 h-4" />
            <span className="sr-only">Back</span>
          </Button>
          {/* <ChevronLeft onClick={() => router.push('/events')} className="h-6 w-6 text-gray-500 mr-4 cursor-pointer" /> */}
          <h1 className="text-2xl font-semibold text-gray-900 ml-2">Create University Event</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Name
                    </label>
                    <Input id="eventName" name="eventName" placeholder="Enter event name" required onChange={handleInputChange} />
                  </div>

                  <div>
                    <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Description
                    </label>
                    <Textarea id="eventDescription" name="eventDescription" placeholder="Describe the event" required onChange={handleInputChange} />
                  </div>

                  <div>
                    <label htmlFor="eventCategory" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Category
                    </label>
                    <Select name="eventCategory" onValueChange={(value) => setFormData(prev => ({ ...prev, eventCategory: value }))}>
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
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !eventDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {eventDate ? format(eventDate, "PPP") : <span>Pick a date</span>}
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
                      <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Start Time
                      </label>
                      <Input id="startTime" name="startTime" type="time" required onChange={handleInputChange} />
                    </div>
                    <div>
                      <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                        End Time
                      </label>
                      <Input id="endTime" name="endTime" type="time" required onChange={handleInputChange} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <div className="flex space-x-2">
                      <Input id="location" name="location" placeholder="Enter event location" required onChange={handleInputChange} className="flex-grow" />
                      <Button
                    
                      type="button" onClick={handleBookVenue}>Book Venue</Button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organizer" className="block text-sm font-medium text-gray-700 mb-1">
                      Organizer
                    </label>
                    <Input id="organizer" name="organizer" placeholder="Enter organizer name" required onChange={handleInputChange} />
                  </div>

                  <div>
                    <label htmlFor="maxAttendees" className="block text-sm font-medium text-gray-700 mb-1">
                      Maximum Attendees
                    </label>
                    <Input id="maxAttendees" name="maxAttendees" type="number" min="1" placeholder="Enter maximum number of attendees" required onChange={handleInputChange} />
                  </div>

                  <div>
                    <label htmlFor="eventImage" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Image
                    </label>
                    <Input id="eventImage" type="file" accept="image/*" className="cursor-pointer" />
                  </div>

                  <div>
                    <label htmlFor="eventTags" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Tags
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1 px-2">
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
                    <Button type="submit" className="w-full">Create Event</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="w-full lg:w-1/2">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=200&width=400"
                  alt="Event preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">{formData.eventName || 'Event Name'}</h2>
                <p className="text-gray-600 mb-4">{formData.eventDescription || 'Event description will appear here. Provide a brief overview of your event to attract attendees.'}</p>
                <div className="flex items-center mb-4">
                  <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{eventDate ? format(eventDate, "MMMM d, yyyy") : 'Date not set'}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{formData.startTime && formData.endTime ? `${formData.startTime} - ${formData.endTime}` : 'Time not set'}</span>
                </div>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{formData.location || 'Location not set'}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.length > 0 ? tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  )) : (
                    <Badge variant="secondary" className="text-xs">No tags added</Badge>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Organized by: {formData.organizer || 'TBA'}</span>
                  <Badge variant="outline">{formData.maxAttendees ? `${formData.maxAttendees} attendees max` : 'Attendees limit not set'}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}