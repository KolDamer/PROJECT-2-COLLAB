import clientLogos from "../assets/SVGs/Clientlogos.svg";
import designFooter from "../assets/SVGs/Designfooter.svg";
import iconMembers from "../assets/SVGs/IconMembers.svg";
import iconPayments from "../assets/SVGs/IconPayments.svg";
import iconEvent from "../assets/SVGs/IconEvent.svg";
import iconClubs from "../assets/SVGs/IconClubs.svg";
import bodyPixelgrade from "..//assets/SVGs/Bodypixelgrade.svg";
import people from "../assets/SVGs/people.svg";
import building from "../assets/SVGs/building.svg";
import hands from "../assets/SVGs/hands.svg";
function Body1() {
  return (
    <div>
      {/* This is the body page for the nexcent website */}
      {/* Part #2 (Kdab's part) */}
      {/* CLIENTS */}
      <div className=" pt-10">
        <div>
          <p className=" font-semibold text-center text-[#4D4D4D] text-[35.06px] leading-[30.63px]">
            Our Clients
          </p>
          <p className=" font-normal text-center text-[#717171] h-[16.71px] text-[16.14px] mt-3">
            We have been working with some Fortune 500+ clients
          </p>
          <center>
            <img
              src={clientLogos}
              alt="Logos under Client"
              className="w-[1050px] my-5"
            />
          </center>
        </div>
        {/* MANAGE */}
        <div>
          <center>
            <p className=" text-[35.06px] leading-[30.63px] font-semibold text-[#4D4D4D]">
              Manage your entire community <br />
              in a single system
            </p>
            <p className=" text-[#717171] text-[16.14px] mt-3 leading-[16.71px] font-normal">
              Who is Nextcent suitable for?
            </p>
          </center>
        </div>
        {/* ORGANISATIONS, ASSOCIATION & GROUPS */}
        <div className="flex  space-x-32 justify-center h-[196.1px] items-center mt-4 ">
          <div className="rounded-lg drop-shadow-[0 2]  border-slate-50 border py-7 px-4  ">
            <center>
              <p>
                <img
                  src={people}
                  alt="svg of people"
                  classname="w-[45.24px] h-[38.98px]"
                />
              </p>
              <p className=" text-[#4D4D4D]  mt-2 text-[23.49px] font-bold leading-[25.06px]">
                Membership <br /> Organisations
              </p>
              <p className="text-[#717171] text-[11.74px] font-normal leading-[13.92px] mt-2">
                Our membership management <br />
                software provides full automation of <br />
                membership renewals and payments
              </p>
            </center>
          </div>
          <div className="border px-6 py-7 rounded-md  border-slate-50">
            <center>
              <p>
                <img
                  src={building}
                  alt="svg of building"
                  width="45.24px"
                  classname="w-[45.24px] h-[38.98px]"
                />
              </p>
              <p className=" text-[#4D4D4D]  mt-2 text-center text-[23.49px] font-bold leading-[25.06px]">
                National <br />
                Associations
              </p>
              <p className="text-[#717171] text-center text-[11.74px] font-normal leading-[13.92px] mt-2 ">
                Our membership management <br />
                software provides full automation of <br />
                membership renewals and <br />
                payments
              </p>
            </center>
          </div>
          <div className="border px-4 rounded-md py-7 border-slate-50">
            <center>
              <p>
                <img
                  src={hands}
                  alt="svg of hands"
                  classname="w-[45.24px] h-[38.98px]"
                />
              </p>
              <p className=" text-[#4D4D4D]  mt-2 text-[23.49px] font-bold leading-[25.06px]">
                Clubs And <br />
                Groups
              </p>
              <p className="text-[#717171] text-[11.74px] font-normal leading-[13.92px] mt-2 ">
                Our membership management <br />
                software provides full automation of <br />
                membership renewals and payments
              </p>
            </center>
          </div>
        </div>
        {/*   PIXELGRADE */}
        <div className="flex space-x-8 justify-center my-10 -ml-24">
          <p className="w-[380px] -mt-8">
            <img src={bodyPixelgrade} alt="pixelgrade svg" />
          </p>
          <div className=" h-[187.9px] w-[590.1px] pt-[55px]">
            <p className="text-[34.06px] font-semibold mb-3 leading-[30.63px] text-[#4D4D4D] ">
              The unseen of spending three <br />
              years at Pixelgrade
            </p>
            <p className="mt-4 mb-5 text-[13.74px] font-normal leading-[20px] text-[#717171] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed <br />
              accumsan quam vitae est varius fringilla. Pellentesque placerat
              vestibulum lorem sed <br />
              porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet
              risus pretium auctor. Etiam <br />
              quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className=" font-medium text-[12.14px] mt-2 leading-[16.71px] text-white bg-[#4CAF4F] rounded-[2.78px] py-[12.74px] px-[24.27px]">
              Learn More
            </button>
          </div>
        </div>
        {/* HELPING */}
        <div className="flex justify-center gap-40 -ml-24 py-[70px] bg-[#F5F7FA] items-center">
          <div className="">
            <p className="text-[34.06px] text-[#4D4D4D] font-semibold leading-[35.63px]">
              Helping a local <br />
              <span className="text-[#4CAF4F] ">business reinvent itself</span>
            </p>
            <p className="text-[14.54px] mt-4 font-normal leading-[16.71px] text-[#18191F] h-[17px] ">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="flex gap-32">
            {/* Members */}
            <div className="">
              <div className="flex items-center w-[177.5px] gap-[11.14px] ">
                <p className="mb-5 -ml-4">
                  <img src={iconMembers} alt="members svg" />
                </p>
                <div className="grid grid-rows-2 -space-y-2">
                  <p className=" text-[28px] font-bold text-[#4D4D4D]">
                    2,245,341{" "}
                  </p>
                  <span className="text-[16px] text-[#717171]"> Members</span>
                </div>
              </div>
              {/* Event Bookings */}
              <div className="flex items-center w-[177.5px] gap-[11.14px] -ml-2">
                <p className="mb-6 -ml-4">
                  <img src={iconEvent} alt="event svg" />
                </p>
                <div className="grid grid-rows-2 -ml-2 -space-y-2">
                  <p className="text-[28px] font-bold text-[#4D4D4D]">
                    828,867{" "}
                  </p>
                  <span className="text-[16px] text-[#717171]">
                    Event Bookings
                  </span>
                </div>
              </div>
            </div>
            {/* Clubs */}
            <div className="">
              <div className="flex -ml-11 items-center w-[177.5px] gap-[11.14px] ">
                <p className="">
                  <img src={iconClubs} alt="club svg" />
                </p>
                <div className="grid grid-rows-2 -ml-2 -space-y-2">
                  <p className="text-[28px]  font-bold text-[#4D4D4D]">
                    46,328{" "}
                  </p>
                  <span className="text-[16px] text-[#717171]">Clubs</span>
                </div>
              </div>
              {/* Payments */}
              <div className="flex items-center w-[177.5px] gap-[11.14px] ">
                <p className="-ml-5 mb-4">
                  <img src={iconPayments} alt="payment svg" width="" />
                </p>
                <div className="grid grid-rows-2 -space-y-2">
                  <p className="text-[28px] font-bold text-[#4D4D4D]">
                    1,926,436
                  </p>
                  <span className="text-[16px] text-[#717171]">Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* HOW TO DESIGN........ */}
        <div className=" flex justify-center py-16 gap-16">
          <p className=" ">
            <img src={designFooter} alt="img at how to..." />
          </p>
          <div className="w-[661px] h-[308px] mt-10 ">
            <p className=" font-semibold text-[36px] leading-[44px] text-[#4D4D4D] ">
              How to design your site footer like <br />
              we did
            </p>
            <p className=" font-normal text-[14px] py-6 leading-[20px] text-[#717171] ">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt <br />
              molestie, massa nunc varius arcu, at scelerisque elit erat a
              magna. Donec quis erat at <br />
              libero ultrices mollis. In hac habitasse platea dictumst. Vivamus
              vehicula leo dui, at porta <br />
              nisi facilisis finibus. In euismod augue vitae nisi ultricies, non
              aliquet urna tincidunt. Integer <br />
              in nisi eget nulla commodo faucibus efficitur quis massa. Praesent
              felis est, finibus et nisi <br />
              ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum
              id gravida.
            </p>
            <button className=" font-medium text-[12.14px] mt-2 leading-[16.71px] text-white bg-[#4CAF4F] rounded-[2.78px] py-[12.74px] px-[24.27px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body1;
