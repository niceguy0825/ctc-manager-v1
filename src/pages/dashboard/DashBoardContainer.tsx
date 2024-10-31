import { notification } from "antd";
import React, { useEffect } from "react";
import { Auth } from "../../util/api";
import DashBoardPresenter from "./DashBoardPresenter";

export default () => {

  
  useEffect(() => {
    signin();
  }, []);
  

  const signin = async () => {
    const body = { 
      uid: "23675701" 
    };
    const { success, data } = await Auth.signin(body);

    console.log("success : ", success);

    if (success) {
      notification["success"]({
        message: "로그인성공",
      });
      console.log("token : ", )
      localStorage.setItem("token", data);
    } else {
      notification["error"]({
        message: "로그인실패",
        description: data[0],
      });
    }
  };

  return <DashBoardPresenter />;
};
