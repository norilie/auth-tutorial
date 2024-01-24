import { PrismaClient } from '@prisma/client'

// The global declaration here prevent hot reload of PrismaClient
// when development mode.
declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db

// Next.jsの開発時
// export const db = new PrismaClient()
// だけだとコード変更の度にホットリロードするため、PrismaClientを何度も呼び出してしまう
// ことになるため、それを防ぐための手法
// グローバル変数prismaを定義すると、ホットリロードしても値は保持されるため、
// 変数dbはホットリロード毎に同じPrismaClientインスタンスが設定される。
