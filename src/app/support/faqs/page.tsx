// https://v0.dev/chat/P3G0LxKuI8d
'use client'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Book, GraduationCap, Building, Users, HelpCircle, MessageCircle, X, Send } from 'lucide-react'

const faqCategories = [
  {
    title: "Academic Support",
    icon: <GraduationCap className="h-5 w-5" />,
    faqs: [
      { question: "How do I register for classes?", answer: "Log into the student portal, navigate to course registration, and follow the prompts to select your classes." },
      { question: "What is the process for dropping a class?", answer: "You can drop a class through the student portal within the first two weeks of the semester without penalty." },
    ]
  },
  {
    title: "Financial Aid",
    icon: <Building className="h-5 w-5" />,
    faqs: [
      { question: "How do I apply for financial aid?", answer: "Complete the FAFSA form online and submit any additional required documents to the financial aid office." },
      { question: "When are tuition payments due?", answer: "Tuition payments are typically due at the beginning of each semester. Check the academic calendar for specific dates." },
    ]
  },
  {
    title: "Student Life",
    icon: <Users className="h-5 w-5" />,
    faqs: [
      { question: "How can I join student organizations?", answer: "Attend the student activities fair at the beginning of each semester or check the student portal for a list of organizations and contact information." },
      { question: "What mental health resources are available?", answer: "The university offers free counseling services to all students. You can schedule an appointment through the health center." },
    ]
  },
]

const officialDocuments = [
  { title: "Student Handbook", url: "#student-handbook" },
  { title: "Academic Calendar", url: "#academic-calendar" },
  { title: "Code of Conduct", url: "#code-of-conduct" },
  { title: "Financial Aid Guide", url: "#financial-aid-guide" },
]

export default function StudentSupportFAQs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "user" }])
      setInputMessage('')
      // Simulate bot response (replace with actual AI integration)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. How else can I help you?", sender: "bot" }])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Student Support FAQs</h1>
        
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {filteredCategories.map((category, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                {category.icon}
                <span className="ml-2">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-foreground">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Book className="h-5 w-5" />
              <span className="ml-2">Official Documents</span>
            </CardTitle>
            <CardDescription>Access important university documents and resources</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {officialDocuments.map((doc, index) => (
                <li key={index}>
                  <a
                    href={doc.url}
                    className="text-primary hover:underline flex items-center"
                  >
                    <HelpCircle className="h-4 w-4 mr-2" />
                    {doc.title}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Chatbot Icon */}
      <Button
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 p-0 shadow-lg"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Interface */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-background rounded-lg shadow-xl flex flex-col">
          <div className="p-4 bg-primary text-primary-foreground rounded-t-lg flex justify-between items-center">
            <h2 className="font-bold">Chat with AI Support</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-2 rounded-lg ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-border">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 mr-2"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}