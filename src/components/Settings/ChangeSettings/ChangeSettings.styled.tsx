import styled from "styled-components";
import * as antd from "antd";

const mainStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: auto;
  background: #fff;
  border-radius: 15px;
  margin: 20px;
  padding: 10px;
  color: #0a3f35;
  text-align: center;

  button {
    margin-top: 20px;
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
  }
`;

export const Title = styled.h1`
  color: #0a3f35;
`;

export const Wrapper = styled.div`
  margin: 20px;
  display: flex;
`;

export const Modal = styled(antd.Modal)`
  .ant-btn {
    width: 125px;
    background: #0a3f35;
    border-radius: 15px;
    border-color: #0a3f35;
    color: #f7f3e9;
    margin: 10px 10px 0 10px;

    &:hover,
    &:active,
    &:focus {
      border-color: #0a3f35;
      background: #cfb190;
      color: #0a3f35;
    }
  }
  footer {
    display: flex;
    justify-content: center;
  }
`;

export const AvatarBlock = styled(mainStyled)``;
export const LoveBeer = styled(mainStyled)``;
export const Email = styled(mainStyled)``;
export const Password = styled(mainStyled)``;
