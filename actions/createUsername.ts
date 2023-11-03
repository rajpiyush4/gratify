import base62 from 'base62'
import { createHash } from "crypto";



export function createUsername(email: string | undefined) {
    const hash = createHash('sha256').update(email || '').digest('hex');
    const uniqueNumber = parseInt(hash.substring(0, 8), 16); // Convert the first 8 characters to a number
    const encoded = base62.encode(uniqueNumber)
    return encoded;
}