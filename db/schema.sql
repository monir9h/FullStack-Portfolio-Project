DROP DATABASE IF EXISTS flowers_dev;
CREATE DATABASE flowers_dev;

\c flowers_dev;

CREATE TABLE flowers (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 country TEXT,
 price INTEGER,
 url TEXT,
 is_favorite BOOLEAN
);
