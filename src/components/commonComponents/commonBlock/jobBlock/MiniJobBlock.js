import { useJobType } from "hooks/useJobHook"
import { Link } from "react-router-dom"
import org_logo from "../../../../assets/svgs/org.svg"

const MiniJobBlock = ({ job }) => {
  const { title, slug, type } = job
  const { logo, name } = job.company

  const jobType = useJobType(type)
  return (
    <div className='small-job-card'>
      <div className='small-job-title'>
        <div className='recruiter-logo'>
          <Link to='/job/'>
            <img src={logo ? logo : org_logo} alt={name} />
          </Link>
        </div>
        <h3>
          <Link to={`/job/${slug}`}>{title}</Link>
        </h3>
      </div>
      <p className='small-job-bottom'>
        Job: <span>{jobType}</span>, Posted by: <span>{name}</span>
      </p>
    </div>
  )
}

export default MiniJobBlock
