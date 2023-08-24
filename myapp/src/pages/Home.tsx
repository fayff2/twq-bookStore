import Navbar from "../component/Navbar"

import Data from "../data/Data"
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <>
    <Navbar></Navbar>

<div className="flex items-center p-10">
<div className=" w-2/4">
  <h1 className="lg:text-6xl text-3xl">Discover endless stores with book wonderland</h1>
  <button className="bg-transparent hover:bg-stone-600 text-stone-500 font-semibold hover:text-white py-2 px-4 border border-stone-800 hover:border-transparent rounded my-5">
  Explore
</button>
</div>
    <div className="flex flex-col gap-3 w-2/4  justify-center items-center"> 
<div className="flex gap-3">
<div className=" w-28 h-28 lg:w-44 lg:h-44 bg-stone-600 rounded-tr-3xl rounded-bl-3xl "></div>
    <div className="w-28 h-28 lg:w-44 lg:h-44 bg-stone-500 rounded-tl-3xl rounded-br-3xl"></div>
</div>

<div className="flex gap-3">
<div className="w-28 h-28 lg:w-44 lg:h-44 bg-stone-400 rounded-tl-3xl rounded-br-3xl"></div>
    <div className="w-28 h-28 lg:w-44 lg:h-44 bg-stone-300 rounded-tr-3xl rounded-bl-3xl"></div>
</div>
    

    </div>
    </div>


<div className="w-2/4 my-32 mx-auto">
<form>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-stone-500 focus:border-stone-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Books..." required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-stone-600 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:bg-stone-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

</div>

<div className="flex gap-5 justify-center items-center">  <div className="w-3 h-3 rounded-full bg-stone-600 "></div>  <h1 className="text-2xl font-bold text-stone-800">Discover New Arrivals</h1>  <div className="w-3 h-3 rounded-full bg-stone-600 "></div></div>
<div className="flex flex-wrap justify-center items-center gap-5 lg:my-40 my-20">
{Data.map((book)=>{


return  ( 
    <>
<div className="">
<article key={book.id} className=" w-56 h-64">
   <Link to ={`/books/${book.id}`} ><img src={book.img} alt="" className="w-full h-full" /></Link>
    
    
</article>
</div>
</>
)
})}
</div>
    </>
  )
}
