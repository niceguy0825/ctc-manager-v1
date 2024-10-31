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

  getItem('회원 관리', 'user_tab', <UnorderedListOutlined />, [
    getItem(<Link to="/user">회원목록</Link>, 'user')]),

  // getItem('판매점 관리', 'shop_tab', <UnorderedListOutlined />, [
  //   getItem(<Link to="/shop">판매점 목록</Link>, 'shop'),
  //   getItem(<Link to="/shop/enroll">판매점 등록</Link>, 'shop_enroll'),
  // ]),

  // getItem('제품 관리', 'product_tab', <UnorderedListOutlined />, [
  //   getItem(<Link to="/product">제품 목록</Link>, 'product'),
  //   getItem(<Link to="/product/enroll">제품 등록</Link>, 'product_enroll'),
  // ]),

  // getItem('리뷰 관리', 'product_tab', <UnorderedListOutlined />, [
  //   getItem(<Link to="/review">리뷰 목록</Link>, 'review'),
  //   getItem(<Link to="/review/enroll">리뷰 등록</Link>, 'review_enroll'),
  // ]),

  // getItem('인플루언서 관리', 'influencer_tab', <UnorderedListOutlined />, [
  //   getItem(<Link to="/influencer">리뷰 목록</Link>, 'influencer'),
  //   getItem(<Link to="/influencer/enroll">리뷰 등록</Link>, 'influencer_enroll'),
  // ]),
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