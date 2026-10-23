# Regivaldo Fernandes — site literário

Site estático com atmosfera de cinema sombrio para apresentar Regivaldo Fernandes e suas publicações: **Vingança**, **Suicídio** e **Suicide**. Entrega local; nenhuma publicação ou configuração de serviço externo foi realizada.

## Executar localmente

Requer Python 3. Não há dependências de produção, backend ou framework. O desenvolvimento usa os HTML diretamente; a publicação usa o build com o domínio configurado para completar os metadados de SEO.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abra <http://127.0.0.1:8000>. Use um servidor HTTP; os caminhos começam em `/` e não funcionam por duplo clique em `index.html`. A hospedagem deve servir o site na raiz do domínio.

## Tecnologias e estrutura

HTML semântico por rota, CSS compartilhado e JavaScript em módulo nativo. A navegação e todo o conteúdo estão no HTML, inclusive sem JavaScript. Fontes locais do sistema: Georgia/Times para títulos e Arial/Helvetica para leitura; sem solicitações a serviços de fontes.

```text
index.html                 Início
obras/{vinganca,suicidio,suicide}/index.html
sobre/index.html           Sobre o autor
assets/brand/              Monogramas SVG claro/escuro e favicon
assets/images/             Originais e derivados WebP
assets/css/site.css        Layout, temas e responsividade
assets/js/site.js          Menu, preferências e efeitos progressivos
assets/social/             Cinco miniaturas JPEG de compartilhamento (1200 × 630)
site.json                  Domínio público definitivo
scripts/                   Validação, SEO, miniaturas e build para dist
tasks/                    Índice e sete tarefas concluídas
```

| Rota | Conteúdo | Compra |
| --- | --- | --- |
| `/` | Apresentação e percurso pelas publicações | — |
| `/obras/vinganca/` | Vingança | `https://www.amazon.com.br/dp/B00LCCX548` |
| `/obras/suicidio/` | Suicídio | `https://www.amazon.com.br/dp/B012UO8RHQ` |
| `/obras/suicide/` | Suicide; conteúdo e navegação em inglês | `https://www.amazon.com/dp/B01I3L0PY8` |
| `/sobre/` | Retrato e apresentação breve | — |

## Materiais e decisões editoriais

Os quatro arquivos foram fornecidos no repositório e movidos sem alteração para `assets/images/`: `autor.jpg`, `capa-vinganca.png`, `capa-suicidio.jpg` e `guarda-vinganca.png`. Os arquivos WebP são derivados de exibição, com orientação EXIF aplicada, dimensão máxima de 1200 × 1400 px e qualidade 85. Os originais permanecem disponíveis. O retrato recebe enquadramento e tratamento em CSS; as capas mantêm proporção e aparecem completas.

**A capa inglesa oficial não foi fornecida.** A página de *Suicide* usa a capa portuguesa com a legenda “Portuguese edition cover”. Substituir somente quando a imagem correta estiver disponível. As capas preservam o nome impresso originalmente; a identidade textual usa Regivaldo Fernandes.

Não foram fornecidas sinopses detalhadas, datas biográficas, prêmios, avaliações ou citações. Os textos se restringem às obras, gêneros e relação entre edições informados no plano. Não há inferências biográficas a partir do retrato.

O monograma RF foi desenhado com caminhos SVG entrelaçados e uma linha inclinada que sugere uma página entreaberta. Há versões clara e escura, além do favicon. A direção visual combina títulos serifados, espaço amplo, assimetria e fundos escuros. *Vingança* incorpora o azul e o vermelho da capa e a guarda em elementos decorativos; *Suicídio* e *Suicide* usam verdes, névoa e diagonais. A página inicial alterna composições para evitar uma grade repetitiva.

## Movimento e acessibilidade

- Rolagem nativa, revelações por `IntersectionObserver`, parallax limitado a 24 px e luz suave ao mover o mouse nas páginas das obras.
- Transições entre documentos usam `@view-transition`, quando suportado; a navegação convencional funciona nos demais navegadores.
- `prefers-reduced-motion` prevalece sobre os efeitos. “Reduzir efeitos” guarda a escolha em `localStorage`, quando disponível. Em telas pequenas, o parallax e a luz do ponteiro ficam desativados.
- Menu móvel como divulgação, sem modal ou aprisionamento de foco: Enter/espaço abre, Tab percorre links e Escape fecha devolvendo o foco ao botão. Sem JavaScript, todos os links ficam visíveis.
- Link de salto, foco visível, um H1 por página, títulos/descrições próprios, imagens com alternativas e dimensões, landmarks e idiomas declarados.

## Verificação

Checagens locais sem instalação:

```sh
npm run check
```

Para reproduzir os testes de navegador, com Node.js e npm disponíveis:

```sh
npm ci
npx playwright install chromium
# Mantenha o servidor local rodando em outro terminal.
npm run test:browser
```

O script testa as cinco rotas em 360, 390, 768 e 1440 px: HTTP, imagens, ausência de rolagem horizontal e regras WCAG A/AA via axe. Também verifica menu por teclado, Escape e retorno do foco, preferência persistente, redução pelo sistema e conteúdo sem JavaScript. Use `SITE_URL` para apontar para outro servidor. Capturas são gravadas em `/tmp/rf-home-desktop.png` e `/tmp/rf-home-mobile.png`.

Resultados da entrega são registrados em [tasks/007-validacao-documentacao.md](tasks/007-validacao-documentacao.md). A auditoria automatizada não substitui uma avaliação humana com leitores de tela. Os URLs de compra são verificados contra os ASINs fornecidos; disponibilidade, preço e conteúdo da Amazon não foram auditados.

## Atualizar conteúdo

Edite o HTML da rota correspondente, incluindo título e descrição. O build usa esses dois campos como fonte para Open Graph e Twitter Cards, evitando divergências entre as prévias. Cabeçalho e rodapé são repetidos intencionalmente para servir documentos completos sem JavaScript ou build; mudanças nesses elementos devem ser aplicadas aos cinco arquivos, preservando a versão inglesa. Estilos e comportamentos ficam centralizados em `assets/`.

Para trocar uma imagem, preserve o original, gere o WebP correspondente e atualize `src`, `width`, `height` e texto alternativo. Atualize a composição em `scripts/social-cards.cjs` e execute `npm run social:generate` para renovar as miniaturas de compartilhamento (requer npm ci e Chromium do Playwright). As composições usam HTML/CSS e as imagens existentes, com uma miniatura própria por página; a edição inglesa identifica a capa portuguesa. A ferramenta usada para os derivados foi Pillow (opcional, somente para processamento de imagens): `ImageOps.exif_transpose`, conversão RGB, `thumbnail((1200, 1400))`, `save(..., quality=85, method=6)`.

Para incluir uma obra, copie uma página em `obras/`, crie a rota, substitua texto e materiais e confira o ASIN. Defina a paleta por variáveis CSS (`--bg`, `--accent`, `--muted`), acrescente a obra ao percurso inicial e atualize as rotas e destinos em `scripts/check.py` e `scripts/browser-check.cjs`. Execute as verificações novamente.

## Preparar hospedagem estática

Defina o domínio definitivo no campo `url` de `site.json`, por exemplo `{"url": "https://seu-dominio.com.br"}`. O valor deve usar HTTPS e não pode conter caminho, porta, parâmetros ou fragmento. A hospedagem na raiz é obrigatória.

```sh
npm run build
python3 -m http.server 8001 --bind 127.0.0.1 --directory dist
```

Para informar o domínio pelo ambiente, use `SITE_URL=https://seu-dominio.com.br npm run build`. Essa variável tem prioridade sobre `site.json`. Sem um domínio configurado, o build falha antes de alterar `dist/`, para evitar publicar URLs inventadas ou locais. Publique **o conteúdo de `dist/`**: os HTML de desenvolvimento na raiz não contêm os campos que dependem do domínio.

`dist/` contém HTML, imagens, CSS, JS, SVG, `robots.txt` e `sitemap.xml`; fica fora do Git. O script atualiza as pastas públicas geradas, sem alterar os fontes. A hospedagem deve suportar `index.html` em subdiretórios, sem redirecionar todas as rotas para a página inicial.

O build inclui, em cada HTML, URL canônica, Open Graph e Twitter Cards completos com imagem JPEG exclusiva e URL absoluta, dimensões e texto alternativo. Também gera JSON-LD (`WebSite`, `Person`, `WebPage`/`AboutPage`, `Book` e breadcrumbs), sem inventar datas, ISBNs, avaliações ou preços. As edições portuguesa e inglesa de Suicídio têm `hreflang` recíproco. O sitemap lista as cinco URLs canônicas e o robots.txt permite o rastreamento e informa a localização do sitemap. Não são usadas datas artificiais de modificação.

`npm run check` valida as cinco páginas, a geração dos metadados, as imagens sociais, o JSON-LD, os idiomas, o sitemap e o tratamento de domínios inválidos. `scripts/check-seo.py` usa um domínio reservado de teste apenas em memória; ele nunca é gravado na configuração de produção.

Após publicar, confira se as cinco páginas, as imagens sociais, `/robots.txt` e `/sitemap.xml` respondem publicamente com HTTP 200, sem autenticação ou bloqueio de robôs. Configure HTTPS e redirecionamentos permanentes no provedor para escolher uma só versão do domínio (www ou sem www), redirecionar HTTP para HTTPS e normalizar URLs com `/index.html` para a rota canônica.

Verifique a propriedade no Google Search Console e envie `/sitemap.xml`. Use a inspeção de URL para acompanhar a indexação e o Rich Results Test para conferir os dados estruturados. Redes sociais podem manter prévias antigas em cache; após a publicação, solicite uma nova leitura no depurador da plataforma. A presença de metadados e sitemap não garante indexação, posição no Google ou exibição idêntica em todas as plataformas.

Referências: [Guia de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) e [Open Graph](https://ogp.me/). Nenhuma publicação ou configuração de serviço externo foi realizada.

Consulte a sequência de implementação em [tasks/README.md](tasks/README.md).
