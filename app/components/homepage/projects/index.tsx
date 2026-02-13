"use client";
import { projectsData } from '@/utils/data/projects-data';
import { CATEGORY_OPTIONS, PROJECT_CATEGORIES, getCategoryDisplay, type ProjectCategory } from '@/utils/constants/categories';
import ProjectCard from './project-card';
import { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(PROJECT_CATEGORIES.ONSITE);
  const [showAll, setShowAll] = useState(false);

  const onsiteProjects = projectsData.filter(p => p.isFeatured);

  const filteredProjects = activeCategory === PROJECT_CATEGORIES.ONSITE
    ? onsiteProjects
    : projectsData.filter(p => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hasMore = filteredProjects.length > 4;

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span
            key={activeCategory}
            className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md animate-category-change"
          >
            {getCategoryDisplay(activeCategory).toUpperCase()} PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-10">
        {/* Category Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {CATEGORY_OPTIONS.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-4 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg"
                : "bg-[#1a1443] text-gray-300 hover:text-white hover:bg-[#25213b]"
                }`}
            >
              {getCategoryDisplay(category)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-6">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <div
                id={`sticky-card-${index + 1}`}
                key={project.id}
                className="sticky-card w-full mx-auto max-w-2xl"
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] hover:shadow-[0_0_40px_0_rgba(22,242,179,0.2)]">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-[#1a1443] rounded-lg">
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* See More Button */}
        {hasMore && !showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              See More Projects ({filteredProjects.length - 4} more)
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 rounded-full bg-[#1a1443] text-gray-300 font-medium hover:text-white hover:bg-[#25213b] transition-all duration-300"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;