import { useState } from "react";
import { Checkbox, Form, Select, Button, Divider, Row, Col, Typography } from "antd";
import { getCalculatedCoast } from '../utils';
import { SERVICES } from '../config';
import ServicesFormInfo from './ServicesFormInfo';

const { Text } = Typography;

const yearOptions = [
  {
    value: 2023,
    label: '2023',
  },
  {
    value: 2024,
    label: '2024'
  },
  {
    value: 2025,
    label: '2025'
  },
];

const initialValues = {
  year: 2023,
}

const ServicesForm = () => {
  const [calculatedCoast, setCalculatedCoast] = useState({});
  const [form] = Form.useForm();

  const handleFormChange = (_, formValues) => {
    const {year, services} = formValues;

    if (year && services?.length) {
      const calculatedCost = getCalculatedCoast({year, services});

      setCalculatedCoast(calculatedCost);

      form.setFieldValue('services', calculatedCost.services)
    }

    if (!services?.length) {
      setCalculatedCoast({})
    }
  };

  const servicesOptions = Object.entries(SERVICES).map(([key, value]) => ({
    value: key,
    label: value.name,
    disabled: calculatedCoast?.packege?.offers?.freeServices?.includes(key),
  }));

  const onFinish = (values) => {
    console.log(values);
  };
  
  return (
    <Row gutter={40}>
      <Col span={24} lg={12}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={handleFormChange}
          onFinish={onFinish}
          layout="vertical"
          wrapperCol={{
            span: 14
          }}
        >
          <Divider orientation="left">
            <Text>Select Year</Text>
          </Divider>

          <Form.Item 
            name="year"
            wrapperCol={{ span: 'auto' }}
          >
            <Select options={yearOptions} placeholder="Please select a year" />
          </Form.Item>

          <Divider orientation="left">
            <Text>Select Services</Text>
          </Divider>

          <Form.Item name="services">
            <Checkbox.Group options={servicesOptions} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 'auto'
            }}
            
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>

      <Col span={24} lg={12} align="left">
        <ServicesFormInfo calculatedCoast={calculatedCoast} />
      </Col>
    </Row>
  );
};

export default ServicesForm;
