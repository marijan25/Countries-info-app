import '../style/filterByRegionStyle.css'
import { useState } from 'react'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Grid } from '@mui/material';

const FilterByRegion = ({selectedRegion, setSelectedRegion}) => {
  const [isActive, setIsActive] = useState(false)
  const options = ["Africa", "America", "Asia", "Europe", "Oceania"]
  return (
    <Grid className='filter-by-region'>
        <Grid className='filter-by-region-btn' onClick={(e) => setIsActive(!isActive)}>
          {selectedRegion}
          <ArrowDropDownOutlinedIcon />
        </Grid> 
        {isActive && (
          <Grid className='filter-by-region-content'>
            {options.map((option) => (
            <Grid 
            onClick={(e) => {
              setSelectedRegion(option)
              setIsActive(false)
            }}
            className='filter-by-region-item'> 
              {option} 
            </Grid>
            ))}
          </Grid>
        )}    
    </Grid>
  )
}

export default FilterByRegion
