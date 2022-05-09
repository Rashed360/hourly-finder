import { useEffect, useState } from "react"
import SearchBar from "./searchBar/SearchBar"

const HeroSection = () => {
  const [currentTagLine, setCurrentTagLine] = useState("hourly-based")

  useEffect(() => {
    const timer = setInterval(() => {
      const tagLines = ["hourly-based", "part-time", "full-time", "remote", "project-based"]
      const randomTag = tagLines[Math.floor(Math.random() * tagLines.length)]
      setCurrentTagLine(randomTag)
    }, 3000)
    return () => clearInterval(timer)
  }, [currentTagLine])

  return (
    <div className='hero-area d-flex align-items-center'>
      <div className='container'>
        <div className='col-xl-6 col-lg-8 col-md-11 offset-md-1'>
          <div className='hero-content'>
            <div className='hero-text'>
              <h1>
                Find the most exciting <br />
                <span>{currentTagLine}</span> jobs nearby
              </h1>
              <p>
                A platform to find hourly jobs nearby from your location and make some extra cash along side
                your study/job.
              </p>
            </div>

            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
