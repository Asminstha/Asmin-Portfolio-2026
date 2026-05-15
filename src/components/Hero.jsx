import { useState, useEffect } from "react";
import { siteConfig } from "../data/content";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 md:pt-32 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Animated Badge */}
            <div className="inline-block float-right">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
                <span className="relative px-5 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-semibold hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-default inline-flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
                  Welcome to my portfolio
                </span>
              </div>
            </div>

            {/* Modern Headline */}
            <div className="space-y-6">
              <div>
                <p className="text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                  Full Stack Developer
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-slate-900 dark:text-white">
                    Build
                  </span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                      Amazing
                    </span>
                  </span>
                  <span className="block text-slate-900 dark:text-white">
                    Digital Products
                  </span>
                </h1>
              </div>
              <div className="space-y-2 md:space-y-3 max-w-2xl pt-2 md:pt-4 text-justify">
                <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Crafting{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    pixel-perfect experiences
                  </span>{" "}
                  that drive real results. Specializing in{" "}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded font-semibold text-sm ml-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V9.5M10.5 1.5V9.5h8M10.5 1.5L18.5 9.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    React
                  </span>{" "}
                  and modern technologies.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  From concept to deployment, I build{" "}
                  <span className="font-bold text-slate-900 dark:text-white">
                    scalable, performant applications
                  </span>{" "}
                  that users love.
                </p>
              </div>
            </div>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary Button */}
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 text-center flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  View Projects
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>

              {/* Secondary Button */}
              <a
                href={siteConfig.personal.resume}
                download
                className="group px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Modern Stats */}
            <div className="grid grid-cols-3 gap-6   pt-8 border-t border-slate-200 dark:border-slate-800">
              {[
                { value: 2, label: "Years", suffix: "Exp" },
                { value: 10, label: "Projects", suffix: "Done" },
                { value: 8, label: "Clients", suffix: "Happy" },
              ].map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="relative">
                    <p className="text-4xl md:text-5xl font-black bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 origin-left">
                      <Counter end={stat.value} />
                    </p>
                    <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 font-semibold">
                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {stat.label}
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    {stat.suffix}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Modern Visual Section */}
          <div className="hidden lg:flex justify-center items-center relative h-full min-h-96">
            {/* Main Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-400/10 dark:from-blue-600/10 to-cyan-400/10 dark:to-cyan-600/10 rounded-3xl blur-3xl"></div>
            </div>

            {/* Floating Cards Container */}
            <div className="relative w-96 h-96 flex items-center justify-center perspective">
              {/* Card 1 - Top Left */}
              <div className="absolute top-0 left-0 w-72 h-48 group cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-white dark:from-slate-800 to-slate-50 dark:to-slate-900 rounded-3xl shadow-2xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 dark:from-blue-900/40 to-blue-50 dark:to-blue-800/40 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      💻
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        Web Dev
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        React & Modern JS
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Top Right */}
              <div className="absolute top-12 right-0 w-72 h-48 group cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-white dark:from-slate-800 to-slate-50 dark:to-slate-900 rounded-3xl shadow-2xl group-hover:shadow-cyan-500/20 dark:group-hover:shadow-cyan-500/30 transition-all duration-300 group-hover:translate-y-3 group-hover:scale-105 border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent"></div>
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 dark:from-cyan-900/40 to-cyan-50 dark:to-cyan-800/40 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      🎨
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        UI/UX Design
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Beautiful & Intuitive
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-48 group cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-white dark:from-slate-800 to-slate-50 dark:to-slate-900 rounded-3xl shadow-2xl group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent"></div>
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 dark:from-purple-900/40 to-purple-50 dark:to-purple-800/40 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      ⚙️
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        Full Stack
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        End-to-End Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
