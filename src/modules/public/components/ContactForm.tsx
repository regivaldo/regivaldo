import { useState } from "react";
import type { ContactFormData } from "../types";

type Status = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // TODO: integrar com backend ou serviço de e-mail
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-slate-300">
            Nome *
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-dark px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-primary-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-dark px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-primary-500"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm text-slate-300">
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-dark px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-1 block text-sm text-slate-300"
          >
            Assunto *
          </label>
          <input
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-dark px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-primary-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-slate-300">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-white/10 bg-dark px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-primary-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-gradient-to-r from-primary-600 to-accent-500 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-400">
          Mensagem enviada com sucesso!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          Erro ao enviar. Tente novamente.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
