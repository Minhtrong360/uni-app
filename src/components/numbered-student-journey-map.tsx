"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Send,
  FileText,
  CheckCircle,
  Users,
  UserCheck,
  MessageCircle,
  Star,
  ThumbsUp,
  Hammer,
} from "lucide-react";

const steps = [
  { icon: AlertCircle, text: "Student Identifies a Problem" },
  { icon: Send, text: "Student Reports the Issue" },
  { icon: FileText, text: "Issue Logged by Administration" },
  { icon: CheckCircle, text: "Acknowledgment Sent to Student" },
  { icon: Users, text: "Department Reviews the Issue" },
  { icon: UserCheck, text: "Assign to Responsible Staff" },
  { icon: Hammer, text: "Resolution Actions Taken" },
  { icon: MessageCircle, text: "Report Progress to Student" },
  { icon: Star, text: "Issue Resolved" },
  { icon: ThumbsUp, text: "Feedback and Close Case" },
];

export function NumberedStudentJourneyMap() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-4xl bg-card rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-foreground text-center mb-8">
          Student Issue Resolution Journey
        </h1>
        <div className="flex flex-wrap justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center m-2 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 relative">
                <span className="text-white font-bold">{index + 1}</span>
                <step.icon className="w-6 h-6 text-white absolute opacity-25" />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-muted-foreground max-w-[100px]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Hover over each step to learn more
          </p>
        </div>
      </div>
    </div>
  );
}
