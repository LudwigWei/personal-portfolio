import { useState, useEffect } from "react";
import { X, Github, Facebook, Instagram, Linkedin } from "lucide-react";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#ececec] rounded-2xl p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in Touch.</h2>
        <p className="mt-3 text-neutral-700 max-w-lg">
          Fill out the form below or reach out via email. I'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
            className="w-full bg-transparent border border-neutral-400 rounded-2xl px-5 py-4 text-base placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            className="w-full bg-transparent border border-neutral-400 rounded-2xl px-5 py-4 text-base placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 transition"
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            maxLength={1000}
            className="w-full bg-transparent border border-neutral-400 rounded-2xl px-5 py-4 text-base placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-neutral-900 text-white rounded-2xl py-4 text-base font-medium hover:bg-neutral-800 transition"
          >
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>

        <hr className="my-8 border-neutral-300" />

        <div className="text-center">
          <p className="text-xs tracking-widest text-neutral-600">OR CONNECT DIRECTLY</p>
          <div className="mt-5 flex items-center justify-center gap-6">
            <a href="https://github.com/LudwigWei" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-700 hover:text-neutral-900"><Github className="w-6 h-6" /></a>
            <a href="https://www.facebook.com/crisaldolv" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-700 hover:text-neutral-900"><Facebook className="w-6 h-6" /></a>
            <a href="https://www.instagram.com/crisaldolv_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-700 hover:text-neutral-900"><Instagram className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/louis-vincent-crisaldo-43aa403a9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-700 hover:text-neutral-900"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
