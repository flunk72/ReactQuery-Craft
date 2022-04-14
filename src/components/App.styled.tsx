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

  .ant-notification-notice {
    border-radius: 15px;
    background: #f7f3e9;
  }

  .ant-notification-notice-message {
    color: #0a3f35;
  }

  .ant-input,
  .ant-input-affix-wrapper {
    border-radius: 15px;
  }

  .ant-input:hover {
    border-color: #0a3f35;
  }

  .ant-modal-content {
    border-radius: 15px;
  }

  .ant-form-item-label > label {
    color: #0a3f35;
  }

  .ant-form-item-explain.ant-form-item-explain-error {
    color: #df2029;
  }
}`;
