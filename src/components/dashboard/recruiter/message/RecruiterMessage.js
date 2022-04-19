import { Link } from "react-router-dom"
const RecruiterMessage = () => {
  return (
    <div className='col-lg-10'>
      <div className='dashboard-main'>
        <h3 className='dashboard-title'>Messages</h3>
        <div className='dashboard-content'>
          <div className='msging-area'>
            <div className='row g-0'>
              <div className='col-lg-3'>
                <div className='msg-left-bar'>
                  <div className='contact-search-bar'>
                    <form action=''>
                      <div className='form-field'>
                        <input type='text' name='search' placeholder='Search...' />
                        <span className='icon'>
                          <span className='iconify' data-icon='charm:search'></span>
                        </span>
                      </div>
                    </form>
                  </div>
                  <div className='conversation-contact-list scroll'>
                    <div className='contact-list'>
                      <div className='single-contact-item'>
                        <div
                          className='contact-pic'
                          style={{
                            backgroundImage:
                              "url(https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg)",
                          }}
                        ></div>
                        <div className='contact-info unread'>
                          <h6>Rashed Ahmed</h6>
                          <p>Yeah, I have seen that...</p>
                        </div>
                      </div>
                      <div className='single-contact-item active'>
                        <div
                          className='contact-pic'
                          style={{
                            backgroundImage:
                              "url(https://lh3.googleusercontent.com/tbJfKBLnH018OGRjudkgWq8qRCk-G5f6n8T-8SZwZmuRyLFaCkXX2sbb8JlsznXQUVge3CwwPrJZ9TCV-3xEKk5A5xxVdpqcuV5DmTbluBAWvrpca3ZOavwtk3OBXDHGaCiXo0hVtbMPIY53vUdZOZ6fK1Yiiu_CzQviFniFY4Xc_-l3cNxaQBJu2qcuZk5heFj3tU3H2iIdJZVoSn1SDWmM4c8jWF-Fhx_Krw9IBy-BFcTZA9-idwi_BE9Xfb2CNmZCZKseAif8m7Ma5vYjt2fliFLdb8kndiWJpUJnn3QXC9sbE1Y1aiyhi3IfeY2mPTzgczDWgvf_S5p8FSG3DGh-rd_TonRbbhL5MXpQdxVih5X8UKNOpvgA-Gj4S6q1ENFMEHHktX4prfn3jGjnpfd-E-6wuXQ14dJ17Ca2oyr8Rt-uCiUBJsdFZkS9Ogp1JGRkgmrfRJh7vkjC5hFqA0SlD7ynNHyZ7naQIaa8LUUiwRgW-DKewpPjSHqmd5F94kkolm-zFkhxTjUAUI8HP14SzNXslHs4o3WhC58q6sT3k4HkXxUlict2qjO3h7rl-21e7lyKIDktEtIjFn3bwYByBrbDUd0B5PskT9YKKG4tEOJgTChEc9p0IYWjm3hrOndfjTtqiRmkdi5nE7NmzhROTodkg4Gj9kiP893ofh1spIpVYo4Vl1T-awq2cgsf9kotaoFFZMreUcSSX0YQPkiY9qWarN0g3Xs20wizbxALm9XK7iYCT75HBsnocNEhnXLOngedGRogC_DBqa3GeUn6c19_78bYd2QcdV19It9qRz-8yoWilc_fYOyJehkf8Lp6aES7L_0RLEwBb5OF9bof4eT5fbm4spZ6TASBfH0S7HmgvblbXe_aaO7TBY-aDdgeLMvU5A=w493-h657-no?authuser=1)",
                          }}
                        ></div>
                        <div className='contact-info'>
                          <h6>Sajeeb Debnath</h6>
                          <p>Acitve 20 min ago</p>
                        </div>
                      </div>
                      <div className='single-contact-item'>
                        <div
                          className='contact-pic'
                          style={{
                            backgroundImage:
                              "url(https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg)",
                          }}
                        ></div>
                        <div className='contact-info'>
                          <h6>Niloy Roy</h6>
                          <p>Sorry, i am busy now..</p>
                        </div>
                      </div>
                      <div className='single-contact-item'>
                        <div
                          className='contact-pic'
                          style={{
                            backgroundImage:
                              "url(https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318)",
                          }}
                        ></div>
                        <div className='contact-info'>
                          <h6>Md Rahim</h6>
                          <p>I saw your resume...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='msg-main'>
                  <div className='msg-top-bar'>
                    <Link to='/'>
                      <h5>Sajeeb Debnath</h5>
                    </Link>

                    <p>Active 20 min ago</p>
                  </div>
                  <div className='conversation-text-area'>
                    <div className='conversation-text-list'>
                      <div className='conversation-text'>
                        <div className='text'>
                          <p className='msg'>
                            Sir, I have sent you my resume. Please review the document and reply me if you
                            like it.
                          </p>
                          <p className='time'>08:37 PM</p>
                        </div>
                      </div>
                      <div className='conversation-text sender'>
                        <div className='text'>
                          <p className='msg'>Okay. I will review it shortly. :)</p>
                          <p className='time'>08:37 PM</p>
                        </div>
                      </div>
                      <div className='conversation-text sender'>
                        <div className='text'>
                          <p className='msg'>Okay. I will review it shortly. :)</p>
                          <p className='time'>08:37 PM</p>
                        </div>
                      </div>
                      <div className='conversation-text'>
                        <div className='text'>
                          <p className='msg'>
                            Sir, I have sent you my resume. Please review the document and reply me if you
                            like it.
                          </p>
                          <p className='time'>08:37 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='msg-sending-area'>
                    <div className='files-area'>
                      <div className='emoji-field'>
                        <span>
                          <span className='iconify' data-icon='fluent:emoji-48-filled'></span>
                        </span>
                      </div>
                      <div className='file-field'>
                        <input type='file' name='file' />
                      </div>
                    </div>
                    <div className='msg-field form-field'>
                      <input type='text' placeholder='Write message..' />
                      <button type='submit'>
                        <span className='iconify' data-icon='zondicons:send'></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='msg-right-bar'>
                  <div className='contact-information'>
                    <div>
                      <div
                        className='contact-profile'
                        style={{
                          backgroundImage:
                            "url(https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318)",
                        }}
                      ></div>

                      <div className='information-text'>
                        <Link to='/'>
                          <h4>Sajeeb Debnath</h4>
                        </Link>

                        <p className='designation'>Human Resource</p>
                        <p className='company'>Alpha Beta Company</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterMessage