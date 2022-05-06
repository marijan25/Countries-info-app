export const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json()
    return data
}

export const getCountriesName = async (input) => {
    const response = await fetch(`https://restcountries.com/v2/name/${input}`)
    const data = await response.json()
    return data
}

export const getCountryRegion = async (option) => {
    const response = await fetch(`https://restcountries.com/v2/region/${option}`)
    const data = await response.json()
    return data
}

export const getSelectedCountry = async (code) => {
    const response = await fetch(`https://restcountries.com/v2/alpha/${code}`)
    const data = await response.json()
    return data
}
