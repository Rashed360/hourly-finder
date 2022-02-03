import React from 'react'
import { Link } from 'react-router-dom'
import BlogSidebarSection from '../blogs/blogSidebarSection/BlogSidebarSection'

const SingleBlog = () => {
  return (
    <div>
    {/* <!-- ====================Single Blog Content Area Start ==================== --> */}
    <div class="single-blog-area mt-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="single-blog-content-wrapper">
                    <div class="single-blog-details">
                        <div class="single-blog-title">
                            <h2>How to become a Succesfull Web Developer ?</h2>
                            <h4>Why branding is important to you for get web developer job.</h4>
                        </div>
                        <div class="single-blog-author-time">
                            <p>Published at - <span>January 21, 2021</span></p>
                            <p>Written by - <span>Sajeeb Debnath</span></p>
                        </div>
                        <div class="blog-main-bg"></div>
                        <div class="blog-keyword">
                            <Link to="" class="blog-tag"><div class="house"></div> House</Link>
                            <Link to="" class="blog-tag"><div class="painting"></div> Painting</Link>
                        </div>
                        <p class="blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="blog-sub-bg"></div>
                            </div>
                            <div class="col-lg-6">
                                <p class="blog-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi  elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
                                </p>
                            </div>
                        </div>
                        <p class="blog-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
                        </p>
                    </div>
                    <div class="related-blog">
                        <div class="row mb-40">
                            <div class="col-lg-12">
                                <div class="section-title">
                                    <h3>Related Blogs for you</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-bg"></div>
                                    <div class="blog-content">
                                        <div class="blog-author-time">
                                            <p>By <span class="author"><Link to="">Sajeeb Debnath</Link></span>, <span>25m ago</span></p>
                                        </div>
                                        <div class="blog-text">
                                            <h3><Link to="">How House Painting Services Works...</Link></h3>
                                            <p>House pantings? Learn from professionals...</p>
                                        </div>
                                        <div class="blog-keyword">
                                            <Link to="" class="blog-tag"><div class="house"></div> House</Link>
                                            <Link to="" class="blog-tag"><div class="painting"></div> Painting</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-bg"></div>
                                    <div class="blog-content">
                                        <div class="blog-author-time">
                                            <p>By <span class="author"><Link to="">Sajeeb Debnath</Link></span>, <span>25m ago</span></p>
                                        </div>
                                        <div class="blog-text">
                                            <h3><Link to="">How House Painting Services Works...</Link></h3>
                                            <p>House pantings? Learn from professionals...</p>
                                        </div>
                                        <div class="blog-keyword">
                                            <Link to="" class="blog-tag"><div class="house"></div> House</Link>
                                            <Link to="" class="blog-tag"><div class="painting"></div> Painting</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog-item">
                                    <div class="blog-bg"></div>
                                    <div class="blog-content">
                                        <div class="blog-author-time">
                                            <p>By <span class="author"><Link to="">Sajeeb Debnath</Link></span>, <span>25m ago</span></p>
                                        </div>
                                        <div class="blog-text">
                                            <h3><Link to="">How House Painting Services Works...</Link></h3>
                                            <p>House pantings? Learn from professionals...</p>
                                        </div>
                                        <div class="blog-keyword">
                                            <Link to="" class="blog-tag"><div class="house"></div> House</Link>
                                            <Link to="" class="blog-tag"><div class="painting"></div> Painting</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <BlogSidebarSection></BlogSidebarSection>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ====================Single Blog Content Area End ==================== --> */}
    </div>
  )
}

export default SingleBlog
