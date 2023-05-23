import styles from "../Styles/form.module.css";

export default function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="head">{props.formInfo[0].topic}</label>
        <input type="text" id="head" name="head"></input>
        <label htmlFor="details">Details</label>
        <input type="text" id="details" name="details" />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
