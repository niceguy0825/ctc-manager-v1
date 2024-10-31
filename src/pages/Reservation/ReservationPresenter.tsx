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
  <Table dataSource={reservation || []} loading={loading} rowKey="id"> {/* 빈 배열로 대체 */}
    <Column
      title="요청날짜"
      dataIndex="created_at"
      key="created_at"
      render={(value) => value && dateReturnToFormat(value)} // null 체크 및 날짜 포맷 변환
    />
    <Column
      title="회사이름"
      dataIndex="company_name"
      key="company_name"
      render={(value) => value}
    />
    <Column
      title="이름"
      dataIndex="name"
      key="name"
      render={(value) => value}
    />
    <Column
      title="연락처"
      dataIndex="phone"
      key="phone"
      render={(value) => value}
    />
    <Column
      title="개인정보동의"
      dataIndex="agree"
      key="agree"
      render={(value) => (value ? "동의" : "비동의")} // true/false를 '동의'/'비동의'로 표시
    />
    {/* <Column
      title="유저 ID"
      dataIndex="id"
      key="id"
      align='center'
      render={(text: string) => text}
    /> */}
  </Table>
);
