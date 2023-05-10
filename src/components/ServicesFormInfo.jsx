import PropTypes from 'prop-types';
import { Typography, List, Space } from "antd";

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
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                calculatedCoast?.packege?.offers?.freeServices?.includes(item) 
                ? <>
                    <Text mark>[FREE]{' '}</Text>
                    <Text>{item}</Text>
                  </>
                : <Text>
                    {item}
                  </Text>
              }
            />
          </List.Item>
        )}
      />
      
      <Space>
        <Title level={4}>
          Total price:
        </Title>
        <Title level={3}>
          {calculatedCoast.totalPrice || 0}
        </Title>
      </Space>
    </div>
  )
}

ServicesFormInfo.propTypes = {
  calculatedCoast: PropTypes.object
};

export default ServicesFormInfo