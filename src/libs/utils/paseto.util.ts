import { V4 } from "paseto";

export default class Paseto {
    static generateKey() {
        return V4.generateKey('public', { format: 'keyobject' })
    }

    static sign(payload: Record<string, any>) {
        return V4.sign(payload, { key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtZHVramFyd2dscHJhYnZwdHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxODM5OTMsImV4cCI6MjA1Mjc1OTk5M30.fNE7XPAwcb-Ol6098yfCZeLGQfImsY01IxZUWugzGy0" })
    }

    static async verify({ token, publicKey }: { token: string, publicKey: string }) {
        return await V4.verify(token, publicKey)
    }
}