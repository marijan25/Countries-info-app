import { Row,Col } from "react-bootstrap"
import { Box } from "@mui/material"
import '../style/countryStyle.css'
import { Link } from "react-router-dom"
import { getCountries } from "../CountriesService"
import { useState, useEffect } from "react"

const CountryDetails = ({flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,darkMode}) => {
    const [country, setCountry] = useState([])
    const getCountry = async () => {
        const response = await fetch(`https://restcountries.com/v2/alpha?codes=${borders}`)
        const data = await response.json()
        setCountry(data)
    }
    useEffect(() => {
        getCountry()
    }, [])
  return (
    <Box>
        <Row xs={1} md={2}>
            <Col>
                <img className="country-image" src={flag} />
            </Col>
            <Col>
                <Row xs={1} md={2} className={darkMode ? "row-dark-mode" : "row"}>
                    <Col className={darkMode ? "col-left-dark-mode" : "col-left"}>
                        <Box className="country-name">{name}</Box>
                        <Box >Native Name: {nativeName} </Box> 
                        <Box >Population: {population}</Box>
                        <Box >Region: {region}</Box>
                        <Box >Sub Region: {subregion}</Box>
                        <Box >Capital: {capital ? (capital) : ("No capital city")}</Box>
                    </Col>
                    <Col className={darkMode ? "col-right-dark-mode" : "col-right"}>
                        <Box>Top level Domain: {topLevelDomain} </Box>
                        <Box>Currencies: 
                            {currencies ? (currencies.map((currency) => (
                                <>
                                    {currency.name}
                                </>
                            ))) : ("No currencies")}
                        </Box>
                        <Box>Languages:  
                            {languages ? (languages.map((language) => (
                            <>
                                {language.name},
                            </>
                            ))) : ("No languages")}
                        </Box>
                    </Col>
                </Row>
                <Box className={darkMode ? "border-countries-dark-mode" : "border-countries"}>
                    Border Countries: 
                        {borders ? (
                            country.map((border) => (
                                <Link to={`/home/${border.name}`}>
                                    <button 
                                        key={border.nativeName} 
                                        onClick={getCountries()}
                                        className={darkMode ? "border-button-dark-mode" : "border-button"}
                                    >
                                        {border.name}
                                    </button>
                                </Link>
                            ))) : ('No borders')
                        }
                </Box>
            </Col>
        </Row>
    </Box>
  )
}

export default CountryDetails
