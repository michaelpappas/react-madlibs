
import { v4 as uuid } from "uuid";
import Input from "./Input";

/** renders the Form element and populates with Input components
 *  from formData
 *
 * props: wordsArray
 *        formData
 *        handleSave() - fn to change the state of the Story component
 *
 * state: none
 */
function Form({ wordsArray, handleSave, formData }) {

  /** formats the form data and calls the handleSave function */
  function handleSubmit(evt) {
    evt.preventDefault();

    for (let i = 0; i < wordsArray.length; i++) {
      formData = { ...formData, [evt.target[i].placeholder]: evt.target[i].value };
    }

    handleSave(formData);

  }

  return (
    <form onSubmit={handleSubmit}>
      {wordsArray.map(word => <Input word={word} key={uuid()} />)}
      <input type='submit' className="submit" />
    </form>
  );
}

export default Form;