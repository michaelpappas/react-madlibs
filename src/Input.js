import { useState } from "react";


function Form(wordType, handleChange, formData) {
  // console.log("wordtype.word.disp-", wordType.word.disp);
  const [inputField, setInputField] = useState(wordType.word.type);
  console.log("inputField-", inputField);
  function handleChange(evt) {
    const { name, value } = evt.target;
    setInputField(formData => ({
      ...formData,
      [name]: value,
    }));
  }
  // console.log("inputField-", inputField);

  return (
    <div ><label htmlFor={wordType.word.type}>{wordType.word.disp}</label>
      <input
        id={wordType.word.type}
        name={wordType.word.type}
        className="form-control"
        placeholder={wordType.word.type}
        onChange={handleChange}
        aria-label={wordType.word.type}
        value={inputField.value}

      />
    </div>
  );
}
export default Form;