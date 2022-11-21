# api-articleandcomment

## Getting Started

1. Clone repository
2. Go to directory `api-articleandcomment`
3. Create file .env with content `DATABASE_URL` (mongodb url auth)
4. Run `npm run dev`

## API Articles

### Add article

`PUT`: localhost:3000/api/article

##### Body request:

title: `required`
slug: `optional`
content: `required`
status: `optional`

```
{
  "title": "{:title}",
  "slug": "{:slug}"
  "content": "{:content}"
  "status": "{:status}"
}
```

### Get one article

`GET`: localhost:3000/api/article/**{:\_id}**

### Get article with pagination

`GET`: localhost:3000/api/article?page=**{page}**

##### Body request:

title: `optional`
status: `optional`

```
{
  "title": "{:title}",
  "status": "{:status}"
}
```

### Update article

`POST`: localhost:3000/api/article/**{:\_id}**

##### Body request:

title: `optional`
slug: `optional`
content: `optional`
status: `optional`

```
{
    "title": "{:title}"
    "slug": "{:slug}"
    "content": "{:content}"
    "status": "{:status}"
}
```

### Delete article

`DELETE`: localhost:3000/api/article/**{:\_id}**

## API Comments

### Add comment

`PUT`: localhost:3000/api/comment

##### Body request:

value: `required`
article: `required`

```
{
  "value": "{:value}",
  "article": "{:article_id}"
}
```

### Get one comment

`GET`: localhost:3000/api/comment/**{:\_id}**

### Get comment with pagination

`GET`: localhost:3000/api/comment?page=**{page}**

##### Body request:

value: `optional`
articleid: `optional`

```
{
  "value": "{:value}",
  "article": "{:article_id}"
}
```

### Update comment

`POST`: localhost:3000/api/comment/**{:\_id}**

##### Body request:

value: `optional`
articleid: `optional`

```
{
  "value": "{:value}",
  "article": "{:article_id}"
}
```

### Delete comment

`DELETE`: localhost:3000/api/comment/**{:\_id}**
