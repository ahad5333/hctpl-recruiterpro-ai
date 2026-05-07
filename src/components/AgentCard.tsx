"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import AgentStatus from "./AgentStatus";
import Link from "next/link";

interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  status: "idle" | "active" | "completed" | "error";
  href: string;
  color: string;
}

export default function AgentCard({ name, role, description, icon: Icon, status, href, color }: AgentCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="card group cursor-pointer"
      >
        <div className="flex justify-between items-start mb-6">
          <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg`}>
            <Icon size={28} />
          </div>
          <AgentStatus status={status} />
        </div>

        <div className="space-y-2 mb-6">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
            {name}
          </h3>
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            {role}
          </p>
        </div>

        <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-4 transition-all">
          Manage Agent <span>→</span>
        </div>
      </motion.div>
    </Link>
  );
}
