import { useState, useMemo, useCallback } from "react";
import { Checkbox, Form, Select, Button, Divider, Row, Col, Typography } from "antd";
import { getCalculatedCoast } from "../utils";
import { SERVICES } from "../config";
import ServicesInfo from "./ServicesInfo";
import {
  yearOptions,
  initialValues,
  formWrapperCol,
  formItemWrapperCol,
} from "./config";

const { Text } = Typography;

const onFinish = (values) => {
  console.log(values);
};

const ServicesForm = () => {
  const [calculatedCoast, setCalculatedCoast] = useState({});
  const [form] = Form.useForm();

  const handleFormChange = useCallback(
    (_, formValues) => {
      const { year, services } = formValues;
      
      if (!services?.length) {
        setCalculatedCoast({});
      } else {
        const calculatedCost = getCalculatedCoast({ year, services });

        setCalculatedCoast(calculatedCost);
  
        form.setFieldValue('services', calculatedCost.services);
      }
    },
    [form]
  );

  const disabledServices = useMemo(() => {
    const requiredServices =
      calculatedCoast?.services?.reduce((acc, service) => {
        const requireServices = SERVICES[service].require;

        if (requireServices?.length) {
          return [...acc, ...requireServices];
        }

        return acc;
      }, []) || [];

    const freeServices = calculatedCoast?.packege?.offers?.freeServices || [];

    return [...requiredServices, ...freeServices];
  }, [calculatedCoast]);

  const servicesOptions = useMemo(() => Object.entries(SERVICES).map(([key, value]) => ({
    value: key,
    label: value.name,
    disabled: disabledServices.includes(key),
  })), [disabledServices]);

  return (
    <Row gutter={40}>
      <Col span={24} lg={12}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={handleFormChange}
          onFinish={onFinish}
          layout='vertical'
          wrapperCol={formWrapperCol}>
          <Divider orientation='left'>
            <Text>Select Year</Text>
          </Divider>

          <Form.Item name='year' wrapperCol={formItemWrapperCol}>
            <Select options={yearOptions} placeholder='Please select a year' />
          </Form.Item>

          <Divider orientation='left'>
            <Text>Select Services</Text>
          </Divider>

          <Form.Item name='services'>
            <Checkbox.Group options={servicesOptions} />
          </Form.Item>

          <Form.Item
            wrapperCol={formItemWrapperCol}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>

      <Col span={24} lg={12} align='left'>
        <ServicesInfo calculatedCoast={calculatedCoast} />
      </Col>
    </Row>
  );
};

export default ServicesForm;
