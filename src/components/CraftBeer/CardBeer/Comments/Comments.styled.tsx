import styled from "styled-components";
import * as antd from "antd";

export const List = styled(antd.List)`
  .ant-comment-content {
    background: #fff;
    border-radius: 15px;
    color: #0a3f35;
    padding: 10px;
    span {
      color: #0a3f35;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
export const TextArea = styled(antd.Input.TextArea)`
  border-radius: 15px;
`;

export const Button = styled(antd.Button)`
  background: #0a3f35;
  border-radius: 15px;
  border-color: #0a3f35;
  color: #f7f3e9;

  &:hover,
  &:active,
  &:focus {
    border-color: #0a3f35;
    background: #cfb190;
    color: #0a3f35;
  }
`;
