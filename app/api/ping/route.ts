import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json({
        code: 200,
        message: "success",
    })
}