import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.addrress}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
