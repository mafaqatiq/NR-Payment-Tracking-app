
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Calendar, Download, MoreVertical, FileText, Search } from 'lucide-react';

const requestsData = [
  {
    id: 1,
    document: "#id-2364",
    documentName: "Bill of Sale-document.pdf",
    user: "Olivia Declario",
    category: "Business",
    amount: "$263.00",
    date: "Jan 13, 2022",
    status: "Completed"
  },
  {
    id: 2,
    document: "#id-2364",
    documentName: "Bill of Sale-document.pdf",
    user: "Jack Paul",
    category: "Family",
    amount: "$263.00",
    date: "Jan 12, 2022",
    status: "Completed"
  },
  {
    id: 3,
    document: "#id-2364",
    documentName: "Bill of Sale-document.pdf",
    user: "Mr Aalesandar",
    category: "Business",
    amount: "$263.00",
    date: "Jan 12, 2022",
    status: "Completed"
  },
  {
    id: 4,
    document: "#id-2364",
    documentName: "Bill of Sale-document.pdf",
    user: "Arnold Archer",
    category: "Family",
    amount: "$263.00",
    date: "Jan 12, 2022",
    status: "Completed"
  },
  {
    id: 5,
    document: "#id-2364",
    documentName: "Bill of Sale-document.pdf",
    user: "Jack Paul",
    category: "Business",
    amount: "$263.00",
    date: "Jan 12, 2022",
    status: "Completed"
  },
  {
    id: 6,
    document: "#id-2364",
    documentName: "Bill of Sale-document.pdf",
    user: "Jack Paul",
    category: "Business",
    amount: "$263.00",
    date: "Jan 12, 2022",
    status: "Completed"
  }
];

const Requests = () => {
  const [activeTab, setActiveTab] = useState('completed');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredRequests = requestsData.filter(request => 
    request.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.document.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout title="Requests" subtitle="Here are the Account details ">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="bg-white rounded-xl shadow-subtle p-6 animate-fade-in">
          <div className="pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg font-medium">Requests Details</h2>
            
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
          
          <div className="flex border-b mb-4">
            <button 
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'available' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('available')}
            >
              Available Requests
            </button>
            <button 
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'pending' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('pending')}
            >
              Available Requests
            </button>
            <button 
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'completed' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('completed')}
            >
              Completed Requests
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Document</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">User Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr 
                    key={request.id} 
                    className="border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                          <FileText className="h-5 w-5 text-brand-blue" />
                        </div>
                        <div>
                          <div className="font-medium">{request.document}</div>
                          <div className="text-muted-foreground text-xs">{request.documentName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm">{request.user}</td>
                    <td className="px-4 py-4 text-sm">
                      <span className={`category-badge ${request.category.toLowerCase()}`}>
                        {request.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm">{request.amount}</td>
                    <td className="px-4 py-4 text-sm">{request.date}</td>
                    <td className="px-4 py-4 text-sm">
                      <span className="text-green-500">{request.status}</span>
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

export default Requests;
