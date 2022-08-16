import { Link } from "react-router-dom";

const SingleEvolution = ({ evolutionDetail }) => (
  <div className="flex items-center gap-4">
    <span>
      <Link to={`/pokemon/${evolutionDetail[0]?.id}`}>
        <img src={evolutionDetail[0]?.src} alt={evolutionDetail[0]?.src} />
      </Link>
      <p>{evolutionDetail[0]?.name}</p>
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
    <span>
      <Link to={`/pokemon/${evolutionDetail[1]?.id}`}>
        <img src={evolutionDetail[1]?.src} alt={evolutionDetail[1]?.src} />
      </Link>
      <p>{evolutionDetail[1]?.name}</p>
    </span>
  </div>
);

export default SingleEvolution;