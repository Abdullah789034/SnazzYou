import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import LogoutButton from "../Login/LogoutButton";
import { UserContext } from "../../Context/UserContext";
const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  return (
    <div className="h-auto  bg-black">
      <div className="p-6 flex justify-between">
        <Link to="/">
          <img src={logo} width={175} className="h-auto" alt="Logo" />
        </Link>

        {loggedIn && <LogoutButton />}
        {/* <Link to='/login'><button className='bg-[white] px-4 py-2 rounded-full'>Login</button></Link> */}
      </div>
    </div>
  );
};

export default Navbar;
