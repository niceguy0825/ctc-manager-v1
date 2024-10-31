import React, {useEffect, useState} from "react";
import ProductPresenter from "./ProductPresenter";
import {ProductApi, UserApi} from "../../../util/api";
import {notification} from "antd";
import {Product} from "../../../model/product";

export default () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { success, data } = await ProductApi.getAll();

    //console.log("data : ", data);

    if (success) {
      setProducts(data);
      setLoading(false);
    }
    else {
      notification["error"]({
        message: "네트워크 오류",
        description: data.toString(),
      });
    }
  };

  return (
      <ProductPresenter
          products={products}
          loading={isLoading}
      />
  );
};