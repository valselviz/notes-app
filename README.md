# Coding challenge developed by Valeria Selviz

Conding challenge developed by Valeria Selviz over the weekend of 2024-02-17 and 2024-02-18.
It is a sticky post notes application.

![Alt text](screenshot.png?raw=true "Screenshot")

## Running the backend API

To run the backend you need a PostgreSQL database installed on your system.
The postgres instalation should:

- run on port: 5432
- have a database named: notes-app-db
- have a user named: postgres with password: valeria
- initialize the schema and data with the scheme.sql script

Once the database is set up go to the backend directory, and execute the running command:

```
cd notes-app-backend
npm run dev
```

## Running the frontend

Go to the frontend directory, and execute the running command:

```
cd notes-app-frontend
npm run start
```
