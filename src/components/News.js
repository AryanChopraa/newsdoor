import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NewsI } from './NewsI';

const country="us";


export class News extends Component {
  articles=[{
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Vimal Patel",
            "title": "Queen Elizabeth Paves the Way for Camilla to One Day Be Called Queen - The New York Times",
            "description": "On the eve of the 70th anniversary of the start of her reign, Elizabeth said she wanted the Duchess of Cornwall to hold the title of Queen Consort once Prince Charles is king.",
            "url": "https://www.nytimes.com/2022/02/05/world/europe/camilla-queen-elizabeth-jubilee.html",
            "urlToImage": "https://static01.nyt.com/images/2022/02/05/multimedia/05xp-queen/05xp-queen-facebookJumbo.jpg",
            "publishedAt": "2022-02-06T10:03:00Z",
            "content": "But Camilla has become more popular with the public over the years. Elizabeth recently appointed her a Royal Lady of the Most Noble Order of the Garter, a strong show of support.\r\nIn her message on S… [+1220 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Adele Look-Alike Show, Free for Vegas Residency Ticket Holders - TMZ",
            "description": "Can’t see Adele due to the cancelation? Never mind, I’ll find someone like you ... to fill your shoes in Vegas, Adele!",
            "url": "https://www.tmz.com/2022/02/06/adele-lookalike-show-free-vegas-residency-ticket-holders/",
            "urlToImage": "https://imagez.tmz.com/image/f5/16by9/2022/02/04/f5bb5fe47f2d46259256802623c13c65_xl.jpg",
            "publishedAt": "2022-02-06T09:00:00Z",
            "content": "Can't see Adele due to her indefinite postponement? Never mind, we'll find someone like her ... to fill her shoes in Las Vegas.\r\nWith Adele's residency on ice, \"Legends in Concert\" -- the longest-run… [+1125 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Hundreds in Minneapolis protest police killing of Black man in raid - Reuters",
            "description": "Hundreds of protesters took to the streets of downtown Minneapolis on Saturday demanding justice in the fatal police shooting of a young Black man, Amir Locke, during a \"no-knock\" raid on his apartment earlier this week.",
            "url": "https://www.reuters.com/world/us/hundreds-minneapolis-protest-police-killing-black-man-raid-2022-02-06/",
            "urlToImage": "https://www.reuters.com/resizer/KioX7HCAbRnFGafMiqNZzyPosv0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HATKX4NYPFPDFAC4QEXXG7GKBU.jpg",
            "publishedAt": "2022-02-06T08:50:00Z",
            "content": "MINNEAPOLIS, Feb 5 (Reuters) - Hundreds of protesters took to the streets of downtown Minneapolis on Saturday demanding justice in the fatal police shooting of a young Black man, Amir Locke, during a… [+3740 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Marc Berman",
            "title": "Knicks blow big lead, waste RJ Barrett's heroics in OT loss to Lakers - New York Post ",
            "description": "The Knicks staged a storybook first half, collapsed in the second half, rose from the dead to force overtime and still lost in a rollercoaster contest to the Lakers on Saturday.",
            "url": "https://nypost.com/2022/02/06/knicks-blow-big-lead-in-ot-loss-to-lakers/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/02/LeBron-James-3.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2022-02-06T08:33:00Z",
            "content": "LOS ANGELES The Knicks staged a storybook first half, collapsed in the second half, rose from the dead to force overtime and still lost in a rollercoaster contest to the Lakers on Saturday.\r\nRJ Barre… [+5268 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Katie Hunt, CNN",
            "title": "This is the space graveyard where the International Space Station will be buried - CNN",
            "description": "Spacefaring nations have been dumping their junk in the area around the Pacific Ocean's Point Nemo, the most remote place on Earth, since the 1970s.",
            "url": "https://www.cnn.com/2022/02/06/world/point-nemo-international-space-station-scn/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220127194643-01-international-space-station-file-2021-super-tease.jpg",
            "publishedAt": "2022-02-06T08:01:00Z",
            "content": "(CNN)Three thousand miles off the coast of New Zealand and 2,000 miles north of Antarctica, Point Nemo is so far from land that the closest humans are often the astronauts on board the International … [+6204 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Swati Gupta, CNN",
            "title": "India mourns singer Lata Mangeshkar, dead at 92 - CNN",
            "description": "Lata Mangeshkar, the \"nightingale of India\" who gave her voice to Indian movies for more than 70 years, died Sunday in Mumbai, according to her doctor. She was 92.",
            "url": "https://www.cnn.com/2022/02/06/india/lata-mangeshkar-india-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/191114180109-lata-mangeshkar-02-super-tease.jpg",
            "publishedAt": "2022-02-06T07:34:00Z",
            "content": "New Delhi (CNN)Lata Mangeshkar, the \"nightingale of India\" who gave her voice to Indian movies for more than 70 years, died Sunday in Mumbai, according to her doctor. She was 92. \r\n\"Lata Di died at 8… [+5115 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "College basketball scores, winners and losers: Kentucky rolls over Alabama; Michigan State upset by Rutgers - CBS Sports",
            "description": "There were plenty of blowouts and a few surprising results on a busy day of college basketball Saturday",
            "url": "https://www.cbssports.com/college-basketball/news/college-basketball-scores-winners-and-losers-kentucky-rolls-over-alabama-michigan-state-upset-by-rutgers/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/02/06/0dad45fa-4f54-455e-9a45-35e25fa538cd/thumbnail/1200x675/2fcd605b30755d1c1933e36fba066d86/kentucky-alabama.jpg",
            "publishedAt": "2022-02-06T05:18:00Z",
            "content": "After rising into the top five of the AP Top 25 poll for the first time since November 2019 this week, No. 5 Kentucky validated its lofty ranking against one of college basketball's giant slayers on … [+15246 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Paula Newton, CNN",
            "title": "Crowds of demonstrators join rallies across Canada as Covid-19 trucker protests spread - CNN",
            "description": "From the western province of Alberta, moving east to Quebec City, and in cities and towns in between, thousands of Canadians have hit the streets in trucks, tractors, cars and on foot to protest the nation's Covid-19 restrictions.",
            "url": "https://www.cnn.com/2022/02/05/americas/canada-trucker-protest-covid-19/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220205191300-01-canada-protests-0205-super-tease.jpg",
            "publishedAt": "2022-02-06T04:20:00Z",
            "content": "(CNN)From the western province of Alberta, moving east to Quebec City, and in cities and towns in between, thousands of Canadians have hit the streets in trucks, tractors, cars and on foot to protest… [+2992 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Nancy A. Youssef, Michael R. Gordon",
            "title": "Russia Military Buildup Near Ukraine Grows, Heightening U.S. Concern - The Wall Street Journal",
            "description": "Thousands of civilians would be killed or wounded if Russia continues adding to forces and mounts all-out attack, U.S. assessments show",
            "url": "https://www.wsj.com/articles/russia-military-buildup-near-ukraine-grows-heightening-u-s-concern-11644114047",
            "urlToImage": "https://images.wsj.net/im-480825/social",
            "publishedAt": "2022-02-06T03:59:00Z",
            "content": "A series of Russian military moves and potential political steps has heightened concern within the Biden administration that Moscow could launch a major military attack in Ukraine within weeks, U.S. … [+238 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "Mike Gangloff and Mike Niziolek The Roanoke Times",
            "title": "Patrick Henry High School student killed in Blacksburg shooting, four injured; suspect taken into custody - Roanoke Times",
            "description": "A Virginia Tech student was among the people injured, according to university President Tim Sands.",
            "url": "https://roanoke.com/news/local/crime-and-courts/patrick-henry-high-school-student-killed-in-blacksburg-shooting-four-injured-suspect-taken-into-custody/article_f52efd72-865b-11ec-ba07-ab74407bba9e.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/f/52/f52efd72-865b-11ec-ba07-ab74407bba9e/61ff2157bf114.preview.jpg?crop=1184%2C622%2C0%2C352&resize=1184%2C622&order=crop%2Cresize",
            "publishedAt": "2022-02-06T03:45:00Z",
            "content": "BLACKSBURG A student at Roanokes Patrick Henry High School died late Friday in a shooting at a downtown Blacksburg hookah lounge. Police took a man into custody for his slaying and for the wounding o… [+8171 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kelsey Vlamis",
            "title": "Trump praises RNC for censuring Reps. Liz Cheney and Adam Kinzinger - Business Insider",
            "description": "Some GOP lawmakers blasted the censure, including Sen. Mitt Romney, who said: \"Shame falls on a party that would censure persons of conscience.\"",
            "url": "https://www.businessinsider.com/trump-praises-rnc-censure-reps-liz-cheney-and-adam-kinzinger-2022-2",
            "urlToImage": "https://i.insider.com/61ff4cd6fa4f1f001826310b?width=1200&format=jpeg",
            "publishedAt": "2022-02-06T03:42:04Z",
            "content": "Former President Donald Trump congratulated the Republican National Committee for voting to censure GOP Reps. Liz Cheney and Adam Kinzinger over their involvement on the January 6 committee.\r\n\"Congra… [+1109 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kathianne Boniello",
            "title": "Cal Golden Bears basketball legend Gene Ransom fatally shot on I-880 in Oakland - New York Post ",
            "description": "Ransom was heading north on Interstate 880 in Oakland when his car crashed into the guardrail Friday night just after 5 p.m., prompting an investigation.",
            "url": "https://nypost.com/2022/02/05/cal-golden-bears-basketball-legend-gene-ransom-fatally-shot-on-i-880/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/02/gene-ransom-shooting.png?w=1024",
            "publishedAt": "2022-02-06T03:10:00Z",
            "content": "Gene Ransom, a California college basketball Hall of Famer, was shot and killed while driving on a freeway, police said. He was 65.\r\nRansom was heading north on Interstate 880 in Oakland when his car… [+1605 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Alyssa Guzman, Jennifer Smith",
            "title": "Whoopi Goldberg's The View co-host Sara Haines hits out at fans who say her suspension is not enough - Daily Mail",
            "description": "Sara Haines, 44, posted an endearing photo to Instagram showing her and Whoopi Goldberg, 66, smiling on set as they snapped a selfie, saying the memory 'warmed my heart.'",
            "url": "https://www.dailymail.co.uk/news/article-10481331/Whoopi-Goldbergs-View-host-Sara-Haines-hits-fans-say-suspension-not-enough.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/02/06/02/53830205-0-image-a-49_1644115775670.jpg",
            "publishedAt": "2022-02-06T03:06:00Z",
            "content": "Whoopi Goldberg's co-host Sara Haines is slamming fans who think suspending the star for two weeks wasn't enough. \r\n Haines, 44, posted an endearing throwback photo to Instagram showing her and Goldb… [+7403 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Jeremy Fowler",
            "title": "Roger Goodell -- Results of NFL's coaching diversity efforts 'unacceptable' - ESPN",
            "description": "The NFL in a memo to its teams said it will review the league's policies on diversity, equity and inclusion in direct response to the allegations made by former Dolphins coach Brian Flores.",
            "url": "https://www.espn.com/nfl/story/_/id/33223322/roger-goodell-results-nfl-coaching-diversity-efforts-unacceptable",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F0625%2Fnfl_g_nfl%2Dshield01jr_1296x729.jpg",
            "publishedAt": "2022-02-06T01:31:08Z",
            "content": "The results of the NFL's coaching diversity efforts are \"unacceptable,\" commissioner Roger Goodell said in a memo issued to all clubs Saturday morning.\r\nThe memo, titled \"Our Commitment to Diversity,… [+4826 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Popular U.S. podcaster Joe Rogan apologizes for using racial slurs - Reuters",
            "description": "Joe Rogan, the popular U.S. podcaster, issued an apology for the second time in a week, this time for using racial slurs after a montage video surfaced showing him repeatedly saying the N-word.",
            "url": "https://www.reuters.com/world/us/popular-us-podcaster-joe-rogan-apologizes-using-racial-slurs-2022-02-05/",
            "urlToImage": "https://www.reuters.com/resizer/n7giRMhAClBEGlL8BNAfxxp3HRk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FGTZWLNAGBBVFMNAOGHTKBKQQY.JPG",
            "publishedAt": "2022-02-06T00:56:00Z",
            "content": "Feb 5 (Reuters) - Joe Rogan, the popular U.S. podcaster, issued an apology for the second time in a week, this time for using racial slurs after a montage video surfaced showing him repeatedly saying… [+2133 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Alyse Stanley",
            "title": "Amazon, Nike, and Other Bidders Are Reportedly Circling Peloton - Gizmodo",
            "description": "Several corporations seem eager to scoop up the beleaguered exercise equipment manufacturer.",
            "url": "https://gizmodo.com/amazon-nike-and-other-bidders-are-reportedly-circling-1848487758",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/24db19759ad577127eb40a70542b8f12.jpg",
            "publishedAt": "2022-02-05T22:35:00Z",
            "content": "After enjoying a lockdown-fueled peak during the pandemic, Peloton is now spinning out of control. Product recalls, plummeting stock prices, a major decline in demand and its bikes dangerous cameos i… [+2338 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "https://www.engadget.com/about/editors/igor-bonifacic",
            "title": "Google made a more accessible icon for Chrome - Engadget",
            "description": "Google has redesigned the icon for Chrome to make it more accessible and more at home on different operating systems..",
            "url": "https://www.engadget.com/google-chrome-icon-redesign-222650634.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-02/cd55c580-86d1-11ec-89b7-2a64fca23029",
            "publishedAt": "2022-02-05T22:27:26Z",
            "content": "If you recently downloaded the latest Canary release of Google Chrome, you may have noticed the icon is different. The change marks the first time in eight years that Google has redesigned the symbol… [+1445 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Samantha Beech, Celine Alkhaldi and Kareem El Damanhoury, CNN",
            "title": "Moroccan boy trapped in well has died, according to state media - CNN",
            "description": "Moroccan rescuers appear to have rescued a 5-year-old boy from the well he's been trapped inside for four days in the country's north, according to a live feed of the rescue attempt broadcast by SNRT.",
            "url": "https://www.cnn.com/2022/02/05/africa/morocco-well-rescue-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220204050333-04-moroccan-boy-rescue-super-tease.jpg",
            "publishedAt": "2022-02-05T22:16:00Z",
            "content": "(CNN)A Moroccan boy who had been trapped in a well since Tuesday has died, according to two media outlets, Morocco's state news agency, Maghreb Arab Press, and SNRT. \r\nThe 5-year-old boy, previously … [+2479 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Futurism"
            },
            "author": null,
            "title": "The James Webb Space Telescope Just Detected Its First Signal - Futurism",
            "description": "NASA says that as the James Webb Space Telescope begins its alignment process the team saw the first photons of starlight it has detected.",
            "url": "https://futurism.com/the-byte/james-webb-telescope-first-signal",
            "urlToImage": "https://wp-assets.futurism.com/2022/02/james-webb-telescope-first-signal.png",
            "publishedAt": "2022-02-05T21:43:34Z",
            "content": "We're watching the future unfold in real time.\r\nFirst Light\r\nThis week NASA released the thrilling news that as the James Webb Space Telescope begins its three-month alignment process, the Webb team … [+2175 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Seeking Alpha"
            },
            "author": "Chris Ciaccia",
            "title": "Meta Platforms spent $20B during the quarter on buybacks - for nothing - Seeking Alpha",
            "description": "In the metaverse, no one can hear you scream.That shriek shareholders heard was not only caused by the deep dive in Meta Platforms' market cap after it reported weak earnings",
            "url": "https://seekingalpha.com/news/3795700-meta-platforms-spent-20b-during-the-quarter-on-buybacks-for-nothing",
            "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1349800127/image_1349800127.jpg?io=getty-c-w750",
            "publishedAt": "2022-02-05T21:20:00Z",
            "content": "Justin Sullivan/Getty Images News\r\nIn the metaverse, no one can hear you scream.\r\nThat shriek shareholders heard this past week was not only caused by the deep dive in Meta Platforms' (NASDAQ:FB) mar… [+4111 chars]"
        }]
  
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading: false
    }
  }
  
  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=54e77b0fabf3495aa4950b8800f9e20a";
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles})

  }



  render() {
    return (
        <div className='container my-3'>
          <div className='row logoimg'>
            {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <NewsI title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
              </div>
            })}
          </div>
          <button type="button" className="btn btn-lg btn-block hello"><a href='http://192.168.1.6:3000/'>Subscribe to Our Newsletter</a></button>
        </div>
    );
  }
}

export default News;

