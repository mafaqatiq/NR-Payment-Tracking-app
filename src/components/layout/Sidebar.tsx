
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  Settings, 
  CreditCard, 
  HelpCircle, 
  BarChart, 
  LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  {
    name: 'Requests',
    path: '/requests',
    icon: FileText,
  },
  {
    name: 'Account Settings',
    path: '/account-settings',
    icon: Settings,
  },
  {
    name: 'Pay Statement',
    path: '/pay-statement',
    icon: CreditCard,
  },
  {
    name: 'FAQs',
    path: '/faqs',
    icon: HelpCircle,
  },
  {
    name: 'Performance Reports',
    path: '/performance-reports',
    icon: BarChart,
  },
];

export const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className="fixed top-0 left-0 h-screen w-[240px] flex flex-col z-10 overflow-hidden">
      {/* Logo section with dark blue background */}
      <div className="bg-[#002855] pt-8 pb-10 flex justify-center">
        <div className="text-white font-bold flex flex-col items-center">
          <span className="text-5xl font-light">N</span>
          <span className="text-xs mt-1">N R</span>
        </div>
      </div>
      
      {/* Navigation section with light background */}
      <nav className="flex-1 bg-[#F1F0FB] overflow-y-auto py-4 px-3 rounded-tl-2xl rounded-tr-2xl -mt-4">
        <ul className="space-y-1 pt-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-[#1A3A6A] text-white font-medium"
                    : "text-[#1A3A6A] hover:bg-[#1A3A6A]/10"
                )}
              >
                <item.icon size={18} className="shrink-0" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Logout button with orange background */}
      <div className="px-3 pb-4 bg-[#F1F0FB]">
        <button 
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FF5833] text-white rounded-md hover:bg-[#E04B2A] transition-colors"
          aria-label="Logout"
        >
          <LogOut size={18} className="shrink-0" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
