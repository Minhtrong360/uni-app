/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  MoreHorizontal,
  Plus,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  X,
} from "lucide-react";
import Image from "next/image";

interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  dueDate: string;
  completedDate?: string;
  completed: boolean;
  tags: string[];
  fileType: "document" | "image";
  image?: string;
}

interface Section {
  id: string;
  title: string;
  tasks: Task[];
}

export default function GroupTaskManagement() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: "section1",
      title: "Market Research",
      tasks: [
        {
          id: "task1",
          title: "Conduct customer surveys",
          description: "Design and distribute customer satisfaction surveys",
          assignee: "Alice",
          dueDate: "2023-09-30",
          completedDate: "2023-09-28",
          completed: true,
          tags: ["survey", "customer feedback"],
          fileType: "document",
          image:
            "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/tasks/audit-graphics.png?t=2024-09-26T04%3A39%3A08.036Z.jpg",
        },
        {
          id: "task2",
          title: "Analyze competitor strategies",
          description: "Research and document competitor marketing strategies",
          assignee: "Bob",
          dueDate: "2023-10-15",
          completed: false,
          tags: ["competition", "analysis"],
          fileType: "document",
          image:
            "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/tasks/Screenshot%202024-09-26%20114915.png",
        },
      ],
    },
    {
      id: "section2",
      title: "Financials",
      tasks: [
        {
          id: "task3",
          title: "Prepare Q3 financial report",
          description: "Compile and analyze Q3 financial data",
          assignee: "Charlie",
          dueDate: "2023-10-05",
          completedDate: "2023-10-03",
          completed: true,
          tags: ["finance", "quarterly report"],
          fileType: "document",
          image:
            "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/tasks/Screenshot%202024-09-26%20121036.png",
        },
      ],
    },
    {
      id: "section3",
      title: "Marketing",
      tasks: [
        {
          id: "task4",
          title: "Design new product brochure",
          description:
            "Create visually appealing brochure for new product line",
          assignee: "David",
          dueDate: "2023-09-20",
          completedDate: "2023-09-18",
          completed: true,
          tags: ["design", "brochure"],
          fileType: "image",
          image:
            "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/tasks/Screenshot%202024-09-26%20121057.png",
        },
      ],
    },
  ]);

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isAddingGroup, setIsAddingGroup] = useState(false);
  const [newTask, setNewTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
    completed: false,
    tags: [],
    fileType: "document",
    image:
      "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/tasks/audit-graphics.png?t=2024-09-26T04%3A39%3A08.036Z.jpg",
  });
  const [newGroup, setNewGroup] = useState({ title: "" });
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [addingTaskToSection, setAddingTaskToSection] = useState<string | null>(
    null,
  );
  const [removingGroupId, setRemovingGroupId] = useState<string | null>(null);

  const handleAddTask = (sectionId: string) => {
    if (newTask.title && newTask.assignee) {
      const updatedSections = sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            tasks: [...section.tasks, { ...newTask, id: `task${Date.now()}` }],
          };
        }
        return section;
      });
      setSections(updatedSections);
      setNewTask({
        id: "",
        title: "",
        description: "",
        assignee: "",
        dueDate: "",
        completed: false,
        tags: [],
        fileType: "document",
        image:
          "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/tasks/audit-graphics.png?t=2024-09-26T04%3A39%3A08.036Z.jpg",
      });
      setIsAddingTask(false);
      setAddingTaskToSection(null);
    }
  };

  const handleAddGroup = () => {
    if (newGroup.title) {
      setSections([
        ...sections,
        { id: `section${Date.now()}`, title: newGroup.title, tasks: [] },
      ]);
      setNewGroup({ title: "" });
      setIsAddingGroup(false);
    }
  };

  const handleRemoveGroup = (groupId: string) => {
    setSections(sections.filter((section) => section.id !== groupId));
    setRemovingGroupId(null);
  };

  const handleTaskCompletion = (sectionId: string, taskId: string) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        const updatedTasks = section.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: !task.completed,
              completedDate: !task.completed
                ? new Date().toISOString().split("T")[0]
                : undefined,
            };
          }
          return task;
        });
        return { ...section, tasks: updatedTasks };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceSection = sections.find(
      (section) => section.id === source.droppableId,
    );
    const destSection = sections.find(
      (section) => section.id === destination.droppableId,
    );

    if (sourceSection && destSection) {
      const sourceTasks = Array.from(sourceSection.tasks);
      const destTasks = Array.from(destSection.tasks);
      const [removed] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, removed);

      const newSections = sections.map((section) => {
        if (section.id === sourceSection.id) {
          return { ...section, tasks: sourceTasks };
        }
        if (section.id === destSection.id) {
          return { ...section, tasks: destTasks };
        }
        return section;
      });

      setSections(newSections);
    }
  };

  const completedTasks = useMemo(() => {
    return sections
      .flatMap((section) => section.tasks)
      .filter(
        (task) =>
          task.completed &&
          (!selectedMember || task.assignee === selectedMember),
      )
      .sort(
        (a, b) =>
          new Date(b.completedDate!).getTime() -
          new Date(a.completedDate!).getTime(),
      );
  }, [sections, selectedMember]);

  const members = useMemo(() => {
    return Array.from(
      new Set(
        sections.flatMap((section) =>
          section.tasks.map((task) => task.assignee),
        ),
      ),
    );
  }, [sections]);

  return (
    <div className="container mx-auto p-4">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Project X Task Management</h1>
        <Dialog open={isAddingGroup} onOpenChange={setIsAddingGroup}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Table
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Table</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Label htmlFor="groupTitle" className="text-left">
                Title
              </Label>
              <Input
                id="groupTitle"
                value={newGroup.title}
                onChange={(e) => setNewGroup({ title: e.target.value })}
              />
            </div>
            <Button onClick={handleAddGroup}>Add Table</Button>
          </DialogContent>
        </Dialog>
      </header>

      <Tabs defaultValue="board" className="mb-6">
        <TabsList>
          <TabsTrigger value="board">Board</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>
        <TabsContent value="board">
          <DragDropContext onDragEnd={onDragEnd}>
            <ScrollArea className="h-[calc(100vh-200px)] w-full">
              <div
                className="flex space-x-4 pb-4"
                style={{ minWidth: "max-content" }}
              >
                {sections.map((section) => (
                  <Droppable key={section.id} droppableId={section.id}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex h-full w-80 flex-shrink-0 flex-col rounded-lg bg-muted p-4"
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <h2 className="text-xl font-semibold">
                            {section.title}
                          </h2>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setRemovingGroupId(section.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <ScrollArea className="mb-4 flex-grow">
                          <div className="space-y-4">
                            {section.tasks.map((task, index) => (
                              <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="rounded-md bg-background bg-white p-4 shadow-sm"
                                  >
                                    <div className="mb-2 flex items-center justify-between">
                                      <div className="flex items-center space-x-2">
                                        <Checkbox
                                          checked={task.completed}
                                          onCheckedChange={() =>
                                            handleTaskCompletion(
                                              section.id,
                                              task.id,
                                            )
                                          }
                                        />
                                        <span
                                          className={
                                            task.completed ? "line-through" : ""
                                          }
                                        >
                                          {task.title}
                                        </span>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        {task.fileType === "document" ? (
                                          <FileText className="h-4 w-4" />
                                        ) : (
                                          <ImageIcon className="h-4 w-4" />
                                        )}
                                        <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                            <Button
                                              variant="ghost"
                                              className="h-8 w-8 p-0"
                                            >
                                              <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>
                                              Actions
                                            </DropdownMenuLabel>
                                            <DropdownMenuItem>
                                              Edit Task
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                              Change Assignee
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-red-600">
                                              Delete Task
                                            </DropdownMenuItem>
                                          </DropdownMenuContent>
                                        </DropdownMenu>
                                      </div>
                                    </div>
                                    {task.image && (
                                      <Image
                                        width={1056}
                                        height={264}
                                        src={task.image}
                                        alt={task.title}
                                        className="mb-2 h-32 w-full rounded-md object-cover"
                                      />
                                    )}
                                    <div className="mb-2 flex flex-wrap gap-2">
                                      {task.tags.map((tag, index) => (
                                        <Badge key={index} variant="secondary">
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                      <div className="flex items-center space-x-2">
                                        <Avatar className="h-6 w-6">
                                          <AvatarImage
                                            src={`https://avatar.vercel.sh/${task.assignee}`}
                                          />
                                          <AvatarFallback>
                                            {task.assignee[0]}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span>{task.assignee}</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{task.dueDate}</span>
                                      </div>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      className="mt-2 w-full"
                                      onClick={() => setSelectedTask(task)}
                                    >
                                      View Details
                                    </Button>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        </ScrollArea>
                        <Dialog
                          open={
                            isAddingTask && addingTaskToSection === section.id
                          }
                          onOpenChange={(open) => {
                            setIsAddingTask(open);
                            if (!open) setAddingTaskToSection(null);
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button
                              className="w-full"
                              onClick={() => setAddingTaskToSection(section.id)}
                            >
                              <Plus className="mr-2 h-4 w-4" /> Add Task
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add New Task</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                  Title
                                </Label>
                                <Input
                                  id="title"
                                  value={newTask.title}
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      title: e.target.value,
                                    })
                                  }
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label
                                  htmlFor="description"
                                  className="text-right"
                                >
                                  Description
                                </Label>
                                <Textarea
                                  id="description"
                                  value={newTask.description}
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      description: e.target.value,
                                    })
                                  }
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label
                                  htmlFor="assignee"
                                  className="text-right"
                                >
                                  Assignee
                                </Label>
                                <Input
                                  id="assignee"
                                  value={newTask.assignee}
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      assignee: e.target.value,
                                    })
                                  }
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="dueDate" className="text-right">
                                  Due Date
                                </Label>
                                <Input
                                  id="dueDate"
                                  type="date"
                                  value={newTask.dueDate}
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      dueDate: e.target.value,
                                    })
                                  }
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="tags" className="text-right">
                                  Tags
                                </Label>
                                <Input
                                  id="tags"
                                  value={newTask.tags.join(", ")}
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      tags: e.target.value
                                        .split(",")
                                        .map((tag) => tag.trim()),
                                    })
                                  }
                                  placeholder="Enter tags separated by commas"
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label
                                  htmlFor="fileType"
                                  className="text-right"
                                >
                                  File Type
                                </Label>
                                <select
                                  id="fileType"
                                  value={newTask.fileType}
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      fileType: e.target.value as
                                        | "document"
                                        | "image",
                                    })
                                  }
                                  className="col-span-3"
                                >
                                  <option value="document">Document</option>
                                  <option value="image">Image</option>
                                </select>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="image" className="text-right">
                                  Image
                                </Label>
                                <Input
                                  id="image"
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onloadend = () => {
                                        setNewTask({
                                          ...newTask,
                                          image: reader.result as string,
                                        });
                                      };
                                      reader.readAsDataURL(file);
                                    }
                                  }}
                                  className="col-span-3"
                                />
                              </div>
                            </div>
                            <Button onClick={() => handleAddTask(section.id)}>
                              Add Task
                            </Button>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </ScrollArea>
          </DragDropContext>
        </TabsContent>
        <TabsContent value="timeline">
          <div className="mb-6">
            <Select
              value={selectedMember || ""}
              onValueChange={(value) => setSelectedMember(value || null)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by member" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All members">All members</SelectItem>
                {members.map((member) => (
                  <SelectItem key={member} value={member}>
                    {member}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="max-w-3xl space-y-8">
            {completedTasks.map((task, index) => (
              <div key={task.id} className="relative">
                {index !== completedTasks.length - 1 && (
                  <div className="absolute bottom-0 left-6 top-10 w-0.5 bg-gray-200" />
                )}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="relative">
                      <Avatar className="h-12 w-12 border-4 border-background">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${task.assignee}`}
                        />
                        <AvatarFallback>{task.assignee[0]}</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 rounded-full bg-green-500 p-1">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 flex-grow rounded-lg bg-card p-6 shadow-md transition-all hover:shadow-lg">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{task.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {task.completedDate}
                      </Badge>
                    </div>
                    {task.image && (
                      <Image
                        width={1056}
                        height={264}
                        src={task.image}
                        alt={task.title}
                        className="mb-4 h-32 w-full rounded-md object-cover"
                      />
                    )}
                    <p className="mb-4 text-muted-foreground">
                      {task.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {task.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Due: {task.dueDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {task.fileType === "document" ? (
                          <FileText className="h-4 w-4" />
                        ) : (
                          <ImageIcon className="h-4 w-4" />
                        )}
                        <span>{task.fileType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedTask} onOpenChange={() => setSelectedTask(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedTask?.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedTask?.image && (
              <Image
                width={1056}
                height={264}
                src={selectedTask.image}
                alt={selectedTask.title}
                className="h-48 w-full rounded-md object-cover"
              />
            )}
            <div>
              <h3 className="font-semibold">Description</h3>
              <p>{selectedTask?.description}</p>
            </div>
            <div>
              <h3 className="font-semibold">Assignee</h3>
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${selectedTask?.assignee}`}
                  />
                  <AvatarFallback>{selectedTask?.assignee[0]}</AvatarFallback>
                </Avatar>
                <span>{selectedTask?.assignee}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Due Date</h3>
              <p>{selectedTask?.dueDate}</p>
            </div>
            <div>
              <h3 className="font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {selectedTask?.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">File Type</h3>
              <p className="flex items-center">
                {selectedTask?.fileType === "document" ? (
                  <>
                    <FileText className="mr-2 h-4 w-4" /> Document
                  </>
                ) : (
                  <>
                    <ImageIcon className="mr-2 h-4 w-4" /> Image
                  </>
                )}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Status</h3>
              <p>{selectedTask?.completed ? "Completed" : "In Progress"}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!removingGroupId}
        onOpenChange={(open) => !open && setRemovingGroupId(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Group</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to remove this group?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRemovingGroupId(null)}>
              No
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                removingGroupId && handleRemoveGroup(removingGroupId)
              }
            >
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
