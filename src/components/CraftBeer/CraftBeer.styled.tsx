import styled from "styled-components";
import * as antd from "antd";

export const Space = styled(antd.Space)`
  margin: 20px 20px;
  display: flex;
  justify-content: center;

  .ant-card-bordered {
    border: none;
  }
`;

export const Card = styled(antd.Card)`
  width: 240px;
  background: #bab2b5;
`;
