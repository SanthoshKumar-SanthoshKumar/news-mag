
const NewsItem = ({title,description,url,src}) => {
    
  return (
    <div className="d-inline-block">
      <div className="card bg-dark text-light mb-3 my-3 mx-3 py-2 px-2" style={{maxWidth:"345px"}}>
        <img src={src?src:"https://res.cloudinary.com/dijwul6ub/image/upload/v1718518602/bbc-news-png--1499_qjleyn.png"} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description ? description.slice(0,90):"news Indeed "}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem