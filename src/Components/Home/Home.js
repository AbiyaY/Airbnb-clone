import React from 'react';
import "./Home.css";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";

function Home() {
    return (
        <div className="home">
            <h1>Home Page</h1>
            <Banner />
            
            <div className="home__section">
                <Card 
                    src="https://www.noushouse.com.au/store/images/NH_distributedaudio&video.jpg"
                    title="Rockridge Casita"
                    description="If you have friends or family coming for the holidays,"
                />
                <Card 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT65BelhG8905e437ms3nNyvv1dvG5DoSSVLQ&usqp=CAU"
                    title="Superhost in Norwich"
                    description="Go for the approved landlord type that don’t need a key from the inside,"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/12140143/9b15d299_original.jpg?aki_policy=large"
                    title="Airbnb for Guest WiFi"
                    description="In order to get going with awesome WiFi, simply sign up for a free trial,"              />
            </div>
            <div className="home__section">
                <Card 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS16hJapv7qwzp9vYWB-lTfzxoO-lq_nl05g&usqp=CAU"
                    title="A bright and spacious Airbnb"
                    description="Airbnb is moving its infrastructure towards a Service Oriented Architecture."
                    price="£50/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/4a7574d9-4bd5-4ce6-b014-6519a078d867.jpg?aki_policy=large"
                    title="M-House"
                    description="M-House is a modern desert retreat, situated in a residential neighborhood while maintaining the feeling of cool isolation"
                    price="£400/night"
                />
                <Card
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/airbnb-navidad-solicitados-1544691382.jpg?crop=1.00xw:0.752xh;0,0.0505xh&resize=480:*"
                    title="Online Book"
                    description="Airbnb is moving its infrastructure towards a Service Oriented Architecture."
                    price="£90/night"
                />
            </div>
        </div>
    )
}

export default Home;
