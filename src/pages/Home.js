import Header from "../components/Header"
import SearchInput from "../components/SearchInput"
import { Box, Grid } from "@mui/material"
import FilterByRegion from "../components/FilterByRegion"
import { useEffect, useRef, useState } from "react"
import '../style/homeStyle.css'
import Country from "../components/Country"
import { Row, Col } from "react-bootstrap"
import { getCountries } from "../CountriesService"

const Home = () => {
  const loadCountries = () => getCountries().then((country) => setCountries(country))
  const [countries, setCountries] = useState([])
  const [selectedRegion, setSelectedRegion] = useState("Filter By Region")
  const noCountriesFound = countries.status || countries.message
  useEffect(() => {
    loadCountries();
  }, [])
  return (
    <Grid> 
      <Header />
      <Grid className="app-body">
        <Row className="inputs">
          <Col md={6} className="search-input">
            <SearchInput
              setCountries={setCountries}
            />
          </Col>
          <Col md={{span:2,offset:2}} className="select-region">
            <FilterByRegion 
              selectedRegion={selectedRegion} 
              setSelectedRegion={setSelectedRegion} 
              setCountries = {setCountries}
            />
          </Col>
        </Row>
      <Box className="country-card">
        <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {!noCountriesFound ? (countries.map((country) => 
            <Country
              key={country.name}
              flag = {country.flags.png}
              name = {country.name}
              population = {new Intl.NumberFormat().format(country.population)}
              region = {country.region}
              capital = {country.capital}
            />
          )) : (<Box className="message"><h2>No countries found</h2></Box>)} 
        </Grid>
      </Box>
      </Grid>
    </Grid>
  )
}

export default Home
