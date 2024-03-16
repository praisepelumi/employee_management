import pg from 'pg';
import { QueryResult } from 'pg';
const { PG_URI } = process.env;
const { Pool } = pg;
import 'dotenv/config';

const pool = new Pool({
  connectionString: PG_URI,
});

const query = (text, params) => {
  return pool.query(text, params);
};

export default query;
