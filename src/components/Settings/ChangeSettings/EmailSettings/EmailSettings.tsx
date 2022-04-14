import React from "react";
import { Form, Input, Button } from "antd";
import BaseForm from "../../../_common/BaseForm";

interface Props {
  onCloseModal: () => void;
}

const EmailSettings = ({ onCloseModal }: Props) => {
  return (
    <BaseForm layout="vertical">
      <Form.Item
        name="newValue"
        label="Новый e-mail"
        rules={[{ required: true, type: "email" }]}
      >
        <Input autoComplete="off" />
      </Form.Item>

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

export default EmailSettings;
