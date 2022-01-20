import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import { styled, alpha  } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    

    {
        id: 'name',
        label: 'Người dùng',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString(''),
    },
   
    
    {
        id: 'Vaitro',
        label: 'Vai trò',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString(''),
    },
    {
        id: 'Trangthai',
        label: 'Trạng thái',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString(''),
    },
];

function createData(name, Vaitro, Trangthai) {
    
    return { name, Vaitro, Trangthai };
}

const rows = [
    createData('Nguyễn Tất Thành', 'BTD', 'Hoạt động' ),
    createData('Trần Xuân Khu', 'BTD', 'Hoạt động'),
    createData('Vũ Đức TRọng ', 'BTD', 'Không Hoạt động'),
    
    
];

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

//search
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#7d807e', 0.15),
    '&:hover': {
        backgroundColor: alpha('#7d807e', 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
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
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export default function Account() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [checkBox, setCheckBox] = useState(false)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', margin: '6% 2% 2% 2%' }}>

            <Box component="main" sx={{ flexGrow: 2, p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Typography paragraph>
                   <Toolbar>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                   </Toolbar>
                </Typography>
                <Typography paragraph>
                    
                    {checkBox ? <Stack direction="row" spacing={1}  >
                        <Button variant="contained" endIcon={<EditIcon />}>
                            Sửa
                        </Button>
                        <Button variant="contained" endIcon={<DeleteIcon />}>
                            Xóa
                        </Button>
                    </Stack> : <Stack direction="row" spacing={1}  >
                        <Button variant="contained" endIcon={<AddCircleIcon />}>
                            Thêm mới
                        </Button>
                    </Stack>}
                </Typography>
            </Box>
            <div style={{display: "flex"}}>
                <TableContainer sx={{width: '40%'}}>

                    <Table >
                        <TableHead>

                            <TableRow>
                                <TableCell
                                  
                                    align="center"
                                    style={{ minWidth: "170px" }}
                                >
                                    
                                </TableCell>
                            
                                    <TableCell

                                        align="center"
                                        style={{ minWidth: "170px" }}
                                    >
                                        Tên tài khoản
                                    </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        // indeterminate={numSelected > 0 && numSelected < rowCount}
                                        // checked={rowCount > 0 && numSelected === rowCount}
                                        // onChange={onSelectAllClick}
                                        inputProps={{
                                            'aria-label': 'select all desserts',
                                        }}
                                    />
                                    
                                </TableCell>
                                
                           </TableRow>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        // indeterminate={numSelected > 0 && numSelected < rowCount}
                                        // checked={rowCount > 0 && numSelected === rowCount}
                                        // onChange={onSelectAllClick}
                                        inputProps={{
                                            'aria-label': 'select all desserts',
                                        }}
                                    />

                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        // indeterminate={numSelected > 0 && numSelected < rowCount}
                                        // checked={rowCount > 0 && numSelected === rowCount}
                                        // onChange={onSelectAllClick}
                                        inputProps={{
                                            'aria-label': 'select all desserts',
                                        }}
                                    />

                                </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer>

                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>

                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align="center"
                                        style={{ minWidth: "170px" }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align="center">
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
               
            </div>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
                </Paper>
    )
}
