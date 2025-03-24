"use client";

import { useState } from "react";

interface UsageRecord {
  meterNumber: string;
  readingValue: string;
  readingDate: string;
  efficiencyScore: string;
}

export default function UsagePage() {
  // Sample usage data; in a real app, data would be fetched from an API or context.
  const [usageData] = useState<UsageRecord[]>([
    {
      meterNumber: "MTR-001",
      readingValue: "100",
      readingDate: "2023-04-15",
      efficiencyScore: "High",
    },
    {
      meterNumber: "MTR-002",
      readingValue: "75",
      readingDate: "2023-04-10",
      efficiencyScore: "Medium",
    },
  ]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-blue-800 to-blue-600 p-10 relative overflow-hidden">
      <div className="w-full max-w-4xl rounded-3xl bg-blue-900/40 backdrop-blur-xl p-10 shadow-2xl border border-blue-400/20 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-green-300 drop-shadow-lg tracking-wide">
            Water Usage Details
          </h1>
          <p className="mt-4 text-lg text-white">
            Below is a list of all recorded usage details for your meters.
          </p>
        </div>

        {usageData.length === 0 ? (
          <p className="text-white text-center">No usage data available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-blue-800/50">
                  <th className="border p-3 text-left text-white">Meter Number</th>
                  <th className="border p-3 text-left text-white">Reading Value</th>
                  <th className="border p-3 text-left text-white">Reading Date</th>
                  <th className="border p-3 text-left text-white">Efficiency Score</th>
                </tr>
              </thead>
              <tbody>
                {usageData.map((usage, index) => (
                  <tr key={index} className="bg-blue-800/30">
                    <td className="border p-3 text-white">{usage.meterNumber}</td>
                    <td className="border p-3 text-white">{usage.readingValue}</td>
                    <td className="border p-3 text-white">{usage.readingDate}</td>
                    <td className="border p-3 text-white">{usage.efficiencyScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
