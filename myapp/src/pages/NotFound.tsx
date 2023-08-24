import img from "../assets/404-22.svg"

export default function NotFound() {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center">
            <img src={img} className="h-3/4 w-3/4"></img>
    </div>
    </>
  )
}
