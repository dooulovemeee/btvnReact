import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import AppRoutes from './routes/index';
import Sidebar from './components/layouts/SideBar';

function App() {
  const [listBill, setListBill] = useState([
    {
      id: 1,
      name: 'Hóa đơn ăn sáng',
      type: "outcome",
      amount: 500
    },
    {
      id: 2,
      name: 'Hóa đơn ăn trưa',
      type: "outcome",
      amount: 1000
    },
    {
      id: 3,
      name: 'Hóa đơn ăn nhẹ',
      type: "outcome",
      amount: 20
    },
    {
      id: 4,
      name: 'Hóa đơn mua đồ lưu niệm',
      type: "outcome",
      amount: 120
    },
    {
      id: 5,
      name: 'Hóa đơn gửi xe',
      type: "outcome",
      amount: 10
    },
    {
      id: 6,
      name: 'Hóa đơn thuê đồ',
      type: "outcome",
      amount: 25
    },
    {
      id: 7,
      name: 'Lương công ty',
      type: "income",
      amount: 50000
    }
  ])
  const deleteBill = data => {
    const myList = listBill.filter(function (item) {
      return item.id !== data.id;
    });
    setListBill(myList);
  };
  const renderListBill = () => {
    const myList = listBill.map(item => {
      return <div key={item.id} className='container'>
        
        <div className='card'>
          <Card selectedData = {item} removeData = {deleteBill}/>
          
        </div>
      </div>
    });
    return myList;
  }
  return (
    <div className="App">
      <div className='d-flex align-start'>
VKL
      <Sidebar/>
      </div>
      <div className='w-100'>
          <AppRoutes/>
      </div>
      
    </div>
  );
}

export default App;
