import { useNavigate } from "react-router-dom";

function Register() {
  const route = useNavigate();
  return (
    <div className="bg-white p-0 flex justify-center flex-col items-center m-0 h-[100vh] w-[100vw]">
      <div className="bg-slate-100   pt-[5vh] pb-0  h-[100vh] w-[90vw] flex flex-col justify-between items-center   px-[16px] ">
        <div>
          <h4 className="text-xl w-[40vw] font-bold pb-[10px]">
            Create your PopX account
          </h4>
          <div className="relative h-fit py-4 ">
            <p className="absolute bg-slate-100 px-1 pr-3 text-violet-600 text-[11px] font-md top-[2%] left-[5%]">
              Full Name
            </p>
            <input
              placeholder="merry doe"
              className=" items-center outline-none  pl-3 placeholder:text-[15px]  placeholder:text-black border-[1px] rounded-md  p-1 w-[80vw] border-slate-600 "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="relative h-fit py-4 ">
            <p className="absolute bg-slate-100 px-1 pr-3 text-violet-600 text-[11px] font-md top-[2%] left-[5%]">
              Phone Number
            </p>
            <input
              placeholder="merry doe"
              className=" items-center outline-none  pl-3 placeholder:text-[15px]  placeholder:text-black border-[1px] rounded-md  p-1 w-[80vw] border-slate-600 "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="relative h-fit py-4 ">
            <p className="absolute bg-slate-100 px-1 pr-3 text-violet-600 text-[11px] font-md top-[2%] left-[5%]">
              Email address{" "}
            </p>
            <input
              placeholder="merry doe"
              className=" items-center outline-none  pl-3 placeholder:text-[15px]  placeholder:text-black border-[1px] rounded-md  p-1 w-[80vw] border-slate-600 "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="relative h-fit py-4 ">
            <p className="absolute bg-slate-100 px-1 pr-3 text-violet-600 text-[11px] font-md top-[2%] left-[5%]">
              Password
            </p>
            <input
              placeholder="merry doe"
              className=" items-center outline-none  pl-3 placeholder:text-[15px]  placeholder:text-black border-[1px] rounded-md  p-1 w-[80vw] border-slate-600 "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="relative h-fit py-4 ">
            <p className="absolute bg-slate-100 px-1 pr-3 text-violet-600 text-[11px] font-md top-[2%] left-[5%]">
              Company name
            </p>
            <input
              placeholder="merry doe"
              className=" items-center outline-none  pl-3 placeholder:text-[15px]  placeholder:text-black border-[1px] rounded-md  p-1 w-[80vw] border-slate-600 "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="  w-fit">
            <p className="pb-[10px]">Are you an agency?</p>
            <div className="flex pb-[15px] justify-around">
              <label className="flex justify-center font-[500]  text-sm items-center">
                <input
                  className="   text-purple-600 accent-purple-600 size-5  mr-1"
                  type="radio"
                  name="option"
                  value="yes"
                />{" "}
                Yes
              </label>
              <label className="flex justify-center text-sm font-[500] items-center">
                <input
                  className="  text-purple-600 accent-purple-600 size-5 mr-1"
                  type="radio"
                  name="option"
                  value="no"
                />{" "}
                No
              </label>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => route("/profile")}
            className="capitalize w-[70vw] mb-[20px] px-4 text-md   font-md py-2 bg-violet-500 rounded-sm hover:bg-indigo-600  text-white"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
