import React, { ReactNode } from "react";
import { Table } from "antd";
import { User } from "../../../model/user";
import { dateReturnToFormat } from "../../../util/returnDate";

const { Column } = Table;

interface UserParams {
  users: User[];
  loading: boolean;
}

export default ({ users, loading }: UserParams) => (
  <Table dataSource={users} loading={loading}>
    <Column
      title="유저 ID"
      dataIndex="id"
      key="id"
      align='center'
      render={(text: string) => text}
    />
    <Column
      title="이름"
      dataIndex="name"
      key="name"
      render={(value) => value}
    />
    <Column
      title="성별"
      dataIndex="gender"
      key="gender"
      render={(value) => value}
    />
    <Column
      title="생일"
      dataIndex="date_of_birth"
      key="date_of_birth"
      render={(value) => value}
    />
    <Column
      title="폰번호"
      dataIndex="phone"
      key="phone"
      render={(value) => value}
    />
    <Column
      title="별명"
      dataIndex="nickname"
      key="nickname"
      render={(value) => value}
    />
    <Column
      title="SNS 가업유형"
      dataIndex="type"
      key="type"
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