import styled from "styled-components";
import * as antd from "antd";

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #0a3f35;
  margin-bottom: 24px;
`;

export const MainBlock = styled.div`
  width: 800px;
  height: 450px;
  display: flex;
  border-radius: 15px;
  overflow: hidden;

  button {
    background: #0a3f35;
    color: #fff;
    border-color: #0a3f35;
    border-radius: 15px;
  }

  .ant-btn:hover,
  .ant-btn:focus {
    background: #fff;
    color: #0a3f35;
    border-color: #0a3f35;
  }

  .ant-checkbox-wrapper {
    color: #0a3f35;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #0a3f35;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background: #0a3f35;
    border-color: #0a3f35;
  }
`;

export const LeftSide = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f3e9;

  svg {
    width: 100px;
    height: 100px;
  }
`;

export const RightSide = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #cfb190;
  opacity: 0.8;
`;

export const Form = styled(antd.Form)`
  width: 80%;
`;

export const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  button {
    width: 45%;
  }
`;
