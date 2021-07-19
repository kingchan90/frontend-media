import React from "react";
import renderer from "react-test-renderer";
import BoxesGroup from "./components/BoxesGroup";
import {BOX_WIDTH, BOX_HEIGHT} from "./constants";

it('Render total corectly', () => {
  const component = renderer.create(<BoxesGroup />);
  const tree = component.toJSON();
  expect(tree.children && tree.children.length).toBe(BOX_WIDTH*BOX_HEIGHT)
})