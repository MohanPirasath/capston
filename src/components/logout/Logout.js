import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { API } from "../../App";

export function Logout() {
  const navigate = useNavigate();
  // this function get call once u get in to the logout page it removes the token and make you to logout
  const logout = async () => {
    try {
      const res = await fetch(`${API}/logout`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 401 || !res) {
        window.alert("problem with logout");
      } else {
        localStorage.removeItem("username");
        window.alert("logout successful");
        // window.location.reload();
        navigate("/signup");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return <div>logout</div>;
}
