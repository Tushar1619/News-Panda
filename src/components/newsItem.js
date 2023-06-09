import React from 'react'

export default function NewsItem({imgURL,title,desc,fullNewsURL,author,publishedAt}) {
    return (
        <div>
            <div className="card">
                <img src={(imgURL)?imgURL:'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} className="card-img-top" style={{height:"180px"}} alt=' Cant be rendered'/>
                    <div className="card-body">
                        <h5 className="card-title">{(title)?title:'No title to display'}...</h5>
                        <p className="card-text">{(desc)?desc:'No description to show'}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {(author)?author:"Unknown"}.Last updated {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={fullNewsURL} target='_blank' className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                    </div>
            </div>
        </div>
    )
}



