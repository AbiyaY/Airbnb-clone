import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult/SearchResult";


const SearchPage = () => {
    return(
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays • 26 september to 30 september • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of Place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and Beds
                </Button>
                <Button variant="outlined">
                    More Filters
                </Button>
            </div>
            <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI9-qjuoE87q5FlK8_BepYhUR2Uvz8pxhOUQ&usqp=CAU"
                location="City of London"
                title="Stay at this spacious Edward House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.7}
                price="£30 / night"
                total="£117 total"
            />

<SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI9-qjuoE87q5FlK8_BepYhUR2Uvz8pxhOUQ&usqp=CAU"
                location="City of London"
                title="Stay at this spacious Edward House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.7}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI9-qjuoE87q5FlK8_BepYhUR2Uvz8pxhOUQ&usqp=CAU"
                location="City of London"
                title="Stay at this spacious Edward House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.7}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI9-qjuoE87q5FlK8_BepYhUR2Uvz8pxhOUQ&usqp=CAU"
                location="City of London"
                title="Stay at this spacious Edward House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.7}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI9-qjuoE87q5FlK8_BepYhUR2Uvz8pxhOUQ&usqp=CAU"
                location="City of London"
                title="Stay at this spacious Edward House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free Parking • Washing Machine"
                star={4.7}
                price="£30 / night"
                total="£117 total"
            />
        </div>
    );
};

export default SearchPage;