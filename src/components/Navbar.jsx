import { Outlet } from "react-router-dom"







function Navbar(){
    return(
        <>
        

        <nav className="bg-white  flex justify-around ">
              <main className="flex gap-10 rounded-2xl bg-gray-100 text-gray-400 px-10 mt-5 py-2">
                    <div>
                           <h2 className="text-[rgba(255,69,13,1)] text-2xl font-bold">
                                  Fineace
                           </h2>

                            <p className='text-gray-500'>Investments Group</p>
                    </div>
                    <div className="flex gap-4 mt-4 ">
                           <a href='#how'>How FINEACE works</a>
                           <a href='#why'>Why Blockchain matters</a>
                           <a href='#benefits'>Benefits</a>
                    </div>

                     <div>
                            <button className="bg-[rgba(255,69,13,1)] text-gray-300 mt-3 px-3 py-2 rounded-lg hover:bg-red-700 hover:text-white">
                               Connect Wallet
                            </button>

                     </div>
              </main>

 

 
        </nav>

             <Outlet/>
        </>
    )
}


export default Navbar