import UserProfileTitle from "./UserProfileTitle"

const UserSkills = () => {
  const skills = ["ReactJs", "Redux", "Django", "Rest API"]
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <UserProfileTitle title='Skills' />
        <div className='skills-tag'>
          {skills.map((skill, index) => {
            return <span key={index}>{skill}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default UserSkills
