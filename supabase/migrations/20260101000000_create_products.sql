create table if not exists products (
  id bigint generated always as identity primary key,
  name text not null,
  description text,
  price numeric(10, 2) not null check (price >= 0),
  stock integer not null default 0,
  image_url text,
  created_at timestamptz not null default now()
);
