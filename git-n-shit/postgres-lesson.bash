// only queries need the semi-colon
psql > start postrgres
\? > help commands
\h > more help
"help" > more help
\q > exit
> SELECT NOW(); > date-time-stamp
> CREATE USER postgreslesson WITH PASSWORD 'postgreslesson'; 
> CREATE DATABASE postgreslesson;
> GRANT ALL PRIVILEGES ON DATABASE postgreslesson to postgreslesson;
\l > list all databases
\c <name> > connect to database
psql -U postgreslesson
psql -U <db-user> -d <db-name>
CREATE TABLE items();
\d > list your tables

SELECT * FROM items;
DROP TABLE items;
CREATE TABLE items(title text, description text, imageurl text);
ALTER TABLE items ADD COLUMN itemid serial;
\dt
\du
CREATE TABLE tags(tagid serial, title text);
SELECT * FROM tags;
\d tags
ALTER TABLE items ADD PRIMARY KEY (itemid);
// primary key improves the speed of the queries
\d items
ALTER TABLE tags ADD PRIMARY KEY (tagid);
ALTER TABLE items RENAME COLUMN itemid TO id;
ALTER TABLE items ALTER COLUMN title SET NOT NULL;
ALTER TABLE items ALTER COLUMN description SET NOT NULL;
ALTER TABLE items ALTER COLUMN ownerid  SET NOT NULL;
ALTER TABLE items ALTER COLUMN imageurl  SET NOT NULL;
ALTER TABLE
ALTER TABLE items ALTER COLUMN description  SET DEFAULT 'GREAT Item.';
// we can set all kind of constraints

\d tags
ALTER TABLE tags ALTER COLUMN title SET NOT NULL;
ALTER TABLE items ADD COLUMN created timestamp;
ALTER TABLE items ALTER COLUMN created SET DEFAULT now();
ALTER TABLE items ALTER COLUMN created TYPE timestamp with time zone;
CREATE TABLE itemtags(tagid text, itemid text);
ALTER TABLE itemtags ADD CONSTRAINT tagid FOREIGN KEY (tagid) REFERENCES tags (tagid);
// ALTER TABLE itemtags ALTER COLUMN tagid TYPE integer; // something goofy bout this one
ALTER TABLE itemtags ALTER COLUMN tagid TYPE integer USING tagid::integer;
ALTER TABLE itemtags ALTER COLUMN itemid TYPE integer USING tagid::i
ALTER TABLE itemtags ALTER COLUMN itemid TYPE integer USING tagid::integer;ALTER TABLE itemtags ADD CONSTRAINT tagid FOREIGN KEY (tagid) REFERENCES tags (tagid);
DROP TABLE itemtags;
CREATE TABLE itemtags ( itemid )
DROP TABLE itemtags;
CREATE TABLE itemtags(itemid integer REFERENCES items (id), tagid integer REFERENCES tags (tagid), unique(itemid, tagid));
\d tags
ALTER TABLE tags ADD CONSTRAINT unique_title UNIQUE (title);
// this is. acommented out command ALTER TABLE tags ADD PRIMARY KEY (tagid);

