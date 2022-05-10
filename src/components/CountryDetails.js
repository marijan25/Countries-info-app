import { Row,Col } from "react-bootstrap"
import { Box, Grid } from "@mui/material"
import '../style/countryStyle.css'
import { Link } from "react-router-dom"
import { getSelectedBorder, getSelectedCountry } from "../CountriesService"

const CountryDetails = ({selectedCountry,darkMode,loadData}) => {
  return (
        <Row xs={1} md={2}>
            <Col>
                <img className="country-image" src={selectedCountry.flag} />
            </Col>
            <Col>
                <Row xs={1} md={2} className={darkMode ? "row-dark-mode" : "row"}>
                    <Col className={darkMode ? "col-left-dark-mode" : "col-left"}>
                        <Box className="country-name">{selectedCountry.name}</Box>
                        <Box className="country-info">Native Name: <span className={darkMode ? "dark-mode-value" : "value"}>{selectedCountry.nativeName}</span> </Box> 
                        <Box className="country-info">Population: <span className={darkMode ? "dark-mode-value" : "value"}>{new Intl.NumberFormat().format(selectedCountry.population)}</span></Box>
                        <Box className="country-info">Region: <span className={darkMode ? "dark-mode-value" : "value"}>{selectedCountry.region}</span></Box>
                        <Box className="country-info">Sub Region: <span className={darkMode ? "dark-mode-value" : "value"}>{selectedCountry.subregion}</span></Box>
                        <Box className="country-info">Capital: <span className={darkMode ? "dark-mode-value" : "value"}>{selectedCountry.capital ? (selectedCountry.capital) : ("No capital city")}</span></Box>
                    </Col>
                    <Col className={darkMode ? "col-right-dark-mode" : "col-right"}>
                        <Box className="country-info">Top level Domain: <span className={darkMode ? "dark-mode-value" : "value"}>{selectedCountry.topLevelDomain}</span></Box>
                        <Grid container className="country-info">Currencies:
                            {selectedCountry.currencies ? (selectedCountry.currencies.map((currency) => (
                                <Box key={currency.name}>
                                    <span className={darkMode ? "dark-mode-value" : "value"}>{currency.name}</span>
                                </Box>
                            ))) : ("No currencies")}
                        </Grid>
                        <Grid className="country-info" container>Languages: 
                            {selectedCountry.languages ? (selectedCountry.languages.map((language) => (
                            <Box key={language.name}>
                                <span className={darkMode ? "dark-mode-value" : "value"}>{language.name},</span>
                            </Box>
                            ))) : ("No languages")}
                        </Grid>
                    </Col>
                </Row>
                <Box className={darkMode ? "border-countries-dark-mode" : "border-countries"}>
                    <p>Border Countries:{(' ')}
                        <span>
                        {selectedCountry.borders ? (
                            selectedCountry.borders.map((border) => (
                                <Link to={`/home/${border}`} key={border}>
                                    <button 
                                        onClick={() => getSelectedCountry(border).then(loadData)}
                                        className={darkMode ? "border-button-dark-mode" : "border-button"}
                                    >
                                        <span className={darkMode ? "dark-mode-value" : "value"}>{border}</span>
                                    </button>
                                </Link>
                            ))) : <span className={darkMode ? "dark-mode-value" : "value"}>No borders</span>
                        }
                        </span>
                    </p>
                </Box>
            </Col>
        </Row>
  )
}

export default CountryDetails
