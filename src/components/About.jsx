import { useEffect, useState } from 'react';
import { siteConfig } from '../data/content';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base">ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Who Am I?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            A passionate developer dedicated to creating beautiful and functional digital experiences
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left - Image with effects */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src={siteConfig.about.aboutimg}
              alt={siteConfig.personal.name}
              className="relative w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6 text-justify">
            {siteConfig.about.description.map((para, idx) => (
              <p key={idx} className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Education Cards */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education</h3>
              <div className="space-y-4">
                {siteConfig.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="group p-4 md:p-6 bg-gradient-to-br from-blue-50 dark:from-blue-500/10 to-cyan-50 dark:to-cyan-500/10 border border-blue-200 dark:border-blue-500/30 rounded-xl hover:border-blue-400 dark:hover:border-blue-500/60 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-300 font-semibold">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}