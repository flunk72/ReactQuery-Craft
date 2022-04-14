import React, { useState, useCallback } from "react";
import { BeerIcon } from "../../_assets";
import {
  Title,
  MainBlock,
  LeftSide,
  RightSide,
  Form,
  ButtonBlock,
} from "./SignIn.styled";
import { Input, Button } from "antd";
import RegistrationForm from "./RegistrationForm";

export default function SignIn() {
  const { form, onToCraftBeer, ...formProps } = useSignIn();
  const [registration, setRegistration] = useState(false);

  const viewRegistrationForm = () => {
    setRegistration(!registration);
  };

  return (
    <MainBlock>
      <LeftSide>
        <BeerIcon />
      </LeftSide>
      <RightSide>
        {registration === false ? (
          <>
            <Title>Вход</Title>
            <Form layout="vertical" size="middle" form={form} {...formProps}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[{ required: true }]}
              >
                <Input placeholder="Введите ваш e-mail" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Пароль"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Введите ваш пароль" />
              </Form.Item>
              <ButtonBlock>
                <Button htmlType="submit">Войти</Button>
                <Button htmlType="button" onClick={viewRegistrationForm}>
                  Зарегистрироваться
                </Button>
              </ButtonBlock>
              <Button
                htmlType="button"
                style={{ width: "100%" }}
                onClick={onToCraftBeer}
              >
                Войти без регистрации
              </Button>
            </Form>
          </>
        ) : (
          <RegistrationForm viewRegistrationForm={viewRegistrationForm} />
        )}
      </RightSide>
    </MainBlock>
  );
}

function useSignIn() {
  const [form] = Form.useForm();
  const onToCraftBeer = () => {
    window.location.assign("http://localhost:3000/craft-beer/");
  };

  const onFinish = useCallback((values) => {
    console.log(values);
    if (values) onToCraftBeer();
  }, []);

  return {
    form,
    onToCraftBeer,
    onFinish,
  };
}
