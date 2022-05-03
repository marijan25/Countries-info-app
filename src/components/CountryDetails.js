import { Row,Col } from "react-bootstrap"
import { Box } from "@mui/material"
import '../style/countryStyle.css'
import { Link } from "react-router-dom"

const CountryDetails = ({flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders}) => {
  return (
    <Row xs={1} md={2}>
        <Col>
            <img className="country-image" src={flag} />
        </Col>
        <Col>
            <Row xs={1} md={2}>
                <Col className="col-left">
                    <Box className="country-name">{name}</Box>
                    <Box >Native Name: {nativeName} </Box> 
                    <Box >Population: {population}</Box>
                    <Box >Region: {region}</Box>
                    <Box >Sub Region: {subregion}</Box>
                    <Box >Capital: {capital ? (capital) : ("No capital city")}</Box>
                </Col>
                <Col className="col-right">
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
            <Box>
                Border Countries: 
                    {borders ? (
                        borders.map((border) => (
                            <Link to={`/home/${border}`}>
                                <button 
                                    key={nativeName} 
                                    className="border-button"
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
