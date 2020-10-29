import React, { useState } from 'react';
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search/Search"
import { useHistory } from 'react-router-dom';

function Banner() {

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">

                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)}
                variant="outlined"
                className="banner__searchButton">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a differnt kind of gateway to uncover the hidden gems near you</h5>
                <Button onClick={() => history.push('/search')}
                variant="outlined">
                    Explore NearBy
                </Button>
            </div>
        </div>
    )
}

export default Banner;
