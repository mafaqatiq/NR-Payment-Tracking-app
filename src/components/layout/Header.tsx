
import { BellIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="w-full  px-8 py-6 flex items-center justify-between border-b animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Help & Support
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative" aria-label="Notifications">
            <BellIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
          
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-11">
              <AvatarImage src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Clip-Art-Background.png" alt="User avatar" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Mrs Elena</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
