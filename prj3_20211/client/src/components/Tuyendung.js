import React from 'react';
import MaterialTable from 'material-table';
import Paper from '@mui/material/Paper';




export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Đợt tuyển', field: 'dotTuyen', type: Date },
      { title: 'Ban văn phòng  (người)', field: 'vp', type: Number },
      { title: 'Ban vận chuyển  (người)', field: 'vc', type: Number },
      { title: 'Ban chế biến  (người)', field: 'cb', type: Number },
      { title: 'Nội dung', field: 'noiDung', type: String },
      
      { title: 'Ghi chú', field: 'ghiChu', type: String },
    ],
    data: [
        {dotTuyen:'22/10/2021',vp:'10',vc:'10',cb:'30',noiDung:'Đơn hàng 20 tấn gỗ Sồi cho công ty ABC',ghiChu:'Hạn 2 tháng'},
    ],
  });
 
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', margin: '6% 2% 2% 2%' }}>
    <MaterialTable
      title="Thông báo tuyển dụng"
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
    </Paper>
  );
  
}
