# Infinite Scroll Server

## Purpose

The server has one endpoint that serves N amount of posts based on querystring parameters.

When the server is started, it fetches 5000 items from `https://jsonplaceholder.typicode.com/photos`. Then it serves them in chunks according to the request parameters.

## To run it

```bash
node index.js
```

## Endpoint

```
http://localhost:3001/posts
```

## Querystring parameters

```js
page; // which page you need to fetch
perPage; // how many posts per page
```

## Request example

```
http://localhost:3001/posts?page=1&perPage=10
```

Data returned (array of 10)

```json
[
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    ...
]

```
