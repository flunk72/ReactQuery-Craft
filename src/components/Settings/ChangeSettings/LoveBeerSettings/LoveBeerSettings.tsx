import React from "react";
import { Form, Input, Button } from "antd";
import BaseForm from "../../../_common/BaseForm";
import { HeartOutlined } from "@ant-design/icons";

interface Props {
  onCloseModal: () => void;
}

const LoveBeerSettings = ({ onCloseModal }: Props) => {
  return (
    <BaseForm layout="vertical">
      Введите название любимого пива <HeartOutlined />
      <footer>
        <Button htmlType="submit" type="primary">
          Сохранить
        </Button>

        <Button
          htmlType="button"
          onClick={() => {
            onCloseModal();
          }}
        >
          Отмена
        </Button>
      </footer>
    </BaseForm>
  );
};

export default LoveBeerSettings;
