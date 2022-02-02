import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import JobBlock from '../commonHome/blocks/JobBlock'

const JobSection = () => {

  const jobList = [
    {
      name: 'Complete House Paintings Services',
      company: 'Founders',
      image: '/images/homepage/recruiter-logo.png',
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      keyword: [
        {
          name : "Creative",
          color : "house"
        },
        {
            name : "Painting",
            color : "painting"
        }
      ]
    },
    {
      name: 'Complete House Paintings Services',
      company: 'Founders',
      image: '/images/homepage/recruiter-logo.png',
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      keyword: [
        {
            name : "Painting",
            color : "painting"
        }
      ]
    },
    {
      name: 'Complete House Paintings Services',
      company: 'Founders',
      image: '/images/homepage/recruiter-logo.png',
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      keyword: [
        {
          name : "Creative",
          color : "house"
        },
        {
            name : "Painting",
            color : "painting"
        }
      ]
    },
    {
      name: 'Complete House Paintings Services',
      company: 'Founders',
      image: '/images/homepage/recruiter-logo.png',
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      keyword: [
        {
          name : "Creative",
          color : "house"
        }
      ]
    }
  ]

  const jobs = jobList.map(job => {
		return (
			<JobBlock job={job} />
		)
	})

  return (
    <div class='most-recent-jobs section-padding'>
        <div class='container'>
            <SectionTitle title="Most Recent Jobs" subTitle="All Jobs" subLink="#" />
            <div class='row pt-40'>
                {jobs}
            </div>
        </div>
    </div>
  )
}

export default JobSection
