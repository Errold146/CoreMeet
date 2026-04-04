import { UAParser } from "ua-parser-js";

export const formatUserAgent = (userAgent: string) => {
    const parser = new UAParser(userAgent)
    const res = parser.getResult()
    return `${res.browser.name} - ${res.browser.version} en ${res.os.name} ${res.os.version}`
}
