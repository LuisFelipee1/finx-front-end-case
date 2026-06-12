# Otimização de Consulta dos Agendamentos Cirúrgicos — Fin-X 

Uma aplicação web moderna e responsiva desenvolvida para otimizar a visualização, filtragem e gerenciamento de solicitações de agendamentos cirúrgicos. O foco principal deste projeto foi solucionar problemas de lentidão de buscas e melhorar drasticamente a usabilidade (UX/UI) tanto em dispositivos desktop quanto mobile.

## 🚀 Tecnologias Utilizadas

* **React (v18+)** — Biblioteca para construção de interfaces baseadas em componentes.
* **TypeScript** — Tipagem estática para maior segurança e escalabilidade do código.
* **Vite** — Build tool ultra-rápido para o ambiente de desenvolvimento.
* **Tailwind CSS** — Framework CSS utilitário para estilização rápida, moderna e responsiva.
* **React Icons** — Pacote de ícones otimizados e leves para a interface.

---

## 🛠️ Arquitetura e Boas Práticas

O projeto foi construído seguindo rigorosos critérios técnicos de engenharia de software:
* **Conceitos SOLID & Clean Code:** Separação clara de responsabilidades entre componentes de UI, serviços de API e lógica de controle de estados.
* **Responsividade Avançada:** Layout totalmente fluido, garantindo excelente usabilidade em qualquer tamanho de tela.
* **Controle de Estados Eficiente:** Gerenciamento local e reatividade precisa para evitar renderizações desnecessárias.
* **Conventional Commits:** Histórico de versionamento organizado, semântico e profissional.

---

## 💾 Simulação de Dados (Mock API)

Para simular o consumo de dados de forma dinâmica através de chamadas HTTP `GET` a uma API REST, o projeto conta com um mock estruturado baseado nas especificações do contrato JSON fornecido. 
Os dados fictícios servem para validar em tempo real as seguintes funcionalidades:
* Filtros dinâmicos por nome de médico e paciente.
* Paginação estruturada de registros.
* Ordenação de datas de criação (Mais Recente / Mais Antigo).

---

## 💻 Como Rodar o Projeto Localmente

Siga o passo a passo abaixo para clonar, instalar as dependências e executar o projeto na sua máquina:

### 1. Clonar o Repositório
Abra o seu terminal e execute o comando para clonar o projeto através do GitHub:
## 🚀 Como Rodar Localmente

### 1. Clonar o Repositório

```bash
git clone https://github.com/LuisFelipee1/finx-front-end-case.git
```

### 2. Acessar a Pasta do Projeto

Navegue para o diretório que foi criado:

```bash
cd finx-front-end-case
```

### 3. Instalar as Dependências

Utilize o gerenciador de pacotes npm para baixar todas as bibliotecas necessárias listadas no `package.json`:

```bash
npm install
```

### 4. Executar em Ambiente de Desenvolvimento

Com as dependências instaladas, inicialize o servidor local:

```bash
npm run dev
```

Pronto! O terminal informará o endereço local (geralmente `http://localhost:5173`) para abrir no navegador e testar a aplicação.

---

## 🔗 Deploy e Link Público

A aplicação está publicada em ambiente de produção e pode ser acessada de qualquer dispositivo através da plataforma Vercel:

👉 [https://finx-front-end-case.vercel.app](https://finx-front-end-case.vercel.app)