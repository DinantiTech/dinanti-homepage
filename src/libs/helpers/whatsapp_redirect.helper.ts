export default function whatsapp_redirect({ number, code }: { number: string, code: string }) {
    return `https://api.whatsapp.com/send/?phone=${number}&text=Hai+admin+Dinanti,+Sudah+pilih+undangan+digital+nih%2C+kodenya+*${code}*.+Bisa+diproses+ya%3F+Makasih%20:)&type=phone_number&app_absent=0`
}