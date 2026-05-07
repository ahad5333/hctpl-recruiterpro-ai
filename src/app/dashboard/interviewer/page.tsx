"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain, Users, TrendingUp, Target,
  Settings, Play, Pause, RotateCcw,
  BarChart3, MessageSquare, Clock,
  ArrowLeft, Zap, CheckCircle, Star,
  Code, FileText, Mic, Globe, Database, Cpu
} from "lucide-react";
import Link from "next/link";

export default function InterviewerAgentPage() {
  const [isActive, setIsActive] = useState(false);

  const stats = [
    { label: "Interviews Completed", value: "89", icon: Users, color: "text-brand-blue" },
    { label: "Average Score", value: "7.8/10", icon: Star, color: "text-yellow-600" },
    { label: "Pass Rate", value: "73%", icon: CheckCircle, color: "text-brand-green" },
    { label: "Active Sessions", value: "3", icon: Brain, color: "text-purple-600" }
  ];

  const recentInterviews = [
    { name: "John Smith", role: "Senior Developer", score: 8.5, status: "passed", time: "2 hours ago" },
    { name: "Emma Davis", role: "Full Stack Engineer", score: 7.2, status: "passed", time: "4 hours ago" },
    { name: "Michael Brown", role: "React Developer", score: 6.8, status: "failed", time: "6 hours ago" },
    { name: "Lisa Wilson", role: "DevOps Engineer", score: 9.1, status: "passed", time: "8 hours ago" }
  ];

  const questionTypes = [
    { type: "Technical Coding", count: 45, icon: Code },
    { type: "System Design", count: 23, icon: FileText },
    { type: "Behavioral", count: 34, icon: MessageSquare },
    { type: "Live Coding", count: 18, icon: Mic }
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
            <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white">
              <Brain size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">AI Technical Interviewer</h1>
              <p className="text-slate-600">Automated technical assessments and candidate evaluation</p>
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
              Configure Questions
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Target size={20} />
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
          {/* RECENT INTERVIEWS */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Interviews</h3>
            <div className="space-y-4">
              {recentInterviews.map((interview, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                      {interview.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{interview.name}</p>
                      <p className="text-sm text-slate-600">{interview.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock size={12} className="text-slate-400" />
                        <span className="text-xs text-slate-500">{interview.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      interview.status === 'passed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      <CheckCircle size={12} />
                      {interview.status}
                    </div>
                    <p className="text-lg font-bold text-slate-900 mt-1">{interview.score}/10</p>
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
                <span className="text-slate-600">Current Session</span>
                <span className="text-slate-900 font-medium">
                  {isActive ? 'Evaluating candidate' : 'Waiting for session'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">Question Bank</span>
                <span className="text-slate-900 font-medium">120 questions</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">Avg. Completion</span>
                <span className="text-slate-900 font-medium">45 minutes</span>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Today's Progress</span>
                <span>67/100 interviews</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* QUESTION TYPES */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Question Types</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {questionTypes.map((type, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-lg text-center">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                  <type.icon size={20} />
                </div>
                <h4 className="font-medium text-slate-900 mb-1">{type.type}</h4>
                <p className="text-2xl font-bold text-slate-900">{type.count}</p>
                <p className="text-sm text-slate-600">questions</p>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVE SESSIONS */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Active Sessions</h3>
          <div className="space-y-4">
            {[
              { candidate: "Alex Johnson", role: "Senior React Developer", progress: 75, time: "23 min remaining" },
              { candidate: "Maria Rodriguez", role: "Full Stack Engineer", progress: 45, time: "18 min remaining" },
              { candidate: "David Chen", role: "DevOps Engineer", progress: 90, time: "5 min remaining" }
            ].map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Brain size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{session.candidate}</p>
                    <p className="text-sm text-slate-600">{session.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600">{session.time}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-20 bg-slate-200 rounded-full h-2">
                      <div className="bg-brand-blue h-2 rounded-full" style={{ width: `${session.progress}%` }}></div>
                    </div>
                    <span className="text-xs text-slate-600">{session.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}