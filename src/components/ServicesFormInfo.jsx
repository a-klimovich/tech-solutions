import PropTypes from 'prop-types';
import { Typography, List, Space } from "antd";
import { SERVICES } from '../config';
import { currensyFormatter } from '../helpers/currensyFormatter';

const {Text, Title} = Typography;

const ServicesFormInfo = ({calculatedCoast}) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        header={
          <Space>
            <Title level={3}>Added Services</Title>
            <Text level={5}>{calculatedCoast?.packege?.name ? ` ${calculatedCoast?.packege?.name} (applied pacage)` : null}</Text>
          </Space>
        }
        dataSource={calculatedCoast.services}
        renderItem={(serviceName) => (
          <List.Item>
            <List.Item.Meta
              title={
                calculatedCoast?.packege?.offers?.freeServices?.includes(serviceName) 
                ? <>
                    <Text mark>[FREE]</Text>
                    <Text>{' '}{serviceName}</Text>
                  </>
                : <Text>
                    {serviceName}
                  </Text>
              }
              description={SERVICES[serviceName].description}
            />
          </List.Item>
        )}
      />
      
      <Space>
        <Title level={4}>
          Total price:
        </Title>
        <Title level={3}>
          {currensyFormatter(calculatedCoast.totalPrice || 0, 'USD')}
        </Title>
      </Space>
    </div>
  )
}

ServicesFormInfo.propTypes = {
  calculatedCoast: PropTypes.object
};

export default ServicesFormInfo