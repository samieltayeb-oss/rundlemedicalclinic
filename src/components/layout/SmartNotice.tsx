"use client";

import { useState } from "react";
import { activeNotice } from "@/data/notices";
import { X, Info, AlertTriangle, AlertCircle } from "lucide-react";


export function SmartNotice() {
  const [isVisible, setIsVisible] = useState(activeNotice.enabled);

  if (!isVisible) return null;

  const iconMap = {
    info: <Info className="w-5 h-5" />,
    important: <AlertTriangle className="w-5 h-5" />,
    closure: <AlertCircle className="w-5 h-5" />
  };

  const colorMap = {
    info: "bg-surface-elevated text-foreground border-border",
    important: "bg-warning/10 text-warning-foreground border-warning/20",
    closure: "bg-danger/10 text-danger-foreground border-danger/20"
  };

  return (
      <div className={`w-full border-b ${colorMap[activeNotice.severity]}`}>
        <div className="container mx-auto px-4 py-3 flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="mt-0.5 sm:mt-0 shrink-0">
              {iconMap[activeNotice.severity]}
            </div>
            <div className="text-sm font-medium">
              {activeNotice.title && <span className="font-semibold mr-2">{activeNotice.title}:</span>}
              {activeNotice.message}
              {activeNotice.cta && (
                <a href={activeNotice.cta.href} className="ml-2 underline underline-offset-2 hover:opacity-80 transition-opacity">
                  {activeNotice.cta.label}
                </a>
              )}
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-black/5 rounded-full transition-colors shrink-0"
            aria-label="Close notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    
  );
}

