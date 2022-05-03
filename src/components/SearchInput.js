import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '9px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginLeft: 0,
    marginTop: 40,
    height: 50,
    backgroundColor: 'white',
    border: 'none',
    width: '95%',
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

const SearchInput = ({setCountries}) => {
  const handleSearchChange = async (e) =>{
    if(e.target.value){
      const response = await fetch(`https://restcountries.com/v2/name/${e.target.value}`)
      const data = await response.json()
      setCountries(data)
    }
  }
  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for a country..."
          onChange = {handleSearchChange}
        />
      </Search>
    </Box>
  )
}

export default SearchInput
