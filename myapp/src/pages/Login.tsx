import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {

    const history = useNavigate()

    const [inputValue , setTnputValue] = useState({
        email:"",
        password:"",
    });


    const [data , setData] = useState([])
    
        const getdata = (e)=>{
    console.log(e.target.value);
    const {value,name} = e.target;
    console.log(value,name);
    setTnputValue({...inputValue,[e.target.name] : e.target.value})

            
        }


    const addData =() =>{
    const getuserArr =localStorage.getItem("userInfo");
    console.log(getuserArr);
    

     const { email , password} = inputValue;
     if (email === ""){
        alert("email field is requred"); 
     }else if (!email.includes("@")){
        alert("please enter vaild email adress")
     } else if (password === ""){
        alert("password field is requred")
     }else if (password.length < 5){
        alert("password length greater five ")
     }else{
       if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr)
        const userlogin = userdata.filter((el ,k)=>{
            return el.email === email && el.password === password
        })
        if(userlogin.length === 0){
            alert("invalid details")
        }else{
            console.log("user login succesfully")
            localStorage.setItem("user_login",JSON.stringify(getuserArr))
            history("/home")
        }
       }
    }
}



  return (
<>


<div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-stone-300 to-stone-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold"> Login </h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

              

						<div className="relative">
							<input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email Address" onChange={getdata} value={inputValue.email}/>
							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						

                        <div className="relative">
							<input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"  onChange={getdata} value={inputValue.password}/>
							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>

						<div className="relative">
							<button className="bg-stone-500 text-white rounded-md px-2 py-1" onClick={addData}>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    
    
    </>
  )
}
