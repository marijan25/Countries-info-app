import SearchInput from "../components/SearchInput"
import { Box, Container, Grid } from "@mui/material"
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
    <Box className={darkMode ? "dark-mode-app" : "app"}>
    <Box className={darkMode ? "dark-mode-app-body" : "app-body"}>
      <Box className="inputs">
        <Box className="search-input">
          <SearchInput
            loadData = {loadData}
            darkMode = {darkMode}
          />
        </Box>
        <Box className="select-region">
          <FilterByRegion 
            selectedRegion={selectedRegion} 
            setSelectedRegion={setSelectedRegion} 
            loadData = {loadData}
            darkMode = {darkMode}
          />
        </Box>
      </Box>
      <Box className="country-card">
          {!noCountriesFound ? (countries.map((country) => 
          <Country
            key={country.alpha3Code}
            country = {country}
            darkMode = {darkMode}
          />
          )) : (<Box className={darkMode ? "dark-mode-message" : "message"}><h2>No countries found</h2></Box>)} 
      </Box>
    </Box>
    </Box>
  )
}

export default Home
