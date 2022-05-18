import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../style/searchInputStyle.css'
import { getCountriesName } from '../CountriesService';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '9px',
    marginLeft: 0,
    marginTop: 40,
    height: 50,
    border: 'none',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '60ch',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      height: 33,
      marginLeft: '5%',
      [theme.breakpoints.up('sm')]: {
        width: '55ch',
        '&:focus': {
          width: '55ch',
        },
      },
    },
  }));

const SearchInput = ({loadData, darkMode}) => {
  const handleSearchChange = (e) => {
    if(e.target.value){
      getCountriesName(e.target.value).then(loadData)
    }  
  }
  return (
      <Search className={darkMode ? "search-dark-mode" : "search"}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for a country..."
          onChange = {handleSearchChange}/>
      </Search>
  )
}

export default SearchInput
