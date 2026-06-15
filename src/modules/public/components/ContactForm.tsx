import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { ContactFormData } from '../types';
import { usePostContato } from '../apis/use-post-contato';
import { Button } from './ui';

const inputClass =
  'w-full rounded-lg border border-white/10 bg-dark/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-primary-400 focus:bg-dark';

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const { mutate, isPending, isSuccess, isError } = usePostContato();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutate(form, {
      onSuccess: () => setForm({ name: '', email: '', phone: '', subject: '', message: '' }),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Nome *</label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">E-mail *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="você@email.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">Telefone</label>
          <input id="phone" name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="WhatsApp" />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">Assunto *</label>
          <input id="subject" name="subject" required value={form.subject} onChange={handleChange} className={inputClass} placeholder="Site, sistema ou app" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">Mensagem *</label>
        <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Conte rapidamente o que você quer construir" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isPending} className="sm:w-auto">
          {isPending ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
        {isSuccess && <p className="text-sm text-green-400">Mensagem enviada com sucesso.</p>}
        {isError && <p className="text-sm text-red-400">Erro ao enviar. Tente novamente.</p>}
      </div>
    </form>
  );
};

export default ContactForm;
