import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { products } from '../../public/data/products';

const inputClass =
  'w-full rounded-lg border border-white/10 bg-dark px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-primary-500';

const ProductFormAdminPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id) && id !== 'novo';

  const [form, setForm] = useState({
    title: '',
    slug: '',
    description: '',
    icon: '',
    tag: '',
    features: '',
    link: '',
    linkLabel: '',
  });

  useEffect(() => {
    if (isEditing) {
      const product = products.find((p) => p.id === id);
      if (product) {
        setForm({
          title: product.title,
          slug: product.slug,
          description: product.description,
          icon: product.icon,
          tag: product.tag ?? '',
          features: product.features.join('\n'),
          link: product.link ?? '',
          linkLabel: product.linkLabel ?? '',
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
    navigate('/admin/produtos');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-100">
          {isEditing ? 'Editar produto' : 'Novo produto'}
        </h2>
        <button
          onClick={() => navigate('/admin/produtos')}
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
          <label className="mb-1 block text-xs text-slate-400">Slug *</label>
          <input name="slug" required value={form.slug} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">Descrição *</label>
          <textarea name="description" required rows={3} value={form.description} onChange={handleChange} className={`${inputClass} resize-none`} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-xs text-slate-400">Ícone (emoji)</label>
            <input name="icon" value={form.icon} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-400">Tag</label>
            <input name="tag" value={form.tag} onChange={handleChange} className={inputClass} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-xs text-slate-400">Link externo</label>
            <input name="link" value={form.link} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-400">Label do link</label>
            <input name="linkLabel" value={form.linkLabel} onChange={handleChange} className={inputClass} />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">Features (uma por linha) *</label>
          <textarea name="features" required rows={4} value={form.features} onChange={handleChange} className={`${inputClass} resize-none`} />
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
            onClick={() => navigate('/admin/produtos')}
            className="flex-1 rounded-lg border border-white/10 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFormAdminPage;
