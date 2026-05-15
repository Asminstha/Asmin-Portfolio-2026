import { useState, useEffect } from "react";
import { siteConfig } from "../data/content";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid md:grid-cols-2 gap-6 md:gap-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {siteConfig.projects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-blue-100 dark:from-blue-500/20 to-cyan-100 dark:to-cyan-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === project.id
                      ? "scale-110 brightness-110"
                      : "scale-100"
                  }`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent transition-all duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-60"
                  }`}
                ></div>

                {/* Badge */}
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs md:text-sm font-semibold rounded-full shadow-lg">
                  Featured
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-all duration-500 flex items-end p-6 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p
                    className={`text-white text-sm transform transition-transform duration-500 ${
                      hoveredId === project.id
                        ? "translate-y-0"
                        : "translate-y-4"
                    }`}
                  >
                    {project.longDescription}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3
                  className={`text-xl md:text-2xl font-bold mb-2 transition-all duration-300 ${
                    hoveredId === project.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs md:text-sm bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-300 dark:border-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs md:text-sm bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-slate-200 dark:bg-slate-700/50 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold text-sm md:text-base transition-all duration-300 text-center"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-center"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
