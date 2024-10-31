import React, { useEffect } from "react";
import {Divider, Layout, Menu, MenuProps} from "antd";
import SideMenu from "./SideMenu";

const { Content, Sider } = Layout;
interface LayoutParams {
  children: React.ReactNode;
}

export default ({ children }: LayoutParams) => {
  useEffect(() => {
    
  }, []);

  return (
      <Layout>
        <Layout>
          <Sider style={{ backgroundColor: 'white' , paddingTop: 20, paddingLeft: 5, }}>
              <SideMenu/>
          </Sider>
          <Layout style={{ backgroundColor: 'white' }}>
              <Content
                  style={{
                      padding: 24,
                      marginLeft: 5,
                      minHeight: 280,
                  }}
              >
                  {children}
              </Content>
          </Layout>
      </Layout>
    </Layout>
  );
};
