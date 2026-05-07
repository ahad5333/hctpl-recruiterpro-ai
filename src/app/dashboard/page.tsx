'use client';

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { LayoutDashboard, Users, UserCheck, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const agents = [
    {
      title: "Sales/Scheduling Agent",
      description: "Manage outreach and interview scheduling automatically.",
      icon: <PhoneCall className="w-6 h-6" />,
      href: "/dashboard/sales",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "AI Recruiter Agent",
      description: "Source and screen candidates with intelligent matching.",
      icon: <Users className="w-6 h-6" />,
      href: "/dashboard/recruiter",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Technical Interviewer",
      description: "Conduct automated technical assessments and interviews.",
      icon: <UserCheck className="w-6 h-6" />,
      href: "/dashboard/interviewer",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-coral-500" />
            RecruitPro Dashboard
          </h1>
          <p className="mt-2 text-gray-600">Select an AI agent to manage your recruitment workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <Link 
              key={index} 
              href={agent.href}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className={`${agent.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {agent.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{agent.title}</h2>
              <p className="text-gray-600 text-sm">{agent.description}</p>
              <div className="mt-6 flex items-center text-coral-600 font-medium text-sm">
                Open Agent Dashboard →
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
