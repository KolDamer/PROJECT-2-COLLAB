import nexcentheader from "../assets/SVGs/Nexcentheader.svg";
import illustration from "../assets/SVGs/Illustration.svg";

function Header() {
  return (
    <div>
        {/* This is the header page for the nexcent website */}

         {/* this is the div of the navbar*/}

                  <nav className="flex justify-evenly py-[30px] px-[100px] bg-[#F5F7FA]">
                        <div>
                            <img src={nexcentheader} alt="headerlogo" />
                            
                        </div>

                        <ul className="flex space-x-[50px]">
                            <li>Home</li>
                            <li>Service</li>
                            <li>Feature</li>
                            <li>Product</li>
                            <li>Testimonial</li>
                            <li>FAQ</li>
                        </ul>

                        <div className="space-x-[14px]">
                            <button className="text-[#4CAF4F] px-[20px] py-[10px] rounded-[8px]">
                                  Login
                            </button>
                              
                              <button className="bg-[#4CAF4F] px-[20px] py-[10px] rounded-[8px]">
                                  Sign Up
                              </button>
                        </div>


                  </nav>

                {/* This is the container for the main text */}


    <section className="h-[599px] bg-[#F5F7FA]">
      <div className="flex justify-evenly h-599px px-[100px] "> 
              <div className="pl-[100px]  w-[657px] h-[500px] space-y-4 py-[104px]">
                        <div className="w-[657px] h-[152px] text-[64px] leading-[70px] py-4 font-[600]">
                            <p className="text-[#4D4D4D] ">Lessons and insights 
                                  <span className="text-[#4CAF4F]"> from 8 years</span>

                            </p>
                        </div>


                        <div className="w-[657px] h-[24px]">
                              <p className="text-[16px] text-[#717171]">Where to grow your business as a photographer:
                                  site or social media?
                              </p>

                        </div>

                        <div className="py-5">
                        <button className="text-[#FFFFFF] bg-[#4CAF4F] px-[32px] py-[14px] rounded-[14px] ">
                              Register
                        </button>
                        </div>
                </div>

                <div className="py-[96px] px-[100px]" >
                        <img src={illustration} alt="illustrationsvg" />
                </div>
          </div>




    </section>
            
            
            
            
          

    </div>
  )
}

export default Header