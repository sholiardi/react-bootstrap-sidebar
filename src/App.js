import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import {flatten, times, range} from 'lodash';
import {StickyContainer, Sticky} from 'react-sticky';
import {ReactHeight} from 'react-height';
import logo from './logo.svg';
import check from './check.png';
import './App.css';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {height: -1};
  }

  render() {

    const {height} = this.state;
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

    const NUMBER_OF_KITTIES = 1;
    const kitties = range(0, NUMBER_OF_KITTIES).map((i) => {
      return (
        <div className="sidebar-kitties" key={i}>
          <StickyContainer style={{zIndex: 2}}>
            <Sticky>
              <div className="menu">
                <img src={check} className="check" alt="check" />Home
              </div>
              <div className="menu">
                <img src={check} className="check" alt="check" />About
              </div>
              <div className="menu">
                <img src={check} className="check" alt="check" />Login
              </div>
            </Sticky>
            <div style={{height: height}}></div>
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
                    <ReactHeight onHeightReady={value => this.setState({height: value})}>
                      {paragraphs.map(paragraph => paragraph)}
                    </ReactHeight>
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
