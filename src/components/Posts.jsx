import { post } from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts, loading }) => { 
    return (
        <>
            {loading &&
                <div> loading... </div>
            }
            <div className="NoticeList">
                {posts.map(post => (
                    <>
                        <tr className="boardList" i key={post.id}>
                            <Link className="postTitle" to={post.title}>
                                {post.title}
                            </Link>
                        </tr>
                        <hr className='board-hr' />
                    </>
                ))}
            </div>
        </>
    );
};

export default Posts;