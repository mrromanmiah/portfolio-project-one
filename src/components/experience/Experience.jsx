import CountUp from 'react-countup';


const Experience = () => {
  return (
    <div className='bg-[#91ff00] bg-opacity-10 py-14'>
      <div className="lg:mx-40 md:mx-20 mx-10 mb-10">
        <div>
          <h1 className="text-3xl text-[#91ff00] font-bold text-center">Experience</h1>
          <p className="text-white text-sm text-center pt-5 w-1/2 mx-auto">Collaborated in multidisciplinary teams, committed to continuous improvement and learning.</p>
        </div>
        <div className="stats shadow bg-[#010101] text-white w-full mt-10">

          <div className="stat place-items-center">
            <div className="stat-title text-white">Projects</div>
            <div className="stat-value text-[#91ff00]"><CountUp end={30} duration={5} />+</div>
            <div className="stat-desc text-white">From July 1st to December 31st</div>

          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-white">Clients</div>
            <div className="stat-value text-[#91ff00]"><CountUp end={5} duration={5} />+</div>
            <div className="stat-desc text-white">Satisfaction ↗︎ (98%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-white">In Progress</div>
            <div className="stat-value text-[#91ff00]"><CountUp end={10} duration={5} />+</div>
            <div className="stat-desc text-white"> Completion ↗︎ (75%)</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Experience;