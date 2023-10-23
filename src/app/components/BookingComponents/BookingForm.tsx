import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Radio,
  Checkbox,
  Form,
  DatePicker,
  Select,
  Button,
  Space,
} from "antd";
import { useForm } from "antd/es/form/Form";

interface BookingFormProps {
  onCallBack: Function;
}

const BookingForm = (props: BookingFormProps) => {
  const [form] = useForm();
  const navigate = useNavigate();
  function onCancel() {
    navigate("/");
  }

  function onFinish() {
    props.onCallBack(form.getFieldValue("name"));
  }

  return (
    <div className="form-div">
      <Form
        className="form-main"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        colon={false}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: "Please enter full name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="date-time"
          label="Date and time"
          rules={[{ required: true, message: "Please select date and time!" }]}
        >
          <DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />
        </Form.Item>
        <Form.Item name="extra-luggage" label=" " valuePropName="checked">
          <Checkbox>Have extra luggage</Checkbox>
        </Form.Item>
        <Form.Item
          name="vehicle"
          label="Select Vehicle type"
          rules={[{ required: true, message: "Please select vehicle type!" }]}
        >
          <Select>
            <Select.Option value="car">Car</Select.Option>
            <Select.Option value="bike">Bike</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label=" ">
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={onCancel}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookingForm;
