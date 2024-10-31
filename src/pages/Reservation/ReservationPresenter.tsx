import React from "react";
import { Table } from "antd";
import { Reservation } from "../../model/reservation";
import { dateReturnToFormat } from "../../util/returnDate";

const { Column } = Table;

interface ReservationParams {
  reservation: Reservation[];
  loading: boolean;
}

export default ({ reservation, loading }: ReservationParams) => (
  <Table dataSource={reservation || []} loading={loading} rowKey="id">
    <Column
      title={<div style={{ textAlign: 'center' }}>요청날짜</div>}
      dataIndex="created_at"
      key="created_at"
      width={200}
      align="center" // 내용 중앙 정렬
      render={(value) => value && dateReturnToFormat(value)}
    />
    <Column
      title={<div style={{ textAlign: 'center' }}>회사이름</div>}
      dataIndex="company_name"
      key="company_name"
      align="center" // 내용 중앙 정렬
      render={(value) => value}
    />
    <Column
      title={<div style={{ textAlign: 'center' }}>이름</div>}
      dataIndex="name"
      key="name"
      align="center" // 내용 중앙 정렬
      render={(value) => value}
    />
    <Column
      title={<div style={{ textAlign: 'center' }}>연락처</div>}
      dataIndex="phone"
      key="phone"
      align="center" // 내용 중앙 정렬
      render={(value) => value}
    />
    <Column
      title={<div style={{ textAlign: 'center' }}>개인정보수집</div>}
      dataIndex="agree"
      key="agree"
      align="center" // 내용 중앙 정렬
      render={(value) => (value ? "동의" : "비동의")}
    />
  </Table>
);
