import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("jwt-token");
    navigate("/");
    setLoggedIn(false);
  };
  return (
    <>
      <button
        onClick={logout}
        className="bg-white px-4 py-2 text-black rounded-sm"
      >
        logout
      </button>
    </>
  );
};
export default LogoutButton;
