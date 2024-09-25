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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl rounded-xl bg-card p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold text-foreground">
          Student Issue Resolution Journey
        </h1>
        <div className="flex flex-wrap justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="m-2 flex cursor-pointer flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                <span className="font-bold text-white">{index + 1}</span>
                <step.icon className="absolute h-6 w-6 text-white opacity-25" />
              </div>
              <p className="mt-2 max-w-[100px] text-center text-xs font-medium text-muted-foreground">
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
