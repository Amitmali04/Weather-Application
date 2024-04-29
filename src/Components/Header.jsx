
import SearchBar from "./SearchBar"

const Header = () => {



  return (
    <div className="h-full w-full shadow-lg text-white glassCard" >
      <nav className="flex justify-start items-center p-2 border-black">
      <div className="flex justify-between items-center gap-4 py-2">
      <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
      <SearchBar />
      </div>
      <div className="px-5 grid grid-cols-5 gap-5 divide-x-8 divide-slate-950">
      {/* {
        items.reverse().map((item, index) => {
          return (
            <div className="w-full px-2 flex justify-between items-center gap-3 " key={index}>
        <p className="font-semibold text-black ">{item}</p>
        <i className="fa-solid fa-xmark font-semibold text-black cursor-pointer" onClick={() => alert(index)}></i>
       </div>
          )
        })
      } */}
       

       {/* <div className="px-2 flex justify-between items-center gap-3 ">
        <p className="font-semibold text-black ">London</p>
        <i className="fa-solid fa-xmark font-semibold text-black"></i>
       </div>

       <div className="px-2 flex justify-between items-center gap-3 ">
        <p className="font-semibold text-black ">London</p>
        <i className="fa-solid fa-xmark font-semibold text-black"></i>
       </div>
       <div className="px-2 flex justify-between items-center gap-3 ">
        <p className="font-semibold text-black ">London</p>
        <i className="fa-solid fa-xmark font-semibold text-black"></i>
       </div>
       <div className="px-2 flex justify-between items-center gap-3 ">
        <p className="font-semibold text-black ">London</p>
        <i className="fa-solid fa-xmark font-semibold text-black"></i>
       </div> */}
       
      </div>
      
      </nav>
    </div>
  )
}

export default Header
