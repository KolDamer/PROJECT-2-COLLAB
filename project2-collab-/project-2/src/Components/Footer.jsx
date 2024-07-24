import nexcentfooter from "../assets/SVGs/Nexcentfooter.svg";
import sendicon from "../assets/SVGs/send.svg";
import instagram from "../assets/SVGs/instagram.svg"
import ball from "../assets/SVGs/ball.svg"
import twitter from "../assets/SVGs/twitter.svg"
import youtube from "../assets/SVGs/youtube.svg"

function Footer() {
  return(/* This is the footer page for the nexcent website */

    <div className="bg-[#263238] h-[328px] flex justify-evenly px-[100px] py-[64px]">
            <div className="flex flex-col space-y-[8px]">
                  <img src={nexcentfooter} alt="nexcentfooterlogo" className="pb-[20px]"/>
                  <h className="text-[#F5F7FA]">Copyright 2020 Nexcent ltd. </h>
                  <h className="text-[#F5F7FA] pb-[20px]">All rights reserved</h>
                  <div className="flex justify-between ">
                        {/* this is for socials logo */}
                        <img src={instagram} alt="ig logo" />
                        <img src={ball} alt="ball logo" />
                        <img src={twitter} alt="ig logo" />
                        <img src={youtube} alt="ig logo" />
                  </div>
            </div>

            <div className="flex flex-col space-y-[13px]">
                    <h className="text-[#FFFFFF] text-[23px] font-bold
                    ">Company</h>
                    <h className="text-[#F5F7FA]">About us</h>
                    <h className="text-[#F5F7FA]">Blog</h>
                    <h className="text-[#F5F7FA]">Contact us</h>
                    <h className="text-[#F5F7FA]">Pricing</h>
                    <h className="text-[#F5F7FA]">Testimonials</h>
            </div>

            <div className="flex flex-col space-y-[13px]">
                    <h className="text-[#FFFFFF] text-[23px] font-bold">Support</h>
                    <h className="text-[#F5F7FA]">Help center</h>
                    <h className="text-[#F5F7FA]">Terms of Service</h>
                    <h className="text-[#F5F7FA]">Legal</h>
                    <h className="text-[#F5F7FA]">Privacy Policy</h>
                    <h className="text-[#F5F7FA]">Status</h>

            </div>


            <div>
                    <form className="space-y-[20px]">
                    <label className="text-[#F5F7FA] text-[23px] font-bold"> Stay up to date</label>
                    <br/>

                    <div className="flex justify-between w-[255px] h-[40px]  bg-slate-600 rounded-[8px] ">                 
                         <input type="email" placeholder="Your email address"className=" rounded-[8px] text-[14px] placeholder:text-[#D9DBE1] placeholder:pl-2 placeholder:text-[14px] bg-slate-600 space-x-3 w-[]" />
                         <button className="px-3 py-3">
                         <img src={sendicon} alt="sendicon" className="w-[16.5px] h-[16.5px] "/>
                         </button>
                    </div>

                    </form>
            </div>
          
          




    </div>

  )
  }


export default Footer;
