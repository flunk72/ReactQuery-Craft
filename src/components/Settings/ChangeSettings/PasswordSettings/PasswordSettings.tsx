import React from "react";
import { Form, Input, Button } from "antd";
import BaseForm from "../../../_common/BaseForm";

interface Props {
  onCloseModal: () => void;
}

const PasswordSettings = ({ onCloseModal }: Props) => {
  return (
    <BaseForm layout="vertical">
      <Form.Item
        name="password"
        label="Старый пароль"
        rules={[{ required: true }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="newValue"
        label="Новый пароль"
        rules={[{ required: true }]}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Подтверждение нового пароля"
        rules={[{ required: true }]}
      >
        <Input.Password autoComplete="new-password" />
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

export default PasswordSettings;
