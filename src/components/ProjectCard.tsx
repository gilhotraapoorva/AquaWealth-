import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-20">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative p-6">
        {project.featured && (
          <div className="absolute -right-1 -top-1">
            <span className="bg-teal-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
              Featured
            </span>
          </div>
        )}
        
        <div className="mb-2">
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full text-teal-900 bg-teal-100/80 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        
        <h2 className="text-lg font-semibold text-white">{project.name}</h2>
        <p className="mt-1 text-sm text-white/80">{project.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-white/70">Investment</span>
            <span className="text-sm font-medium text-white">${project.investmentRequired.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-white/70">ROI</span>
            <span className="text-sm font-medium text-white">{project.roi}%</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-white/70">Duration</span>
            <span className="text-sm font-medium text-white">{project.duration}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-white/70">Location</span>
            <span className="text-sm font-medium text-white">{project.location}</span>
          </div>
        </div>
        
        <div className="mt-5">
          <div className="relative w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${project.fundingProgress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-gradient-to-r from-teal-500 to-teal-300 h-2 rounded-full progress-bar-animate"
            />
          </div>
          <div className="mt-1 flex justify-between">
            <span className="text-xs text-white/70">Progress</span>
            <span className="text-xs font-medium text-white">{project.fundingProgress}%</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between gap-2">
        <Link 
  href={`/project/${project.id}`} 
  className="btn-primary text-sm flex-1 flex justify-center"
>
  Learn More
</Link>

<Link 
  href={`/invest/${project.id}`} 
  className="btn-secondary text-sm flex-1 flex justify-center"
>
            Invest
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
