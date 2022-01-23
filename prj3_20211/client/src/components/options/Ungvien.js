import React, {useState} from 'react';
import MaterialTable from 'material-table';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default function MaterialTableDemo() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Tên ứng viên', field: 'name' },
      {
        title: 'Giới tính',
        field: 'gioiTinh',
        lookup: { 0: 'Nam', 1: 'Nữ' },
      },
      { title: 'Ngày sinh', field: 'ngaySinh', type: Date },
      
      {
        title: 'Point',
        field: 'point',
        lookup: { 0: '0', 1: '0,1', 2:'0,2', 3: '0,3', 4:'0,4',5:'0,5', 6:'0,6',7:'0,7',8:'0,8',9:'0,9',10:'1' },
      },
      
      {
        title: 'Ban ứng tuyển',
        field: 'ban',
        lookup: { 1: 'Ban van phòng', 2:'Ban chế biến', 3: 'Ban vận chuyển' },
      },
      { title: 'Đợt tuyển', field: 'dotTuyen', type: Date },
    ],
    data: [
      
    ],
  });
  const [ name, setName] = useState('');
  const changeName = (text) => {
    setName (text);
  }
  const [ gioiTinh, setGioitinh ] = useState('');
  const changeGioitinh = (text) => {
    setGioitinh (text);
  }
  const [ ngaySinh, setNgaysinh] = useState('');
  const changeNgaysinh = (text) => {
    setNgaysinh (text);
  }
  const [ dotTuyen, setDottuyen ] = useState('');
  const changeDotuyen = (text) => {
    setDottuyen (text);
  }

  axios({
    method:'post',
    url:'/candidate',
    data: {
      name: name,
      gender: gioiTinh,
      date_of_birth: ngaySinh,
      recruitment_id: dotTuyen,
  }})
  .then(res=>{
    console.log(res); 
  })
  .catch(error=>{
    console.log(error);
  });


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', margin: '6% 2% 2% 2%' }}>
    <MaterialTable
      title="Hồ sơ ứng viên"
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
              changeName(newData.name);
              changeGioitinh(newData.gioiTinh);
              changeNgaysinh(newData.ngaySinh);
              changeDotuyen(newData.dotTuyen);

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
              changeName(newData.name);
              changeGioitinh(newData.gioiTinh);
              changeNgaysinh(newData.ngaySinh);
              changeDotuyen(newData.dotTuyen);
              console.log(oldData);
              changeName(oldData.name);
              changeGioitinh(oldData.gioiTinh);
              changeNgaysinh(oldData.ngaySinh);
              changeDotuyen(oldData.dotTuyen);
            }, 10);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
              console.log(oldData);
              changeName(oldData.name);
              changeGioitinh(oldData.gioiTinh);
              changeNgaysinh(oldData.ngaySinh);
              changeDotuyen(oldData.dotTuyen);
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
