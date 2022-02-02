import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import JobBlock from '../commonHome/blocks/JobBlock'

const JobSection = () => {

  const jobList = [
    {
      name: 'aaaaaaa a aaa aaaaa aaaa aa aaa aaaa aaa',
      company: 'aaaaaaaaaaaaaaa',
      image: '/images/homepage/recruiter-logo.png',
      time: '8h ago',
      type: 'aaaaaaaaaa',
      location: 'aaaaaaaaaa',
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
      name: 'Complete House Color Painting Services ssss ssssss ssss sssssssss sssssssssssssssssssssssssss',
      company: 'Foundersssssssssssssssss',
      image: '/images/homepage/recruiter-logo.png',
      time: '8h agoooooooooooooooo',
      type: 'Hourlyyyyy yyyyyyyyyyyyyyyy',
      location: 'Bananiiiiiii iiiiiiiiiiiiii',
      keyword: [
        {
            name : "Painting",
            color : "painting"
        }
      ]
    },
    {
      name: 'Catering Supervisor',
      company: 'Radhey Recruiter',
      image: '/images/homepage/recruiter-logo.png',
      time: '3 days ago',
      type: 'Full-time',
      location: 'Dhaka',
      keyword: [
        {
          name : "Catering",
          color : "painting"
        },
        {
          name : "Supervise",
          color : "house"
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
