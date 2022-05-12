import { useState } from "react"
import JobFilterArea from "./filterArea/JobFilterArea"
import AllJobContent from "./jobContent/AllJobContent"
import JobSearchBar from "./searchBar/JobSearchBar"

const AllJobs = () => {
  document.title = "HourlyFinder | All Jobs"
  const [searchKeyword, setSearchKeyword] = useState({
    title: "",
    location: "",
    type: "",
  })
  const [finalSearch, setFinalSearch] = useState({
    title: "",
    location: "",
    type: "",
  })

  const changeJobSearch = (event) => {
    const { name, value } = event.target
    setSearchKeyword({
      ...searchKeyword,
      [name]: [value.toLocaleLowerCase()],
    })
    setFinalSearch({
      title: "",
      location: "",
      type: "",
    })
  }
  const handleJobSearch = (event) => {
    event.preventDefault()
    console.log("Submitted")
    setFinalSearch(searchKeyword)
  }

  return (
    <div>
      <JobSearchBar
        handleJobSearch={handleJobSearch}
        searchKeyword={searchKeyword}
        changeJobSearch={changeJobSearch}
      />
      <div className='filter-header-area'>
        <JobFilterArea />
        <AllJobContent finalSearch={finalSearch} />
      </div>
    </div>
  )
}

export default AllJobs
