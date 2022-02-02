import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FaMapMarkerAlt} from 'react-icons/fa'

const HeroSection = () => {

  const [currentTagLine, setCurrentTagLine] = useState('hourly-based')

  useEffect(() => {
    const timer = setInterval(() => {
        const tagLines = ['hourly-based','part-time','full-time','remote','project-based']
        const randomTag = tagLines[Math.floor(Math.random() * tagLines.length)]
        setCurrentTagLine(randomTag)
    }, 3000)
    return () => clearInterval(timer)
  },[currentTagLine])

  return (
    <div class='hero-area d-flex align-items-center'>
        <div class='container'>
            <div class='col-lg-6 offset-lg-1'>
                <div class='hero-content'>
                    <div class='hero-text'>
                        <h1>
                            Find the most exciting <br/><span>{currentTagLine}</span> jobs nearby
                        </h1>
                        <p>
                            A platform to find hourly jobs nearby from
                            your location and make some extra cash along side your
                            study/job.
                        </p>
                    </div>
                    <div class='hero-search-bar'>
                        <div class='search-bar'>
                            <form action='' class='search-form'>
                                <input
                                    type='text'
                                    placeholder='Where do you live ?'
                                    class='search-field'
                                />
                                <FaMapMarkerAlt/>
                                <input
                                    type='submit'
                                    value='Get Started'
                                    class='btn get-started'
                                />
                            </form>
                            <div class='tag'>
                                <span>
                                    <Link to=''>Job on your location</Link>
                                </span>
                                <span>
                                    <Link to=''>How it works?</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
