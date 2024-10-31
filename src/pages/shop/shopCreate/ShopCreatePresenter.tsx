import { Button, Form, Input } from "antd";
interface ShopCreateProps {
}
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 8 },
};

export default ({

}: ShopCreateProps) => (
  <Form
    {...layout}
  >
    <Form.Item name="uid" label="ID" >
      <Input placeholder="ID를 입력해주세요" />
    </Form.Item>
    <Form.Item name="shop_name" label="상호명" >
      <Input placeholder="Mercy" />
    </Form.Item>
    <Form.Item name="youtube_link" label="판매점 영상">
    <Input placeholder="판매점 대표 유튜브 link를 입력해 주세요." />
    </Form.Item>
    <Form.Item name="gif_link" label="판매점 gif" >
    </Form.Item>
    <Form.Item name="opening_hours" label="영업 시간">
      <Input placeholder="판매점 영업 시간을 입력해 주세요." />
    </Form.Item>
    <Form.Item name="shop_img" label="판매점 사진" >
    </Form.Item>
    <Form.Item name="notice" label="공지 사항" >
      <Input placeholder="2인요금을 입력해주세요" />
    </Form.Item>
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        등록
      </Button>
    </Form.Item>
  </Form>
);