import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import '../style/headerStyle.css'

const Header = ({switchMode, darkMode}) => {
  return (
      <Box className={darkMode ? "dark-mode-header" : "header"}>
        <Box className={darkMode ? "dark-mode-header-container" : "header-container"}>
          <label className={darkMode ? "dark-mode-header-title" : "header-title"}>
            Where in the world?
          </label>
          <button onClick={switchMode} className= {darkMode ? "dark-mode-button-header" : "button-header"}><DarkModeOutlinedIcon sx={{fontSize:18,marginRight:1}}/>Dark mode</button>
        </Box>
      </Box>
  )
}

export default Header
