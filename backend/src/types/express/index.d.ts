//express.Request 전역 타입 선언
import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      userId: number;
      name: string;
      email: string;
    };
  }
}
