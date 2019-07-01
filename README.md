# karszawa-store

You can buy karszawa goods here.

## TODO

- [x] item list page
- [x] item detail page
- [x] checkout page
- [ ] Use [apollo codegen](https://github.com/apollographql/apollo-tooling)
- [ ] Deploy
- [ ] Document
- [ ] Test

## Tech Stack

### Frontend

- React
- Next
- TypeScript
- styled-components
- ApolloClient
- ~~Redux~~
- Advanced
  - [ ] Portals for transition from item detail to checkout page
  - [ ] amp-stories for item list
  - [x] Web Payment API for filling the form
  - [ ] comlink (for what?)
  - [ ] perception-toolkit (for what?)

### Backend

- Graphcool as GraphQL server and datastore.

## 難しかったこと

- GraphQL のモックテストどうやる？
- GraphQL のクエリの型付
