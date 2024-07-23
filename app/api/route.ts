import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json({
        code: 200,
        message: "Welcome to Server API Based on Next.js",
    })
}