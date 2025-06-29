"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const asyncHandler_1 = require("../utiles/asyncHandler");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('❌ JWT_SECRET이 .env에 설정되어 있지 않습니다.');
}
router.post('/login', (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: '이메일과 비밀번호를 입력해주세요.' });
    }
    // 사용자 조회
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return res.status(401).json({ message: '사용자를 찾을 수 없습니다.' });
    }
    // 비밀번호 비교
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: '비밀번호가 틀렸습니다.' });
    }
    // 토큰 발급
    const token = jsonwebtoken_1.default.sign({
        userId: user.id,
        name: user.name,
        email: user.email,
    }, JWT_SECRET, { expiresIn: '1h' });
    res.json({
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    });
}));
exports.default = router;
