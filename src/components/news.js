import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NewsItem from './newsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export default function News({ pageSize, category, newsTitle }) {

    const [allNews, setAllNews] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=1a0732eeb1b64f348f35561b32950524=${page}&pageSize=${pageSize} 
    useEffect(() => {
        console.log("in useEffect fn");
        const fetchData = async () => {

            try {
                setLoading(true);
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1a0732eeb1b64f348f35561b32950524&page=${page}&pageSize=${pageSize}`);
                setLoading(false);
                setAllNews(response.data.articles);
                setTotalResults(response.data.totalResults)
            } catch (error) {
                console.error(error);
            }
        }
        if(page===1)
        fetchData();
        else{}


    }, [page, pageSize, category]);


    const fetchMoreData = async () => {
            console.log(allNews.length+" "+totalResults);
        try {
            setLoading(true);
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1a0732eeb1b64f348f35561b32950524&page=${page+1}&pageSize=${pageSize}`);
            setLoading(false);
            setAllNews(allNews.concat(response.data.articles));
            if (allNews.length === totalResults) {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
        setPage(page + 1);
    }



    return (
        <>
            <div className='my-5'>


                <h2 className='text-center'>{newsTitle}</h2>
                {/* {loading && <Spinner/>} */}
                    <InfiniteScroll
                        dataLength={allNews.length}
                        next={fetchMoreData}
                        hasMore={allNews.length !== totalResults}
                        loader={<Spinner/>}
                    >
                        <div className="container">
                            <div className="row">
                                {allNews.map((element) => {
                                    return (
                                        <div className="col-md-4 my-2" key={element.url}>
                                            <NewsItem publishedAt={element.publishedAt} author={element.author} imgURL={element.urlToImage} title={(element.title) ? element.title.slice(0, 45) : "No title"} desc={(element.description) ? element.description.slice(0, 80) : "No desc"} fullNewsURL={element.url} />
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
</>
            )
}
