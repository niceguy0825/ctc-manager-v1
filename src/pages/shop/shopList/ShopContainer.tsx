import React, {useEffect, useState} from "react";
import ShopPresenter from "./ShopPresenter";
import { ShopDetail } from "../../../model/shopDetail";
import {ShopApi} from "../../../util/api";
import {notification} from "antd";

export default () => {
  const [shopDetail, setShopDetail] = useState<ShopDetail[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getShopDetail();
  }, []);

  const getShopDetail = async () => {
    const { success, data } = await ShopApi.getAll();

    console.log("data : ", data);

    if (success) {
      setShopDetail(data);
      setLoading(false);
    } else {
      notification["error"]({
        message: "네트워크 오류",
        description: data.toString(),
      });
    }

  }

  return (
      <ShopPresenter
          shopDetail={shopDetail}
          loading={isLoading}
      />
  );
};
