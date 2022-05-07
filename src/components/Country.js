import { Box, Grid, Paper } from "@mui/material"
import '../style/homeStyle.css'
import { Link } from "react-router-dom"

const Country = ({country, darkMode}) => {
  return (
    <Box className={darkMode ? "dark-mode-country" : "country"}>
      <Link to={`/home/${country.alpha3Code}`}> 
          <Box className="flag-container">
            <img src={country.flags.png} />
          </Box>
          <Box className={darkMode ? "dark-mode-paper" : "paper"}>
            <Box className={darkMode ? "dark-mode-name" : "name"}>
              {country.name}
            </Box>
            <Box className={darkMode ? "dark-mode-country-information" : "country-information"}>
              Population: {new Intl.NumberFormat().format(country.population)}
            </Box>
            <Box className={darkMode ? "dark-mode-country-information" : "country-information"}>
              Region: {country.region}
            </Box>
            <Box className={darkMode ? "dark-mode-country-information" : "country-information"}>
              Capital: {country.capital}
            </Box>
          </Box>
      </Link>
    </Box>
  )
}

export default Country
