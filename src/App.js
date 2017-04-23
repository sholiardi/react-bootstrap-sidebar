import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import {flatten, times, range} from 'lodash';
import {StickyContainer, Sticky} from 'react-sticky';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const NUMBER_OF_PARAGRAPHS = 15;
    const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (index) =>
      (
        <p key={index}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris feugiat massa sit amet maximus vestibulum.
          Praesent ut purus est.
          Proin quis lacus at diam pulvinar consequat quis a neque.
          Quisque justo nisl, sodales non dictum ut, dictum sit amet turpis.
          Sed non posuere quam, eu tristique libero.
          Mauris tempus erat est, sit amet tincidunt ligula finibus nec.
          Mauris lobortis nunc a fermentum venenatis.
          Vestibulum quis leo id velit faucibus maximus in nec urna.
        </p>
      )
    ));

    const NUMBER_OF_KITTIES = 5;
    const kitties = range(0, NUMBER_OF_KITTIES).map((i) => {
      return (
        <div className="sidebar-kitties" key={i}>
          <StickyContainer style={{zIndex: 2}}>
            <Sticky>
              <img src="https://placekitten.com/g/300/250" />
            </Sticky>
            <div style={{height: "300px"}}></div>
          </StickyContainer>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            <Grid>
                <Row className="show-grid">
                  <Col lg={8}>
                    {paragraphs.map(paragraph => paragraph)}
                  </Col>
                  <Col lg={4}>{kitties}</Col>
                </Row>
            </Grid>
        </div>
      </div>
    );
  }
}

export default App;
