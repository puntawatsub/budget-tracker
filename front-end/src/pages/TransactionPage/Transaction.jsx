import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {Calendar} from "@/components/ui/calendar";

//mock data for now
const transactions = [
  { date: "31 Dec 2020", merchant: "Bulk", category: "Grocery", amount: "-€23.00" },
  { date: "30 Dec 2020", merchant: "Happiness Market Center", category: "Grocery", amount: "-€45.00" },
  { date: "17 Dec 2020", merchant: "income", category: "income", amount: "+€3,000.00" },
  { date: "11 Dec 2020", merchant: "Lattes", category: "Coffee", amount: "-€12.00" },
  { date: "10 Dec 2020", merchant: "Child Welfare", category: "Charity", amount: "-€100.00" },
  { date: "09 Dec 2020", merchant: "Electricity Bill", category: "Utility", amount: "-€120.00" },
  { date: "08 Dec 2020", merchant: "FDD Electricals", category: "Health", amount: "-€80.00" },
  { date: "04 Dec 2020", merchant: "Freelancing Project", category: "income", amount: "+€1,200.00" },
];

function Transaction() {
    const [date, setDate] = React.useState(); 

  return (
    <div className="space-y-6 p-6">
      {/* Header Card */}

      {/* Filters */}
      <div className="flex gap-4">
        <Input placeholder="Search..." />
        
        {/* Add Transaction Dialog */}
        <Dialog>
            <DialogTrigger asChild>
            <Button>Add Transaction</Button>
            </DialogTrigger>

            <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Transaction</DialogTitle>
                <DialogDescription>Fill in the details below</DialogDescription>
            </DialogHeader>
            <Input placeholder="Transaction Name" />
            <Input placeholder="Amount" />
            <Select>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="grocery">Grocery</SelectItem>
                <SelectItem value = "rent">Rent</SelectItem>
                <SelectItem value="income">income</SelectItem>
                </SelectContent>
            </Select>

        
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                captionLayout="dropdown"
                showOutsideDays
                className="rounded-lg border"
            />
            

            <DialogFooter>
                <Button>Add</Button>
                <Button >Cancel</Button>
            </DialogFooter>
            </DialogContent>

        </Dialog>
        <Button>Download CSV</Button>
      </div>

      {/* Transaction Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx, index) => (
            <TableRow key={index}>
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.merchant}</TableCell>
              <TableCell><Badge>{tx.category}</Badge></TableCell>
              <TableCell>{tx.amount}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">⋮</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem> 
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    </div>
  );
}

export default Transaction;