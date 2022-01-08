import { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";
import { Search } from '../Search/Search';
import SearchResults from "../SearchResults/SearchResults";
import './searchContainer.css';

const SearchContainer = () => {
  const [dataResponse, setDataResponse] = useState([]);
  const [error, Seterror] = useState(false);

  return (
    <Container fluid className="bgSearch p-lg-5">
      <Row>
          <Col lg={12}>
            <h1>Superhero</h1>
            <p>
              Find your heroes to form a great team. The team must have a maximum of 6 members (3 good heroes and 3 villains).
              Search here!
            </p>
            <Search searchResponse={setDataResponse} Seterror={Seterror} />
          </Col>
          <Col lg={12} className="d-flex p-4 justify-content-evenly align-items-center flex-wrap">
            {dataResponse.response === "success" ? (<SearchResults dataResponse={dataResponse} />)
            : error 
            ? (console.log('no hay resultados'))
            : null}
          </Col>
        </Row>
    </Container>
  );
};
export default SearchContainer;