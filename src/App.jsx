import { Typography } from "antd";
import ServicesForm from "./components/ServicesForm";

const { Title } = Typography;

const baseStyles = {
  marginBottom: "5vh",
};

const App = () => {
  return (
    <>
      <Title align='center' style={baseStyles}>
        Select services to connect
      </Title>

      <ServicesForm />
    </>
  );
}

export default App;
