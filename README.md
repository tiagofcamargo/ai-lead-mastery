# AI Lead Mastery

Aplicação web construída com React + Vite + TypeScript.

> Objetivo do projeto: (descreva em 1–2 linhas o que é o AI Lead Mastery e para quem é).

---

## ✨ Stack

- **Vite** (build/dev server)
- **React 18**
- **TypeScript**
- **React Router DOM** (rotas)
- **Tailwind CSS** + **shadcn/ui** (Radix UI) para UI
- **React Hook Form** + **Zod** (forms + validação)
- **TanStack React Query** (cache/fetch de dados)
- **Recharts** (gráficos)

> Dependências principais estão em `package.json`.  

---

## ✅ Requisitos

- Node.js (recomendado: versão LTS)
- npm

---

## 🚀 Rodando localmente

```bash
npm install
npm run dev


A aplicação sobe por padrão em:

http://localhost:8080
```

🏗️ Build de produção
```
npm run build
npm run preview

```
🧱 Estrutura (sugestão)
src/
  components/   # componentes reutilizáveis
  pages/        # páginas/rotas
  routes/       # definição de rotas (separado, opcional)
  lib/          # utilitários (cn, helpers, etc.)
  hooks/        # hooks customizados
  services/     # integrações com API / clients

