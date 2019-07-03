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
- Redux (I wanted to use apollo for the local state management)
- Web Payment API for filling the form
- quicklinks
- Cache by ServiceWorker (powered by WorkBox)

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
- [x] Document
- [x] Test

## 難しかったこと

- GraphQL のモックテストどうやる？
- GraphQL のクエリの型付
- now.shでホストすればNextのserverいらないということになかなか気づけなかった
