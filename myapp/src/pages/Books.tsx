import { useState } from "react"
import Navbar from "../component/Navbar"
import Data from "../data/Data"
import { Link } from "react-router-dom"


export default function books() {
const [searchTerm ,setSearchTerm] = useState ('');

  return (
    <>
    <Navbar></Navbar>


    
     <section className="sec">
        <h1 className="text-center text-6xl my-20">books</h1>
        <div className="w-2/4 my-32 mx-auto">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <form>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input  type ="text" onChange={(event)=>{setSearchTerm(event.target.value)}} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-stone-500 focus:border-stone-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Books..." required/>
        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-stone-600 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:bg-stone-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
</form>
</div>
        <div className="flex flex-wrap justify-center items-center gap-y-24  gap-x-5 lg:my-40 my-20">
          

{
  Data
  .filter((val)=>{
    if(searchTerm == ""){
      return val;
    }
    else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return val;
    }
  })
  .map((val)=>{
return (

  <div className=" w-56 h-64" key={val.id}>
    {/* <img src={val.img} alt="" /> */}
    <Link to ={`/books/${val.id}`} ><img src={val.img} alt="" className="w-full h-full" /></Link>
    <h3 className=" w-full mt-3 mb-3">{val.title}</h3>
  </div>
)
  })
}


        </div>
    </section>
    </>

   
  )
}

