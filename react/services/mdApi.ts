
const ENTITY = 'CF'
const SCHEMA = 'public'

const API_KEY = 'vtexappkey-valtech-QPYJRT'
const API_TOKEN = 'WYBLNNTOMTKTXRFJLMVUJZNYYOGCOGOOVGTXCMSRXTAJGQTFFEDHQMRXZLUEVQFUXQRTHOUFTVKLLWGCXDSJGBUJHCLFWQGUYEZHBHPKKLMTPYKHDOMUPJFHWWKXLXIO'

const base = `/api/dataentities/${ENTITY}`

const commonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-VTEX-API-AppKey': API_KEY,
    'X-VTEX-API-AppToken': API_TOKEN,
    'X-Vtex-Use-Https': 'true',
}

import { FortuneCookie } from '../typings/FortuneCookie'

export async function listFortuneCookies(): Promise<FortuneCookie[]> {
    const url = `${base}/search?_fields=id,CookieFortune&_schema=public&_t=${Date.now()}`
    const res = await fetch(url, {
        method: 'GET',
        headers: { ...commonHeaders, 'REST-Range': 'resources=0-400' },
    })
    if (!res.ok) throw new Error(`MD list ${res.status}`)

    const raw: { id: string; CookieFortune: string }[] = await res.json()
    return raw.map(r => ({ id: r.id, text: r.CookieFortune }))
}

export async function addFortuneNewFortuneCookie(text: string) {
    const url = `${base}/documents`
    const res = await fetch(url, {
        method: 'POST',
        headers: commonHeaders,
        body: JSON.stringify({ CookieFortune: text, schema: SCHEMA }),
    })
    if (!res.ok) throw new Error(`MD add ${res.status}`)
}

export async function deleteFortuneCookie(id: string) {
    const url = `${base}/documents/${id}`
    const res = await fetch(url, { method: 'DELETE', headers: commonHeaders })
    if (!res.ok) throw new Error(`MD delete ${res.status}`)
}
