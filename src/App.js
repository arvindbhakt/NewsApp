// import React, { useState } from "react";
// import axios from 'axios';
// import style from './App.module.css'
// const App=()=> {
//   const[data,setdata]=useState([]);
//  // const[item,setItem]=useState([]);
//   const handleClick=()=>{
//     axios.get("https://fakestoreapi.com/products")
//   .then((resp)=>{
//     //console.log(resp);
//     //const cate=resp.data[0].category;
//     //const img=resp.data[0].image;
//     const des=resp.data;
//     setdata(des);
//     console.log('clicked');

//   })
//   .catch((error)=>{
//     console.log(error);
//   })
//   }
//   return (
   
//    <div className={style.bg}>
//      <h1>Fake Store API</h1>
//      <input type="button" className={style.btn1} value="Get Data" onClick={handleClick} />
    
//      <hr className={style.hr}/>
     
//      <div className={`${style.set} ${style.container}`}>
//        {
//        data.map((d)=>{
//          return(
          
//            <div className={style.box} key={d.id}>            
//              <h2>{d.title}</h2>
//              <p>{d.description}</p> <br/>            
//              <p className={style.price}>Price :&#8377; {d.price}</p><br/>
//              <div >
//              <img className={style.img} src={d.image} alt="" />
//              </div>
//            </div>
          
//          );
//        })
//      }
//      </div>
    
     
//    </div>
//   );
// }

// export default App;


// import React from 'react';
// import FetchNews from './component/FetchNews';
// const App = () => {
//   return (
//     <div className='bg-secondary' style={{opacity : "1"}}>
//       <div className='container text-center py-5 '>
//         <h1 >Daily News Headline</h1>
//         <FetchNews/>
//     </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Layout from './component/Pages/Layout';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Pages/Home';
import Contact from './component/Pages/Contact';
import LoginReg from './component/Pages/Auth/LoginReg';
import FetchNews from './component/FetchNews';
import SendPasswordResetMail from './component/Pages/Auth/SendPasswordResetMail';

import ResetPassword from './component/Pages/Auth/ResetPassword';
import  Dashboard  from './component/Pages/Dashboard';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path="login" element={<LoginReg/>} />
            <Route path='news' element={<FetchNews/>} />
            <Route path='sendpasswordresetmail' element={<SendPasswordResetMail/>}  />
            <Route path='reset' element={<ResetPassword/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path="*" element={<h1>Error 404 Page Not Found !!</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;






