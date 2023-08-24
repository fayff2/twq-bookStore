import Navbar from "../component/Navbar"
import Data from "../data/Data"
import { Link } from "react-router-dom"

export default function books() {

  return (
    <>
    <Navbar></Navbar>
    <section className="sec">
        <h1 className="text-center text-6xl my-20">books</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 lg:my-40 my-20">
            {Data.map((book)=>{


                return  ( 
                
                <article key={book.id} className=" w-56 h-64">
                   <Link to ={`/books/${book.id}`} ><img src={book.img} alt="" className="w-full h-full" /></Link>
                    
                    
                    {/* <Link to ={`/books/${book.id}`}> more info</Link> */}
                </article>


                )
            })}
        </div>
    </section>
    </>
   
  )
}

