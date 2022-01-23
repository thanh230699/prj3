import React, {useState} from 'react';
import MaterialTable from 'material-table';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
        {
            title: 'Bộ phận',
            field: 'name',
            lookup: { 0: 'Ban văn phòng', 1: 'Ban vận chuyển', 2: 'Ban chế biến' },
          },
          {
            title: 'ID',
            field: 'id',
            lookup: { 0: 'vp', 1: 'vc', 2: 'cb' },
          },
          {
            title: 'Trọng số',
            field: 'trongSo',
            lookup: { 0: '0', 1: '0,1', 2:'0,2', 3: '0,3', 4:'0,4',5:'0,5', 6:'0,6',7:'0,7',8:'0,8',9:'0,9',10:'1' },
          },
      
      { title: 'Ghi chú', field: 'ghiChu', type: String },
    ],
    data: [
        
    ],
  });
  
  const [ name, setName] = useState('');
  const changeName = (text) => {
    setName (text);
  }
  const [ id, setId ] = useState('');
  const changeId = (text) => {
    setId (text);
  }
  axios({
    method:'post',
    url:'/criteria',
    data: {
      name: name,
      id: id,
      
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
      title="Bộ tiêu chí"
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
              changeId(newData.id);
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
              changeId(newData.id);

              console.log(oldData);
              changeName(oldData.name);
              changeId(oldData.id);

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
              changeId(oldData.id);
              
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
