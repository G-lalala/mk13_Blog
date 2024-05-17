---
to: app/_components/<%= name %>/<%= name %>.tsx
---

import React from 'react';

interface <%= name %>Props {}

export const <%= name %>: React.FC<<%= name %>Props> = (props) => {
  const {} = props;

  return (
    <div>hello component!</div>
  );
};
