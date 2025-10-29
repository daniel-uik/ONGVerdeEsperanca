# Atividade 01 — Estrutura HTML5 Semântica

Resumo  
Criar uma estrutura HTML5 semântica completa em no mínimo 3 páginas distintas, com hierarquia de títulos consistente e uso de imagens relevantes. Implementar formulário complexo e interativo com validação nativa e máscaras de input.

Páginas obrigatórias
- index.html — Página inicial sobre a organização, com informações de contato e imagem.
- projetos.html — Projetos sociais: voluntariado e como doar, com imagens e seções semânticas.
- cadastro.html — Formulário de cadastro completo.
- doacao.html — Página opcional para processo de doação (pode ser linkada a partir de projetos.html).

Requisitos de estrutura e conteúdo
- Usar elementos semânticos HTML5: header, nav, main, section, article, aside, footer.
- Aplicar hierarquia de títulos de forma lógica (h1 por página, subsequentes em ordem).
- Incluir imagens em cada página com atributo alt descritivo.
- Criar pelo menos 3 páginas navegáveis entre si via menu.


## Status — Realizado

O projeto foi implementado conforme os requisitos e testado localmente. Principais entregas:

- Estrutura semântica completa nas páginas index.html, projetos.html, cadastro.html (e doacao.html, quando presente): uso de header, nav, main, section, article, aside e footer; hierarquia de títulos consistente; imagens com atributos alt; menu de navegação entre páginas.
- Acessibilidade básica garantida: foco visível, navegação por teclado e uso de atributos aria-* quando necessário.
- Formulário em cadastro.html concluído com os campos exigidos (Nome Completo, E‑mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade, Estado); tipos de input HTML5 apropriados; validação nativa via required, pattern, minlength e maxlength; campos agrupados com fieldset/legend.
- Máscaras de input implementadas no cliente para CPF, telefone e CEP (script leve) e mensagens de erro/sucesso exibidas de forma acessível (aria-live).
- Testes realizados: execução em servidor local, navegação entre páginas, inspeção semântica, verificação de hierarquia de títulos, testes de formulário (envio bloqueado quando requerido, validação de patterns, máscaras durante digitação), testes de acessibilidade básicos (teclado, foco, textos alternativos) e validação HTML no W3C Markup Validator — sem erros após correções.

Link público do repositório: 
