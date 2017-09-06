// Import React
import React from "react";

// Import Spectacle Core tags
import {
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
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="Here explain...">
          <Heading size={6} textColor="primary" caps>What is React?</Heading>
          <List >
            <ListItem>A JavaScript library for building user interfaces</ListItem>
            <ListItem>View in the MVC</ListItem>
            <ListItem>Show an example of stateless react component</ListItem>
            <ListItem>Component-Based --> compose them to make complex UIs</ListItem>
            <ListItem>Learn Once, Write anywhere (Server rendering, React Native)</ListItem>
          </List>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/code.test")}
          ranges={[
            { loc: [0, 27], title: "Walking through some code" },
            { loc: [0, 1] },
            { loc: [1, 2] },
            { loc: [1, 2] },
            { loc: [2, 3] },
            { loc: [4, 7] },
            { loc: [8, 10] },
            // ...
          ]} />

        <Slide transition={["fade"]} bgColor="tertiary" notes="Here explain...">
          <Heading size={6} textColor="primary" caps>Why React?</Heading>
          <List>
            <ListItem>Scale, components, update DOM automatically based on the state</ListItem>
            <ListItem>Give an example with JQuery and the same with React</ListItem>
            <ListItem>Component-Based --> compose them to make complex UIs</ListItem>
            <ListItem>Learn Once, Write anywhere (Server rendering, React Native)</ListItem>
          </List>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
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