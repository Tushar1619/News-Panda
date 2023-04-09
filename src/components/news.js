import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NewsItem from './newsItem'
export default function News({ pageSize }) {
    // const articles = [
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Ariane de Vogue, Tierney Sneed",
    //         "title": "Justice Clarence Thomas says trips with billionaire didn't need to be disclosed at the time - CNN",
    //         "description": "\"This is far greater than mere ethics violations; it's about the perceived legitimacy of the Supreme Court,\" one former conservative federal judge said.",
    //         "url": "https://www.cnn.com/2023/04/07/politics/clarence-thomas-disclosures-supreme-court/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230406092847-justice-clarence-thomas-221007.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-04-07T18:25:00Z",
    //         "content": "Justice Clarence Thomas said Friday that he did not disclose luxury travel paid for by a Republican donor because he was advised at the time that he did not have to report it. \r\nIn a rare statement s… [+7971 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Two British-Israeli women killed in West Bank shooting - BBC",
    //         "description": "The sisters were driving in a car in the Jordan Valley with their mother, who was seriously injured.",
    //         "url": "https://www.bbc.com/news/world-middle-east-65211160",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FE74/production/_129304156_mediaitem129304155.jpg",
    //         "publishedAt": "2023-04-07T17:47:12Z",
    //         "content": "Two British-Israeli sisters have been killed and their mother has been injured in a shooting in the occupied West Bank.\r\nThey were in a car that crashed after being shot at near the Hamra Junction, i… [+3668 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "TMZ"
    //         },
    //         "author": "TMZ Staff",
    //         "title": "WWE Apologizes For Showing Auschwitz Footage During WrestleMania Promo - TMZ",
    //         "description": "WWE just apologized for using a photograph of the Auschwitz concentration camp where more than 1 million Jews were murdered during a WrestleMania promo Saturday night.",
    //         "url": "https://www.tmz.com/2023/04/07/wwe-apologizes-auschwitz-concentration-camp-video-wrestlemania-promo/",
    //         "urlToImage": "https://imagez.tmz.com/image/54/16by9/2023/04/07/547d9713a84b466486b396c4ce6b0a6d_xl.jpg",
    //         "publishedAt": "2023-04-07T17:41:00Z",
    //         "content": "WWE apologized on Friday for showing a photograph of the Auschwitz concentration camp where more than 1 million Jews were murdered ... during a WrestleMania promo Saturday night.\r\nThe company faced b… [+1352 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "'Another weight on the scale' towards recession: Dimon on recent banking turmoil - CNN",
    //         "description": "Speaking in his first interview since the failure of Silicon Valley Bank, JPMorgan Chase CEO Jamie Dimon said that while the banking system is strong and sou...",
    //         "url": "https://www.youtube.com/watch?v=kH57TEXfjPY",
    //         "urlToImage": "https://i.ytimg.com/vi/kH57TEXfjPY/maxresdefault.jpg",
    //         "publishedAt": "2023-04-07T17:39:28Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "usa-today",
    //             "name": "USA Today"
    //         },
    //         "author": "Joey Garrison and Sandy Mazza, USA TODAY",
    //         "title": "Tennessee House expulsion: Kamala Harris to meet with ousted members - USA TODAY",
    //         "description": "Vice President Kamala Harris makes a surprise visit to Nashville where she plans to meet the Tennessee Democrats expelled over gun protests.",
    //         "url": "https://www.usatoday.com/story/news/politics/2023/04/07/tennessee-house-expulsion-kamala-harris-meet-ousted-members/11621736002/",
    //         "urlToImage": "https://www.gannett-cdn.com/presto/2023/04/07/USAT/7ff6f275-21dc-46d7-b0d8-701ba8bf2170-AP_Harris.jpg?auto=webp&crop=4410,2481,x0,y0&format=pjpg&width=1200",
    //         "publishedAt": "2023-04-07T17:15:00Z",
    //         "content": "WASHINGTON — Vice President Kamala Harris plans to visit Nashville Friday to push for gun control and meet with two Tennessee Democratic lawmakers who were expelled from the General Assembly after pr… [+2730 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bloomberg",
    //             "name": "Bloomberg"
    //         },
    //         "author": "Chris Anstey",
    //         "title": "Larry Summers Sees Higher Chance of Recession, Fed Nearing the End - Bloomberg",
    //         "description": "Former Treasury Secretary Lawrence Summers said the likelihood of a US recession is rising after a series of weak economic indicators and that the Federal Reserve is approaching the end of its series of interest-rate hikes.",
    //         "url": "https://www.bloomberg.com/news/articles/2023-04-07/larry-summers-sees-higher-chance-of-recession-fed-nearing-the-end",
    //         "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ixafQS.otlAI/v0/1200x800.jpg",
    //         "publishedAt": "2023-04-07T17:13:28Z",
    //         "content": "Former Treasury Secretary Lawrence Summers said the likelihood of a US recession is rising after a series of weak economic indicators and that the Federal Reserve is approaching the end of its series… [+410 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Christian Edwards",
    //         "title": "S Club 7 singer Paul Cattermole dies age 46 - CNN",
    //         "description": "Paul Cattermole, from British pop group S Club 7, has died at the age of 46, weeks after the pop group announced a major reunion tour.",
    //         "url": "https://www.cnn.com/2023/04/07/entertainment/s-club-7-paul-cattermole-intl-scli/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230407110730-paul-cattermole-s-club-7-0214-restricted.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-04-07T17:04:00Z",
    //         "content": "Paul Cattermole, from British pop group S Club 7, has died at the age of 46, weeks after the pop group announced a major reunion tour.\r\nWe are truly devastated by the passing of our brother Paul, Cat… [+1968 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "Mary Kekatos",
    //         "title": "CDC warns doctors to be on the lookout for rare Marburg virus - ABC News",
    //         "description": "Cases have been detected in Tanzania and Equatorial Guinea.",
    //         "url": "https://abcnews.go.com/Health/cdc-warns-doctors-lookout-rare-ebola-virus/story?id=98426978",
    //         "urlToImage": "https://s.abcnews.com/images/Health/Marburg-rf-gty-ml-230407_1680875618684_hpMain_16x9_992.jpg",
    //         "publishedAt": "2023-04-07T16:56:41Z",
    //         "content": "The Centers for Disease Control and Prevention issued a warning Thursday for clinicians and public health departments in the United States to be on the lookout for cases of a rare Ebola-like virus.\r\n… [+2638 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "POLITICO.eu"
    //         },
    //         "author": "Jamil Anderlini, Clea Caulcutt",
    //         "title": "'I love you Macron!' French leader gets rock star welcome in China - POLITICO Europe",
    //         "description": "The French president faces fire and fury on the streets of Paris, but in China crowds of students adore him.",
    //         "url": "https://www.politico.eu/article/emmanuel-macron-france-leader-rockstar-welcome-china/",
    //         "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/04/07/GettyImages-1250851256-scaled.jpg",
    //         "publishedAt": "2023-04-07T16:54:37Z",
    //         "content": "GUANGZHOU, China French President Emmanuel Macron cemented his status as a rock star on the world stage on Friday as he toured the campus of a top university in southern China accompanied by rapturou… [+2695 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ESPN"
    //         },
    //         "author": "Mark Schlabach",
    //         "title": "Live updates of Tiger Woods' second round at the Masters - ESPN",
    //         "description": "Tiger Woods shot 74 in his first major round of the year. Here's hole-by-hole analysis as he plays his second round at Augusta on Friday.",
    //         "url": "https://www.espn.com/golf/story/_/id/36103926/2023-masters-tracking-tiger-woods-live-augusta-national-friday",
    //         "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0407%2Fr1155698_1296x729_16%2D9.jpg",
    //         "publishedAt": "2023-04-07T16:54:07Z",
    //         "content": "Tiger Woods is going to have to put up a low number on Friday if he's going to stick around for the weekend at the 87th Masters.\r\nAfter posting a 2-over 72 in the first round at Augusta National Golf… [+377 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Barron's"
    //         },
    //         "author": "Brian Swint, Al Root",
    //         "title": "Tesla Cuts Prices in the U.S. Ahead of EV Tax-Credit Changes - Barron's",
    //         "description": "Some see the price cuts as a sign of concerns about weakness in demand, but the moves have helped boost sales and market share.",
    //         "url": "https://www.barrons.com/articles/tesla-cuts-prices-tax-credit-f8b577ee",
    //         "urlToImage": "https://images.barrons.com/im-757730/social",
    //         "publishedAt": "2023-04-07T16:45:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "al-jazeera-english",
    //             "name": "Al Jazeera English"
    //         },
    //         "author": "Al Jazeera",
    //         "title": "Who fired rockets into Israel from southern Lebanon? - Al Jazeera English",
    //         "description": "While no group has claimed responsibility, Israel blames the Palestinian group Hamas in Lebanon for barrage of rockets.",
    //         "url": "https://www.aljazeera.com/news/2023/4/7/who-fired-rockets-into-israel-from-southern-lebanon",
    //         "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/04/2023-04-07T044450Z_1019213669_RC2G90A937CO_RTRMADP_3_ISRAEL-SECURITY-ROCKETS-LEBANON.jpg?resize=1920%2C1440",
    //         "publishedAt": "2023-04-07T16:29:39Z",
    //         "content": "Israel has carried out air raids in southern Lebanon, targeting what it said were positions of the Palestinian group Hamas.\r\nThe Israeli army said the bombardment in the early hours of Friday was in … [+5595 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cbs-news",
    //             "name": "CBS News"
    //         },
    //         "author": "Alex Sundby",
    //         "title": "Marion County, Florida, murders: 2 suspects arrested in shooting deaths of 3 teens; police searching for third suspect - CBS News",
    //         "description": "Marion County Sheriff Billy Woods said authorities are searching for a third suspect.",
    //         "url": "https://www.cbsnews.com/news/ocklawaha-murders-suspects-arrested-shooting-deaths-florida-teens/",
    //         "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/04/07/beca27a2-95bb-4b2d-ae8a-102669879fa3/thumbnail/1200x630g2/59cd14a99b67f9455627200e1321c027/q-i2-iis.jpg",
    //         "publishedAt": "2023-04-07T15:33:00Z",
    //         "content": "Two suspects have been arrested in the shooting deaths of three teenagers in Florida, a sheriff announced Friday. Marion County Sheriff Billy Woods said authorities are searching for a third suspect.… [+2535 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Guardian"
    //         },
    //         "author": "Andrew Pulver",
    //         "title": "Star Wars announces three new films on the way, with Daisy Ridley to return as Rey - The Guardian",
    //         "description": "Lucasfilm has announced three new live-action films, and confirmed the return of Ridley’s Rey to build ‘a new Jedi Order’",
    //         "url": "https://www.theguardian.com/film/2023/apr/07/star-wars-three-new-films-lucasfilm-daisy-ridley-rey",
    //         "urlToImage": "https://i.guim.co.uk/img/media/921c7493b179f0abad3232537e88bd21e9ad63de/649_0_3059_1836/master/3059.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=88f7bd70e8f52ae774cc36edd8d6e991",
    //         "publishedAt": "2023-04-07T15:30:00Z",
    //         "content": "Two new Star Wars films are to go into production, it has been announced, with more details revealed of a third to follow, as the series maker Lucasfilm appears to be close to ending the hiatus since… [+1688 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Ben Cost",
    //         "title": "Zealot nails himself to a cross for his 34th Easter crucifixion - New York Post ",
    //         "description": "After a three-year hiatus due to COVID, a controversial Good Friday tradition has been resurrected.",
    //         "url": "https://nypost.com/2023/04/07/zealot-nails-himself-to-a-cross-for-his-34th-easter-crucifixion/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/NYPICHPDPICT000009335028.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2023-04-07T15:29:00Z",
    //         "content": "These Easter congregants are taking their Good Friday celebration back to the New Testament.\r\nAfter a three-year hiatus due to COVID, a controversial Good Friday tradition has been resurrected. \r\nEig… [+5051 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Variety"
    //         },
    //         "author": "Brent Lang",
    //         "title": "Box Office: ‘Super Mario Bros. Movie’ Earns Massive $26.5 Million on Thursday, ‘Air’ Picks Up $2.4 Million - Variety",
    //         "description": "It’s-a blockbuster! “The Super Mario Bros. Movie” continued to rack up high scores at the box office as it heads into Easter weekend. The animated movie, a collaboration between I…",
    //         "url": "https://variety.com/2023/film/news/box-office-super-mario-bros-movie-thursday-air-matt-damon-ben-affleck-1235576611/",
    //         "urlToImage": "https://variety.com/wp-content/uploads/2023/04/MCDSUMA_UV033.jpg?w=1000&h=562&crop=1",
    //         "publishedAt": "2023-04-07T15:22:00Z",
    //         "content": "It’s-a blockbuster!\r\n“The Super Mario Bros. Movie” continued to rack up high scores at the box office as it heads into Easter weekend. The animated movie, a collaboration between Illumination, Ninten… [+2714 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MMA Fighting"
    //         },
    //         "author": "Alexander K. Lee",
    //         "title": "UFC 287 weigh-in results: Alex Pereira, Israel Adesanya set for main event grudge match, one fighter misses w… - MMA Fighting",
    //         "description": "Alex Pereira and Israel Adesanya successfully weighed in for the UFC middleweight championship rematch.",
    //         "url": "https://www.mmafighting.com/2023/4/7/23674119/ufc-287-weigh-in-results-alex-pereira-israel-adesanya-main-event-grudge-match-fighter-misses-weight",
    //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/i97n8o_6oe8AfCAb3vSqvIt1ksQ=/0x0:6078x3182/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24568751/1480600017.jpg",
    //         "publishedAt": "2023-04-07T15:08:20Z",
    //         "content": "Alex Pereira and Israel Adesanya are on for their rematch.\r\nThe UFC 287 main event fighters successfully weighed in on Friday morning for their middleweight title match, with champion Pereira arrivin… [+1955 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": "",
    //         "title": "NFL Mock Draft 2023: Buccaneers take QB as five go in Round 1, Cowboys replace Dalton Schultz - CBS Sports",
    //         "description": "Plenty of surprising landing spots for top prospects in this mock",
    //         "url": "https://www.cbssports.com/nfl/draft/news/nfl-mock-draft-2023-buccaneers-take-qb-as-five-go-in-round-1-cowboys-replace-dalton-schultz/",
    //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/11/04/84fbfca6-e6f4-46e5-b4c6-7c9bcb79fede/thumbnail/1200x675/8642f72388c4674fedbb47ae3fa71593/usatsi-17191792.jpg",
    //         "publishedAt": "2023-04-07T15:03:00Z",
    //         "content": "As we near the 2023 NFL Draft, it feels more likely Hendon Hooker lands somewhere in the first round, most likely in the back half of it. But where? \r\nThis mock represents the highest the ultra-produ… [+669 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fox-news",
    //             "name": "Fox News"
    //         },
    //         "author": "Caitlin McFall",
    //         "title": "Russia threatens Ukraine eastern supply lines as it has 'likely' seized Bakhmut town center: UK intel - Fox News",
    //         "description": "Russian forces are threatening a key supply route for Ukrainian troops and have \"likely\" seized the center of Bakhmut after more than six months of brutal fighting over the town, the U.K. defense ministry has assessed.",
    //         "url": "https://www.foxnews.com/world/russia-threatens-ukraine-eastern-supply-lines-it-has-likely-seized-bakhmut-town-center-uk-intel",
    //         "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/GettyImages-1250786479.jpg",
    //         "publishedAt": "2023-04-07T14:53:00Z",
    //         "content": "Russian forces are threatening a key supply route for Ukrainian troops and have \"likely\" seized the center of Bakhmut after more than six months of brutal fighting over the town, the U.K. defense min… [+2627 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fox-news",
    //             "name": "Fox News"
    //         },
    //         "author": "Kyle Morris",
    //         "title": "Noem warns Biden admin over proposed Title IX regulations for transgender athletes: 'We'll see you in court' - Fox News",
    //         "description": "South Dakota Republican Gov. Kristi Noem has vowed to fight back against the Biden administration's proposed set of Title IX rules to expand the meaning of sexual discrimination to include gender identity that would prevent schools and colleges from banning t…",
    //         "url": "https://www.foxnews.com/politics/noem-warns-biden-admin-over-proposed-title-ix-regulations-for-transgender-athletes-well-see-you-in-court",
    //         "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/0c843390-Untitled-1.jpg",
    //         "publishedAt": "2023-04-07T14:26:00Z",
    //         "content": "South Dakota Republican Gov. Kristi Noem has vowed to fight back against the Biden administration's proposed set of Title IX rules to expand the meaning of sexual discrimination to include gender ide… [+4527 chars]"
    //     }
    // ]
    const [allNews, setAllNews] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=9b74945cf4d84d53895c4e0b0483f359&page=${page}&pageSize=${pageSize} 
        useEffect(() => {
            console.log("in useEffect fn");
           const fetchData =  async ()=> {
            
                try {
                    const response = await axios.get(`htt://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a0732eeb1b64f348f35561b32950524&page=${page}&pageSize=${pageSize}`);
                    setAllNews(response.data.articles);
                    // console.log(response.data.totalResults);
                    setTotalResults(response.data.totalResults)
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();

            
        },[page,pageSize]);
      
        async function handlePrevClick() {

           console.log("in handlePrevClick fn");
            setPage(page - 1);
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a0732eeb1b64f348f35561b32950524&page=${page}&pageSize=${pageSize}`);
                setAllNews(response.data.articles);
            } catch (error) {
                console.error(error);
            }
        }
        async function handleNextClick() {
            console.log("in handleNextClick fn "+ totalResults);

            setPage(page + 1);
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a0732eeb1b64f348f35561b32950524&page=${page}&pageSize=${pageSize}`);
                setAllNews(response.data.articles);
            } catch (error) {
                console.error(error);
            }

        }


        return (
            <div className='my-5'>

                <div className="container">
                    <h2 className='text-center'>Top news</h2>
                    <div className="row">
                        {allNews.map((element) => {
                            return (
                                <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem imgURL={element.urlToImage} title={(element.title) ? element.title.slice(0, 45) : "No title"} desc={(element.description) ? element.description.slice(0, 80) : "No desc"} fullNewsURL={element.url} />
                                </div>
                            )
                        })}


                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={handlePrevClick} disabled={(page === 1) ? true : false} type="button" className="btn btn-primary mx-2">&larr; Previous</button>
                    <button onClick={handleNextClick} disabled={((totalResults / pageSize) + 1) > page ? false : true} type="button" className="btn btn-primary mx-2">Next &rarr;</button>
                    {/* disabled={((totalResults / pageSize) + 1) > page ? false : true} */}
                </div>


            </div>
        )
    }