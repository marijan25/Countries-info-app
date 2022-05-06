import { Link, useParams } from "react-router-dom"
import '../style/countryStyle.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CountryDetails from "../components/CountryDetails";
import { getSelectedCountry } from "../CountriesService";

const CountryPage = ({ darkMode }) => {
    const {code} = useParams()
    const loadSelectedCountries = () => getSelectedCountry(code).then((country) => setSelectedCountry(country))
    const [selectedCountry, setSelectedCountry] = useState([])
    useEffect(() => {
        loadSelectedCountries()
    }, [])
    const loadData = (country) => {
        setSelectedCountry(country)
      }
    return (
        <Box className={darkMode ? "body-dark-mode" : ""}>
            <Link to="/">
            <Box className={darkMode ? "btn-postion-dark-mode" : "btn-position"}>
            <button className={darkMode ? "btn-back-dark-mode" : "btn-back"}>
              <Box className="text-button">
                  <ArrowBackIcon /> Back
              </Box>
            </button>
            </Box>
            </Link>
                <CountryDetails 
                    selectedCountry = {selectedCountry}
                    darkMode = {darkMode}
                    loadData = {loadData}
                />
        </Box>
  )
}

export default CountryPage
