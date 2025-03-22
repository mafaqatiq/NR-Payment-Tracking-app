
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Calendar, Download, Star, Users, Activity } from 'lucide-react';

const performanceData = [
  { month: 'Jan', value: 2.4 },
  { month: 'Feb', value: 2.8 },
  { month: 'Mar', value: 2.3 },
  { month: 'Apr', value: 3.9 },
  { month: 'May', value: 2.5 },
  { month: 'Jun', value: 2.7 },
  { month: 'Jul', value: 1.8 },
  { month: 'Aug', value: 2.6 },
  { month: 'Sep', value: 3.0 },
  { month: 'Oct', value: 2.5 },
  { month: 'Nov', value: 2.8 },
  { month: 'Dec', value: 2.7 },
];

const PerformanceReports = () => {
  return (
    <MainLayout title="Performance Reports" subtitle="Here are the Performance Reports of the platform">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
          <div className="bg-white rounded-xl p-6 shadow-subtle flex items-start justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Total Users</div>
              <div className="text-3xl font-semibold">40,689</div>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                    clipRule="evenodd"
                  />
                </svg>
                8.5% Up from yesterday
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-subtle flex items-start justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Active Users</div>
              <div className="text-3xl font-semibold">40,689</div>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                    clipRule="evenodd"
                  />
                </svg>
                8.5% Up from yesterday
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-amber-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-subtle flex items-start justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Performance</div>
              <div className="text-3xl font-semibold">4.0/5</div>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                    clipRule="evenodd"
                  />
                </svg>
                8.5% Up from yesterday
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <Activity className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-subtle p-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-lg font-medium flex items-center gap-2">
                Performance
                <div className="flex items-center text-amber-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1 font-bold text-lg">4.5</span>
                </div>
              </h2>
              <div className="text-sm text-red-500 mt-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                    clipRule="evenodd"
                  />
                </svg>
                8.5% Up from Last Month
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Today</span>
              </Button>
              <Button variant="default" size="sm" className="h-9 bg-brand-blue hover:bg-brand-blue/90">
                <Download className="h-4 w-4 mr-2" />
                <span>Export</span>
              </Button>
            </div>
          </div>
          
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0E2F5A" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0E2F5A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                  domain={[0, 5]}
                  ticks={[0, 1, 2, 3, 4, 5]}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip 
                  formatter={(value) => [`${value}`, 'Rating']}
                  contentStyle={{ 
                    borderRadius: '6px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: 'none',
                    padding: '8px 12px',
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0E2F5A" 
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  dot={{ r: 3, fill: '#0E2F5A', strokeWidth: 2, stroke: '#fff' }}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PerformanceReports;
