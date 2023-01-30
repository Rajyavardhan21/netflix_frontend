import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbars/Navbar';
import HomeBanner from './Homebanner';
import List from './List';
import MyList from './MyList';
import Movie from './Movie';
import Stream from './Stream';
import ScrollToTop from './ScrollToTop';
import Search from './Navbars/search';
import LoginNavbar from './Navbars/LoginNavbar';
// import HomeBanner from './Homebanner';

function Routing() {
    return <div>
        <React.Fragment>
            <Router>

                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                            <ScrollToTop/>
                            
                            <Header />
                            
                            <Body />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path="/login" element={
                        <React.Fragment >
                             <ScrollToTop/>
                            <LoginNavbar/>
                            {/* <Search/> */}
                            <HomeBanner />
                            <MyList/>
                            <List  title="Netflix Originals" param="originals" />
                            <List title="Trending Now" param="trending" />
                            <List title="Now Playing" param="now_playing" />
                            <List title="popular" param="popular" />
                            <List title="Top Rated" param="top_rated" />
                            <List title="Upcoming" param="upcoming" />
                            
                            <Footer />
                        </React.Fragment>
                        
                    } />
                    <Route path="/movies/:id" element={
                        <React.Fragment>
                            <Navbar/>
                             <Movie />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path="/stream/:id" element={
                        <React.Fragment>
                            <ScrollToTop/>
                            <Navbar/>
                             <Stream/>
                             <Link className='text-decoration-none text-reset mx-5 ' to="/login"><button className='btn btn-danger mx-5 mb-5'>Back</button></Link>
                            <Footer />
                        </React.Fragment>
                    } />
                     <Route path="/search" element={
                        <React.Fragment>
                            <Search/>
                        </React.Fragment>
                    } />
                </Routes>
            </Router>
        </React.Fragment>

    </div>
}

export default Routing;