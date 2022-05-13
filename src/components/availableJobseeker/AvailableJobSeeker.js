import axios from "axios"
import { useEffect, useState } from "react"
import AvailableSeekerContent from "./elements/AvailableSeekerContent"
import AvailableSeekerFooter from "./elements/AvailableSeekerFooter"
import AvailableSeekerHeader from "./elements/AvailableSeekerHeader"
import SeekerSearchBar from "./elements/SeekerSearchBar"
const url = process.env.REACT_APP_BACKEND_SERVER

const AvailableJobSeeker = () => {
  document.title = "HourlyFinder | Find Jobseekers"

  const [seekerData, setSeekerData] = useState()

  const [searchKeyword, setSearchKeyword] = useState({
    name: "",
    location: "",
  })
  const [finalSearch, setFinalSearch] = useState({
    name: "",
    location: "",
  })

  const changeSeekerSearch = (event) => {
    const { name, value } = event.target
    setSearchKeyword({
      ...searchKeyword,
      [name]: [value.toLocaleLowerCase()],
    })
    setFinalSearch({
      name: "",
      location: "",
    })
  }
  const handleSeekerSearch = (event) => {
    event.preventDefault()
    console.log("Submitted")
    setFinalSearch({
      name: searchKeyword.name,
      location: searchKeyword.location,
    })
  }

  useEffect(() => {
    const availableSeekerFetch = async () => {
      await axios.get(`${url}/user/available/`).then((response) => {
        setSeekerData(response.data)
      })
    }
    availableSeekerFetch()
  }, [])

  return (
    <div className='avaiable-jobseeker-area mt-90 mb-30'>
      <SeekerSearchBar
        handleSeekerSearch={handleSeekerSearch}
        searchKeyword={searchKeyword}
        changeSeekerSearch={changeSeekerSearch}
      />
      <div className='container mt-20'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='avaiable-jobseeker-container'>
              <div className='avaiable-jobseeker-title'>
                <h3>Available JobSeekers</h3>
              </div>
              <div className='avaiable-jobseeker-wrapper'>
                <AvailableSeekerHeader />
                <AvailableSeekerContent seeker={seekerData} finalSearch={finalSearch} />
                <AvailableSeekerFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableJobSeeker
