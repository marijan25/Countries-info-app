import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import '../style/headerStyle.css'

const Header = () => {
  return (
      <Box className="box">
        <Toolbar className="tool-bar">
          <label className="header-title">
            Where in the world?
          </label>
          <button className= "button-header"><DarkModeOutlinedIcon sx={{fontSize:18,marginRight:1}}/>Dark mode</button>
        </Toolbar>
      </Box>
  )
}

export default Header
