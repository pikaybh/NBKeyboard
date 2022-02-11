import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Posts from '../components/Posts'
import Pagination from "../components/Pagination";

function QnA() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }


    return (
        <div className="QnA Main">
            <Header />
            <article className='empty-space'/>
            <article className='QnA'>
                <section className='notice-section'>
                    <h1 className='notice-title'>자주 묻는 질문</h1>
                    <table className="noticeList">
                        <tr className="bulletinBoard">Q&A</tr>
                        <hr className='question-hr' />
                        <Posts posts={currentPosts(posts)} loading={loading}></Posts>
                        <nav className="paging-block">
                            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
                        </nav>
                    </table>
                </section>
            </article>
            <article className='empty-space1'/>
            <Footer />
        </div>
    );
}

export default QnA;