import React from "react";
import { Table, Image } from "antd";
import {Product} from "../../../model/product";

const { Column } = Table;

interface ProductParams {
    products: Product[];
    loading: boolean;
}

export default ({ products, loading }: ProductParams) => (
    <Table dataSource={products} loading={loading}>
        <Column
            title="제품 ID"
            dataIndex="id"
            key="id"
            align='center'
            render={(text: string) => text}
        />
        <Column
            title="메인사진"
            dataIndex="main_img"
            key="main_img"
            align="center"
            width={120}
            render={(url: string) => <Image width={100} src={url} />}
        />
        <Column
            title="제품이름"
            dataIndex="product_name"
            key="product_name"
            align='center'
            render={(text: string) => text}
        />
        <Column
            title="제품색상"
            dataIndex="product_color"
            key="product_color"
            align='center'
            render={(text: string) => text}
        />
        <Column
            title="분류"
            dataIndex="type"
            key="type"
            align='center'
            render={(text: string) => text}
        />
        <Column
            title="상세제목"
            dataIndex="des_title"
            key="des_title"
            align='center'
            render={(text: string) => text}
        />
        <Column
            title="상세키워드"
            dataIndex="des_keyword"
            key="des_keyword"
            align='center'
            render={(text: string) => text}
        />
    </Table>
)
