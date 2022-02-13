import React from 'react'
import CategoryBlock from '../home/commonHome/blocks/CategoryBlock'
import MostRecentJob from '../singleJob/mostRecentSection/MostRecentJob'
import AreaCategory from './areaCategory/AreaCategory'

const CityCategory = () => {
  const areaBasedLocation = [
    {
      name : "North Dhaka",
      areaBg : "/images/citypage/cities/city-1.jpg",
      totalJob : 21,
      subLocation : [
                      'Mirpur', 
                      'Uttara', 
                      'Mohammadpur', 
                      'Badda', 
                      'Gulshan', 
                      'Rampura', 
                      'Banani', 
                      'Hatirjheel', 
                      'Tejgaon', 
                      'Pallabi', 
                      'Khilkhet',
                       'Adabor'
                    ]
    },
    {
      name : "South Dhaka",
      areaBg : "/images/citypage/cities/city-2.jpg",
      totalJob : 42,
      subLocation : [
                      'Mirpur', 
                      'Uttara', 
                      'Mohammadpur', 
                      'Badda', 
                      'Gulshan', 
                      'Rampura', 
                      'Banani', 
                      'Hatirjheel', 
                      'Tejgaon', 
                      'Pallabi', 
                      'Khilkhet',
                       'Adabor'
                    ]
    },
    {
      name : "Chittagong",
      areaBg : "/images/citypage/cities/city-3.jpg",
      totalJob : 32,
      subLocation : [
                      'Mirpur', 
                      'Uttara', 
                      'Mohammadpur', 
                      'Badda', 
                      'Gulshan', 
                      'Rampura', 
                      'Banani', 
                      'Hatirjheel', 
                      'Tejgaon', 
                      'Pallabi', 
                      'Khilkhet',
                       'Adabor'
                    ]
    },
    {
      name : "Sylhet",
      areaBg : "/images/citypage/cities/city-4.jpg",
      totalJob : 51,
      subLocation : [
                      'Mirpur', 
                      'Uttara', 
                      'Mohammadpur', 
                      'Badda', 
                      'Gulshan', 
                      'Rampura', 
                      'Banani', 
                      'Hatirjheel', 
                      'Tejgaon', 
                      'Pallabi', 
                      'Khilkhet',
                       'Adabor'
                    ]
    }
  ]
  const categorires = [
    {
      name : "Grocery Store Helper",
      id : "1",
      icon : ""
    },
    {
      name : "Resturant Service & Hospitlity",
      id : "2",
      icon : ""
    },
    {
      name : "Home Service & Cleaning",
      id : "3",
      icon : ""
    },
    {
      name : "Car Wash & Cleaning",
      id : "4",
      icon : ""
    },
    {
      name : "Car Wash & Cleaning",
      id : "4",
      icon : ""
    },
    {
      name : "Car Wash & Cleaning",
      id : "4",
      icon : ""
    },
    {
      name : "Car Wash & Cleaning",
      id : "4",
      icon : ""
    },
    {
      name : "Car Wash & Cleaning",
      id : "4",
      icon : ""
    },
  ]
  const jobList = [
    {
      id : 1,
      name: 'Complete House Paintings Services',
      company: 'Founders',
      image: '/images/homepage/recruiter-logo.png',
      company_id : 2,
      vancey : 2,
      level : "Beginer",
      salary : 200,
      duration : "2 days",
      starting_date : "04 February, 2022",
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      map_link : "",
      overview : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet. `,
      responsibilities : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet . viverra tempor. Laoreet enim eleifend consequat arcu gra.`,
      required_skills : ["ReactJS, Redux, Material UI", "MongoDB and mongoose", "Python, dJango", "DevOps (AWS Services)"],
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
      id : 4,
      name: 'Complete House Paintings Services',
      company: 'Founders',
      image: '/images/homepage/recruiter-logo.png',
      company_id : 2,
      vancey : 2,
      level : "Beginer",
      salary : 200,
      duration : "2 days",
      starting_date : "04 February, 2022",
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      map_link : "",
      overview : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet. `,
      responsibilities : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet . viverra tempor. Laoreet enim eleifend consequat arcu gra.`,
      required_skills : ["ReactJS, Redux, Material UI", "MongoDB and mongoose", "Python, dJango", "DevOps (AWS Services)"],
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
      id : 3,
      name: 'Complete House Paintings Services',
      company: 'Founders',
      image: '/images/homepage/recruiter-logo.png',
      company_id : 2,
      vancey : 2,
      level : "Beginer",
      salary : 200,
      duration : "2 days",
      starting_date : "04 February, 2022",
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      map_link : "",
      overview : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet. `,
      responsibilities : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet . viverra tempor. Laoreet enim eleifend consequat arcu gra.`,
      required_skills : ["ReactJS, Redux, Material UI", "MongoDB and mongoose", "Python, dJango", "DevOps (AWS Services)"],
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
      id : 2,
      name: 'Complete House Paintings Services',
      company: 'Founders',
      image: '/images/homepage/recruiter-logo.png',
      company_id : 2,
      vancey : 2,
      level : "Beginer",
      salary : 200,
      duration : "2 days",
      starting_date : "04 February, 2022",
      time: '8h ago',
      type: 'Hourly',
      location: 'Banani',
      map_link : "",
      overview : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna, cursus massa diam placerat. Pharetra ac arcu cursus enim ipsum. Enim nulla diam, nibh tristique sed enim feugiat tincidunt. Eget eu vitae fermentum, amet viverra tempor. Laoreet enim eleifend consequat arcu gravida sollicitudin tristique sapien nam. Dictum ullamcorper amet ac morbi ornare convallis fringilla. Sem cursus ut in tincidunt sed. Felis maecenas scelerisque phasellus amet. `,
      responsibilities : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt vel, ultrices pellentesque et ut vulputate aliquam sapien iaculis. Fermentum at imperdiet ac urna,cursus massa .diam placerat. Pharetra ac arcu cursus enim ipsum. Enim n.ulla diam, nibh tristique sed enim feugiat tinc. dunt. Eget eu vitae fermentum, amet . viverra tempor. Laoreet enim eleifend consequat arcu gra.`,
      required_skills : ["ReactJS, Redux, Material UI", "MongoDB and mongoose", "Python, dJango", "DevOps (AWS Services)"],
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
  return (
    <div>
      {/* <!-- ==================== Browse Jobs  by Cities Job Area Start ==================== --> */}
      <div className="browse-jobs-location section-padding section-bg mt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h3>Browse Jobs by Cities</h3>
              </div>
            </div>
          </div>
          <div className="row pt-40">
            {
              areaBasedLocation.map(area => {
                return (
                  <div className="col-lg-3">
                    <AreaCategory key={area.name} area={area}></AreaCategory>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      {/* <!-- ==================== Browse Jobs  by Cities Job Area End ==================== --> */}

      {/* <!-- ==================== Browse Jobs  by Location Job Area Start ==================== --> */}
      <div className="browse-jobs-categories section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h3>Browse Job Categories</h3>
              </div>
            </div>
          </div>
          <div className="row pt-40">
            {
              categorires.map(category => {
                return(
                  <CategoryBlock category={category} key={category.id} />
                );
              })
            }
          </div>
        </div>
      </div>
      {/* <!-- ==================== Browse Jobs  by Location Job Area End ==================== --> */}

      {/* <!-- ==================== Most Recent Job Area Start ==================== --> */}
      <MostRecentJob jobList={jobList}></MostRecentJob>
      {/* <!-- ==================== Most Recent Job Area End ==================== --> */}
    </div>
  )
}

export default CityCategory
