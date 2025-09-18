import { FaCamera } from "react-icons/fa";
import  { useRef, type ChangeEvent, } from "react";
function Profile() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current!.click(); // Open file dialog
  };
 const handleFileChange = (event : ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files![0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div className="bg-white p-0 flex  flex-col items-center m-0 h-[100vh] w-[100vw]">
      <h4 className="text-md flex items-start w-[90vw] py-2 text-start  font-md pb-[10px]">
        Account Settings
      </h4>
      <div className="bg-slate-100   pt-[5vh] pb-0  h-[100%] w-[90vw] flex flex-col items-center   px-[16px] ">
        <div className="flex flex-Around items-center relative   justify-between w-[100%]">
          <img
            className="w-[20vw] rounded-full"
            src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/Beautiful-Women-In-The-World.jpg.webp"
            alt=""
          />
           <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

          <FaCamera className="size-5 absolute p-1 left-[15vw] top-[8vh] rounded-full bg-purple-600 text-white" onClick={handleButtonClick} />
          <div className=" w-full ml-[10px] text-start flex-col items-start flex">
            <p className="font-bold">Merry Doe</p>
            <p>Merry@gmail.com</p>
          </div>
        </div>
        <div className="w-[100%] text-slate-800">
          veniam, sequi id dolorem iusto vel quae. orem perspiciatis rerum
          reiciendis maiores prot. Nobis officiis fugiat porro et mollitia
          consequuntur.
        </div>
        <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
        <div className="h-[100%] w-[100%] border-dotted bg-slate-100 border-gray-700"></div>
      </div>
    </div>
  );
}

export default Profile;
