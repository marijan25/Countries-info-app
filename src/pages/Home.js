import SearchInput from "../components/SearchInput"
import { Box, Grid } from "@mui/material"
import FilterByRegion from "../components/FilterByRegion"
import { useEffect, useState } from "react"
import '../style/homeStyle.css'
import Country from "../components/Country"
import { Row, Col } from "react-bootstrap"
import { getCountries } from "../CountriesService"

const Home = ({darkMode}) => {
  const loadCountries = () => getCountries().then((country) => setCountries(country))
  const [countries, setCountries] = useState([])
  const [selectedRegion, setSelectedRegion] = useState("Filter By Region")
  const noCountriesFound = countries.status || countries.message
  const loadData = (country) => {
    setCountries(country)
  }
  useEffect(() => {
    loadCountries();
  }, [])
  return (
    <Grid className={darkMode ? "dark-mode-app-body" : "app-body"} >
      <Row className="inputs">
        <Col md={6} className="search-input">
          <SearchInput
            loadData = {loadData}
            darkMode = {darkMode}
          />
        </Col>
        <Col md={{span:2,offset:2}} className="select-region">
          <FilterByRegion 
            selectedRegion={selectedRegion} 
            setSelectedRegion={setSelectedRegion} 
            loadData = {loadData}
            darkMode = {darkMode}
          />
        </Col>
      </Row>
      <Box className="country-card">
        <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {!noCountriesFound ? (countries.map((country) => 
          <Country
            key={country.alpha3Code}
            country = {country}
            darkMode = {darkMode}
          />
          )) : (<Box className={darkMode ? "dark-mode-message" : "message"}><h2>No countries found</h2></Box>)} 
        </Grid>
      </Box>
    </Grid>
  )
}

export default Home
