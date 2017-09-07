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
              </ol>
            </div>
          }
        >
          <Heading size={6} textColor="tertiary" caps>What is React?</Heading>
          <List >
            <Appear><ListItem>A JavaScript library for building user interfaces</ListItem></Appear>
            <Appear><ListItem><span style={{ fontWeight: "bold" }}>V</span>iew in the M<span style={{ fontWeight: "bold" }}>V</span>C</ListItem></Appear>
            <Appear><ListItem>Component-Based</ListItem></Appear>
            <Appear><ListItem>Learn Once, Write anywhere</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          notes={
            <div>
              <h4>Present integration of React in an existing HTML page.</h4>
              <ol>
                <li>Easy to integrate</li>
                <li>Show an example of stateless react component</li>
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
              <li>First note</li>
              <li>Second note</li>
            </ol>
          </div>
        } >
          <Heading size={6} textColor="tertiary" caps>Why React?</Heading>
          <List>
            <Appear><ListItem>Scale, components, update DOM automatically based on the state</ListItem></Appear>
            <Appear><ListItem>Give an example with JQuery and the same with React</ListItem></Appear>
            <Appear><ListItem>Component-Based --> compose them to make complex UIs</ListItem></Appear>
            <Appear><ListItem>Can add React to an </ListItem></Appear>
            <Appear><ListItem>Learn Once, Write anywhere (Server rendering, React Native)</ListItem></Appear>
          </List>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
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