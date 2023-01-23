// import Input from "./Input";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Input from "./Input";


function Form({ wordsArray, handleSave, formData }) {

  // const initialFormData = wordsArray.reduce((obj, word) => Object.assign(obj, { [word.type]: word.disp }));
  const initialFormData = wordsArray.reduce((obj, word) => ({ ...obj, [word.type]: word.disp }));
  console.log("intialFormData-", initialFormData);
  // const [formData, setFormData] = useState(initialFormData);
  // const [inputFields, setInputFields] = useState(initialFormData);

  // function handleChange(evt) {
  //   // const { name, value } = evt.target;
  //   // setFormData(formData => ({
  //   //   ...formData,
  //   //   [name]: value,
  //   // }));
  // }


  // console.log("formData -", formData);

  function handleSubmit(evt) {
    evt.preventDefault();

    for (let i = 0; i < wordsArray.length; i++) {
      formData = { ...formData, [evt.target[i].placeholder]: evt.target[i].value };
    }

    handleSave(formData);
    // setFormData(initialFormData);
  }
  console.log("wordsArray-", wordsArray);
  return (
    <form onSubmit={handleSubmit}>
      {wordsArray.map(word => <Input word={word} key={uuid()} />)}
      <input type='submit' className="submit" />
    </form>
  );
}

export default Form;