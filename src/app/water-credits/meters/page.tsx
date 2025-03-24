"use client";

import { useState } from "react";

interface Meter {
  meterNumber: string;
  installationDate: string;
  lastReadingDate: string;
  status: "ACTIVE" | "INACTIVE" | "MAINTENANCE";
}

interface UsageData {
  meterNumber: string;
  readingValue: string;
  readingDate: string;
  efficiencyScore: string;
}

export default function MetersPage() {
  // State for meter list
  const [meters, setMeters] = useState<Meter[]>([
    {
      meterNumber: "MTR-001",
      installationDate: "2023-01-01",
      lastReadingDate: "2023-04-15",
      status: "ACTIVE",
    },
  ]);

  // State for usage update (existing functionality)
  const [showUsageForm, setShowUsageForm] = useState(false);
  const [selectedMeter, setSelectedMeter] = useState<string>("");
  const [readingValue, setReadingValue] = useState("");
  const [readingDate, setReadingDate] = useState("");
  const [efficiencyScore, setEfficiencyScore] = useState("");
  const [usageRecords, setUsageRecords] = useState<UsageData[]>([]);

  // State for "Add New Meter" modal
  const [showAddMeterModal, setShowAddMeterModal] = useState(false);
  const [newMeterNumber, setNewMeterNumber] = useState("");
  const [newInstallationDate, setNewInstallationDate] = useState("");
  const [newStatus, setNewStatus] = useState<"ACTIVE" | "INACTIVE" | "MAINTENANCE">("ACTIVE");

  // Delete a meter
  const handleDeleteMeter = (meterNumber: string) => {
    setMeters(meters.filter((m) => m.meterNumber !== meterNumber));
  };

  // Add a new meter with mandatory field check and uniqueness check
  const handleAddMeter = () => {
    if (!newMeterNumber.trim() || !newInstallationDate.trim() || !newStatus) {
      alert("Please fill out all fields.");
      return;
    }
    const exists = meters.some((meter) => meter.meterNumber === newMeterNumber);
    if (exists) {
      alert("This meter number has already been used. Please use a unique meter number.");
      return;
    }
    const newMeter: Meter = {
      meterNumber: newMeterNumber,
      installationDate: newInstallationDate,
      lastReadingDate: newInstallationDate, // Initially, lastReadingDate equals installationDate
      status: newStatus,
    };
    setMeters([...meters, newMeter]);
    setNewMeterNumber("");
    setNewInstallationDate("");
    setNewStatus("ACTIVE");
    setShowAddMeterModal(false);
  };

  // Show usage update form for a selected meter
  const handleShowUsageForm = (meterNumber: string) => {
    setSelectedMeter(meterNumber);
    setReadingValue("");
    setReadingDate("");
    setEfficiencyScore("");
    setShowUsageForm(true);
  };

  // Submit usage update with mandatory field check
  const handleUsageSubmit = () => {
    if (!readingValue.trim() || !readingDate.trim() || !efficiencyScore.trim()) {
      alert("Please fill out all fields for usage details.");
      return;
    }
    const newUsage: UsageData = {
      meterNumber: selectedMeter,
      readingValue,
      readingDate,
      efficiencyScore,
    };
    setUsageRecords([...usageRecords, newUsage]);
    setMeters((prev) =>
      prev.map((m) =>
        m.meterNumber === selectedMeter ? { ...m, lastReadingDate: readingDate } : m
      )
    );
    setShowUsageForm(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-blue-800 to-blue-600 p-10 relative overflow-hidden">
      <div className="w-full max-w-4xl rounded-3xl bg-blue-900/40 backdrop-blur-xl p-10 shadow-2xl border border-blue-400/20 relative z-10">
        {/* Explanatory Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-green-300 drop-shadow-lg tracking-wide">
            Manage Your Water Meters
          </h1>
          <p className="mt-4 text-lg text-white">
            This page allows you to view and manage all your water meters. Each meter card displays its number, installation date, last reading date, and current status.
            You can update the usage details for each meter or remove a meter if it’s no longer needed. Use the “Add New Meter” button below to register a new meter – note that meter numbers must be unique.
          </p>
        </div>

        {/* Meter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meters.map((meter) => (
            <div key={meter.meterNumber} className="rounded-2xl bg-blue-900/40 backdrop-blur-xl p-6 shadow-lg border border-blue-400/20 text-white">
              <h2 className="text-xl font-bold text-green-300 drop-shadow-lg">
                {meter.meterNumber}
              </h2>
              <p>Installation Date: {meter.installationDate}</p>
              <p>Last Reading Date: {meter.lastReadingDate}</p>
              <p>Status: {meter.status}</p>
              <div className="mt-4 flex space-x-3">
                <button
                  onClick={() => handleShowUsageForm(meter.meterNumber)}
                  className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 shadow"
                >
                  Update Usage
                </button>
                <button
                  onClick={() => handleDeleteMeter(meter.meterNumber)}
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 shadow"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Meter Button Positioned Below Meter Cards */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAddMeterModal(true)}
            className="rounded-full bg-green-600 px-6 py-3 text-white shadow-lg hover:bg-green-700"
          >
            Add New Meter
          </button>
        </div>
      </div>

      {/* Add New Meter Modal */}
      {showAddMeterModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
          <div className="w-full max-w-md rounded-3xl bg-blue-900/40 backdrop-blur-xl p-6 shadow-2xl border border-blue-400/20">
            <h2 className="text-2xl font-bold text-green-300 mb-4 drop-shadow-lg">
              Add New Meter
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">Meter Number</label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
                  value={newMeterNumber}
                  onChange={(e) => setNewMeterNumber(e.target.value)}
                  placeholder="Enter unique meter number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Installation Date</label>
                <input
                  type="date"
                  className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
                  value={newInstallationDate}
                  onChange={(e) => setNewInstallationDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Status</label>
                <select
                  className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
                  value={newStatus}
                  onChange={(e) =>
                    setNewStatus(e.target.value as "ACTIVE" | "INACTIVE" | "MAINTENANCE")
                  }
                  required
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                  <option value="MAINTENANCE">MAINTENANCE</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  onClick={() => setShowAddMeterModal(false)}
                  className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400 text-gray-800 shadow"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMeter}
                  className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 shadow"
                >
                  Add Meter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Update Usage Modal */}
      {showUsageForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
          <div className="w-full max-w-md rounded-3xl bg-blue-900/40 backdrop-blur-xl p-6 shadow-2xl border border-blue-400/20">
            <h2 className="text-2xl font-bold text-green-300 mb-4 drop-shadow-lg">
              Update Usage for {selectedMeter}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">Reading Value</label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
                  value={readingValue}
                  onChange={(e) => setReadingValue(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Reading Date</label>
                <input
                  type="date"
                  className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
                  value={readingDate}
                  onChange={(e) => setReadingDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Efficiency Score</label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
                  value={efficiencyScore}
                  onChange={(e) => setEfficiencyScore(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowUsageForm(false)}
                className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400 text-gray-800 shadow"
              >
                Cancel
              </button>
              <button
                onClick={handleUsageSubmit}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 shadow"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}