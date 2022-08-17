import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { User } from "./model/User";

interface Props {
  user?: User;
}

export const AppWrapper = ({ user }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path={"*"} element={<Login />} />
    </Routes>
  );
};
