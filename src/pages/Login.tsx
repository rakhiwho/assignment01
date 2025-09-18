import { useNavigate } from "react-router-dom";
function Login() {
  const route = useNavigate();
  return (
    <div className="bg-white p-0 flex justify-center flex-col items-center m-0 h-[100vh] w-[100vw]">
      <div className="bg-slate-100   pt-[5vh] pb-0  h-[100vh] w-[90vw] flex flex-col  items-center   px-[16px] ">
        <div>
          <h4 className="text-xl w-[40vw] font-bold pb-[10px]">
             Signin to your PopX account
          </h4>
    <p  className="w-[80%] pb-2 text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
        </div>
        <div>
          <button
            onClick={() => route("/profile")}
            className="capitalize  w-full mb-[20px] px-4 text-md  font-md py-2 bg-gray-300 rounded-sm hover:bg-purple-600 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
