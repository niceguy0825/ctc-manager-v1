import { notification, Tag } from "antd";
import { ColumnFilterItem } from "antd/lib/table/interface";
import React, { useEffect, useState } from "react";
import { User } from "../../../model/user";
import { UserApi } from "../../../util/api";
import UserPresenter from "./UserPresenter";

export default () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const { success, data } = await UserApi.getAll();

    //console.log("data : ", data);

    if (success) {
      setUsers(data);
      setLoading(false);
    } else {
      notification["error"]({
        message: "네트워크 오류",
        description: data.toString(),
      });
    }
  };

  return (
    <UserPresenter
      users={users}
      loading={isLoading}
    />
  );
};
