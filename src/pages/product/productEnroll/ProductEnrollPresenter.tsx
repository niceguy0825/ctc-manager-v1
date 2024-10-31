import {Button, Form, FormInstance, Input, Modal, Tag} from "antd";
import { ImageUpload, OnChangeHandler } from "../../../hook/ImageUploadView";
import DaumPostcode, { Address } from "react-daum-postcode";
import styled from "styled-components";
import React from "react";

interface ProductEnrollProps {
    imageUrl: string | undefined;
    setImageUrl: OnChangeHandler;
    form: FormInstance;
    categories: String[];
    visibleModal: boolean;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
    request: () => Promise<void>;
    onComplete: (data: Address) => void;
}

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 2, span: 8 },
};

export default ({
    imageUrl,
    setImageUrl,
    form,
    categories,
    visibleModal,
    setVisibleModal,
    request,
    onComplete,
}: ProductEnrollProps) => (
    <Form
        {...layout}
        form={form}
        initialValues={{ introduction: "", product_color: ['ㄱ', 'ㄴ', 'ㄷ'],
            des_keyword: ['a', 'b', 'c']}}
        onFinish={() => request()}
    >
        <Form.Item name="shop_id" label="판매점 ID" rules={[{ required: true }]}>
            <Input placeholder="판매점 ID를 입력해주세요" />
        </Form.Item>
        <Form.Item name="type" label="제품 종류" rules={[{ required: true }]}>
            <Input placeholder="제품 종류를 입력해주세요" />
        </Form.Item>
        <Form.Item name="main_img" label="상품사진" rules={[{ required: true }]}>
            <ImageUpload
                imageUrl={imageUrl}
                setImageUrl={(url) => {
                    setImageUrl(url);
                    form.setFieldsValue({ main_img: url });
                }}
            />
        </Form.Item>
        <Form.Item name="product_name" label="상품 이름" rules={[{ required: true }]}>
            <Input placeholder="상품 이름을 입력해주세요" />
        </Form.Item>

        <Form.Item name="product_color" label="상품 색상" rules={[{ required: true }]}>
            <Input placeholder="상품 색상을 입력해주세요" />
        </Form.Item>

        <Form.Item name="des_title" label="상품 제목" rules={[{ required: true }]}>
            <Input placeholder="상품 제목을 입력해주세요" />
        </Form.Item>
        <Form.Item name="des_description" label="상품 내용" rules={[{ required: true }]}>
            <Input placeholder="상품 내용을 입력해주세요" />
        </Form.Item>
        <Form.Item name="des_keyword" label="상품 키워드" rules={[{ required: true }]}>
            <Input placeholder="상품 키워드를 입력해주세요" />
        </Form.Item>
        <Form.Item name="상담항목" label="상담항목" rules={[{ required: false }]}>
            <TagWrapper>

            </TagWrapper>

        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
                등록하기
            </Button>
        </Form.Item>
    </Form>
);

const TagWrapper = styled.div`
  margin-bottom: 10px;
`;