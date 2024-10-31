import { Menu, MenuProps } from "antd";
import {
  AntDesignOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<Link to="/">Dashboard</Link>, 'home', <AntDesignOutlined />),

  getItem('상담 관리', 'reservation_tab', <UnorderedListOutlined />, [
    getItem(<Link to="/reservation">상담 목록</Link>, 'reservation'),
  ]),

];

const CtcMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click : ', e);
  };

  return (
    <Menu
        onClick={onClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['home']}
        mode="inline"
        items={items}
    />
  );
};

export default CtcMenu;