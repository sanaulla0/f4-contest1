import React, { useState } from 'react';
import './App.css';
function  App(){
 const [num1 , setNum1] = useState('');
 const [num2 , setNum2] = useState('');
   const [ans,setAns] = useState(false);
   // const [data,setdata] = useState(false);
    

 const handleChange = (event)=>{
  
  const {name , value} = event.target;
       // setNum1(event.target);
       // const value1 = event.target.value.replace(/\D/g, "0");
       name ==="num1" ? setNum1(parseInt(value)) : setNum2(parseInt(value));
       // setNum2(event.target.value);
 };
 const handleAction = (action)=>{
       
  if(action === '+') setAns(num1+num2);
  else if(action === '-') setAns(num1-num2);
  else if(action === '*') setAns(num1*num2);
  else setAns(num1/num2);
 }
 
return(
   
    <div className='App'>
     <h1>React Calculator</h1>
     <input type="text"  name="num1" value={num1} onChange={handleChange} placeholder="Num1"></input>
     <br/> <br/>
     
     <input type="text"  name='num2' value={num2} onChange={handleChange} placeholder="Num2"></input>
   <br />
   <div>
   <button onClick={(setdata=true)=>{                                                        
   handleAction('+');
   
}}
   >+</button>
   <button onClick={(setdata=true)=>{
   handleAction('-');
   }}      
   >-</button>
   <button onClick={(setdata=true)=>{
   {handleAction('*')}
   }}
   >*</button>
   <button onClick={(setdata=true)=>{
   
   {handleAction('/')}
   }}
   >/</button>
 </div>
  
   {ans ?<h1> Result={ans} </h1>  : <h3 className='tt'>'Error : Num1 or Num2 cannot be empty'</h3>} 
   {ans ?<h1 className='tt1'>  Success : Your result is shown above! </h1>  : ''} 

   
    </div>
)

};
export default App;






// * <div className='data'> */}
//     /* {data ? <h1>error</h1> : <h1>success</h1>} */}
//    /* </div>  */
// //