import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/weather.png" alt="weatherdashboard" />
            </div>
            <div className="text-content">
              <h1>Weather Dashboard </h1>
              <p>
                A weather app that fetches real-time weather data from APIs and
                displays up-to-date forecasts for users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection
