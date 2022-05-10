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
             <span className={darkMode ? "dark-mode-info" : "info"}>Population:</span> <span className={darkMode ? "dark-mode-value" : "value"}> {new Intl.NumberFormat().format(country.population)} </span>
            </Box>
            <Box className={darkMode ? "dark-mode-country-information" : "country-information"}>
              <span className={darkMode ? "dark-mode-info" : "info"}>Region:</span> <span className={darkMode ? "dark-mode-value" : "value"}>{country.region}</span>
            </Box>
            <Box className={darkMode ? "dark-mode-country-information" : "country-information"}>
              <span className={darkMode ? "dark-mode-info" : "info"}>Capital:</span> <span className={darkMode ? "dark-mode-value" : "value"}>{country.capital}</span>
            </Box>
          </Box>
      </Link>
    </Box>
  )
}

export default Country
