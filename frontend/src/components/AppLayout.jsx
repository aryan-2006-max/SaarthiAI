import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { BottomNav } from './BottomNav';
import { Sidebar } from './Sidebar';
import { CommuteAgentAlert } from './CommuteAgentAlert';

export const AppLayout = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-slate-900 transition-colors relative">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 overflow-hidden">
        <div className="md:hidden"><Navbar /></div>
        <main className="flex-1 overflow-y-auto pb-24 md:pb-8 relative bg-white dark:bg-slate-900 transition-colors">
          <div className="max-w-5xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
        <BottomNav />
      </div>
      {/* AI Commute Agent 2-Hour Disruption & Weather Pop-up */}
      <CommuteAgentAlert />
    </div>
  );
};
