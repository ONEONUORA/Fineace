import Section2 from "../components/Section1";
import Image from "../assets/Container (8).png"
import Image1 from "../assets/Contanier.png"
import Image3 from "../assets/Container (9).png"
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";






function Home(){
    return(
        <>
        {/* Transforming section */}
        
            <section className="flex flex-col justify-center items-center text-center mt-10 lg:mt-[5rem]  px-4 lg:px-20">
  <div className="space-y-6 text-center">
    <h3 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-gray-900">
      Transform Investment and Budget <br/> Management with Blockchain
    </h3>
    <p className="font-medium text-sm md:text-base lg:text-lg text-gray-700">
      A secure, decentralized platform for efficient fund allocation, tracking, and investment <br/> management, empowering organizations to manage resources effortlessly.
    </p>
  </div>

  <div className="flex flex-col sm:flex-row gap-4 mt-8">
    <button className="bg-black text-white px-6 py-3 font-semibold text-sm md:text-base rounded-lg hover:bg-gray-500 transition">
      Connect Wallet
    </button>
    <button className="bg-white text-[rgba(255,69,13,1)] border-2 border-[rgba(255,69,13,1)] px-6 py-3 font-semibold text-sm md:text-base rounded-lg hover:text-white hover:bg-gray-500 transition">
      Learn More
    </button>
  </div>
            </section>


        {/* Section2 */}
           <Section2/>

           {/* How Fineace works section */}
           <section className="grid place-items-center min-h-screen px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-3xl space-y-6">
        <h3 id="how" className="text-[20px] font-[400] text-gray-600">
            How <span className="text-[rgba(255,69,13,1)]">FINEACE</span> Works
        </h3>
        <h1 className="text-[32px] md:text-[48px] font-[900] text-gray-800 leading-tight">
            Seamless, Transparent, and Efficient Budget Management
        </h1>
        <p className="font-[400] text-[16px] md:text-[18px] text-gray-600 pb-10">
            FINEACE uses blockchain for a decentralized, immutable ledger that tracks fund allocations and spending, ensuring visibility and accountability.
        </p>
         </div>

    <div>
        <img
            src={Image}
            alt="Image2"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-[90%] mx-auto"
        />
    </div>
           </section>


           {/* Why blockchain matters */}
           <section className="grid place-items-center min-h-screen px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-3xl space-y-6">
        <h3 id="why" className="text-[20px] font-[400] text-gray-600">
            Why <span className="text-[rgba(255,69,13,1)]">Blockchain</span> Matters
        </h3>
        <h1 className="text-[32px] md:text-[48px] font-[900] text-gray-800 leading-tight">
        The Power of Blockchain in Financial Management
        </h1>
         </div>

    <div>
        <img
            src={Image1}
            alt="Image3"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-[90%] mx-auto"
        />
    </div>
           </section>

           {/* Benefits Of Blockchain */}
           <section className="grid place-items-center min-h-screen px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-3xl space-y-6">
        <h3 id="benefits" className="text-[20px] font-[400] text-gray-600">
             <span className="text-[rgba(255,69,13,1)]">Benefits</span>  Of  Blockchain
        </h3>
        <h1 className="text-[32px] md:text-[48px] font-[900] text-gray-800 leading-tight">
        The Benefits of Using Blockchain
        </h1>
         </div>

    <div>
        <img
            src={Image3}
            alt="Image4"
            className="w-full  max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-[90%] mx-auto"
        />
    </div>
           </section>

            {/* Unmatched security section */}

            <section className="px-4 md:px-8 lg:px-16  flex flex-col justify-center items-center text-center mt-[5rem]">
    <div className="max-w-3xl">
        <h1 className="font-[600] text-[28px] md:text-[36px] lg:text-[48px] leading-snug text-gray-800">
            Unmatched Security and Transparency
        </h1>
        <p className="font-[400] text-[16px] md:text-[18px] text-gray-600 mt-4">
            Experience blockchain&lsquo;s secure, trustless, and transparent transactions for efficient fund management.
        </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="bg-black text-white px-6 py-3 font-semibold text-sm md:text-base rounded-lg hover:bg-gray-500 transition">
            Connect Wallet
        </button>
        <button className="bg-white text-[rgba(255,69,13,1)] border-2 border-[rgba(255,69,13,1)] px-6 py-3 font-semibold text-sm md:text-base rounded-lg hover:text-white hover:bg-gray-500 transition">
            Learn More
        </button>
    </div>
            </section>

            {/* Footer section */}
            <section className="relative flex flex-col items-center justify-center px-4 md:px-8 text-center min-h-screen">
    {/* Fineace Write-Up */}
    <div className="relative">
        <h1 className="text-[32px] md:text-[15rem] font-bold text-[rgba(255,69,13,1)] opacity-20">
            Fineace
        </h1>
        <h1 className="text-[24px] md:text-[8rem]  text-gray-600 opacity-20">
            Investment Group
        </h1>

        {/* Social Icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-6">
            <FaFacebook className="text-[24px] md:text-[40px] text-[rgba(255,69,13,1)] hover:text-blue-600 cursor-pointer transition duration-200" />
            <BsInstagram className="text-[24px] md:text-[40px] text-[rgba(255,69,13,1)] hover:text-pink-500 cursor-pointer transition duration-200" />
            <FaLinkedin className="text-[24px] md:text-[40px] text-[rgba(255,69,13,1)] hover:text-blue-700 cursor-pointer transition duration-200" />
            <FaTwitter className="text-[24px] md:text-[40px] text-[rgba(255,69,13,1)] hover:text-blue-500 cursor-pointer transition duration-200" />
        </div>
    </div>
</section>



        </>
        
    )
}


export default Home;