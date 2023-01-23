import { useState } from "react";
import Form from "./Form";
import Story from "./Story";
import { v4 as uuid } from "uuid";

function Madlibs() {

  const initialStory = [];

  const wordsArray = [{ type: "noun1", disp: "noun" },
  { type: "verb1", disp: "verb" },
  { type: "adjective1", disp: "adjective" },
  { type: "noun2", disp: "noun" }];


  const [story, setStory] = useState(initialStory);

  function handleSave(formData) {

    setStory(curr => [...curr, { story: `The ${formData.noun1} ${formData.verb1} the ${formData.adjective1} ${formData.noun2}`, id: uuid }]);

  }
  function reset() {
    setStory(initialStory);
  }
  return (
    <>
      <Form wordsArray={wordsArray} handleSave={handleSave} />
      <Story story={story} reset={reset} />
    </>
  );
}
export default Madlibs;