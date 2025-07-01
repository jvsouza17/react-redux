# Todo App com React e Redux

Este projeto é uma aplicação de lista de tarefas (Todo List) desenvolvida em React, utilizando o [React Redux](https://react-redux.js.org/) para gerenciamento de estado global. O objetivo é demonstrar como criar, marcar como concluídas e remover tarefas de forma eficiente, com persistência local dos dados.

## O que foi feito

- **Interface moderna**: Utilização de componentes funcionais do React e estilização em CSS.
- **Gerenciamento de estado global**: Implementado com Redux, facilitando o controle e atualização da lista de tarefas em toda a aplicação.
- **Persistência local**: As tarefas são salvas no `localStorage`, garantindo que não sejam perdidas ao recarregar a página.
- **Componentização**: Separação clara entre componentes como lista, item, formulário e modal.
- **Ações e reducers**: Uso de actions e reducers para adicionar, remover e marcar tarefas como concluídas.

## Sobre React Redux

O [React Redux](https://react-redux.js.org/) conecta o Redux ao React, permitindo que componentes acessem e atualizem o estado global da aplicação de forma eficiente. O ciclo de vida básico do React Redux é:

1. **Ação (Action)**: O usuário interage com a interface e dispara uma ação.
2. **Dispatch**: A ação é enviada (dispatch) para o Redux.
3. **Reducer**: O reducer recebe a ação e atualiza o estado global conforme necessário.
4. **Store**: O novo estado é armazenado na store do Redux.
5. **Componentes**: Os componentes conectados ao Redux recebem o novo estado e são re-renderizados automaticamente.

Hooks como `useSelector` e `useDispatch` facilitam o acesso ao estado e o envio de ações nos componentes React.

## Como rodar o projeto

No diretório do projeto, execute:

### `npm install`

Instala as dependências necessárias.

### `npm start`

Roda o app em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm run build`

Cria uma versão otimizada para produção na pasta `build`.

## Estrutura dos principais arquivos

- `src/App.js`: Componente principal, integra Redux e controla o modal.
- `src/components/`: Componentes reutilizáveis como lista, item, formulário e modal.
- `src/reducers/listReducer.js`: Lógica de atualização da lista de tarefas.
- `src/actions/listAction.js`: Actions para manipular as tarefas.

## Aprenda mais

- [Documentação do React](https://reactjs.org/)
- [Documentação do Redux](https://redux.js.org/)
- [Documentação do React Redux](https://react-redux.js.org/)