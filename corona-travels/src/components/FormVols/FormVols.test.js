import React from "react";
import { shallow } from "enzyme";
import FormVols from "./FormVols";

describe("FormVols", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormVols />);
    expect(wrapper).toMatchSnapshot();
  });
});
