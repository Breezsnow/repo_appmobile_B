import React from "react";
import { shallow } from "enzyme";
import ListeVols from "./ListeVols";

describe("ListeVols", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListeVols />);
    expect(wrapper).toMatchSnapshot();
  });
});
