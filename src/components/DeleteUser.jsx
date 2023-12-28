import React from "react";
import { clearUsers } from "./store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteUser = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(clearUsers())}
        style={{ background: "rgb(222 143 104)", color: "#ffff" }}
      >
        Delete All User
      </button>
    </div>
  );
};

export default DeleteUser;
