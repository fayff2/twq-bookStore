import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Register() {

const [inputValue , setTnputValue ] = useState({
    name:"",
    email:"",
    date:"",
    password:"",

});

const [data] =useState([]);
console.log(inputValue)

    const getdata = (e)=>{
        const{value,name}= e.target;
// console.log(name,value);
// setTnputValue({...inputValue,[e.target.name] : e.target.value})

setTnputValue(() =>{
    return{
        ...inputValue,
        [name]:value
    }
 
})

        
    }


const addData =() =>{

 const {name , email ,date , password}= inputValue;
 if (name === ""){
    alert("name field is requred");
 } else if (email === ""){
    alert("email field is requred"); 
 }else if (!email.includes("@")){
    alert("please enter vaild email adress")
 }else if (date === ""){
    alert("date field is requred")
 }else if (password === ""){
    alert("password field is requred")
 }else if (password.length < 5){
    alert("password length greater five ")
 }else{
    alert("data added succesfully")

    localStorage.setItem("userInfo" , JSON.stringify([...data,inputValue]))
 }
  
  
   
    
}


  return (
    <>
    
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-stone-300 to-stone-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Rigstion </h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                    <div className="relative">
							<input autoComplete="off"  name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Enter Your Name"  onChange={getdata}/>
							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Neme</label>
						</div>


						<div className="relative">
							<input autoComplete="off"  name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email Address" onChange={getdata}/>
							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						

                        <div className="relative">
							<input autoComplete="off"  type="date" name="date" onChange={getdata} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Enter Your Birthday" />
							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> date</label>
						</div>


                        

                        <div className="relative">
							<input autoComplete="off" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"  onChange={getdata} value={inputValue.password}/>
							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>

						<div className="relative">
							<button className="bg-stone-500 text-white rounded-md px-2 py-1" onClick={addData}>Submit</button>
						</div>
                        <div className=""> Already Have an Account? <NavLink to="/login"> Signin </NavLink></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    
    
    </>
  )
}



    
    
   

