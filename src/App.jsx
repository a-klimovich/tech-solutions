import { Typography } from "antd";
import ServicesForm from "./components/ServicesForm";
import "./App.css";

const { Title } = Typography;

function App() {
  return (
    <>
      <Title
        align='center'
        style={{
          marginBottom: '5vh'
        }}>
        Select services to connect
      </Title>

      <ServicesForm />
    </>
  );
}

export default App;
