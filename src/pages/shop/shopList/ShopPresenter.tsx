import React, { ReactNode } from "react";
import { Table } from "antd";
import { ShopDetail } from "../../../model/shopDetail";
import { dateReturnToFormat } from "../../../util/returnDate";

const { Column } = Table;

interface ShopDetailParams {
        shopDetail: ShopDetail[];
    loading: boolean;
}

export default ({ shopDetail, loading }: ShopDetailParams) => (
    <Table dataSource={shopDetail} loading={loading}>
        <Column
            title="판매점 ID"
            dataIndex="id"
            key="id"
            align='center'
            render={(text: string) => text}
        />
        <Column
            title="판매점 이름"
            dataIndex="shop_name"
            key="shop_name"
            render={(value) => value}
        />
        <Column
            title="주소"
            dataIndex="address"
            key="address"
            render={(value) => value}
        />
        <Column
            title="상세주소"
            dataIndex="detailed_address"
            key="detailed_address"
            render={(value) => value}
        />
        <Column
            title="대표성함"
            dataIndex="ceo_name"
            key="ceo_name"
            render={(value) => value}
        />
        <Column
            title="담당자"
            dataIndex="manager_name"
            key="manager_name"
            render={(value) => value}
        />
        <Column
            title="담당자 번호"
            dataIndex="manager_number"
            key="manager_number"
            render={(value) => value}
        />
        <Column
            title="E-mail"
            dataIndex="email"
            key="email"
            render={(value) => value}
        />
        <Column
            title="가입날짜"
            dataIndex="created_at"
            key="created_at"
            render={(value) => value !== null && dateReturnToFormat(value)}
        />
    </Table>
);