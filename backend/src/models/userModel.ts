import { db } from '../config/db';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  likedAreas?: string;
}

export interface AllUsers {
  id: number;
  name: string;
  email: string;
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const [rows] = await db.query('SELECT * FROM user WHERE email = ?', [email]);
  const result = rows as User[];
  return result.length > 0 ? result[0] : null;
};

export const findAllUsers = async (): Promise<AllUsers[]> => {
  const [rows] = await db.query('SELECT id, name, email FROM user');
  return rows as AllUsers[];
};

export const createUser = async (
  name: string,
  email: string,
  hashedPassword: string
) => {
  const [result]: any = await db.query(
    'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );

  return result;
};
