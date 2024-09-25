"use client";

import { useState } from "react";
import {
  Plus,
  Trash2,
  Users,
  Clock,
  Calendar as CalendarIconSolid,
  AlertTriangle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Booking = {
  id: number;
  venue: string;
  event: string;
  organizer: string;
  date: string;
  startTime: string;
  endTime: string;
  capacity: number;
  status: "Confirmed" | "Pending" | "Cancelled";
};

const initialBookings: Booking[] = [
  {
    id: 1,
    venue: "Room 101",
    event: "CS101 Lecture",
    organizer: "Prof. Smith",
    date: "2023-09-24",
    startTime: "10:00",
    endTime: "11:30",
    capacity: 50,
    status: "Confirmed",
  },
  {
    id: 2,
    venue: "Grand Hall",
    event: "Annual Science Fair",
    organizer: "Science Department",
    date: "2023-09-25",
    startTime: "09:00",
    endTime: "17:00",
    capacity: 500,
    status: "Confirmed",
  },
  {
    id: 3,
    venue: "Room 205",
    event: "Math Club Meeting",
    organizer: "John Doe",
    date: "2023-09-26",
    startTime: "15:00",
    endTime: "16:00",
    capacity: 30,
    status: "Pending",
  },
  {
    id: 4,
    venue: "Auditorium",
    event: "Guest Lecture",
    organizer: "Jane Smith",
    date: "2023-09-27",
    startTime: "14:00",
    endTime: "16:00",
    capacity: 200,
    status: "Confirmed",
  },
  {
    id: 5,
    venue: "Room 303",
    event: "Study Group",
    organizer: "Alice Johnson",
    date: "2023-09-28",
    startTime: "18:00",
    endTime: "20:00",
    capacity: 20,
    status: "Cancelled",
  },
];

export function DetailedVenueBooking() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVenue, setFilterVenue] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<keyof Booking | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredBookings = bookings
    .filter(
      (booking) =>
        (searchTerm === "" ||
          booking.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.organizer.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterVenue === null || booking.venue === filterVenue),
    )
    .sort((a, b) => {
      if (sortBy === null) return 0;
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  const handleAddBooking = (newBooking: Omit<Booking, "id">) => {
    const id = Math.max(...bookings.map((b) => b.id)) + 1;
    setBookings([...bookings, { ...newBooking, id }]);
    setIsDialogOpen(false);
  };

  const handleDeleteBooking = (id: number) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const handleSort = (column: keyof Booking) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(
    (b) => b.status === "Confirmed",
  ).length;
  const pendingBookings = bookings.filter((b) => b.status === "Pending").length;
  const cancelledBookings = bookings.filter(
    (b) => b.status === "Cancelled",
  ).length;
  const totalCapacity = bookings.reduce((sum, b) => sum + b.capacity, 0);
  const averageBookingDuration =
    bookings.reduce((sum, b) => {
      const start = new Date(`2000-01-01T${b.startTime}:00`);
      const end = new Date(`2000-01-01T${b.endTime}:00`);
      return sum + (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    }, 0) / bookings.length;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Venue Booking Management</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Booking
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Add New Booking</DialogTitle>
              <DialogDescription>
                Enter the details for the new venue booking here.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleAddBooking({
                  venue: formData.get("venue") as string,
                  event: formData.get("event") as string,
                  organizer: formData.get("organizer") as string,
                  date: formData.get("date") as string,
                  startTime: formData.get("startTime") as string,
                  endTime: formData.get("endTime") as string,
                  capacity: Number(formData.get("capacity")),
                  status: "Pending",
                });
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="venue" className="text-right">
                    Venue
                  </Label>
                  <Select name="venue" required>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select venue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Room 101">Room 101</SelectItem>
                      <SelectItem value="Room 205">Room 205</SelectItem>
                      <SelectItem value="Grand Hall">Grand Hall</SelectItem>
                      <SelectItem value="Auditorium">Auditorium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="event" className="text-right">
                    Event
                  </Label>
                  <Input
                    id="event"
                    name="event"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="organizer" className="text-right">
                    Organizer
                  </Label>
                  <Input
                    id="organizer"
                    name="organizer"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="startTime" className="text-right">
                    Start Time
                  </Label>
                  <Input
                    id="startTime"
                    name="startTime"
                    type="time"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="endTime" className="text-right">
                    End Time
                  </Label>
                  <Input
                    id="endTime"
                    name="endTime"
                    type="time"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="capacity" className="text-right">
                    Capacity
                  </Label>
                  <Input
                    id="capacity"
                    name="capacity"
                    type="number"
                    className="col-span-3"
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save booking</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Bookings
            </CardTitle>
            <CalendarIconSolid className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBookings}</div>
            <p className="text-xs text-muted-foreground">
              +{confirmedBookings} confirmed this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Booking Status
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {confirmedBookings}/{pendingBookings}/{cancelledBookings}
            </div>
            <p className="text-xs text-muted-foreground">
              Confirmed/Pending/Cancelled
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Capacity
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCapacity}</div>
            <p className="text-xs text-muted-foreground">Across all bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Booking Duration
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {averageBookingDuration.toFixed(2)} hrs
            </div>
            <p className="text-xs text-muted-foreground">Per booking</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="w-full flex-1 md:w-auto">
          <Input
            placeholder="Search events or organizers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex space-x-2">
          <Select
            value={filterVenue || ""}
            onValueChange={(value) => setFilterVenue(value || null)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Venue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Venues</SelectItem>
              <SelectItem value="Room 101">Room 101</SelectItem>
              <SelectItem value="Room 205">Room 205</SelectItem>
              <SelectItem value="Grand Hall">Grand Hall</SelectItem>
              <SelectItem value="Auditorium">Auditorium</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setFilterVenue(null);
              setSortBy(null);
              setSortOrder("asc");
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bookings</CardTitle>
          <CardDescription>Manage all venue bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <Button variant="ghost" onClick={() => handleSort("venue")}>
                    Venue{" "}
                    {sortBy === "venue" && (sortOrder === "asc" ? "↑" : "↓")}
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => handleSort("event")}>
                    Event{" "}
                    {sortBy === "event" && (sortOrder === "asc" ? "↑" : "↓")}
                  </Button>
                </TableHead>
                <TableHead>Organizer</TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => handleSort("date")}>
                    Date{" "}
                    {sortBy === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                  </Button>
                </TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.venue}</TableCell>
                  <TableCell>{booking.event}</TableCell>
                  <TableCell>{booking.organizer}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{`${booking.startTime} - ${booking.endTime}`}</TableCell>
                  <TableCell>{booking.capacity}</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteBooking(booking.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
