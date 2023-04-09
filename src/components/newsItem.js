import React from 'react'

export default function NewsItem({imgURL,title,desc,fullNewsURL}) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={(imgURL)?imgURL:'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} className="card-img-top" style={{height:"180px"}} alt="Hi"/>
                    <div className="card-body">
                        <h5 className="card-title">{(title)?title:'No title to display'}...</h5>
                        <p className="card-text">{(desc)?desc:'No description to show'}...</p>
                        <a href={fullNewsURL} target='_blank' className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                    </div>
            </div>
        </div>
    )
}
