import React from "react";
import { FormProps } from "antd/lib/form";
import { Form } from "antd";

interface Props {
  defaultValues?: Record<string, any>;
  children: React.ReactNode;
}

export default function BaseForm({
  children,
  defaultValues,
  initialValues,
  ...formProps
}: FormProps & Props) {
  return (
    <Form
      autoComplete="off"
      validateMessages={{
        required: "Обязательное поле",
        types: {
          email: "Введен некорректный e-mail",
        },
      }}
      initialValues={{
        ...(defaultValues ?? {}),
        ...(initialValues ?? {}),
      }}
      {...formProps}
    >
      {children}
    </Form>
  );
}
