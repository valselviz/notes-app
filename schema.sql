CREATE TABLE users (
	username VARCHAR(255) PRIMARY KEY,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE notes (
	id SERIAL PRIMARY KEY,
	description VARCHAR(1000) NOT NULL,
	archived BOOLEAN NOT NULL,
	username VARCHAR(255) NOT NULL,
	FOREIGN KEY (username) REFERENCES users(username)
);

INSERT INTO users VALUES ('Valeria', '1234');
INSERT INTO users (username, password) VALUES ('Jhon', '1234');

INSERT INTO notes (description, archived, username) VALUES ('Buy milk', false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Buy coffee', false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Buy medicine', false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Buy soap', false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES (concat('Invite people to birthday:', CHR(10), '-James', CHR(10), '-Jhon', CHR(10), '-Tom', CHR(10), '-Anna', CHR(10), '-George', CHR(10), '-Gina'), false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Visit grandma', false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Visit uncle', false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Cook diner', true, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Walk dog', false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Water plants. You hace to be particularly careful with the ground humidity. The moisture level needs to be at 15 percent.', false, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Read book', true, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Pay taxes', true, 'Valeria');
INSERT INTO notes (description, archived, username) VALUES ('Play golf', false, 'Jhon');
INSERT INTO notes (description, archived, username) VALUES ('Clean house', true, 'Jhon');

