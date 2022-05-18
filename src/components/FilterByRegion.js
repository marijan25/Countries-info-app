import '../style/filterByRegionStyle.css'
import { useState } from 'react'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Grid } from '@mui/material';
import { getCountryRegion } from '../CountriesService';

const FilterByRegion = ({selectedRegion, setSelectedRegion, loadData, darkMode}) => {
  const [isActive, setIsActive] = useState(false)
  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  return (
    <Grid className='filter-by-region'>
        <Grid className={darkMode ? 'filter-by-region-btn-dark-mode' : 'filter-by-region-btn'} onClick={(e) => setIsActive(!isActive)}>
          {selectedRegion}
          <ArrowDropDownOutlinedIcon/>
        </Grid> 
        {isActive && (
          <Grid className={darkMode ? 'filter-by-region-content-dark-mode' : 'filter-by-region-content'}>
            {options.map((option) => (
            <Grid 
            key={option}
            onClick={ () => {
              setSelectedRegion(option)
              setIsActive(false)
              getCountryRegion(option).then(loadData)            
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
