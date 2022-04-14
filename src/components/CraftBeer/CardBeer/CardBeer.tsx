import React from "react";
import {
  Wrapper,
  Characteristics,
  ImageBlock,
  DescriptionBlock,
  Description,
  Alco,
  InitialDensity,
  IBU,
  Title,
  FullDescriptionBlock,
  FullDescription,
  CommentsBlock,
} from "./CardBeer.styled";
import Comments from "./Comments";

interface Props {
  id: number;
  importCard: any;
}

const CardBeer = ({ id, importCard }: Props) => {
  return (
    <>
      {importCard?.map((card: any) => {
        if (card.id === id)
          return (
            <Wrapper key={card.id}>
              <Characteristics>
                <ImageBlock>
                  <img alt="" src={card.img} />
                </ImageBlock>
                <DescriptionBlock>
                  <Title>{card.title}</Title>
                  <Description>
                    <Alco>{`Алкоголь: ${card.alco} %`}</Alco>
                    <IBU>{`Горечь: ${card.ibu} IBU`}</IBU>
                    <InitialDensity>
                      {`Начальная плотность: ${card.initialDensity} %`}
                    </InitialDensity>
                  </Description>
                </DescriptionBlock>
              </Characteristics>
              <FullDescriptionBlock>
                <Title>Описание</Title>
                <FullDescription>{card.fullDescription}</FullDescription>
              </FullDescriptionBlock>
              <CommentsBlock>
                <Title>Комментарии</Title>
                <Comments />
              </CommentsBlock>
            </Wrapper>
          );
        return null;
      })}
    </>
  );
};

export default CardBeer;
