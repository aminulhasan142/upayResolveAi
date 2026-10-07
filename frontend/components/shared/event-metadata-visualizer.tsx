"use client";

import React, { useState } from "react";
import { Smartphone, ShieldAlert, Tag, Code, Eye } from "lucide-react";

interface EventMetadataVisualizerProps {
  metadata?: Record<string, any> | null;
  defaultVisualMode?: boolean;
}

export const EventMetadataVisualizer: React.FC<EventMetadataVisualizerProps> = ({
  metadata,
  defaultVisualMode = true,
}) => {
  const [showRawJson, setShowRawJson] = useState(!defaultVisualMode);

  if (!metadata || Object.keys(metadata).length === 0) {
    return (
      <div className="text-xs text-gray-400 italic font-sans py-1">
        Milestone recorded by network switch event listener
      </div>
    );
  }

  const getKeyLabel = (key: string) => {
    return key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const renderVisualBadge = (key: string, value: any) => {
    // 1. Amounts & Balances
    if (
      typeof value === "number" &&
      (key.includes("balance") ||
        key.includes("amount") ||
        key.includes("price") ||
        key.includes("debit") ||
        key.includes("credit") ||
        key.includes("cashback"))
    ) {
      return (
        <div className="inline-flex items-center gap-1 font-mono font-bold text-emerald-800 bg-emerald-50/90 px-2.5 py-1 rounded-lg border border-emerald-200/80 text-xs">
          <span>৳{value.toLocaleString("en-BD", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      );
    }

    // 2. Error & Timeout Codes
    if (
      typeof value === "string" &&
      (value.includes("TIMEOUT") ||
        value.includes("FAILED") ||
        value.includes("ERR") ||
        value.includes("504") ||
        value.includes("MISMATCH") ||
        value.includes("DROPPED") ||
        value.includes("MISSING"))
    ) {
      return (
        <div className="inline-flex items-center gap-1.5 font-mono font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200 text-xs">
          <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0" />
          <span>{value}</span>
        </div>
      );
    }

    // 3. Devices & Apps
    if (key.includes("device") || key.includes("app_version")) {
      return (
        <div className="inline-flex items-center gap-1.5 font-sans text-slate-800 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-semibold">
          <Smartphone className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span>{String(value)}</span>
        </div>
      );
    }

    // 4. Terminals, Webhooks & QR Codes
    if (key.includes("terminal") || key.includes("counter") || key.includes("qr_scanned") || key.includes("invoice") || key.includes("route")) {
      return (
        <div className="inline-flex items-center gap-1.5 font-sans text-upay-900 bg-upay-50 px-2.5 py-1 rounded-lg border border-upay-200 text-xs font-semibold">
          <Tag className="w-3.5 h-3.5 text-upay-700 shrink-0" />
          <span>{String(value)}</span>
        </div>
      );
    }

    // 5. Booleans
    if (typeof value === "boolean") {
      return value ? (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
          VERIFIED / TRUE
        </span>
      ) : (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold bg-rose-100 text-rose-800 border border-rose-300">
          UNSETTLED / FALSE
        </span>
      );
    }

    // 6. Nested Object
    if (typeof value === "object" && value !== null) {
      return (
        <pre className="text-[10px] font-mono text-gray-700 bg-gray-50 p-1.5 rounded border border-gray-200">
          {JSON.stringify(value)}
        </pre>
      );
    }

    // Default Value
    return (
      <span className="font-mono text-xs text-gray-900 font-semibold break-all">
        {String(value)}
      </span>
    );
  };

  return (
    <div className="space-y-2">
      {/* Toggle raw JSON view */}
      <div className="flex items-center justify-between pb-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">
          Milestone Event Metadata
        </span>
        <button
          type="button"
          onClick={() => setShowRawJson(!showRawJson)}
          className="text-[10px] font-bold text-upay-800 hover:text-upay-950 flex items-center gap-1 bg-upay-50 hover:bg-upay-100 px-2 py-0.5 rounded border border-upay-200 transition-colors"
        >
          {showRawJson ? (
            <>
              <Eye className="w-3 h-3 text-upay-700" />
              <span>Switch to Visual UI</span>
            </>
          ) : (
            <>
              <Code className="w-3 h-3 text-upay-700" />
              <span>View Raw JSON</span>
            </>
          )}
        </button>
      </div>

      {showRawJson ? (
        <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl border border-slate-800 text-[11px] font-mono overflow-x-auto shadow-inner">
          <pre>{JSON.stringify(metadata, null, 2)}</pre>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {Object.entries(metadata).map(([k, v]) => (
            <div
              key={k}
              className="p-2.5 rounded-xl bg-white border border-surface-border shadow-cardHover/5 flex flex-col justify-between space-y-1 hover:border-upay-300 transition-colors"
            >
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 font-sans">
                {getKeyLabel(k)}
              </span>
              <div className="pt-0.5">
                {renderVisualBadge(k, v)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
