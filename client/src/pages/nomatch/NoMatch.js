import React from "react";
import { Col, Row, Container } from "../../components/Grid/index";
import Jumbotron from "../../components/Jumbotron/index";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                        <h1>
                            <span role="img" aria-label="">
                                😈
                            </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;