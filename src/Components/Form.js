import styles from "../Styles/form.module.css";

export default function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    let newInfo = {
      head: event.target.head.value,
      details: event.target.details.value,
      date: event.target.date.value !== "" ? event.target.date.value : null,
    };
    event.target.reset();
    props.formSubmit(newInfo);
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="head">{props.formInfo[0].topic}</label>
        <input type="text" id="head" name="head" required></input>
        <label htmlFor="details">Details</label>
        <input type="text" id="details" name="details" required />
        <label htmlFor="date">Date</label>
        <input type="text" id="date" name="date" />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
