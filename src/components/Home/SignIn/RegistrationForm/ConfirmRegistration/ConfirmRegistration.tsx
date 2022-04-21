import { notification } from "antd";
import React, { useCallback } from "react";
import { Form, Title, Button, Input } from "./ConfirmRegistration.styled";

export default function ConfirmRegistration() {
  const { form, onToLogin, ...formProps } = useConfirm();

  return (
    <Form layout="vertical" size="middle" form={form} {...formProps}>
      <Title>Подтверждение вашего E-mail</Title>
      <Form.Item
        name="confirmNumber"
        label="4-значный код"
        rules={[{ required: true }]}
      >
        <Input placeholder="Введите код" />
      </Form.Item>
      <Button htmlType="submit">Подтвердить</Button>
      <Button htmlType="button" onClick={onToLogin}>
        Вернуться к авторизации
      </Button>
    </Form>
  );
}

function useConfirm() {
  const [form] = Form.useForm();
  const onToLogin = () => {
    window.location.assign("http://localhost:3000/");
  };

  const onFinish = useCallback((values) => {
    if (values) {
      notification.success({
        message: "E-mail подтвержден, теперь вы можете авторизоваться!",
        placement: "bottomRight",
        duration: 7,
      });
    }
  }, []);

  return {
    form,
    onFinish,
    onToLogin,
  };
}
