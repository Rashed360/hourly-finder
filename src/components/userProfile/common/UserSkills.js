import UserNoItems from "./UserNoItems"
import UserProfileTitle from "./UserProfileTitle"

const UserSkills = ({ skills }) => {
  const skillsData = skills.split(",")
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <UserProfileTitle title='Skills' />
        <div className='skills-tag'>
          {skills !== "" ? (
            <>
              {skillsData.map((skill, index) => {
                return <span key={index}>{skill}</span>
              })}
            </>
          ) : (
            <UserNoItems text='No Skill Provided' />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserSkills
