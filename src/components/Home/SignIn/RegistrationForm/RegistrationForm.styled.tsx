import styled from "styled-components";
import * as antd from "antd";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #0a3f35;
  margin-bottom: 24px;
`;

export const Form = styled(antd.Form)`
  width: 80%;
`;

export const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;

  button {
    width: 45%;
  }
`;
