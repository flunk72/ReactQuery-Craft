import React, { useState } from "react";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Card, Space, Pagination } from "../CraftBeer.styled";
import { russianCard } from "../../_assets";
const { Meta } = Card;

const RussianCraft = () => {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [minPage, setMinPage] = useState(0);
  const [maxPage, setMaxPage] = useState(pageSize);

  const onSetPage = (page: number) => {
    setCurrentPage(page);
    setMinPage((page - 1) * pageSize);
    setMaxPage(page * pageSize);
  };
  return (
    <>
      <Space wrap>
        {russianCard &&
          russianCard.length > 0 &&
          russianCard.map(
            (card, index) =>
              index >= minPage &&
              index < maxPage && (
                <Card
                  hoverable={true}
                  cover={<img alt="example" src={card.img} />}
                  actions={[
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title={card.title} description={card.description} />
                </Card>
              )
          )}
      </Space>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={russianCard.length}
        onChange={(value) => onSetPage(value)}
      />
    </>
  );
};

export default RussianCraft;
