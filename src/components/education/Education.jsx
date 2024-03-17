

const Education = () => {
  return (
    <div className="my-20 lg:mx-40 md:mx-20 mx-10">
      <div>
        <h1 className="text-3xl text-[#91ff00] font-bold text-center">Education</h1>
        <p className="text-white text-sm text-center pt-5 w-1/2 mx-auto">Academic Journey and Achievements to Build Knowledge</p>
      </div>

      <div className="mt-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
          <li>
            <div className="timeline-middle text-[#91ff00]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2010-2014</time>
              <div className="text-lg font-black">Bachelor of Business Administration (BBA)</div>
              Finance
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-[#91ff00]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2008-2010</time>
              <div className="text-lg font-black">Higher Secondary Certificate (HSC)</div>
              Business Studies
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-[#91ff00]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2006-2008</time>
              <div className="text-lg font-black">Secondary School Certificate (SSC)</div>
              Science
            </div>
            <hr />
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Education;