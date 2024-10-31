import { Form, notification } from "antd";
import React, { useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ProductApi } from "../../../util/api";
import ProductEnrollPresenter from "./ProductEnrollPresenter";

export default () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { id } = useParams();
    const mode = pathname === "/product/enroll" ? "enroll" : "update";
    const [form] = Form.useForm();
    const [imageUrl, setImageUrl] = useState<string>();
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [categories, setCategories] = useState<String[]>([]);

    useEffect(() => {

        const keywords = ['따뜻한', '우아한', '네이비'];
        setCategories(keywords);

        if (mode === "update") getProduct();
        //console.log("mode :", mode);
    }, []);

    const getProduct = async () => {
        if (id) {
            const { success, data } = await ProductApi.getOne(id);

            if (success) {
                setImageUrl(data.picture);
                form.setFieldsValue({
                    type: data.type,
                    // ToDo
                });
            } else {
                notification["error"]({
                    message: "네트워크 오류",
                });
            }
        }
    };

    const onComplete = (data: Address) => {
        console.log("onComplete data :", data);
        setVisibleModal(false);
        form.setFieldsValue({ zonecode: data.zonecode, address: data.roadAddress });
    };

    const request = async () => {
        const {
            shop_id,
            type,
            main_img,
            product_name,
            product_color,
            des_title,
            des_description,
            des_keyword,
        } = form.getFieldsValue();

        const reqData = {
            shop_id,
            type,
            main_img,
            product_name,
            product_color,
            des_title,
            des_description,
            des_keyword,
        };

        const updateData = {
            shop_id,
            type,
            main_img,
            product_name,
            product_color,
            des_title,
            des_description,
            des_keyword,
        };

        let result;

        if (mode === "enroll") {
            console.log("reqData", reqData);
            result = await ProductApi.create(reqData);
        } else {
            result = await ProductApi.update(updateData);
        }

        const { success, data } = result;

        if (success) {
            navigate("/result");
        } else {
            notification["error"]({
                message: "네트워크 오류",
                description: data.message,
            });
        }
    };

    return (
        <ProductEnrollPresenter
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            form={form}
            categories={categories}
            visibleModal={visibleModal}
            setVisibleModal={setVisibleModal}
            request={request}
            onComplete={onComplete}
        />
    );
};
