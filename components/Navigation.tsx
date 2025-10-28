'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-xl font-semibold text-slate-900">PulseFlow Fitness Studio</span>
        </div>
      </div>
      
      <div className="hidden md:block">
        <div className="ml-10 flex items-center space-x-8">
          <a href="#home" className="text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
            Home
          </a>
          <a href="#services" className="text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
            Contact
          </a>
          <a href="#join" className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
            Join Now
          </a>
        </div>
      </div>
      
      <div className="md:hidden">
        <button className="text-slate-700 hover:text-slate-900 p-2">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}