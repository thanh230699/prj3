import React, {useState} from 'react';
import MaterialTable from 'material-table';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



export default function MaterialTableDemo() {
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [role, setRole] = useState(0);
  

  const handleDrawerOpen = () => {
    setOpen(true);
};
const handleDrawerClose = () => {
  setOpen(false);
};

const handleChangeRole = (index) => {
  setRole(index);
  console.log(index);
}

const handleChange = (event) => {
  setAuth(event.target.checked);
};

const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

  const [state, setState] = React.useState({
    columns: [
      { title: 'Tên tài khoản', field: 'nameId' },
      { title: 'Mật Khẩu', field: 'passId', type: Number },
      { title: 'Tên người dùng', field: 'name' },
      { title: 'Vai trò', field: 'vaiTro', type: String },
      {
        title: 'Trạng thái',
        field: 'trangThai',
        lookup: { 0: 'Hoạt động', 1: 'Không hoạt động' },
      },
    ],
    data: [
      { nameId: 'Thanh2306',passId: 123456 , name: 'Nguyễn Tất Thành', vaiTro: 'Ban tuyển dụng', trangThai: 0 },
      { nameId: 'Trong2000',passId: 123123 , name: 'Vũ Đức Trọng', vaiTro: 'Ban tuyển dụng', trangThai: 1 },
    ],
  });

  
  return (
    <Box>
    <Toolbar>
    <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            CÔNG TY TNHN & TM HN
    </Typography>
    {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Avatar>V</Avatar>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                  
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
    )}
    
    </Toolbar>
    
    <MaterialTable
      title="Quản Lý Tài Khoản"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 10);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 10);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 10);
          }),
      }}
      onRowClick={(event, rowData) => {
        
        console.log(rowData);
        this.setState({ currentRow: rowData });
        console.log(this.state.tableRef);
        if (rowData.tableData.id === this.state.selectedRowId) {
          this.setState({ selected: false });
          this.setState({ selectedRowId: null });
        } else {
          this.setState({ selected: true });
          this.setState({ selectedRowId: rowData.tableData.id });
        }
      }}
    />
    </Box>
  );
  
}
