import { siteConfig } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Work History
          </h2>
        </div>
        <div className="relative pl-4 border-l-2 border-blue-100 dark:border-blue-800">
          {siteConfig.experience.map((job, idx) => (
            <div key={job.id} className="mb-10 ml-2 relative">
              <div className="absolute -left-5 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white dark:border-slate-900"></div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-300">
                      {job.role}
                    </h3>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {job.company} &bull; {job.location}
                    </div>
                  </div>
                  <div className="text-xs font-semibold bg-blue-50 dark:bg-blue-900 text-blue-500 px-3 py-1 rounded-lg shadow">
                    {job.duration}
                  </div>
                </div>
                <ul className="mt-4 mb-2 text-slate-800 dark:text-slate-200 list-disc pl-5 space-y-1 text-sm md:text-base">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {job.tech && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-800 text-xs text-blue-700 dark:text-blue-300 font-semibold">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}