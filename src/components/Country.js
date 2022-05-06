import { Box, Grid, Paper } from "@mui/material"
import '../style/homeStyle.css'
import { Link } from "react-router-dom"

const Country = ({country, darkMode}) => {
  return (
    <Grid item xs={3} sm={4} md={3}>
      <Link to={`/home/${country.alpha3Code}`}> 
        <Paper elevation={3} sx={{borderRadius:'9px 9px 9px 9px'}}>
          <Box>
            <img src={country.flags.png} className="img" />
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
            <br /><br />
          </Box>
        </Paper>
      </Link>
    </Grid>
  )
}

export default Country
