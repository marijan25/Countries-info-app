import '../style/filterByRegionStyle.css'
import { useState } from 'react'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Grid } from '@mui/material';

const FilterByRegion = ({selectedRegion, setSelectedRegion, setCountries, darkMode}) => {
  const [isActive, setIsActive] = useState(false)
  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  return (
    <Grid className='filter-by-region'>
        <Grid className={darkMode ? 'filter-by-region-btn-dark-mode' : 'filter-by-region-btn'} onClick={(e) => setIsActive(!isActive)}>
          {selectedRegion}
          <ArrowDropDownOutlinedIcon />
        </Grid> 
        {isActive && (
          <Grid className={darkMode ? 'filter-by-region-content-dark-mode' : 'filter-by-region-content'}>
            {options.map((option) => (
            <Grid 
            key={option}
            onClick={ async (e) => {
              setSelectedRegion(option)
              setIsActive(false)
              const response = await fetch(`https://restcountries.com/v2/region/${option}`)
              const data = await response.json()
              setCountries(data)
            }}
            className={darkMode ? 'filter-by-region-dark-mode-item' : 'filter-by-region-item'}> 
              {option} 
            </Grid>
            ))}
          </Grid>
        )}    
    </Grid>
  )
}

export default FilterByRegion
