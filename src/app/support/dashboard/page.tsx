import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

async function getTickets() {
  // Fetch tickets from your API
  return [
    { id: 1, title: "Login Issue", status: "Open" },
    { id: 2, title: "Course Registration Problem", status: "In Progress" },
    { id: 3, title: "Library Access", status: "Closed" },
  ]
}

export default async function SupportDashboard() {
  const tickets = await getTickets()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Support Dashboard</h1>
      <Link href="/support/create-ticket">
        <Button>Create New Ticket</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {tickets.map((ticket) => (
          <Card key={ticket.id}>
            <CardHeader>
              <CardTitle>{ticket.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Status: {ticket.status}</p>
              <Link href={`/support/ticket/${ticket.id}`}>
                <Button variant="outline" className="mt-2">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}