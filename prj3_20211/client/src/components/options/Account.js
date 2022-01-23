import React, {useState} from 'react';
import MaterialTable from 'material-table';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function MaterialTableDemo() {
  
  const [username,setUsername ] = useState('');
  const changeUsername = (text) => {
    setUsername (text);
  }
  const [ password, setPass ] = useState('');
  const changePass = (text) => {
    setPass (text);
  }
  const [ role, setRole] = useState('');
  const changeRole = (text) => {
    setRole (text);
  }
  const [status, setStatus ] = useState('');
  const changeStatus = (text) => {
    setStatus (text);
  }
  const [state, setState] = React.useState({
    columns: [
      { title: 'Tên tài khoản', field: 'username' },
      { title: 'Mật Khẩu', field: 'password', type: Number },
      { title: 'Tên người dùng', field: 'name' },
      { title: 'Vai trò', field: 'role', type: String, lookup: { 2: 'Ban tuyển dụng', 1: 'Admin' }},
      {
        title: 'Trạng thái',
        field: 'status',
        lookup: { 1: 'Hoạt động', 0: 'Không hoạt động' },
      },
      
    ],
    data: [
      
    ],
    
  });

  axios({
    method:'post',
    url:'/account',
            data: {
                username: username,
                password: password,
                role: role,
                status: status,
            }
  }).then(res=>{
    console.log(res); 
  }).catch(error=>{
    console.log(error);
  });

  
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', margin: '6% 2% 2% 2%' }}>
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
              console.log(newData);
              changePass(newData.password);
              changeRole(newData.role);
              changeStatus(newData.status);
              changeUsername(newData.username);

            }, 10);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
              console.log(newData);
              changePass(newData.password);
              changeRole(newData.role);
              changeStatus(newData.status);
              changeUsername(newData.username);
              console.log(oldData);
              changePass(oldData.password);
              changeRole(oldData.role);
              changeStatus(oldData.status);
              changeUsername(oldData.username);
            }, 10);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              console.log(oldData);
              changePass(oldData.password);
              changeRole(oldData.role);
              changeStatus(oldData.status);
              changeUsername(oldData.username);
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
    
   </Paper>
  );
  
}
