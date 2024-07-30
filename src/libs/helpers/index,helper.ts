import countriesData from "@/json/country.data.json";

export class Helpers {
    static getCountryByCode(code?: string): CountryType | undefined {
        const countries = countriesData?.data as CountryType[]

        return countries.find(country => country?.code?.toLowerCase() === code?.toLowerCase());
    }
}

type CountryType = {
    code: string;
    name: string;
}