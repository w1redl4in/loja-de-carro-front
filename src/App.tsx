import './App.css';
import { Routes } from './routes';
import { Button } from 'antd';

function App() {
  return (
    <>
      <Routes />
      <Button loading={true} shape="round">
        Botão teste
      </Button>
    </>
  );
}

export default App;
