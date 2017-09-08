// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text,
  Markdown
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  react: require("../assets/react.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

const Li = ({ color = "", onClick, children }) => (
  <li className="clickable" style={{ color }} onClick={onClick} >{children}</li>
)

const Counter = ({ value, onClick }) => (
  <span className="clickable" onClick={onClick}>Count: {value}</span>
)

const INITIAL_COLORS = ['black', 'black', 'black']

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      colors: INITIAL_COLORS
    }
  }

  handleLiClick = (e) => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1,
      colors: INITIAL_COLORS
    }))

  }

  handleCounterClick = (e) => {
    this.setState({
      counter: 0,
      colors: ['black', 'green', 'green']
    })
  }

  render() {
    return (
      <div>
        {/* Always one root element */}
        <ul style={{ textAlign: "left", listStylePosition: "inside", padding: 0 }}>
          {
            this.state.colors.map(
              (color, index) => (
                <Li key={index} color={color} onClick={this.handleLiClick}>Item - {index + 1} </Li>
              )
            )
          }
        </ul>
        <Counter value={this.state.counter} onClick={this.handleCounterClick} />
      </div>
    )
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.react} width={300} />
          <Heading size={3} lineHeight={1} textColor="secondary" >
            Introduction to React
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary"
          notes={
            <div>
              <ol>
                <li>User interface --> generic, not necessarely web based, see Native Mobile Apps</li>
                <li>Component-Based --> compose them to make complex UIs</li>
                <li>Learn Once, Write anywhere -> Server rendering (SEO), React Native</li>
                <li>Events behave in a consistent, standards-compliant way in all browsers (including IE8) and automatically use event delegation.</li>
              </ol>
            </div>
          }
        >
          <Heading size={6} textColor="tertiary" caps>What is React?</Heading>
          <List >
            <Appear><ListItem>A JavaScript library for building user interfaces</ListItem></Appear>
            <Appear><ListItem><span style={{ fontWeight: "bold" }}>V</span>iew in the M<span style={{ fontWeight: "bold" }}>V</span>C</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          notes={
            <div>
              <h4>Present integration of React in an existing HTML page.</h4>
              <ol>
                <li>Easy to integrate</li>
                <li>Show an example of stateless react component</li>
                <li>ReactDOM.render => At the root of your tree you still have to write some plumbing code to connect the outer world into React.</li>
              </ol>
            </div>
          }
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/code.test")}
          ranges={[
            { loc: [0, 1], title: "How to integrate?" },
            { loc: [0, 6] },
            { loc: [21, 30] },
            { loc: [6, 20] },
            { loc: [21, 30] },
          ]} />

        <Slide transition={["fade"]} bgColor="primary" notes={
          <div>
            <h4>Slide notes</h4>
            <ol>
              <li>Virtual DOM compare in memory the DOM</li>
              <li>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation -> compose them to make complex UIs. Easy to add to an existing project</li>
              <li>Server rendering, React Native</li>
            </ol>
          </div>
        } >
          <Heading size={6} textColor="tertiary" caps>Why React?</Heading>
          <List>
            <Appear><ListItem>Keeps the DOM in sync with your data</ListItem></Appear>
            <Appear><ListItem>Component-Based</ListItem></Appear>
            <Appear><ListItem>Learn Once, Write anywhere</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" >
          <Heading size={6} lineHeight={1} textColor="tertiary" >
            JQuery
          </Heading>
          <div id="jquery">

            <List >
              <ListItem className="clickable">Item - 1</ListItem>
              <ListItem className="clickable">Item - 2</ListItem>
              <ListItem className="clickable">Item - 3</ListItem>
            </List>
            <span id="counter" className="clickable">Counter: 0</span>
          </div>
        </Slide>

        <CodeSlide
          notes={
            <div>
              <h4>Html Demo</h4>
            </div>
          }
          maxWidth={1200}
          maxHeight={1300}
          transition={["fade"]}
          lang="html"
          code={require("raw-loader!../assets/html.example")}
          ranges={[
            { loc: [0, 10], title: "Html" },
            { loc: [0, 6] },
            { loc: [21, 30] },
            { loc: [6, 20] },
            { loc: [21, 30] },
          ]} />

        <CodeSlide
          notes={
            <div>
              <h4>Jquery code.</h4>
            </div>
          }
          maxWidth={1200}
          transition={["fade"]}
          lang="js"
          className="bigger"
          code={require("raw-loader!../assets/jquery")}
          ranges={[
            { loc: [0, 1], title: "JQuery" },
            { loc: [0, 6] },
            { loc: [21, 30] },
            { loc: [6, 20] },
            { loc: [21, 30] },
          ]} />

        <Slide transition={["fade"]} bgColor="primary" >
          <Heading size={6} lineHeight={1} textColor="tertiary" >
            React
          </Heading>
          <div id="react">
            <App />
          </div>
        </Slide>

        <CodeSlide
          notes={
            <div>
              <h4>React code.</h4>
              <ol>
                <li>Mention stateless component => pure JS function</li>
                <li>Mention statefull => here extends ES6 class</li>
              </ol>
            </div>
          }
          maxWidth={1200}
          transition={["fade"]}
          lang="js"
          className="bigger"
          code={require("raw-loader!../assets/react")}
          ranges={[
            { loc: [0, 1], title: "React" },
            { loc: [0, 6] },
            { loc: [21, 30] },
            { loc: [6, 20] },
            { loc: [21, 30] },
          ]} />
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" caps>Example</Heading>
          <List>
            <ListItem>Simple component</ListItem>
            <ListItem>Statefull component</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}