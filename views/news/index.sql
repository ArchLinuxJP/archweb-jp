DELETE FROM news;
DROP TABLE news;
VACUUM;

CREATE TABLE
	news (
		url TEXT,
		headline TEXT,
		created TEXT,
		modified TEXT,
		author TEXT
	);

INSERT INTO
	news
VALUES
	(
		"dropping-plasma-4",
		"Plasma 4 のサポート終了",
		"2015-12-12",
		"2015-12-12",
		"Antonio Rojas"
	);
