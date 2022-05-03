import SearchInput from "../components/SearchInput"
import { Box, Grid } from "@mui/material"
import FilterByRegion from "../components/FilterByRegion"
import { useEffect, useState } from "react"
import '../style/homeStyle.css'
import { Row, Col } from "react-bootstrap"
import { getCountries } from "../CountriesService"
import { lazy, Suspense } from "react"
import Loading from "../components/Loading"

const Country = lazy(() => import('../components/Country'))
const Home = () => {
  const loadCountries = () => getCountries().then((country) => setCountries(country))
  const [countries, setCountries] = useState([])
  const [selectedRegion, setSelectedRegion] = useState("Filter By Region")
  useEffect(() => {
    loadCountries();
  }, [])
  return (
    <Grid> 
      <Grid className="app-body">
        <Row className="inputs">
          <Col md={6} className="search-input">
            <SearchInput/>
          </Col>
          <Col md={{span:2,offset:2}} className="select-region">
            <FilterByRegion 
              selectedRegion={selectedRegion} 
              setSelectedRegion={setSelectedRegion} />
          </Col>
        </Row>
        <Suspense fallback={<Loading />}>
          <Box className="country-card">
            <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {countries.map((country) =>
                <Country
                  key={country.name}
                  flag = {country.flags.png}
                  name = {country.name}
                  population = {new Intl.NumberFormat().format(country.population)}
                  region = {country.region}
                  capital = {country.capital}
                />
              )}
            </Grid>
          </Box>
        </Suspense> 
      </Grid>
    </Grid>
  )
}

export default Home
