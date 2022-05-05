import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function FetchNews() {
    const [news, setNews] = useState([]);
    const fetchNews = (value) => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=f6141f13082342d6a2d4c6321684198b')
            .then((response) => {
                //console.log(response);
                setNews(response.data.articles)
                console.log(response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        fetchNews();
    });

    return (

        <>
            <button type="button" className='btn btn-primary d-none' value="" onClick={fetchNews} >Fetch News</button>


            <div className="container ">
                <div className="row">
                    {
                        news.map((e,i) => {
                            return (
                                <div className="col-4 my-5" >
                                    <div class="card h-100"  >
                                    <h2 className="card-title">{e.title }</h2>
                                        <img src={e.urlToImage} className='card-img-top' alt="..." width="100%" height="auto" />
                                        <div className="card-body">
                                            
                                            <p >{e.description}</p>
                                            <a href={e.url} target="_blank" rel="noreferrer"  className="btn btn-primary text-center">Read More</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </>


    );
};

export default FetchNews;

{/*  */ }

