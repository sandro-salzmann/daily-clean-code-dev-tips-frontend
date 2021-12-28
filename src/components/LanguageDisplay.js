import React from "react";
import { Image } from "semantic-ui-react";
import csharpImage from "../icons/csharp.svg";
import javaImage from "../icons/java.svg";
import jsImage from "../icons/js.svg";

export const LanguageDisplay = () => {
  return (
    <div style={{ height: 100 }}>
      <Image style={{ float: "left" }} src={jsImage} height={100} />
      <Image
        style={{ float: "left", marginLeft: 14 }}
        src={javaImage}
        height={100}
      />
      <Image
        style={{ float: "left", marginLeft: 14 }}
        src={csharpImage}
        height={100}
      />
    </div>
  );
};
