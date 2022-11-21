import SearchTabs from "./tabs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <SearchTabs/>
          </div>
        </Col>
        <Col>
          <div>
            <SearchTabs/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
