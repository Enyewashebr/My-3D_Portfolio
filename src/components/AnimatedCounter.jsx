import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup';


const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-[-50px] mt-[-70px] md:mt-10">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {counterItems.map((c, index) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={`${c.label} - ${index}`}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp suffix={c.suffix} end={c.value} />
            </div>
            <div className="text-white-50 text-lg">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCounter
