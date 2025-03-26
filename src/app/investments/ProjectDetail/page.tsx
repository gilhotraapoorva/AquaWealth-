import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects, categories, sortOptions } from '@/data/projects'; // Corrected path
import ProjectCard from '@/components/ProjectCard';
import PageTransition from '@/components/PageTransition';

const BrowseProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let filtered = projects.filter(
      (p) => selectedCategory === "All" || p.category === selectedCategory
    );

    if (selectedSort === "Highest ROI") {
      filtered.sort((a, b) => b.roi - a.roi);
    } else if (selectedSort === "Most Funded") {
      filtered.sort((a, b) => b.fundingProgress - a.fundingProgress);
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedSort]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-slate-900">
        <div className="pt-24 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Invest in Sustainable Solutions
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              Support innovative environmental projects that deliver measurable impact and returns.
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div className="w-64 glass-card rounded-2xl p-6">
              <h2 className="font-semibold text-lg text-white mb-6">Filters</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-slate-800 text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Sort By</label>
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-800 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BrowseProjects;
