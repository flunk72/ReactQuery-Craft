import styled from "styled-components";
import * as antd from "antd";

export const Wrapper = styled.div`
  margin: 20px;
`;
export const ActionBlock = styled.div`
  width: 100%;
  display: flex;

  .ant-input-search-button {
    background: #0a3f35;
    border-color: #0a3f35;
    border-radius: 0 15px 15px 0 !important;
  }

  .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    border-color: #0a3f35;
    border-radius: 15px 0 0 15px;
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #0a3f35;
  }

  .ant-input:hover {
    border-color: #0a3f35;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: #0a3f35;
    border-radius: 15px;
    overflow: hidden;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none;
    border-color: #0a3f35;
    border-radius: 15px;
    overflow: hidden;
  }
`;

export const SearchInput = styled(antd.Input.Search)`
  width: 400px;
  margin-right: 20px;
`;

export const Select = styled(antd.Select)`
  width: 180px;
`;

export const Space = styled(antd.Space)`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;

  .ant-card-bordered {
    border-radius: 15px;
    overflow: hidden;
  }
  .ant-card-body {
    background: #0a3f35;
  }
`;

export const Card = styled(antd.Card)`
  width: 240px;

  .ant-card-meta-title {
    color: #fff;
  }

  .ant-card-meta-description {
    color: #fff;
  }

  .ant-card-actions {
    background: #cfb190;

    svg {
      fill: #0a3f35;
    }
  }

  .ant-card-cover > * {
    height: 200px;
  }
`;

export const Pagination = styled(antd.Pagination)`
  display: flex;
  justify-content: center;
  margin: 8px 0;

  .ant-pagination-item {
    background-color: #cfb190;
    border-radius: 50%;
    a {
      color: #0a3f35;
    }
    &:hover {
      border: none;
      transform: scale(1.1);
    }
  }

  .ant-pagination-item-active {
    border: none;
  }

  .ant-pagination-prev button,
  .ant-pagination-next button {
    background-color: #0a3f35;
    border-radius: 50%;
    svg {
      fill: #cfb190;
    }
    &:hover {
      border: none;
      transform: scale(1.1);
    }
  }
  .ant-pagination-disabled .ant-pagination-item-link,
  .ant-pagination-disabled:hover .ant-pagination-item-link,
  .ant-pagination-disabled:focus-visible .ant-pagination-item-link {
    opacity: 0.5;
  }
`;
