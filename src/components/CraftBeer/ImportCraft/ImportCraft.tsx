import React, { useState } from "react";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Card, Space, Pagination } from "../CraftBeer.styled";
import CardBeer from "../CardBeer";
const { Meta } = Card;

const ImportCraft = ({ filteredBeers, search }: any) => {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [minPage, setMinPage] = useState(0);
  const [maxPage, setMaxPage] = useState(pageSize);
  const [currentIdBeer, setCurrentIdBeer] = useState(null);

  const onSetPage = (page: number) => {
    setCurrentPage(page);
    setMinPage((page - 1) * pageSize);
    setMaxPage(page * pageSize);
  };

  const currentCard = (e: any) => {
    setCurrentIdBeer(e);
  };

  if (currentIdBeer)
    return <CardBeer id={currentIdBeer} importCard={filteredBeers} />;

  return (
    <>
      <Space wrap>
        {filteredBeers &&
          filteredBeers.length > 0 &&
          filteredBeers.map(
            (card: any, index: number) =>
              index >= minPage &&
              index < maxPage && (
                <Card
                  key={card.id}
                  hoverable={true}
                  cover={<img alt="example" src={card.img} />}
                  actions={[
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  onClick={() => currentCard(card.id)}
                >
                  <Meta title={card.title} description={card.description} />
                </Card>
              )
          )}
      </Space>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={filteredBeers.length}
        onChange={(value) => onSetPage(value)}
      />
    </>
  );
};

export default ImportCraft;
