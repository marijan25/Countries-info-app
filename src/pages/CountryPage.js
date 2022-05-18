import { Link, useParams } from "react-router-dom"
import '../style/countryStyle.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getSelectedCountry } from "../CountriesService";
import { lazy, Suspense } from "react";

const CountryDetails = lazy(() => import("../components/CountryDetails"))
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
                <Box className={darkMode ? "btn-position-dark-mode" : "btn-position"}>
                    <button className={darkMode ? "btn-back-dark-mode" : "btn-back"}>
                        <Box className="text-button">
                            <ArrowBackIcon /> Back
                        </Box>
                    </button>
                </Box>
            </Link>
            <Suspense fallback={<Loading />}>
                <CountryDetails 
                    selectedCountry = {selectedCountry}
                    darkMode = {darkMode}
                    loadData = {loadData}
                />
            </Suspense>
        </Box>
  )
}

export default CountryPage
