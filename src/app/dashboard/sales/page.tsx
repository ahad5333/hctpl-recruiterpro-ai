"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Calendar, Users, TrendingUp,
  Settings, Play, Pause, RotateCcw,
  BarChart3, MessageSquare, Clock,
  ArrowLeft, Zap, Target, CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function SalesAgentPage() {
  const [isActive, setIsActive] = useState(false);

  const stats = [
    { label: "Calls Made Today", value: "47", icon: Phone, color: "text-brand-blue" },
    { label: "Interviews Scheduled", value: "12", icon: Calendar, color: "text-brand-green" },
    { label: "Conversion Rate", value: "25.5%", icon: TrendingUp, color: "text-green-600" },
    { label: "Active Campaigns", value: "3", icon: Target, color: "text-purple-600" }
  ];

  const recentCalls = [
    { name: "Sarah Johnson", company: "TechCorp", status: "scheduled", time: "2 hours ago" },
    { name: "Mike Chen", company: "StartupXYZ", status: "completed", time: "4 hours ago" },
    { name: "Lisa Rodriguez", company: "DevAgency", status: "no-answer", time: "6 hours ago" },
    { name: "David Kim", company: "InnovateLabs", status: "interested", time: "8 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600">
              <ArrowLeft size={24} />
            </Link>
            <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white">
              <Phone size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">AI Sales Agent</h1>
              <p className="text-slate-600">Automated outbound sales calls and interview scheduling.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`btn-primary flex items-center gap-2 ${isActive ? "bg-red-600 hover:bg-red-700" : ""}`}
            >
              {isActive ? <Pause size={20} /> : <Play size={20} />}
              {isActive ? "Stop Agent" : "Start Agent"}
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Settings size={20} />
              Configure
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <RotateCcw size={20} />
              Reset Stats
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
                <stat.icon size={24} className={stat.color} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Calls</h3>
            <div className="space-y-4">
              {recentCalls.map((call, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                      {call.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{call.name}</p>
                      <p className="text-sm text-slate-600">{call.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      call.status === 'scheduled' ? 'bg-green-100 text-green-700' :
                      call.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                      call.status === 'interested' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      <CheckCircle size={12} />
                      {call.status}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{call.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Agent Status</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Status</span>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-400'}`} />
                  {isActive ? 'Active' : 'Inactive'}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Current Task</span>
                <span className="text-slate-900 font-medium">{isActive ? 'Making outbound calls' : 'Waiting for activation'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Next Call</span>
                <span className="text-slate-900 font-medium">Sarah Johnson - TechCorp</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Queue Length</span>
                <span className="text-slate-900 font-medium">23 candidates</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Today's Progress</span>
                <span>47/100 calls</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '47%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Active Campaigns</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Senior Developer Outreach", target: "50 candidates", progress: 68 },
              { name: "Tech Lead Pipeline", target: "30 candidates", progress: 42 },
              { name: "Full Stack Developer Hunt", target: "75 candidates", progress: 89 }
            ].map((campaign, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-2">{campaign.name}</h4>
                <p className="text-sm text-slate-600 mb-3">{campaign.target}</p>
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-brand-green h-2 rounded-full" style={{ width: `${campaign.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
