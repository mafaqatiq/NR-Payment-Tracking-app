
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Calendar, Download, MoreVertical, Search } from 'lucide-react';

const paymentData = [
  {
    id: 1,
    user: "Olivia Declario",
    category: "Business",
    amount: "$263.00",
    date: "Jan 13, 2022",
    email: "Usernodocument123@gmail.com",
    status: "Paid"
  },
  {
    id: 2,
    user: "Jack Paul",
    category: "Family",
    amount: "$263.00",
    date: "Jan 12, 2022",
    email: "Usernodocument123@gmail.com",
    status: "Declined"
  },
  {
    id: 3,
    user: "Mr Aalesandar",
    category: "Business",
    amount: "$263.00",
    date: "Jan 12, 2022",
    email: "Usernodocument123@gmail.com",
    status: "Paid"
  },
  {
    id: 4,
    user: "Arnold Archer",
    category: "Family",
    amount: "$263.00",
    date: "Jan 12, 2022",
    email: "Usernodocument123@gmail.com",
    status: "Paid"
  },
  {
    id: 5,
    user: "Jack Paul",
    category: "Business",
    amount: "$263.00",
    date: "Jan 12, 2022",
    email: "Usernodocument123@gmail.com",
    status: "Declined"
  },
  {
    id: 6,
    user: "Jack Paul",
    category: "Business",
    amount: "$263.00",
    date: "Jan 12, 2022",
    email: "Usernodocument123@gmail.com",
    status: "Declined"
  }
];

const PayStatement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPayments = paymentData.filter(payment => 
    payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout title="Pay Statements" subtitle="Here are the Account details of the payments here">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="bg-white rounded-xl shadow-subtle p-6 animate-fade-in">
          <div className="pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg font-medium">Payment History</h2>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search here..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-9 h-10 w-full sm:w-60"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 h-full"
                >
                  <span className="sr-only">Clear search</span>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    ⌘F
                  </kbd>
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Calendar className="h-4 w-4" />
                  <span className="sr-only">Select date</span>
                </Button>
                <Button variant="outline" className="h-10">
                  <span>Export</span>
                  <Download className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">User Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => (
                  <tr 
                    key={payment.id} 
                    className="border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm">{payment.user}</td>
                    <td className="px-4 py-4 text-sm">
                      <span className={`category-badge ${payment.category.toLowerCase()}`}>
                        {payment.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm">{payment.amount}</td>
                    <td className="px-4 py-4 text-sm">{payment.date}</td>
                    <td className="px-4 py-4 text-sm">{payment.email}</td>
                    <td className="px-4 py-4 text-sm">
                      <span className={`status-badge ${payment.status.toLowerCase()}`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>
            
            <div className="flex items-center gap-2">
              {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                <Button
                  key={index}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={`w-9 h-9 p-0 ${typeof page === 'string' ? 'pointer-events-none' : ''}`}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}>
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PayStatement;
