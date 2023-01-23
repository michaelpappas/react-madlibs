import { useState } from "react";

/** renders the individual input elements with word and updates input value
 *
 * props: word
 *
 * state: inputField
 */
function Form(word) {
  // console.log("wordtype.word.disp-", wordType.word.disp);
  const [inputField, setInputField] = useState(word.word.type);

  /** uptdates the input field data when a change happens in that field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setInputField(formData => ({
      ...formData,
      [name]: value,
    }));
  }


  return (
    <div ><label htmlFor={word.word.type}>{word.word.disp}</label>
      <input
        id={word.word.type}
        name={word.word.type}
        className="form-control"
        placeholder={word.word.type}
        onChange={handleChange}
        aria-label={word.word.type}
        value={inputField.value}

      />
    </div>
  );
}
export default Form;