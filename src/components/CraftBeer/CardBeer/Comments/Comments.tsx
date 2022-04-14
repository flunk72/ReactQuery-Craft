import React, { useState } from "react";
import { Comment, Avatar, Form } from "antd";
import { TextArea, List, Button } from "./Comments.styled";

const Comments = () => {
  const [comments, setComments] = useState<any>([]);
  const [value, setValue] = useState("");

  const handleChange = (e: string) => {
    setValue(e);
  };

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setTimeout(() => {
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: "https://joeschmoe.io/api/v1/random",
          content: <p>{value}</p>,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <Editor
            onChange={(e: any) => handleChange(e.target.value)}
            onSubmit={handleSubmit}
            value={value}
          />
        }
      />
    </>
  );
};
const CommentList = ({ comments }: any) => (
  <List
    loadMore
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={(props: any) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, value }: any) => (
  <>
    <Form.Item>
      <TextArea autoSize rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" onClick={onSubmit} type="primary">
        Добавить комментарий
      </Button>
    </Form.Item>
  </>
);

export default Comments;
