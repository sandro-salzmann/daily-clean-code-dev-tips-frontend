import React from "react";
import { Image } from "semantic-ui-react";
import csharpImage from "../icons/csharp.svg";
import javaImage from "../icons/java.svg";
import jsImage from "../icons/js.svg";
import { LANGUAGES } from "../utils/LANGUAGES";

const { JAVASCRIPT, JAVA, CSHARP } = LANGUAGES;

export const LanguageSelection = ({
  selectedLanguages,
  toggleLanguageSelection,
}) => {
  return (
    <div style={{ height: 100 }}>
      {[
        {
          language: JAVASCRIPT,
          image: jsImage,
        },
        {
          language: JAVA,
          image: javaImage,
        },
        {
          language: CSHARP,
          image: csharpImage,
        },
      ].map(({ language, image }, i) => (
        <Image
          key={language}
          style={{
            float: "left",
            marginLeft: i === 0 ? 0 : 14,
            filter: `grayscale(${
              selectedLanguages.includes(language) ? "0%" : "100%"
            })`,
          }}
          src={image}
          height={100}
          onClick={() => toggleLanguageSelection(language)}
        />
      ))}
    </div>
  );
};
