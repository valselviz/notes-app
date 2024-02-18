import pg from "pg";

const databasePool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "notes-app-db",
  password: "valeria",
  port: 5432,
});

export default databasePool;
