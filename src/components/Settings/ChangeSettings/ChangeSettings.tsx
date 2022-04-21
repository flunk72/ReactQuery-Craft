import React, { useCallback, useMemo } from "react";
import { Button, Avatar } from "antd";
import qs from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Wrapper,
  AvatarBlock,
  LoveBeer,
  Email,
  Password,
  Title,
  Modal,
} from "./ChangeSettings.styled";
import PasswordSettings from "./PasswordSettings";
import EmailSettings from "./EmailSettings";
import LoveBeerSettings from "./LoveBeerSettings";

const ChangePassword = () => {
  const { currentModal, onCloseModal, onOpenModal } = useModal();

  return (
    <Wrapper>
      <AvatarBlock>
        <div>
          <Avatar
            src="https://joeschmoe.io/api/v1/random"
            size={80}
            style={{ borderColor: "#0a3f35", border: `1px solid #0a3f35` }}
          />
        </div>
        <Button> Изменить</Button>
      </AvatarBlock>
      <LoveBeer>
        <Title>Любимое пиво</Title>
        <div>Сладовар</div>
        <div>Охота крепкое</div>
        <div>БагБир</div>
        <Button onClick={() => onOpenModal("loveBeer")}> Изменить</Button>
      </LoveBeer>

      <Email>
        <Title>Ваш Email</Title>
        <div>admin@mail.ru</div>
        <Button onClick={() => onOpenModal("email")}> Изменить Email</Button>
      </Email>
      <Password>
        <Title>Ваш пароль</Title>
        <div>*********</div>
        <Button onClick={() => onOpenModal("password")}>
          {" "}
          Изменить пароль
        </Button>
      </Password>
      <Modal
        destroyOnClose
        footer={null}
        maskClosable={false}
        visible={!!currentModal}
        closable={false}
      >
        {(() => {
          switch (currentModal) {
            case "password":
              return <PasswordSettings onCloseModal={onCloseModal} />;
            case "email":
              return <EmailSettings onCloseModal={onCloseModal} />;
            case "loveBeer":
              return <LoveBeerSettings onCloseModal={onCloseModal} />;
            default:
              return null;
          }
        })()}
      </Modal>
    </Wrapper>
  );
};

function useModal() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const query = useMemo(() => {
    return qs.parse(search);
  }, [search]);

  const currentModal = useMemo(() => {
    return query?.edit || null;
  }, [query]);

  const onOpenModal = useCallback(
    (edit: string) => {
      navigate(`${pathname}?${qs.stringify({ ...query, edit })}`);
    },
    [navigate, pathname, query]
  );

  const onCloseModal = useCallback(() => {
    navigate(`${pathname}?${qs.stringify({ ...query, edit: undefined })}`);
  }, [navigate, pathname, query]);

  return { currentModal, onOpenModal, onCloseModal };
}

export default ChangePassword;
