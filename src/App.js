
import './App.css';
import EmployeePage from './pages/Employee';
import HomePage from './pages/Home';
import { Container, Row, Col }from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={6}><HomePage /></Col>
          <Col xs={6}><EmployeePage /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
