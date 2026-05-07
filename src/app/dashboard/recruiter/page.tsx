"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Users, TrendingUp, Target,
  Settings, Play, Pause, RotateCcw,
  BarChart3, Globe, Clock, CheckCircle,
  ArrowLeft, Zap, Filter, MapPin
} from "lucide-react";
import Link from "next/link";

export default function RecruiterAgentPage() {
  const [isActive, setIsActive] = useState(false);

  const stats = [
    { label: "Candidates Found", value: "1,247", icon: Users, color: "text-brand-green" },
    { label: "Profiles Analyzed", value: "3,892", icon: Search, color: "text-brand-blue" },
    { label: "Match Rate", value: "68%", icon: Target, color: "text-green-600" },
    { label: "Active Searches", value: "12", icon: TrendingUp, color: "text-purple-600" }
  ];

  const recentMatches = [
    { name: "Alex Thompson", role: "Senior React Developer", score: 94, source: "LinkedIn", time: "1 hour ago" },
    { name: "Maria Garcia", role: "Full Stack Engineer", score: 89, source: "GitHub", time: "3 hours ago" },
    { name: "James Wilson", role: "DevOps Engineer", score: 87, source: "Indeed", time: "5 hours ago" },
    { name: "Sarah Chen", role: "Frontend Developer", score: 91, source: "Stack Overflow", time: "7 hours ago" }
  ];

  const activeSearches = [
    { role: "Senior Python Developer", candidates: 45, progress: 78 },
    { role: "React Native Developer", candidates: 32, progress: 65 },
    { role: "Machine Learning Engineer", candidates: 28, progress: 42 },
    { role: "DevOps Specialist", candidates: 51, progress: 89 }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600">
              <ArrowLeft size={24} />
            </Link>
            <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-white">
              <Search size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">AI Recruiter</h1>
              <p className="text-slate-600">Intelligent candidate sourcing across multiple platforms</p>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`btn-primary flex items-center gap-2 ${isActive ? "bg-red-600 hover:bg-red-700" : ""}`}
            >
              {isActive ? <Pause size={20} /> : <Play size={20} />}
              {isActive ? "Stop Agent" : "Start Agent"}
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Settings size={20} />
              Configure Sources
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Filter size={20} />
              Set Criteria
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
                <stat.icon size={24} className={stat.color} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* RECENT MATCHES */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Matches</h3>
            <div className="space-y-4">
              {recentMatches.map((match, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-semibold">
                      {match.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{match.name}</p>
                      <p className="text-sm text-slate-600">{match.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Globe size={12} className="text-slate-400" />
                        <span className="text-xs text-slate-500">{match.source}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-brand-green">{match.score}%</div>
                    <p className="text-xs text-slate-500">{match.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AGENT STATUS */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Agent Status</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Status</span>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  {isActive ? 'Active' : 'Inactive'}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">Current Task</span>
                <span className="text-slate-900 font-medium">
                  {isActive ? 'Scanning LinkedIn profiles' : 'Waiting for activation'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">Sources Active</span>
                <span className="text-slate-900 font-medium">5 platforms</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">Queue Size</span>
                <span className="text-slate-900 font-medium">1,247 profiles</span>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Today's Progress</span>
                <span>892/1200 profiles</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-brand-green h-2 rounded-full" style={{ width: '74%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVE SEARCHES */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Active Searches</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {activeSearches.map((search, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-slate-900">{search.role}</h4>
                  <span className="text-sm text-slate-600">{search.candidates} candidates</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>Progress</span>
                  <span>{search.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-brand-blue h-2 rounded-full" style={{ width: `${search.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOURCE PLATFORMS */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Source Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "LinkedIn", active: true, candidates: 456 },
              { name: "GitHub", active: true, candidates: 234 },
              { name: "Indeed", active: true, candidates: 321 },
              { name: "Stack Overflow", active: false, candidates: 0 },
              { name: "AngelList", active: true, candidates: 89 },
              { name: "Dice", active: false, candidates: 0 }
            ].map((platform, index) => (
              <div key={index} className={`p-4 rounded-lg border text-center ${
                platform.active ? 'border-brand-green bg-green-50' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className={`w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center ${
                  platform.active ? 'bg-brand-green text-white' : 'bg-slate-300 text-slate-500'
                }`}>
                  <Globe size={16} />
                </div>
                <p className="text-sm font-medium text-slate-900">{platform.name}</p>
                <p className="text-xs text-slate-600">{platform.candidates} found</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}