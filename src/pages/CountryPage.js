import { Link, useParams } from "react-router-dom"
import '../style/countryStyle.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CountryDetails from "../components/CountryDetails";

const CountryPage = ({darkMode}) => {
    const [country, setCountry] = useState([])
    const {name} = useParams()
    const getCountry = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
        const data = await response.json()
        setCountry(data)
    }
    useEffect(() => {
        getCountry()
    }, [])
    return (
        <Box className={darkMode ? "body-dark-mode" : ""}>
            <Link to="/">
            <Box className={darkMode ? "btn-postion-dark-mode" : "btn-position"}>
            <button className={darkMode ? "btn-back-dark-mode" : "btn-back"}>
              <Box className="text-button">
                  <ArrowBackIcon /> Back
              </Box>
            </button>
            </Box>
            </Link>
            {country.map((details) => (
                <CountryDetails 
                    key={details.alpha3Code}
                    flag = {details.flags.png}
                    name = {details.name}
                    nativeName = {details.nativeName}
                    population = {new Intl.NumberFormat().format(details.population)}
                    region = {details.region}
                    subregion = {details.subregion}
                    capital = {details.capital}
                    topLevelDomain = {details.topLevelDomain}
                    currencies = {details.currencies}
                    languages = {details.languages}
                    borders = {details.borders}
                    darkMode = {darkMode}
                />
            ))}
        </Box>
  )
}

export default CountryPage
