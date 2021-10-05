import React, { useRef, useState } from "react";
import { Button, Form, Input, Modal } from "antd";

function AddMovieModal({ reloadMovies }) {
  const formRef = useRef();
  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    const url = "api/v1/movies/";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          handleCancel();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        reloadMovies();
      })
      .catch((err) => console.error("Error: " + err));
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create New +
      </Button>

      <Modal
        title="Add New Movie ..."
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form ref={formRef} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="summary"
            label="Summary"
            rules={[{ required: true, message: "Summary is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="year"
            label="Year"
            rules={[
              {
                required: true,
                message: "Year is required",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="genre"
            label="Genre"
            rules={[{ required: true, message: "Genre is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="link"
            label="IMDb Link"
            rules={[{ required: true, message: "IMDb link is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddMovieModal;
