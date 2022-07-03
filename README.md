# search-engine
This is a very basic search engine project built on SQLite, NodeJS, Express and the Pug templating engine.

A SQLite database contains a Results table which includes keyword/url pairs (such as: 'apple', 'https://www.apple.com').

As the user submits a query in the homepage, the SQLite database is queried and the resulting keyword (if any) is returned to the user in the results page

## Instructions for the SQLite DB

sqlite3 search-engine.db

SQLite version 3.39.0 2022-06-25 14:57:57

Enter ".help" for usage hints.

sqlite> .databases

main: search-engine.db r/w

sqlite> CREATE TABLE results(id INTEGER PRIMARY KEY AUTOINCREMENT, keyword varchar(255), url varchar(2000));

sqlite> .databases

main: search-engine.db r/w

sqlite> .tables

results

sqlite> INSERT INTO results(keyword,url) VALUES ('apple','https://www.apple.com');

sqlite>

sqlite> INSERT INTO results(keyword,url) VALUES ('google','https://www.google.com');

sqlite>

sqlite>

sqlite> .tables

results

sqlite> .databases

main: search-engine.db r/w

sqlite> SELECT url FROM results WHERE keyword IS 'google';

https://www.google.com

sqlite> SELECT url FROM results WHERE keyword IS 'aaa';

sqlite>


