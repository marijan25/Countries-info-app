import { Box, Grid, Paper } from "@mui/material"
import '../style/homeStyle.css'
import { Link } from "react-router-dom"

const Country = ({name, flag, population, region, capital}) => {
  return (
    <Grid item xs={3} sm={4} md={3}>
      <Link to={`/home/${name}`}> 
        <Paper elevation={3} sx={{borderRadius:'9px 9px 9px 9px'}}>
          <Box>
            <img src={flag} className="img" />
          </Box>
          <Box className="name">
            {name}
          </Box>
          <Box className="country-information">
            Population: {population}
          </Box>
          <Box className="country-information">
            Region: {region}
          </Box>
          <Box className="country-information">
            Capital: {capital}
          </Box>
          <br /><br />
        </Paper>
      </Link>
    </Grid>
  )
}

export default Country
