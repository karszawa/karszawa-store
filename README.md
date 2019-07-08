# karszawa-store

You can buy karszawa goods here.

https://karszawa-store.siqvare.now.sh

## Technical stack

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

### Enhancement

- Chrome devtools
- React-axe chrome extension
- remove.bg to create favicon

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
npm run deploy
```

## TODO

- [x] item list page
- [x] item detail page
- [x] checkout page
- [ ] Use [apollo codegen](https://github.com/apollographql/apollo-tooling)
- [x] Deploy
- [x] Document
- [x] Test

## Difficulties

- About GraphQL
  - add types to queries
  - local state management
  - mocking
- About server
  - Once, I implemented express server only for handling url parameters
  - But, `now` helps me develop and deploy
