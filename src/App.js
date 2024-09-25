import React from "react";
import "./styleTest.css";
import { SliderContainer, Slider, Item } from "./module/contentSlider";

function App() {
  return (
    <SliderContainer>
      <Slider>
        <Item bg="subhome-ai.jpg" classes="bla blub">
          <h1>Du lappen</h1>
          <button>lol</button>
        </Item>
        <Item>Du bist ein Esel</Item>
        <Item>Schau weg du Lachs-Nacken</Item>
        <Item>ByBy</Item>
      </Slider>
    </SliderContainer>
  );
}

export default App;
