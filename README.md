# karszawa-store

You can buy karszawa goods here.

https://karszawa-store.siqvare.now.sh

## Tech Stack

### Frontend

- React
- Next
- TypeScript
- styled-components
- ApolloClient
- Jest
- ~~Redux~~
- Web Payment API for filling the form

### Backend

- Hosted on now.sh
- Graphcool as GraphQL server and datastore.

## Development

```
npm i
npm run dev
```

## Test

```
npm run test
```

## Deploy

```
now
```

## TODO

- [x] item list page
- [x] item detail page
- [x] checkout page
- [ ] Use [apollo codegen](https://github.com/apollographql/apollo-tooling)
- [x] Deploy
- [ ] Document
- [x] Test

## 難しかったこと

- GraphQL のモックテストどうやる？
- GraphQL のクエリの型付
- now.shでホストすればNextのserverいらないということになかなか気づけなかった
