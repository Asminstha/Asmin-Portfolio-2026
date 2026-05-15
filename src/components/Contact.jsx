import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { siteConfig } from "../data/content";

// Define floating input OUTSIDE the main component
function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  optional = false,
  focusedField,
  setFocusedField,
}) {
  const isFocused = focusedField === name || value;
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        placeholder=" "
        autoComplete="off"
        className={`w-full px-6 py-4 bg-white dark:bg-slate-900/50 border-2 rounded-xl text-slate-900 dark:text-white placeholder-transparent focus:outline-none transition-all duration-300 ${
          error
            ? "border-red-500/50 focus:border-red-500"
            : "border-slate-200 dark:border-slate-700/50 focus:border-blue-500"
        } ${isFocused ? "bg-slate-50 dark:bg-slate-900/80" : ""}`}
      />
      <label
        className={`absolute left-6 text-sm font-semibold pointer-events-none transition-all duration-300 transform origin-left ${
          isFocused
            ? "top-2 scale-75 -translate-y-2 text-blue-600 dark:text-blue-400"
            : value
              ? "top-2 scale-75 -translate-y-2 text-slate-500 dark:text-slate-400"
              : "top-4 scale-100 text-slate-500 dark:text-slate-400"
        }`}
      >
        {label} {!optional && <span className="text-red-500">*</span>}
      </label>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

function FloatingTextarea({
  label,
  name,
  value,
  onChange,
  error,
  focusedField,
  setFocusedField,
}) {
  const isFocused = focusedField === name || value;
  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        placeholder=" "
        rows="5"
        className={`w-full px-6 py-4 bg-white dark:bg-slate-900/50 border-2 rounded-xl text-slate-900 dark:text-white placeholder-transparent focus:outline-none resize-none transition-all duration-300 ${
          error
            ? "border-red-500/50 focus:border-red-500"
            : "border-slate-200 dark:border-slate-700/50 focus:border-blue-500"
        } ${isFocused ? "bg-slate-50 dark:bg-slate-900/80" : ""}`}
      />
      <label
        className={`absolute left-6 text-sm font-semibold pointer-events-none transition-all duration-300 transform origin-left ${
          isFocused
            ? "top-2 scale-75 -translate-y-2 text-blue-600 dark:text-blue-400"
            : value
              ? "top-2 scale-75 -translate-y-2 text-slate-500 dark:text-slate-400"
              : "top-4 scale-100 text-slate-500 dark:text-slate-400"
        }`}
      >
        {label} <span className="text-red-500">*</span>
      </label>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    const element = document.getElementById("contact");
    if (element) observer.observe(element);
    return () => element && observer.unobserve(element);
  }, []);

  useEffect(() => {
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
  }, []);

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Please enter a valid email";
    } else if (step === 2 && !formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: "" }));
  };

  const handleNext = () => validateStep() && setStep(step + 1);
  const handlePrev = () => {
    setStep(step - 1);
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);
    setStatus("");
    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "your-email@example.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject || "Portfolio Contact",
        message: formData.message,
        reply_to: formData.email,
      });
      setStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setStep(1);
        setStatus("");
      }, 3000);
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base">
            CONTACT
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Have a project or question? I'd love to hear from you. Let's create
            something amazing together!
          </p>
        </div>

        {status === "success" && (
          <div className="max-w-2xl mx-auto mb-8 p-6 md:p-8 bg-gradient-to-br from-green-50 dark:from-green-500/20 to-emerald-50 dark:to-emerald-500/20 border-2 border-green-200 dark:border-green-500/50 rounded-2xl text-center animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center animate-bounce">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-green-700 dark:text-green-200 text-sm md:text-base">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="max-w-2xl mx-auto mb-8 p-6 md:p-8 bg-gradient-to-br from-red-50 dark:from-red-500/20 to-rose-50 dark:to-rose-500/20 border-2 border-red-200 dark:border-red-500/50 rounded-2xl text-center animate-fade-in">
            <h3 className="text-xl md:text-2xl font-bold text-red-700 dark:text-red-300 mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-red-700 dark:text-red-200 text-sm md:text-base">
              Please try again or contact me directly at{" "}
              <a
                href={`mailto:${siteConfig.personal.email}`}
                className="underline hover:text-red-600 dark:hover:text-red-100"
              >
                {siteConfig.personal.email}
              </a>
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="grid grid-cols-1 gap-4">
              {/* Email Card */}
              <div className="group relative overflow-hidden">
                <a
                  href={`mailto:${siteConfig.personal.email}`}
                  className="relative block p-5 bg-white dark:bg-slate-800/40 border-l-4 border-blue-600 dark:border-blue-500 rounded-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 dark:from-blue-900/50 to-blue-50 dark:to-blue-800/50 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      ✉️
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Email
                      </h4>
                      <p className="text-slate-900 dark:text-white font-semibold mt-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {siteConfig.personal.email}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Phone Card */}
              <div className="group relative overflow-hidden">
                <a
                  href={`tel:${siteConfig.personal.phone}`}
                  className="relative block p-5 bg-white dark:bg-slate-800/40 border-l-4 border-cyan-600 dark:border-cyan-500 rounded-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 dark:from-cyan-900/50 to-cyan-50 dark:to-cyan-800/50 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      📱
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Phone
                      </h4>
                      <p className="text-slate-900 dark:text-white font-semibold mt-1 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {siteConfig.personal.phone}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Location Card */}
              <div className="group relative overflow-hidden">
                <a
                  href="#"
                  className="relative block p-5 bg-white dark:bg-slate-800/40 border-l-4 border-purple-600 dark:border-purple-500 rounded-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 dark:from-purple-900/50 to-purple-50 dark:to-purple-800/50 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      📍
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Location
                      </h4>
                      <p className="text-slate-900 dark:text-white font-semibold mt-1 truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {siteConfig.personal.location}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* YouTube Card */}
              <div className="group relative overflow-hidden">
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block p-5 bg-white dark:bg-slate-800/40 border-l-4 border-red-600 dark:border-red-500 rounded-lg hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 dark:from-red-900/50 to-red-50 dark:to-red-800/50 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      ▶️
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        YouTube
                      </h4>
                      <p className="text-slate-900 dark:text-white font-semibold mt-1 truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {siteConfig.socials.youtube
                          .replace(/^https?:\/\//, "")
                          .replace(/^www\./, "")}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Social Links - Modern Design */}
            <div>
              <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-6">
                Connect With Me
              </h4>

              <div className="flex gap-3">
                {/* GitHub */}
                 
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 relative overflow-hidden"
                  title="GitHub"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative px-4 py-3 bg-grey dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center gap-2 group-hover:border-gray-900 dark:group-hover:border-gray-900 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-slate-700 dark:text-slate-400 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-400 group-hover:text-white transition-colors hidden sm:inline">
                      GitHub
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 relative overflow-hidden"
                  title="LinkedIn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative px-4 py-3 bg-grey dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-xl flex items-center justify-center gap-2 group-hover:border-blue-600 dark:group-hover:border-blue-600 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-slate-700 dark:text-slate-400 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.249-.129.597-.129.946v5.422h-3.554s.05-8.808 0-9.714h3.554v1.375c.427-.659 1.191-1.597 2.896-1.597 2.117 0 3.704 1.385 3.704 4.362v5.574zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.706 0-.955.768-1.71 1.963-1.71 1.192 0 1.912.754 1.937 1.71 0 .948-.745 1.706-1.985 1.706zm1.946 11.02H3.391V9.738h3.892v10.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-400 group-hover:text-white transition-colors hidden sm:inline">
                      LinkedIn
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* RIGHT: FORM (Steps, no typo bug) */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="p-8 md:p-10 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-2xl">
              <div className="mb-8">
                <div className="flex justify-between mb-4">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`flex-1 h-1.5 rounded-full mx-1 transition-all duration-500 ${
                        num <= step
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
                          : "bg-slate-300 dark:bg-slate-700/50"
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Step {step} of 3
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {step === 1 && "Your Information"}
                    {step === 2 && "Your Message"}
                    {step === 3 && "Review & Send"}
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <FloatingInput
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                    />
                    <FloatingInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                    />
                    <FloatingInput
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      optional={true}
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                    />
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 mt-8"
                    >
                      Continue →
                    </button>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <FloatingInput
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      optional={true}
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                    />
                    <FloatingTextarea
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                    />
                    <div className="flex gap-4 mt-8">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-6 py-4 border-2 border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white font-semibold rounded-xl hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                      >
                        Review →
                      </button>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="space-y-4 p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl">
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          Name
                        </p>
                        <p className="text-slate-900 dark:text-white font-semibold text-lg">
                          {formData.name}
                        </p>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-700/50 pt-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          Email
                        </p>
                        <p className="text-slate-900 dark:text-white font-semibold text-lg">
                          {formData.email}
                        </p>
                      </div>
                      {formData.phone && (
                        <div className="border-t border-slate-200 dark:border-slate-700/50 pt-4">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Phone
                          </p>
                          <p className="text-slate-900 dark:text-white font-semibold text-lg">
                            {formData.phone}
                          </p>
                        </div>
                      )}
                      {formData.subject && (
                        <div className="border-t border-slate-200 dark:border-slate-700/50 pt-4">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Subject
                          </p>
                          <p className="text-slate-900 dark:text-white font-semibold text-lg">
                            {formData.subject}
                          </p>
                        </div>
                      )}
                      <div className="border-t border-slate-200 dark:border-slate-700/50 pt-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          Message
                        </p>
                        <p className="text-slate-900 dark:text-white whitespace-pre-wrap leading-relaxed">
                          {formData.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-6 py-4 border-2 border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white font-semibold rounded-xl hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300"
                      >
                        ← Edit
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-1"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <span className="animate-spin">⏳</span>
                            Sending...
                          </span>
                        ) : (
                          "Send Message ✓"
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
