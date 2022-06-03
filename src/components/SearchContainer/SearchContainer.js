import { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";
import { Search } from '../Search/Search';
import SearchResults from "../SearchResults/SearchResults";
import './searchContainer.css';

const SearchContainer = () => {
  const [dataResponse, setDataResponse] = useState([]);
  const [error, Seterror] = useState(false);
   
  return (
    <Container fluid className="bgSearch">
      <Row className="searchContainer">
        <Col lg={12}>
          <h1>Superhero</h1>
          <p>
            Welcome! Create a team, it must consist of 6 members (3 good heroes and 3 villains)</p>
          <p>
            ¡Find your heroes!
          </p>
          <Search searchResponse={setDataResponse} Seterror={Seterror} dataResponse={dataResponse}/>
        </Col> 
      </Row>
      <div className="p-3 d-flex justify-content-center flex-wrap">{dataResponse.response === "success"
        ? (<SearchResults dataResponse={dataResponse} />)
        : error 
        ? (console.log('no hay resultados'))
        : null}
      </div>
    </Container>
  );
};
export default SearchContainer;