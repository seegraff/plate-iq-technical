# Plate IQ Technical
## Requirements
- Python 3
- Django 2
- PostgreSQL @ localhost:5432

## Structure
- 'api' folder contains Django application
- 'client' folder contains Angular code
- 'gulp' folder contains Gulp tasks for compiling
- 'static' folder contains static content hosted by Django

## Operation
- Install dependencies and run migrations
- Run from root: `gulp build-dev`
- Run from 'api': `./manage.py runserver`

## Data
- You can seed the DB with: `./manage.py loadtestdata category.CategoryItem:25 book.BookItem:50`
- Unfortunately auth.User isn't as easy due to deprecation of the autofixture package...
    - You can instead run: `./manage.py shell_plus`
    - Then run (with errors) multiple times:

```
import autofixture
autofixture.create('auth.User', 1)
```

## Tests
- `./manage.py test`
