# Atividade 6 - Estilização em React – "Mini Loja"

Este repositório contém o projeto da Atividade 6 do curso de Desenvolvimento Front-end, ministrado pelo Professor Jaques Antunes no programa +PraTi & Codifica.

O projeto consiste na criação de uma mesma aplicação web ("Mini Loja") com **ReactJS**, implementada quatro vezes para demonstrar diferentes metodologias de estilização. O objetivo é comparar as abordagens, entendendo suas vantagens e casos de uso no desenvolvimento de interfaces modernas e componentizadas.

---

### Tecnologias e Metodologias Utilizadas

- **ReactJS**: Para a construção da interface de usuário de forma componentizada e declarativa.
- **Vite**: Como ferramenta de build e servidor de desenvolvimento rápido.
- **JavaScript**: Para toda a lógica da aplicação, incluindo o gerenciamento de estado e tema.
- **Metodologias de Estilização:**
    - **CSS Global**: Com Variáveis CSS (Tokens) para Theming.
    - **CSS Modules**: Para estilos com escopo local por componente.
    - **Styled-Components**: Abordagem CSS-in-JS para componentes estilizados.
    - **Tailwind CSS**: Framework Utility-First para composição rápida de UI.

---

### Funcionalidades Comuns (Implementadas em todas as 4 versões)

- **Layout Responsivo**: A interface se adapta a 4 breakpoints (mobile, tablet e desktop) com a abordagem Mobile-First.
- **Dark Mode**: Toggle de tema (claro/escuro) funcional.
- **Persistência de Dados**: O tema escolhido é salvo no `localStorage` do navegador, mantendo a preferência do usuário.
- **Componentes Reutilizáveis**: `Navbar`, `ProductCard`, `Button`, `SkeletonCard`, etc.
- **Estados de UI**:
    - `Hover` com efeito de elevação nos cards.
    - `Focus` visível para acessibilidade na navegação por teclado.
    - `Disabled` para botões.
    - `Loading` com *Skeletons* para uma melhor experiência de usuário e para evitar *Layout Shift*.
- **Variantes de Componentes**: O componente de botão possui 3 variantes de estilo (`solid`, `outline`, `ghost`).

---

### Estrutura do Repositório

Este repositório segue um formato de **multiplos repositórios**, onde cada uma das quatro versões é um projeto Vite completo e independente.

```
/Prati_Lista_exercicios_6/
├── 01-css-global/          # Versão com CSS Global
├── 02-css-modules/         # Versão com CSS Modules
├── 03-styled-components/   # Versão com Styled-Components
├── 04-tailwind/            # Versão com Tailwind CSS
└── README.md               # Este arquivo
```

---

### Como Executar uma Versão Localmente

#### Pré-requisitos
* **Node.js**: Versão LTS (18.x ou superior).
* **Git**: Para clonar o repositório.

#### Passos
1.  **Clone o Repositório**
    ```bash
    # Substitua a URL pela URL do seu novo repositório
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    ```
2.  **Navegue até a pasta da versão desejada**
    ```bash
    # Exemplo para a versão com CSS Global
    cd Prati_Lista_exercicios_6/01-css-global
    ```
3.  **Instale as Dependências**
    ```bash
    npm install
    ```
4.  **Rode a Aplicação**
    ```bash
    npm run dev
    ```
    Abra o endereço local (ex: `http://localhost:5173`) que aparecer no terminal.

### Autor
- **Ikaro França Leal** - Professor, **Jaques Antunes**
- Projeto desenvolvido como parte do curso +PraTI e Codifica.

### Links
- Repositório no GitHub: https://github.com/Ikaro-Leal/Prati_Lista_exercicios_6
