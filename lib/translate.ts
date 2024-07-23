
/**
 * 翻译文本
 * @param param0  
 * @returns 
 */
export const translateText = async ({
    text, source_lang = "auto", target_lang = "EN"
}: {
    text: string; source_lang?: string; target_lang: string
}): Promise<string> => {
    const res = await fetch("/api/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text,
            source_lang,
            target_lang
        })
    })
    const { data = "" } = await res.json();
    return data;
}