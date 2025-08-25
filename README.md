# Lista de Tarefas

Um simples, porém robusto, aplicativo de lista de tarefas (To-Do List) construído com as tecnologias mais modernas do ecossistema JavaScript.

## ✨ Funcionalidades

- **Adicionar Tarefas:** Crie novas tarefas de forma rápida e intuitiva.
- **Excluir Tarefas:** Remova tarefas que já foram concluídas ou não são mais necessárias.
- **Editar Tarefas:** Modifique o conteúdo de tarefas existentes diretamente na interface.
- **Interface Moderna:** UI limpa e agradável construída com [shadcn/ui](https://ui.shadcn.com/) e [Tailwind CSS](https://tailwindcss.com/).
- **Notificações:** Feedback visual instantâneo para as ações do usuário através de notificações (Toasts).
- **Persistência de Dados:** As tarefas são salvas em um banco de dados, gerenciado pelo [Prisma ORM](https://www.prisma.io/).

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Um banco de dados compatível com o Prisma (ex: PostgreSQL, MySQL, SQLite).

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/felipelho/todo-list.git
    cd todo-list
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione a variável `DATABASE_URL` com a string de conexão do seu banco de dados.

    ```env
    # Exemplo para PostgreSQL
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```

4.  **Execute as migrações do banco de dados:**
    Este comando irá criar as tabelas necessárias no seu banco de dados com base no schema do Prisma.

    ```bash
    npx prisma migrate dev
    ```

5.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

6.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:3000`.
