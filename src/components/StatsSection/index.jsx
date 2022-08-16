import ProgressBar from "@ramonak/react-progress-bar";

const StatsSection = ({ pokemonDetail }) => (
  <>
    <h3 className="text-2xl font-semibold">Base Stats</h3>
    {pokemonDetail.stats?.map((stat) => (
      <div key={stat.stat.name}>
        <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</p>
        <ProgressBar
          completed={stat.base_stat.toString()}
          labelAlignment="outside"
          labelColor="black"
          bgColor="#3182CE"
          height="0.5rem"
          ariaValuemax={500}
          maxCompleted={200}
        />
      </div>
    ))}
  </>
)

export default StatsSection;