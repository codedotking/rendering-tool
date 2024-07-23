import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
    const { text = "", source_lang = "auto", target_lang = "" } = await req.json();
    if (!text) return NextResponse.json({
        code: 400,
        message: "text is required"
    })
    if (!target_lang) return NextResponse.json({
        code: 400,
        message: "target_lang is required"
    })
    const res = await fetch(`https://api.deeplx.org/${process.env.DEEPL_X_API_KEY}/translate`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    text,
                    source_lang,
                    target_lang
                }
            )
        }
    )
    const data = await res.json();
    return NextResponse.json({
        ...data
    })
}