import { PrismaClient } from "@prisma/client"

let db: PrismaClient

declare global {
  var __db: PrismaClient | undefined
}

/**
 * We don't want to restart the server with every change in dev,
 * but we also don't want to create a new db connection on every change.
 * (ala #caching)
 *
 * TODO: Check out @esbuild-register
 */
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient()
  db.$connect()
} else {
  if (!global.__db) {
    global.__db = new PrismaClient()
    global.__db.$connect()
  }
  db = global.__db
}

export { db }
