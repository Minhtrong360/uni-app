// https://v0.dev/chat/2g-W7bCeDmV
"use client";
import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { useRouter } from "next/navigation";

export default function OrderHistory() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-1">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
            <Package className="w-6 h-6" />
            <span className="sr-only">Student Store</span>
          </Link>
        </nav>
      </header> */}
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => router.push("/store")}
            size="icon"
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-lg font-semibold md:text-2xl">Order History</h1>
        </div>
        <div className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Narrow down your order history</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Order Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                  <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Input placeholder="Min Price" type="number" />
                <span>-</span>
                <Input placeholder="Max Price" type="number" />
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  className="pl-8"
                  placeholder="Search orders"
                  type="search"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#12345</TableCell>
                  <TableCell>2023-06-10</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Delivered
                    </span>
                  </TableCell>
                  <TableCell>$120.50</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#12344</TableCell>
                  <TableCell>2023-06-05</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Processing
                    </span>
                  </TableCell>
                  <TableCell>$75.00</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#12343</TableCell>
                  <TableCell>2023-05-28</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      Shipped
                    </span>
                  </TableCell>
                  <TableCell>$250.00</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          <div className="flex items-center justify-end space-x-2">
            <Button size="sm" variant="outline">
              Previous
            </Button>
            <Button size="sm" variant="outline">
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
