# 007 — Validação e documentação

Status: concluída.

## Objetivo

Validar a entrega local e documentar manutenção e futura hospedagem.

## Dependências

001 a 006.

## Checklist

- [x] Verificar rotas, links, metadados e arquivos
- [x] Executar auditorias em celular, tablet e desktop
- [x] Verificar menu, movimento reduzido e ausência de JavaScript
- [x] Inspecionar visualmente capturas
- [x] Documentar limitações e atualizar tarefas e README

## Critérios de aceite

Verificações aprovadas; documentação descreve o comportamento efetivamente entregue, sem declarar publicação.

## Evidências da entrega — 2026-10-23

- `python3 scripts/check.py`: cinco rotas aprovadas, com idiomas, H1, metadados, arquivos, âncoras e destinos de compra conferidos.
- `node --check assets/js/site.js`: aprovado.
- Playwright/Chromium + axe: 20 combinações de rota e viewport (360, 390, 768 e 1440 px), sem violações nas regras WCAG A/AA executadas, imagens ausentes, rolagem horizontal ou erros de JavaScript/HTTP.
- Testes de teclado: abertura, Tab, Escape e retorno do foco aprovados; navegação pelo menu móvel funcional.
- Preferência de efeitos persistente e redução do sistema verificadas. As cinco páginas mantêm conteúdo e navegação disponíveis sem JavaScript.
- Capturas de desktop e celular revisadas visualmente, incluindo abertura, capas, percurso de leitura e retrato. O contorno decorativo que excedia o viewport móvel foi corrigido.
- `python3 scripts/build.py`: gera a pasta pública `dist/`. `git diff --check`: aprovado.

## Limites e próximos passos

Testes de navegador executados em Chromium; Safari, Firefox e leitores de tela não foram testados. Transições entre documentos dependem do suporte do navegador e têm fallback para navegação normal. Os destinos Amazon correspondem aos ASINs informados; disponibilidade comercial não foi verificada. A capa inglesa oficial permanece ausente e a imagem portuguesa está explicitamente identificada. Publicação, domínio, URLs sociais absolutas, sitemap e configuração do provedor ficam para a etapa de hospedagem.
