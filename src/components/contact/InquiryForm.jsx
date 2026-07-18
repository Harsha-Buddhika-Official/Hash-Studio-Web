import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { projectTypes, inquiryFormCopy } from "../../data/contact";

const WHATSAPP_NUMBER = "94000000000";

const INITIAL_STATE = {
  fullName: "",
  email: "",
  projectType: projectTypes[0],
  details: "",
};

export default function InquiryForm() {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      `Hi Hash Studio, I'd like to start a project.`,
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Looking to build: ${form.projectType}`,
      form.details ? `Details: ${form.details}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-2xl bg-ink-50 p-7 sm:p-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-tight mb-8">
        {inquiryFormCopy.heading}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="text-xs font-bold tracking-widest text-ink-600 uppercase">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange("fullName")}
              className="mt-2.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-xs font-bold tracking-widest text-ink-600 uppercase">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="john@company.com"
              value={form.email}
              onChange={handleChange("email")}
              className="mt-2.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="text-xs font-bold tracking-widest text-ink-600 uppercase">
            What are you looking to build?
          </label>
          <div className="relative mt-2.5">
            <select
              id="projectType"
              value={form.projectType}
              onChange={handleChange("projectType")}
              className="w-full appearance-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <KeyboardArrowDownIcon
              fontSize="small"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400"
            />
          </div>
        </div>

        <div>
          <label htmlFor="details" className="text-xs font-bold tracking-widest text-ink-600 uppercase">
            Project Details
          </label>
          <textarea
            id="details"
            rows={5}
            placeholder="Tell us about your project goals, timeline, and budget…"
            value={form.details}
            onChange={handleChange("details")}
            className="mt-2.5 w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-ink-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-ink-800 transition-colors"
        >
          {inquiryFormCopy.submitLabel}
        </button>
      </form>
    </div>
  );
}