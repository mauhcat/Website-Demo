//initialise card
function Card(props: any) {
  return (
    <div className="card items-center">
      <div>
        {props.isPopular ? (
          <p className="bg-slate-800 p-2.5 rounded-full text-rose-500/80 absolute">
            popular
          </p>
        ) : null}
      </div>
      <img className="card_image" src={props.profile} alt="profile" />
      <h2 className="font-bold uppercase text-rose-500">{props.name}</h2>
      <p className="text-slate-200">{props.description}</p>

      <button className="btn hover:scale-110 transition-all mt-3 bg-slate-800 text-rose-500/80 pt-1.5 pb-1.5 pr-8 pl-8 rounded-lg ">
        BUY
      </button>
    </div>
  );
}

export default Card;
