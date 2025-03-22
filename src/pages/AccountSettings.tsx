
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { ChevronRight, Upload } from 'lucide-react';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: 'Noam Lash',
    email: 'Nodocument123@gmail.com',
    phone: '+9726613138',
    practice: 'General',
    enable2FA: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData({
      ...formData,
      enable2FA: checked,
    });
  };

  return (
    <MainLayout title="Account Settings" subtitle="Here are the Account details ">
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <div className="relative rounded-md shadow-sm">
              <Input 
                type="text" 
                placeholder="Search" 
                className="pl-10 h-11 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-subtle">
              <div className="p-6">
                <h2 className="text-lg font-medium">Update Profile</h2>
                <p className="text-sm text-muted-foreground mt-1">You can set profile preferences here</p>
              </div>
              <div className="px-6 pb-4">
                <Button variant="ghost" className="w-full justify-between group">
                  <span>Open Settings</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-subtle">
              <div className="p-6">
                <h2 className="text-lg font-medium">Security Settings</h2>
                <p className="text-sm text-muted-foreground mt-1">You can set security preferences here related to passwords</p>
              </div>
              <div className="px-6 pb-4">
                <Button variant="ghost" className="w-full justify-between group">
                  <span>Open Settings</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-white rounded-xl p-6 shadow-subtle">
              <div className="flex items-center gap-6 mb-6">
                <div className="flex-shrink-0">
                  <Upload className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-medium">Upload Profile</h3>
                  <p className="text-sm text-muted-foreground">Allowed Formats: jpg, png, jpeg</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name} 
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone No.</label>
                  <div className="flex">
                    <div className="flex-shrink-0 inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                      <span className="flex items-center">
                        <img src="https://flagcdn.com/w20/il.png" alt="Israel flag" className="h-4 mr-2" />
                      </span>
                    </div>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="practice" className="block text-sm font-medium mb-1">Practice</label>
                  <Input 
                    id="practice" 
                    name="practice"
                    value={formData.practice} 
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="enable2fa"
                      checked={formData.enable2FA}
                      onCheckedChange={handleSwitchChange}
                    />
                    <label
                      htmlFor="enable2fa"
                      className="text-sm font-medium leading-none cursor-pointer"
                    >
                      Enable 2FA
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 transition-colors">
                  Save & Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AccountSettings;
