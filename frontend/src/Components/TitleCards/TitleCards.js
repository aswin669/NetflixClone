import React, { useRef, useEffect, useState } from 'react';
import './TitleCards.css';
import CardData from '../../Assets/Cards/CardsData';

function TitleCards() {
  const cardListRef = useRef(null);
  const [isFirstListScrolled, setIsFirstListScrolled] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null); // State to manage video modal

  useEffect(() => {
    const handleScroll = (event) => {
      if (cardListRef.current) {
        const cardList = cardListRef.current;
        const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

        const scrollSpeedFactor = 2;
        cardList.scrollLeft += event.deltaY * scrollSpeedFactor;

        if (cardList.scrollLeft >= maxScrollLeft) {
          setIsFirstListScrolled(true);
        } else if (cardList.scrollLeft === 0) {
          setIsFirstListScrolled(false);
        }

        event.preventDefault();
      }
    };

    const cardListElement = cardListRef.current;
    cardListElement.addEventListener('wheel', handleScroll);

    return () => {
      cardListElement.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const openVideo = (url) => {
    setVideoUrl(url); 
  };

  const closeVideo = () => {
    setVideoUrl(null); 
  };

  return (
    <div className="title-cards">
      <h2>Trending Now</h2>
      <div className="card-list" ref={cardListRef}>
        {CardData.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={card.image}
              alt={`${card.name} Poster`}
              onClick={() => openVideo(card.videoUrl)}
              style={{ cursor: 'pointer' }}
            />
            <div className="card-info">
              <p className="card-title">{card.name}</p>
              <p className="card-year">{card.year}</p>
              <div className="card-stats">
                <span className="icon heart-icon">❤️</span>
                <span className="rating">⭐ {card.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {videoUrl && (
        <div className="video-modal">
          <button className="back-button" onClick={closeVideo}>← Back</button>
          <iframe
            src={`${videoUrl}?autoplay=1&fs=1`}
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default TitleCards;
