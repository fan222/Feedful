# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

### Associations:
  * has_many: collections
  * has_many : feeds, through collections_feeds

## collections
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
user_id         | integer   | not null, index

### Associations:
  * belongs_to: user
  * has_many: feeds, through collections_feeds

## feeds
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | integer   | not null
url             | string    | not null

### Associations:
  * has_many: articles
  * has_many: category, through categories_feeds

## category
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null. primary key
name            | string    | not null

### Associations:
  * has_many: category, through categories_feeds

## collections_feeds
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
feed_id         | integer   | not null, index
collection_id   | integer   | not null, index

## categories_feeds
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
feed_id         | integer   | not null, index
category_id     | integer   | not null, index

## articles
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
author          | string    |
feed_id         | integer   | not null, index
published       | string    |
image           | string    |
summary         | string
content         | string
### Associations
  belongs_to: feed
