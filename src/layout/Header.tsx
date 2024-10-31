import React from "react";
import styled from "styled-components";
import { Layout, notification } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default () => {
  return (
    <Header className="header" style={{ position: 'sticky', top: 1, zIndex: 1, width: '100%', backgroundColor: '#FFEBEE'}}>
      <Link to="/"></Link>
    </Header>
  );
};

const TitleText = styled.span`
  color: #776A62;
  font-size: 1px;
`;