# Supabase setup (do this before Day 2)

This repo has a migration that creates the `products` table, plus seed data
(44 sample SummitGear products) so you have real rows to work with immediately.

## 1. Create your own Supabase project
Go to [supabase.com](https://supabase.com), create a free project. Note your
project's **Project Reference ID** (Project Settings → General) and your
**API URL** / **anon public key** (Project Settings → API).

## 2. Install the Supabase CLI
Already listed as available in this environment. If you need it elsewhere:
```
npm install -g supabase
```

## 3. Log in and link this repo to your project
```
supabase login
supabase link --project-ref <your-project-ref>
```

## 4. Push the schema and seed data
```
supabase db push --include-seed
```
This runs the migration in `supabase/migrations/` (creates the `products` table)
and applies `supabase/seed.sql` (inserts 44 sample products). The `--include-seed`
flag is required — without it, `db push` only creates the table and leaves it empty.

## 5. Set your .env
Copy `.env.example` to `.env` and fill in your project's `SUPABASE_URL` and
`SUPABASE_KEY` (the anon public key) from Project Settings → API.

## 6. Verify
Open your Supabase dashboard → Table Editor → `products`. You should see 44 rows.
Once that's confirmed, you're ready to start the Day 2 tickets.
