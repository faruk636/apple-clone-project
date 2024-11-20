import React ,{useState,useEffect}from 'react'


function AppleYoutube() {
    const [apple,setApple]=useState([])
    useEffect(()=>{
        fetch(process.env.APPLE_API_KEY)
        .then((response)=>response.json())
        .then((data)=>setApple(data.items))
    },[])
    // console.log(apple)
  return (
    <div className='appleYoutubeWrapper'>
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <div className='col-12'>
                    <div className='title-wrapper'>
                        <h1><strong>LATEST VIDEOS</strong></h1>
                        <br/>
                        <br/>
                    </div>
                </div>
                {apple?.map((eachValue,index)=>{
                    let vidId=eachValue.id.videoId
                    let vidLink=`https://www.youtube.com/watch?v=${vidId}`
                        return(
                                <div key={index} className='col-sm-12 col-md-6 col-lg-4'>
                                    <div className='eachVideoWrapper'>
                                        <div className='thumbNail'>
                                            <a href={vidLink} target='_blank' rel='nonrelated'>
                                                <img src={eachValue.snippet.thumbnails.high.url} alt='thumbnails'/>
                                            </a>
                                        </div>
                                        <div className='videoInfoWrapper'>
                                            <div className='videoTitle'>
                                                <a href={vidLink} target='_blank' rel='non'>
                                                    {eachValue.snippet.title}
                                                </a>
                                            </div>
                                            <div className='videoDes'>
                                                    {eachValue.snippet.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                        })}
            </div>
        </div>
    </div>
  )
}

export default AppleYoutube