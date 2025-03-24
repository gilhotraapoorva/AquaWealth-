"use client";

import { useState } from "react";

interface CreditRecord {
  meterNumber: string;
  creditsEarned: number;
  earningDate: string;
  expiryDate: string;
}

export default function CreditsPage() {
  const [creditsData] = useState<CreditRecord[]>([
    {
      meterNumber: "MTR-001",
      creditsEarned: 20,
      earningDate: "2023-04-01",
      expiryDate: "2024-04-01",
    },
    {
      meterNumber: "MTR-002",
      creditsEarned: 15,
      earningDate: "2023-03-20",
      expiryDate: "2024-03-20",
    },
  ]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-blue-800 to-blue-600 p-10 relative overflow-hidden">
      <div className="w-full max-w-4xl rounded-3xl bg-blue-900/40 backdrop-blur-xl p-10 shadow-2xl border border-blue-400/20 relative z-10">
        <h1 className="text-4xl font-extrabold text-green-300 text-center mb-6 drop-shadow-lg tracking-wide">
          Water Credits
        </h1>
        <p className="text-white text-center mb-6">
          View the credits earned for each water meter. The table below shows your meter number, total credits earned, the date credits were awarded, and their expiry date. When you're ready to use your credits, click the button below.
        </p>

        {creditsData.length === 0 ? (
          <p className="text-white text-center">No credit data available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-800/50">
                  <th className="border p-3 text-left text-white">Meter Number</th>
                  <th className="border p-3 text-left text-white">Credits Earned</th>
                  <th className="border p-3 text-left text-white">Earning Date</th>
                  <th className="border p-3 text-left text-white">Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                {creditsData.map((credit, index) => (
                  <tr key={index} className="hover:bg-blue-800/30">
                    <td className="border p-3 text-white">{credit.meterNumber}</td>
                    <td className="border p-3 text-white">{credit.creditsEarned}</td>
                    <td className="border p-3 text-white">{credit.earningDate}</td>
                    <td className="border p-3 text-white">{credit.expiryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            className="rounded-full bg-indigo-600 px-8 py-3 text-white shadow-lg hover:bg-indigo-700 transition-all"
            onClick={() => alert("Redirecting to credits redemption page...")}
          >
            Use your credits
          </button>
        </div>
      </div>
    </div>
  );
}
