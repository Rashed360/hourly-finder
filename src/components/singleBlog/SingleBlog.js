import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import BlogSidebarSection from '../blogs/blogSidebarSection/BlogSidebarSection'
import BlogDetailsSection from './blogDetails/BlogDetailsSection'
import RelatedBlogSection from './relatedBlogSection/RelatedBlogSection'

const SingleBlog = () => {
    const {blog_id} = useParams()

    const blogContents = [
        {
            id : 1,
            author : "Sajeeb Debnath",
            author_id : "1",
            title : "How to become a Succesfull Web Developer ?",
            sub_title : "Why branding is important to you for get web developer job.",
            description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.`,
            image : "/images/allblog/moon-6616006_960_720.webp",
            sub_image : "/images/allblog/moon-6616006_960_720.webp",
            time :"January 21, 2021",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                },

            ]
        },
        {
            id : 1,
            author : "Sajeeb Debnath",
            author_id : "1",
            title : "How to become a Succesfull Web Developer ?",
            sub_title : "Why branding is important to you for get web developer job.",
            description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.`,
            image : "/images/allblog/moon-6616006_960_720.webp",
            sub_image : "/images/allblog/moon-6616006_960_720.webp",
            time :"January 21, 2021",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                },

            ]
        },
        {
            id : 1,
            author : "Sajeeb Debnath",
            author_id : "1",
            title : "How to become a Succesfull Web Developer ?",
            sub_title : "Why branding is important to you for get web developer job.",
            description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.`,
            image : "/images/allblog/moon-6616006_960_720.webp",
            sub_image : "/images/allblog/moon-6616006_960_720.webp",
            time :"January 21, 2021",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                },

            ]
        },
        {
            id : 1,
            author : "Sajeeb Debnath",
            author_id : "1",
            title : "How to become a Succesfull Web Developer ?",
            sub_title : "Why branding is important to you for get web developer job.",
            description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.`,
            image : "/images/allblog/moon-6616006_960_720.webp",
            sub_image : "/images/allblog/moon-6616006_960_720.webp",
            time :"January 21, 2021",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                },

            ]
        },
        {
            id : 1,
            author : "Sajeeb Debnath",
            author_id : "1",
            title : "How to become a Succesfull Web Developer ?",
            sub_title : "Why branding is important to you for get web developer job.",
            description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis sed proin tempor, pellentesque dignissim nulla. Habitant sagittis rhoncus enim faucibus. Nulla sed justo massa venenatis sed viverra ultrices habitasse. Etiam adipiscing sed mattis sed faucibus placerat. Eget amet quis euismod pharetra. A, enim venenatis vestibulum integer id sed. Sem a dignissim enim urna tincidunt aenean adipiscing. Nunc morbi egestas non eget in amet suspendisse est. Quis sed quis elementum id mauris eget. Enim habitasse placerat gravida aliquam mattis ut neque dolor volutpat. Ac vulputate mattis viverra sed nisl. Ipsum, tortor fringilla sit pulvinar. Platea tincidunt consequat nibh suscipit tortor lectus mattis. Lectus mattis fermentum ipsum congue ac. Nunc, ultrices dis porttitor id. Consequat, non facilisis placerat arcu felis sit. Vitae gravida sapien in consequat, aliquam senectus scelerisque at donec. Laoreet viverra elementum, ante sem nulla quam congue praesent ullamcorper. Nec sem orci risus vel viverra nisi.`,
            image : "/images/allblog/moon-6616006_960_720.webp",
            sub_image : "/images/allblog/moon-6616006_960_720.webp",
            time :"January 21, 2021",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                },

            ]
        },
    ];

    const single_blog = blogContents.find(blog => blog.id ===Number(blog_id));

  return (
    <div className='single-blog-area mt-70'>
        <div className='container'>
            <div className="row">
                <div className='col-lg-9'>
                    {/* Blog Details Information Start */}
                    <BlogDetailsSection blog={single_blog}></BlogDetailsSection>
                    {/* Blog Details Information End*/}

                    {/* Related Blog Section Start */}
                    <RelatedBlogSection></RelatedBlogSection>
                    {/* Related Blog Section End  */}
                </div>
                <div className='col-lg-3'>
                    <BlogSidebarSection></BlogSidebarSection>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SingleBlog;
