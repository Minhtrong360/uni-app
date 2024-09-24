// https://v0.dev/chat/fANLPFb6M4Q
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, MessageCircle } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="relative p-0">
          <img
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=100&width=400"
            alt="Cover"
            className="w-full h-24 object-cover"
          />
          <div className="absolute bottom-0 left-4 transform translate-y-1/2 flex items-center">
            <div className="relative">
              <img
                src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=80&width=80"
                alt="Ashley Watson"
                className="w-20 h-20 rounded-full border-4 border-white"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-12">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Ashley Watson</h2>
            <p className="text-sm text-gray-500">HR Advisor, Founder & CEO</p>
            <p className="text-xs text-gray-400 mt-1">1,634 followers</p>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>1289 North Street, San Antonio, TX 78201</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Talks about #managing, #careeradvice, #talentmanagement,
            #businessconsulting, #humancapital
          </p>
          <div className="flex space-x-2 mb-4">
            <Button className="flex-1" variant="outline">
              Following
            </Button>
            <Button className="flex-1">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </Button>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-sm text-gray-600">
              Quis amet magna sint pariatur elit irure quis officia labore esse.
              Proident Lorem sit ullamco minim
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Top skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Managing</Badge>
              <Badge variant="secondary">Search</Badge>
              <Badge variant="secondary">Human Resource</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
