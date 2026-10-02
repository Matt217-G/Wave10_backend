# S.1 — Add a categories table and relationship

**Labels:** stretch-goal, optional

## Branch
Before starting, create your branch:
```
git checkout -b categories-relationship
```

## Description
Create a `categories` table in Supabase, add a `category_id` foreign key to `products`, and add `GET /categories/:id/products` using a Supabase joined `.select()`.

## Acceptance Criteria
- [ ] `categories` table exists with at least `id`, `name`
- [ ] `products.category_id` references `categories.id`
- [ ] `GET /categories/:id/products` returns all products in that category
- [ ] `GET /products` optionally includes category name via a joined select

## Submit
When your acceptance criteria are all checked off:
```
git add .
git commit -m "your message here"
git push origin categories-relationship
```
Your commit message should summarize what you actually changed (not just "done" or "fix") — write it like you're telling a teammate what this branch does.

Then open a Pull Request on your own fork's GitHub page (base: your `main`, compare: your branch) and add **your-instructor-github-username** as a reviewer.
