
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface MainLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export const MainLayout = ({ children, title, subtitle }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[230px]">
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="animate-slide-up">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
