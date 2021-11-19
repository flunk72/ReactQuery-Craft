import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
* {
  box-sizing: border-box;

  /* &::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
    border: 1px solid #eee;

    &-thumb {
      background: #c9d2e2; 
    }
  } */

  .ant-layout-header {
    padding: 0 20px;
    line-height: unset;
    }
}`;
