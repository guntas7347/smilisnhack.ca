"use client";

import { submitQuote } from "@/lib/firebase/quotes.server";
import { ArrowRight, Calendar, ChevronDown, Mail, Phone } from "lucide-react";
import { useState } from "react";

const QuoteForm = () => {
  const defaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    eventType: "Wedding",
    message: "",
  };

  const [form, setForm] = useState(defaultForm);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { ...form };

    await submitQuote(payload);
    alert("Quote Submitted, We will reply shortly.");
    setForm(defaultForm);
  };

  return (
    <div className="order-1 lg:order-2">
      <div className="bg-white dark:bg-background-card-dark p-6 md:p-10 rounded-[2.5rem] shadow-soft dark:shadow-soft-dark border border-white/40 dark:border-white/5 sticky top-24">
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-3 text-text-primary dark:text-white">
            Send us a Message
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-medium">
            We'll reply within 24 hours.
          </p>
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              className="h-14 px-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 text-text-primary dark:text-white"
              placeholder="First Name"
              required
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              className="h-14 px-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 text-text-primary dark:text-white"
              placeholder="Last Name"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={onChange}
              className="h-14 pl-12 pr-5 w-full rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 text-text-primary dark:text-white"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="h-14 pl-12 pr-5 w-full rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 text-text-primary dark:text-white"
              placeholder="Phone"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
                required
                className="h-14 pl-12 pr-5 w-full rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 text-text-primary dark:text-white"
              />
            </div>

            <div className="relative">
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60 pointer-events-none" />
              <select
                name="eventType"
                value={form.eventType}
                onChange={onChange}
                required
                className="h-14 pl-5 pr-10 w-full rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 text-text-primary dark:text-white appearance-none"
              >
                <option className="text-black">Wedding</option>
                <option className="text-black">Birthday</option>
                <option className="text-black">Corporate</option>
                <option className="text-black">School</option>
                <option className="text-black">Baby Shower</option>
                <option className="text-black">Other</option>
              </select>
            </div>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            className="w-full rounded-2xl p-5 bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 text-text-primary dark:text-white resize-none"
            rows={4}
            placeholder="Tell us about your event..."
          />

          <button
            type="submit"
            className="w-full h-16 bg-linear-to-r from-primary to-secondary text-white text-lg font-black rounded-2xl flex items-center justify-center gap-3 hover:-translate-y-0.5 transition-all"
          >
            Get a Quote
            <ArrowRight className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
