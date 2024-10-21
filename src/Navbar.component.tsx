import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="navbar flex text-center justify-between p-2">
        <div>
          <h1 className="mt-5 ml-2 font-extrabold uppercase text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
            Nickolodeon Shop
          </h1>
        </div>
        <div className="left flex">
          <li className="link list-none uppercase text-slate-200 border-rose-500/65 hover:bg-pink-700/85 rounded-lg mr-5 cursor-pointer p-2 mt-3">
            My Collections
          </li>
          <div className="cart flex relative cursor-pointer">
            <FaCartShopping className="mt-5 size-6 fill-slate-100 mr-10" />
            <p className="font-extrabold text-1xl text-slate-200 ml-5 bg-slate-700 rounded-full p-2 absolute mt-1 h-7 w-7 items-center shadow-lg text-start">
              4
            </p>
          </div>
          <div className="profile w-12 mt-3 mr-2">
            <img src="./public/profile_pic.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
