import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"
import '../style/countryStyle.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const CountryPage = () => {
    const [country, setCounty] = useState([])
    const {name} = useParams()
    const getCountry = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const data = await response.json()
        setCounty(data)
    }
    useEffect(() => {
        getCountry()
    }, [])
    return (
        <Box>
            <Header />
            <Link to="/">
            <button className="btn-back">
              <Box className="text-button">
                  <ArrowBackIcon /> Back
              </Box>
            </button>
            </Link>
        </Box>
  )
}

export default CountryPage
