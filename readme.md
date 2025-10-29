# Atividade 03 — SPA (Cadastro & Doação)

Resumo
Este projeto converte a interface estática da ONG "Verde Esperança" em uma Single Page Application (SPA) usando JavaScript modular. Implementa roteamento simples, sistema de templates em JS, validação de formulários com feedback ao usuário e persistência via localStorage.

Status
Concluído — Telas implementadas: Cadastro e Doação

Principais funcionalidades
- Roteamento SPA (hash routing) entre as telas "Cadastro" e "Doação" sem recarregar a página.
- Templates JavaScript para renderização dinâmica das views.
- Validação de formulários com checagem de obrigatoriedade, formatos (email, telefone) e foco no campo com erro.

Como testar localmente
1. Garanta a estrutura de pastas e arquivos conforme acima.
2. Recomenda-se servir o projeto por um servidor local:
     - Usando Node: npx http-server
     - Ou extensão VS Code: Live Server
3. Abra o navegador em http://localhost:8080 (ou porta informada).
4. Navegue entre as telas (menu ou links) e confirme que a página não recarrega.
5. Teste os formulários:
     - Enviar sem preencher para ver mensagens de erro.
     - Testar formatos inválidos (email, telefone).
     - Ao enviar válido, os dados devem ser salvos no localStorage e aparecer feedback de sucesso.

Critérios de avaliação (resumido)
- SPA funcional entre "Cadastro" e "Doação".
- Templates JS bem organizados e reutilizáveis.
- Validação robusta com mensagens claras e prevenção de submissão inválida.
- Estrutura de pastas limpa e modularização do código.
- Repositório público no GitHub com todo o código e assets.

Checklist de entrega
- [ ] Repositório GitHub público com todo o código
- [ ] Estrutura de pastas conforme especificado
- [ ] Pasta /assets/js com módulos organizados
- [ ] SPA funcional (Cadastro & Doação)
- [ ] Validação de formulários funcionando
- [ ] README.md informativo (este arquivo)

Link público do repositório (obrigatório)
- Link público do GitHub: 

Autor
- Aluno: Daniel Alves dos Santos
- Curso: Desenvolvimento Front-End para Web — Disciplina CC

