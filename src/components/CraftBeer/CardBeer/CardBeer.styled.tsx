import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #0a3f35;
  }
`;
export const Characteristics = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageBlock = styled.div`
  width: 200px;
  border-radius: 15px;
  overflow: hidden;
  margin: 20px 20px 20px 0;

  img {
    max-width: 100%;
  }
`;

export const Title = styled.h1``;
export const DescriptionBlock = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  justify-content: center;
  flex-direction: column;
  color: #0a3f35;
  background: #fff;
  line-height: 40px;
  border-radius: 15px;
  padding: 10px;
`;
export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Alco = styled.span``;
export const InitialDensity = styled.span``;
export const IBU = styled.span``;

export const FullDescriptionBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  color: #0a3f35;
  border-radius: 15px;
  line-height: 30px;
  padding: 10px;
  margin-bottom: 20px;
`;
export const FullDescription = styled.span``;

export const CommentsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
