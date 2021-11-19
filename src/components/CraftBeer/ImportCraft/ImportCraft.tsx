import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Card, Space } from "../CraftBeer.styled";
const { Meta } = Card;

const RussianCraft = () => {
  return (
    <Space size={[20, 20]} wrap>
      {new Array(10).fill(null).map((_, index) => (
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta title="Card title" description="This is the description" />
        </Card>
      ))}
    </Space>
  );
};

export default RussianCraft;
