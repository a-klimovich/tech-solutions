import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Typography, List, Space } from "antd";
import { SERVICES } from "../config";

const { Text, Title } = Typography;

const ServicesInfo = ({ calculatedCoast }) => {
  const header = useMemo(() => {
    const packageName = calculatedCoast?.packege?.name;

    return (
      <Space>
        <Title level={3}>Added Services</Title>
        <Text level={5}>{packageName ? ` ${packageName} (applied pacage)` : null}</Text>
      </Space>
    );
  }, [calculatedCoast]);

  const renderListItem = useCallback(
    (serviceName) => (
      <List.Item>
        <List.Item.Meta
          title={
            calculatedCoast?.packege?.offers?.freeServices?.includes(serviceName) ? (
              <>
                <Text mark>[FREE]</Text>
                <Text> {serviceName}</Text>
              </>
            ) : (
              <Text>{serviceName}</Text>
            )
          }
          description={SERVICES[serviceName].description}
        />
      </List.Item>
    ),
    [calculatedCoast]
  );

  return (
    <div>
      <List itemLayout='horizontal' header={header} dataSource={calculatedCoast.services} renderItem={renderListItem} />

      <Space>
        <Title level={4}>Total price:</Title>
        <Title level={3}>{`$ ${calculatedCoast.totalPrice || 0}`}</Title>
      </Space>
    </div>
  );
};

ServicesInfo.propTypes = {
  calculatedCoast: PropTypes.object,
};

export default ServicesInfo;
