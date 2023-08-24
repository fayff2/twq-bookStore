import Navbar from "../component/Navbar"
import Data from "../data/Data"
import { Link , useParams } from "react-router-dom"

export default function BookDetails() {
  const {bookId} = useParams();
  const book = Data.find((book)=> book.id === bookId);
  

  return (
    <>
    <Navbar></Navbar>
  <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-40 mt-40">
    <img src={book?.img}alt="" />
    <div className="h-96">
    <h1 className="text-xl my-5"> {book?.title}</h1>
   <h4 className="text-lg mb-3">  author : {book?.author}</h4>
  
 <p className="w-80"> {book?.brief}</p> <br/>
 <Link to="/home/books">
 <a className="bg-transparent hover:bg-stone-600 text-stone-500 font-semibold hover:text-white py-2 px-4 border border-stone-800 hover:border-transparent rounded ">
Back To Books
</a> </Link>

    </div>
 
 
  

  </div>

 </>

  )
}
