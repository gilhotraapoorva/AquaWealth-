"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { submitClaim } from "@/lib/api";

type ClaimFormInputs = {
  governmentId: string;
  city: string;
  date: string;
  claimAmount: number;
};

export default function ClaimsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ClaimFormInputs>({
    defaultValues: {
      governmentId: "",
      city: "",
      date: new Date().toISOString().split("T")[0],
      claimAmount: 0,
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<ClaimFormInputs> = async (data) => {
    setError("");
    try {
      await submitClaim({
        ...data,
        claimAmount: parseFloat(String(data.claimAmount)), // Ensure conversion
      });
      setSubmitted(true);
      reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit claim. Please try again."
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-blue-800 to-blue-600 p-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg rounded-3xl bg-blue-900/40 backdrop-blur-xl p-10 shadow-2xl border border-blue-400/20 relative z-10"
      >
        <h1 className="text-4xl font-extrabold text-green-300 text-center mb-6 drop-shadow-lg tracking-wide">
          Submit Claim
        </h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {submitted ? (
          <div className="text-center text-green-500 font-bold">
            Claim Submitted Successfully!
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Claim
            </motion.button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {[
              { label: "Government ID", name: "governmentId", type: "text" },
              { label: "City", name: "city", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block mb-2 text-green-200 font-semibold text-lg">{label}</label>
                <input
                  type={type}
                  {...register(name as keyof ClaimFormInputs, {
                    required: `${label} is required`,
                  })}
                  className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
                  aria-invalid={!!errors[name as keyof ClaimFormInputs]}
                />
                {errors[name as keyof ClaimFormInputs] && (
                  <p className="text-red-400">{errors[name as keyof ClaimFormInputs]?.message}</p>
                )}
              </div>
            ))}

            <div>
              <label className="block mb-2 text-green-200 font-semibold text-lg">Claim Date</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]} // Prevent past dates
                {...register("date", { required: "Date is required" })}
                className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
              />
              {errors.date && <p className="text-red-400">{errors.date?.message}</p>}
            </div>

            <div>
              <label className="block mb-2 text-green-200 font-semibold text-lg">Claim Amount</label>
              <input
                type="number"
                step="0.01"
                min="0.1"
                {...register("claimAmount", {
                  required: "Claim amount is required",
                  min: { value: 0.1, message: "Amount must be at least 0.1" },
                })}
                className="w-full rounded-xl bg-blue-800/50 text-white px-4 py-3 border border-green-500/40 focus:ring-2 focus:ring-green-400 focus:outline-none backdrop-blur-lg shadow-md"
              />
              {errors.claimAmount && <p className="text-red-400">{errors.claimAmount?.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(144, 238, 144, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full rounded-xl px-6 py-3 text-white font-bold text-lg transition-all shadow-lg bg-green-600 hover:bg-green-700"
            >
              Submit Claim
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
