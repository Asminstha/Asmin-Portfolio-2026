import { useState, useEffect } from 'react';
import { siteConfig } from '../data/content';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const allSkills = siteConfig.skills;
  const filteredSkills = activeFilter === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-16 md:py-24 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base">EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Modern tools and frameworks I use to build amazing applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50'
                : 'bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/50'
            }`}
          >
            All Skills
          </button>
          {[...new Set(siteConfig.skills.map(s => s.category))].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {filteredSkills.map((group, idx) => (
            <div
              key={idx}
              className="group p-6 md:p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-default"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {group.category === 'Frontend' && '🎨'}
                  {group.category === 'Backend' && '⚙️'}
                  {group.category === 'Tools & Platforms' && '🛠️'}
                  {group.category === 'Soft Skills' && '💡'}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-1"></div>
                </div>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {group.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-slate-200 dark:border-slate-700/50">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 md:mb-12">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Frontend Development', level: 95 },
              { name: 'Backend Development', level: 60 },
              { name: 'Database Design', level: 88 },
              { name: 'Project Management', level: 92 },
              { name: 'Team Leadership', level: 87 },
            ].map((skill, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-600 dark:text-slate-300 text-sm md:text-base group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      boxShadow: isVisible ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}