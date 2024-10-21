import Button from "./Button.component";

function Card(props: any) {
  return (
    <div className="card">
      <div>
        {props.isPopular ? (
          <p className="bg-slate-800 p-2.5 rounded-full text-rose-500/80 absolute">
            popular
          </p>
        ) : null}
      </div>
      <img className="card_image" src={props.profile} alt="profile" />
      <h2 className="font-bold uppercase text-rose-500">{props.name}</h2>
      <p>{props.description}</p>
      <Button />
    </div>
  );
}

export default Card;
