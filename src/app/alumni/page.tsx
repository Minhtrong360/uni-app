// https://v0.dev/chat/fANLPFb6M4Q
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="relative p-0">
          <Image
            height={100}
            width={400}
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=100&width=400"
            alt="Cover"
            className="h-24 w-full object-cover"
          />
          <div className="absolute bottom-0 left-4 flex translate-y-1/2 transform items-center">
            <div className="relative">
              <Image
                width={80}
                height={80}
                src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=80&width=80"
                alt="Ashley Watson"
                className="h-20 w-20 rounded-full border-4 border-white"
              />
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-12">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Ashley Watson</h2>
            <p className="text-sm text-gray-500">HR Advisor, Founder & CEO</p>
            <p className="mt-1 text-xs text-gray-400">1,634 followers</p>
          </div>
          <div className="mb-4 flex items-center text-sm text-gray-500">
            <MapPin className="mr-1 h-4 w-4" />
            <span>1289 North Street, San Antonio, TX 78201</span>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            Talks about #managing, #careeradvice, #talentmanagement,
            #businessconsulting, #humancapital
          </p>
          <div className="mb-4 flex space-x-2">
            <Button className="flex-1" variant="outline">
              Following
            </Button>
            <Button className="flex-1">
              <MessageCircle className="mr-2 h-4 w-4" />
              Message
            </Button>
          </div>
          <div className="mb-4">
            <h3 className="mb-2 font-semibold">About</h3>
            <p className="text-sm text-gray-600">
              Quis amet magna sint pariatur elit irure quis officia labore esse.
              Proident Lorem sit ullamco minim
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Top skills</h3>
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
