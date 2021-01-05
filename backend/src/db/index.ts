const { Pool } = require('pg');
const types = require('pg').types;

// Connection to the database
export const pool = new Pool();

types.setTypeParser(20, (val: any) => { return parseInt(val) });

export default {
    query: async (text: string, params: any[]) => {
        const start = Date.now();
        const res = await pool.query(text, params);
        const duration = Date.now() - start;
        console.log('executed query', { text, duration, rows: res.rowCount });
        return res;
    },
}