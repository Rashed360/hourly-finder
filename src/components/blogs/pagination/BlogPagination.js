import React from 'react';
import { Pagination } from "react-pagination-bar"

const BlogPagination = (props) => {
    const {currentPage, pageBlogLimit, blogContents, setCurrentPage} = props
    return (
        <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
                <div className='pagination-wrapper'>
                    <Pagination
                        initialPage={currentPage}
                        itemsPerPage={pageBlogLimit}
                        onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
                        totalItems={blogContents.length}
                        pageNeighbours={2}
                        startLabel = {"<<"}
                        endLabel={">>"}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogPagination;