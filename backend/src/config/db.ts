import dotenv from 'dotenv';
dotenv.config();

const mysql = require('mysql2/promise');

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

(async () => {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('✅ DB 연결 성공:', rows);
  } catch (error) {
    const err = error as Error; //error type은 unknown이기 때문에 타입 단언해주기
    console.error('❌ DB 연결 실패:', err.message);
    process.exit(1);
  }
})();
