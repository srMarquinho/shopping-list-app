[![Build Status](https://travis-ci.org/srMarquinho/shopping-list-app.svg?branch=master)](https://travis-ci.org/srMarquinho/shopping-list-app)
[![Coverage Status](https://coveralls.io/repos/github/srMarquinho/shopping-list-app/badge.svg?branch=coveralls)](https://coveralls.io/github/srMarquinho/shopping-list-app?branch=coveralls)

# ShopPing
A shopping list app that reminds you to buy your item depending on your location.

[![youtube](./docs/link.png)](https://www.youtube.com/watch?v=VPkfbeDOce8)

<img src="./docs/1.png" width="300"> <img src="./docs/2.png" width="300">

- Ruby version: `2.3.0`
- Rails version: `5.0.0`
- Server: Run `bin/rails server` and `http://localhost:3000/`
- Configuration: Run `bundle install`
- Database creation: Run `bin/rails db:create`
- Test suite: Run `rspec`
- Made to iOS

User stories:

```text
As a user
So I know what to buy
I can view a list of items
```

```text
As a user
So I view my own list of item
I want to be able to sign in
```

```text
As a user
So I can modify my list
I want to add and remove items for the list
```

```text
As a user
So I can specify where to buy an item
I want to add a location of an item
```

```text
As a user
So I can be reminded to buy an item
I want to receive a notification when near the location of an item
```

```text
As a user
So I can no longer get notified
I want to check the item as completed
```
