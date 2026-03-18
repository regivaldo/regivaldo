import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { portfolioItems } from '../../public/data/portfolio';

const inputClass =
  'w-full rounded-lg border border-white/10 bg-dark px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-primary-500';

const PortfolioFormAdminPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id) && id !== 'novo';

  const [form, setForm] = useState({
    title: '',
    client: '',
    description: '',
    technologies: '',
    link: '',
  });

  useEffect(() => {
    if (isEditing) {
      const portfolio = portfolioItems.find((p) => p.id === id);
      if (portfolio) {
        setForm({
          title: portfolio.title,
          client: portfolio.client,
          description: portfolio.description,
          technologies: portfolio.technologies.join(', '),
          link: portfolio.link ?? '',
        });
      }
    }
  }, [id, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: salvar via API
    navigate('/admin/portfolio');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-100">
          {isEditing ? 'Editar projeto' : 'Novo projeto'}
        </h2>
        <button
          onClick={() => navigate('/admin/portfolio')}
          className="text-slate-400 hover:text-white transition-colors text-lg cursor-pointer"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-xs text-slate-400">Título *</label>
          <input name="title" required value={form.title} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">Cliente *</label>
          <input name="client" required value={form.client} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">Descrição *</label>
          <textarea name="description" required rows={3} value={form.description} onChange={handleChange} className={`${inputClass} resize-none`} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">Tecnologias (separadas por vírgula) *</label>
          <input name="technologies" required value={form.technologies} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">Link do projeto</label>
          <input name="link" value={form.link} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-primary-600 py-2.5 text-sm font-medium text-white hover:bg-primary-500 transition-colors"
          >
            {isEditing ? 'Salvar' : 'Criar'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/portfolio')}
            className="flex-1 rounded-lg border border-white/10 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioFormAdminPage;
