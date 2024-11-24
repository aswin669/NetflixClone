import React, { useEffect } from 'react';
import Slider from 'react-slick';
import bannerImage1 from '../../Assets/banner.webp';
import squidImage from '../../Assets/squid.jpg';
import moneyImage from '../../Assets/money.jpg'
import './Banner.css';



function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const banners = [
        {
            id: 1,
            title: 'Money Heist',
            rating: '8.5',
            duration: '60m',
            episode: 'Season 3 - Episode 08 - La deiva',
            description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes: a survival game with a billion-won prize at stake.',
            image: moneyImage,
        },

        {
            id: 2,
            title: 'Squid Game',
            rating: '8.5',
            duration: '58m',
            episode: 'Season 1 - Episode 12 - Still Gotta Mean Something',
            description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes: a survival game with a billion-won prize at stake.',
            image: squidImage,
        },
        {
            id: 3,
            title: 'The Walking Dead',
            rating: '7.5',
            duration: '51m',
            episode: 'Season 8 - Episode 14 - Still Gotta Mean Something',
            description: 'A Heaps prisoner makes a discovery; Carol searches for someone in the nearby forest; Rick and Morgan find themselves in the company of strangers.',
            image: bannerImage1,
        },
      
    ];
    useEffect(() =>{
        
    })

    return (
        
        <Slider {...settings} className="banner-slider">
            {banners.map((bannerData) => (
                <div className="banner" key={bannerData.id}>
                    <img src={bannerData.image} alt="Banner" />
                    <div className="content">
                        <h4 className="duration">Duration: {bannerData.duration}</h4>
                        <h4 className="episode">
                            <span className="rating">⭐ {bannerData.rating}</span> {bannerData.episode}
                        </h4>
                        <h1 className="title">{bannerData.title}</h1>
                        <p className="description">{bannerData.description}</p>
                        <div className="banner_buttons">
                            <button className="button play">WATCH</button>
                            <button className="button add-list">+ ADD LIST</button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
        
    );
}

export default Banner;
