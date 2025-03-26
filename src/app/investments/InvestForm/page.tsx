"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects"; 
import { Project } from "@/types/project";

import { useToast } from "@/hooks/use-toast";
import PageTransition from '@/components/PageTransition';


const InvestForm = () => {
  const params = useParams();
  const id = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number>(500);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    setTimeout(() => {
      const foundProject = projects.find((p) => p.id === parseInt(id || "0", 10));
      setProject(foundProject || null);
      setIsLoading(false);
    }, 800);
  }, [id]);

  const handleInvestmentChange = (value: number) => {
    if (value < 100) value = 100;
    if (project && value > project.investmentRequired) value = project.investmentRequired;
    setInvestmentAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Investment Successful",
        description: `You've successfully invested $${investmentAmount.toLocaleString()} in ${project?.name}`,
        variant: "default",
      });
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-blue-900 to-slate-900">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
          <div className="w-12 h-12 rounded-full border-4 border-teal-400 border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-900 via-blue-900 to-slate-900 p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-white/80 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="btn-primary">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
     
        <div className="pt-24 pb-20 px-6 lg:px-8 max-w-6xl mx-auto">
          <Link href={`/project/${project.id}`} className="text-white/80 hover:text-white transition duration-300">
            &larr; Back to Project
          </Link>

          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Invest in {project.name}</h1>
            <p className="text-white/80 mb-8">Complete your investment details below.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="text-white">Investment Amount:</label>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => handleInvestmentChange(parseInt(e.target.value) || 0)}
                  className="w-full p-3 mt-2 rounded-lg bg-white/10 text-white"
                  min="100"
                  max={project.investmentRequired}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg"
              >
                {isSubmitting ? "Processing..." : "Invest Now"}
              </button>
            </form>
          </div>
        </div>
    
    </PageTransition>
  );
};

export default InvestForm;
