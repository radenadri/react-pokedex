import MultipleEvolution from "../MultipleEvolution";
import SingleEvolution from "../SingleEvolution";

const EvolutionSection = ({ evolutionDetail, hasMultipleEvo }) => (
  <>
    <h3 className="text-2xl font-semibold">Evolution</h3>
    {!hasMultipleEvo && <SingleEvolution evolutionDetail={evolutionDetail} />}
    {hasMultipleEvo && <MultipleEvolution evolutionDetail={evolutionDetail} />}
  </>
)

export default EvolutionSection;