import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const Loader = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader size="massive">Loading</Loader>
      </Dimmer>

      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  </div>
);

export default Loader;
