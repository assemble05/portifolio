import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface typedNavigation {
  navigate: Function
}

const ITEM_HEIGHT = 48;
const DropDown = ({ navigate }: typedNavigation) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='DropDownMenu' >
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ color: "#fff" }} />
      </IconButton>
      <Menu
        className='dropDown'
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            borderRadius: '0px'
          },
        }}
      >

        <MenuItem key={"HomeRoute"} onClick={() => navigate("/")}>
          Inicio
        </MenuItem>
        <MenuItem key={"ProjectROute"} onClick={() => navigate("/projects")}>
          Projetos
        </MenuItem>
      </Menu>
    </div>
  );
}
export default DropDown