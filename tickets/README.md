# Tickets — SummitGear Co. Backend

Fictional company: **SummitGear Co.** — an outdoor/camping gear ecommerce store.
Resource: `products` table (id, name, description, price, stock, image_url, created_at).

## How this works
Tickets are grouped by the class day they unlock. A ticket for `day-N` should only
be started after the Day N class lesson has happened — each day builds on concepts
taught that day, so don't jump ahead.

The Supabase connection (`src/config/supabaseClient.js`, `.env.example`) is already
set up in this repo from Day 1 — you'll use it starting Day 2 without needing to
build it yourself. Day 3 explains how that config actually works.

**Before Day 2:** follow [`supabase/README.md`](../supabase/README.md) to link your
own Supabase project and run `supabase db push`. This creates the `products` table
and seeds it with 10 sample products, so you have real data to work with on Ticket
2.1 instead of an empty table.

Work each ticket on its own branch (e.g. `feature/2.1-build-product-routes`) and open
a PR against your own fork's `main` when done, referencing the ticket file in the
description.

## Structure
```
tickets/
  day-2/
    2.1-build-product-routes.md
    2.2-split-routes-and-controllers.md
  day-3/
    ...
  stretch/
    (optional, unlocked after day 4, not taught live)
```

## Day index
- **Day 1** — class demo only, no tickets (routes taught live, Supabase config already in repo)
- **Day 2** — Full CRUD directly against Supabase, split into routes/controllers
- **Day 3** — Middleware + understanding the Supabase config that's already been in the repo
- **Day 4** — Validation & centralized error handling
- **Day 5** — Filtering, sorting & pagination
- **Day 6** — Deployment
- **Stretch** — optional, self-directed, unlocked after Day 4 (categories relationship)
