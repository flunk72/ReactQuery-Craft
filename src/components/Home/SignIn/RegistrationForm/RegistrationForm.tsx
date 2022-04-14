import React, { useCallback, useState } from "react";
import { RuleObject } from "antd/lib/form";
import { Form, Title, ButtonBlock } from "./RegistrationForm.styled";
import { Input, Button, Checkbox } from "antd";
import ConfirmRegistration from "./ConfirmRegistration";

interface Props {
  viewRegistrationForm: any;
}

export default function RegistrationForm({ viewRegistrationForm }: Props) {
  const {
    form,
    confirm,
    validatePasswordConfirm,
    validateAgreement,
    ...formProps
  } = useRegistration();

  if (confirm === true) return <ConfirmRegistration />;

  return (
    <Form layout="vertical" size="middle" form={form} {...formProps}>
      <Title>Регистрация</Title>
      <Form.Item name="email" label="E-mail" rules={[{ required: true }]}>
        <Input placeholder="Введите ваш e-mail" />
      </Form.Item>
      <Form.Item name="password" label="Пароль" rules={[{ required: true }]}>
        <Input.Password placeholder="Введите пароль" />
      </Form.Item>
      <Form.Item
        name="passwordConfirm"
        label="Повторите пароль"
        dependencies={["password"]}
        rules={[{ required: true }, validatePasswordConfirm]}
      >
        <Input.Password placeholder="Повторите пароль" />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[validateAgreement]}
      >
        <Checkbox>Даю согласие на обработку персональных данных</Checkbox>
      </Form.Item>
      <ButtonBlock>
        <Button htmlType="submit">Зарегистрироваться</Button>
        <Button htmlType="button" onClick={viewRegistrationForm}>
          Назад
        </Button>
      </ButtonBlock>
    </Form>
  );
}

function useRegistration() {
  const [form] = Form.useForm();
  const [confirm, setConfirm] = useState(false);

  const validatePasswordConfirm = useCallback(
    ({ getFieldValue }): RuleObject => ({
      validator(_, value) {
        if (!value || value === getFieldValue("password")) {
          return Promise.resolve();
        }
        return Promise.reject("Пароль и подтверждение не совпадают");
      },
    }),
    []
  );

  const validateAgreement = useCallback(
    (): RuleObject => ({
      validator(_, value) {
        if (value) return Promise.resolve();
        return Promise.reject("Обязательное поле");
      },
    }),
    []
  );

  const onFinish = useCallback((values) => {
    console.log(values);
    if (values) setConfirm(true);
  }, []);

  return {
    form,
    confirm,
    validatePasswordConfirm,
    validateAgreement,
    onFinish,
  };
}
