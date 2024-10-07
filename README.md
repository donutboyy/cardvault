# Card Vault

A card database and card management application.

## Progress

MVP: Ability to search up cards and view their data

- [x] Scaffold basic UI with mock data
  - [x] Single Card Page
  - [x] Card Search Page
- [x] Attach database to ui
- [x] Make it deploy
- [ ] Set up database with card data
  - [ ] Basic cards schema
  - [ ] Set up testing environment
  - [ ] Set up github actions to run tests on PR + coverage
  - [ ] Add rest of the card relations + tests
  - [ ] Upload real card data from fabrary/cards
- [ ] Create endpoints
  - [ ] GET single card
  - [ ] GET multiple cards
    - [ ] pagination
    - [ ] filters

Future:

- [ ] Authentication
- [ ] Error management (sentry)
- [ ] Deck builder
- [ ] Collection Management

## Notes

- local environment file must be `.env` as drizzle will not currently detect any wildcards after that such as `.env.local`

test
