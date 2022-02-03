import React from 'react'
import AllBlog from './allBlogSection/AllBlog'
import BlogSidebarSection from './blogSidebarSection/BlogSidebarSection'

const Blogs = () => {
	return (
		<div>
			{/* <!-- ====================Blog Content Area Start ==================== --> */}
			<div className='all-blog-area mt-70'>
				<div className='container'>
					<div className='row'>
					{/* <!-- ====================All Blog Start ==================== --> */}
						<AllBlog></AllBlog>	
					{/* <!-- ===================All Blog End ==================== --> */}	
						<div className='col-lg-3'>
							<BlogSidebarSection></BlogSidebarSection>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ====================Blog Content Area End ==================== --> */}
		</div>
	)
}

export default Blogs
