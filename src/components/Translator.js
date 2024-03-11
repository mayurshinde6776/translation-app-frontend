import React, { useState } from 'react';
import { Button, Container, Form, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:4000/translate', { text: inputText });
      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error('Translation error:', error.message);
      setTranslatedText('Translation error. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="d-flex align-items-stretch">
          <Card className=" w-100" style={{border:"1px solid #2BC5B4 "}}>
            <Card.Body className="d-flex flex-column">
              <Card.Title>Enter Text in English</Card.Title>
              <Form className="flex-grow-1">
                <Form.Group controlId="englishText" className="flex-grow-1">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type your text here..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="h-100"
                    style={{border:'none'}}
                  />
                </Form.Group>
              </Form>
              <Button variant="primary"  style={{background:'#2BC5B4', color:'white', border:'none'}} onClick={handleTranslate}>
                Translate
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="d-flex align-items-stretch">
          <Card className=" w-100" style={{border:"1px solid #2BC5B4 "}}>
            <Card.Body className="d-flex flex-column">
              <div className="mt-1 flex-grow-1">
                <Card.Title>Translated Text in French</Card.Title>
                <p>{translatedText}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Translator;
