import Tesla from "../assets/SVGs/Teslaimage.svg";
import TimSmith from "../assets/SVGs/Timsmithlogo.svg";
import RightArrowgreen from "../assets/SVGs/Rightarrow2.svg";
import RightArrowwhite from "../assets/SVGs/Rightarrow3.svg";
import RightArrow from "../assets/SVGs/Rightarrow.svg";
import Safeguard from "../assets/SVGs/Safeguarding.svg";
import Responsibilities from "../assets/SVGs/Responsibilities.svg";
import Membership from "../assets/SVGs/Membership.svg";
function Body() {
  return (
    <div className=" space-y-[35px]">
      {/* GUBLI'S PART */}

      <div className="px-[100px] bg-slate-100 flex space-x-[60px] py-[25px]">
        {/* tesla image */}
        <div className=" w-[226px] h-[226px] ">
          <img src={Tesla} alt="img" width="" height="" />
        </div>
        {/* text and logos */}
        <div className="w-[70%] space-y-[10px]">
          <p className="text-slate-600">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1 className="text-green-600 font-medium">Tim Smith</h1>
          <p>British Dragon Boat Racing Association</p>
          <div className="flex space-x-[40px] place-items-center">
            <img src={TimSmith} alt="img" />
            <button className="flex space-x-[10px]">
              <p className="text-green-600 font-medium">Meet all customers</p>
              <img className="pt-[2px]" src={RightArrowgreen} alt="img" />
            </button>
          </div>
        </div>
      </div>

      {/* text and images */}
      <div className="px-[100px] ">
        <center className=" justify-normal space-y-[30px] ">
          <div className="w-[600px] space-y-[15px]">
            <h1 className="font-semibold text-3xl">
              Caring is the new marketting
            </h1>
            <p className="text-slate-600">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
          </div>
          {/* images */}
          <div className="flex justify-between">
            <div className="w-[250px] h-[250px]">
              <img className=" h-[200px]" src={Safeguard} alt="" />

              <div className="py-[10px] space-y-[5px] align-middle absolute ml-[15px] mt-[-70px] w-[220px] font-medium h-[125px] bg-slate-100 border rounded-[15px] ">
                <p className="text-slate-500">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <button className="flex">
                  <p className="text-green-600">Readmore</p>
                  <img className="pt-[2px]" src={RightArrowgreen} alt="" />
                </button>
              </div>
            </div>

            <div className="w-[250px] h-[250px]">
              <img className=" h-[200px]" src={Responsibilities} alt="" />

              <div className=" align-middle absolute space-y-[5px] py-[10px] ml-[15px] mt-[-70px] w-[220px] font-medium h-[125px] bg-slate-100 border rounded-[15px]  ">
                <p className="text-slate-500">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <button className="flex">
                  <p className="text-green-600">Readmore</p>
                  <img className="pt-[2px]" src={RightArrowgreen} alt="" />
                </button>
              </div>
            </div>

            <div className="w-[250px] h-[250px]">
              <img className=" h-[200px]" src={Membership} alt="" />

              <div className=" align-middle py-[10px] space-y-[5px] absolute ml-[15px] mt-[-70px] w-[220px] h-[125px] font-medium bg-slate-100 border rounded-[15px]  ">
                <p className="text-slate-500">
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <button className="flex">
                  <p className="text-green-600">Readmore</p>
                  <img className="pt-[2px]" src={RightArrowgreen} alt="" />
                </button>
              </div>
            </div>
          </div>
        </center>
      </div>

      {/* BottomText */}
      <div className="bg-slate-100">
        <center>
          <h1 className="text-[45px] w-[450px] h-[157px]">
            Pellente suscipit fringilla libero eu.
          </h1>
          <button className="flex py-[10px] px-[25px] rounded bg-green-600 space-x-[8px]">
            <p className=" text-white">Get a Demo</p>
            <img className="mt-[2px]" src={RightArrowwhite} alt="" />
          </button>
        </center>
      </div>
    </div>
  );
}

export default Body;
