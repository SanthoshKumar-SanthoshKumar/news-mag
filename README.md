# NewsMag
    NewsMag is a dynamic news application built with React and Vite, leveraging the NewsAPI to fetch and display the latest news articles based on various categories. Users can select different categories to view the most recent headlines in technology, business, health, science, and entertainment.

# Features
  # Category-Based News: 
      * Users can choose from different news categories such as Technology, Business, Health, Science, and Entertainment.
  # Dynamic Fetching: 
      * The application fetches news articles dynamically based on the selected category.
  # Responsive Design: 
      * The application is designed to be responsive and user-friendly.
      
# Project Structure:
   The project consists of the following main components:
 * App: The main component that manages the state and renders Navbar and NewsBoard.
 * Navbar: The navigation bar component that allows users to select news categories.
 * NewsBoard: The component that fetches and displays news articles based on the selected category.
 * NewsItem: The component that represents an individual news article.

# Components
  # App
* The main component that holds the state for the selected news category and renders the Navbar and NewsBoard components.

import {useState} from 'react'
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App

# Navbar
A component that renders the navigation bar and allows users to select a news category.

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{cursor:"pointer"}}>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

# NewsBoard
A component that fetches news articles based on the selected category and renders them using the NewsItem component.

import { useState, useEffect } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        fetch(url)
          .then(response => response.json())
          .then(data => setArticles(data.articles))
    }, [category])

    return (
        <div>
            <h2 className="text-center mt-3">Latest <span className="badge text-light bg-danger">News</span></h2>
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            ))}
        </div>
    )
}

export default NewsBoard

# NewsItem
A component that represents an individual news article.

const NewsItem = ({title, description, url, src}) => {
    return (
        <div className="d-inline-block">
            <div className="card bg-dark text-light mb-3 my-3 mx-3 py-2 px-2" style={{maxWidth:"345px"}}>
                <img src={src ? src : "https://res.cloudinary.com/dijwul6ub/image/upload/v1718518602/bbc-news-png--1499_qjleyn.png"} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description ? description.slice(0,90) : "news Indeed "}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem


# License
This project is licensed under the MIT License.

