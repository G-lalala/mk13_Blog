---
to: app/_components/<%= name %>/<%= name %>.test.tsx
---
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { <%= name %> } from "<%= alias_path %>";

describe("<%= name %> rendering test", () => {
  it("<%= name %>", () => {
    const { asFragment } = render(<<%= name %> <% if(have_props) { %>str="Hello, jest"<% } %> />);
    expect(asFragment()).toMatchSnapshot();
  });
});