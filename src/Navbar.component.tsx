function Navbar() {
  return (
    <>
      <div className="navbar flex text-center justify-between p-2">
        <div className="logo">
          <h1 className=" ml-5 font-bold uppercase mt-5 text-2xl">
            Nickolodeon Shop
          </h1>
        </div>
        <div className="left flex">
          <li className="link list-none uppercase border-rose-500/65 hover:bg-rose-500/80 rounded-lg mr-5 cursor-pointer p-2 mt-3">
            My Collections
          </li>
          <div className="profile w-12 mt-3 mr-2">
            <img src="./public/profile_pic.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
