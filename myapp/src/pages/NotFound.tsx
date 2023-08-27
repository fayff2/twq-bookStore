import img from "../assets/404-22.svg"
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const history = useNavigate()
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center">
            <img src={img} className="h-3/4 w-3/4"></img><br></br>
      <button onClick={()=>history("/")}> </button>

    </div>
    </>
  )
}
