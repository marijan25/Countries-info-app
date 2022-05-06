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
                        <Box >Native Name: {selectedCountry.nativeName} </Box> 
                        <Box >Population: {new Intl.NumberFormat().format(selectedCountry.population)}</Box>
                        <Box >Region: {selectedCountry.region}</Box>
                        <Box >Sub Region: {selectedCountry.subregion}</Box>
                        <Box >Capital: {selectedCountry.capital ? (selectedCountry.capital) : ("No capital city")}</Box>
                    </Col>
                    <Col className={darkMode ? "col-right-dark-mode" : "col-right"}>
                        <Box>Top level Domain: {selectedCountry.topLevelDomain} </Box>
                        <Grid container>Currencies: 
                            {selectedCountry.currencies ? (selectedCountry.currencies.map((currency) => (
                                <Box key={currency.name}>
                                    {currency.name}
                                </Box>
                            ))) : ("No currencies")}
                        </Grid>
                        <Grid container>Languages:  
                            {selectedCountry.languages ? (selectedCountry.languages.map((language) => (
                            <Box key={language.name}>
                                {language.name},
                            </Box>
                            ))) : ("No languages")}
                        </Grid>
                    </Col>
                </Row>
                <Box className={darkMode ? "border-countries-dark-mode" : "border-countries"}>
                    Border Countries: 
                        {selectedCountry.borders ? (
                            selectedCountry.borders.map((border) => (
                                <Link to={`/home/${border}`} key={border}>
                                    <button 
                                        onClick={() => getSelectedCountry(border).then(loadData)}
                                        className={darkMode ? "border-button-dark-mode" : "border-button"}
                                    >
                                        {border}
                                    </button>
                                </Link>
                            ))) : ('No borders')
                        }
                </Box>
            </Col>
        </Row>
  )
}

export default CountryDetails
