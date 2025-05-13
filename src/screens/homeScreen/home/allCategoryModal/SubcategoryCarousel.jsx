import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AliceCarousel from 'react-alice-carousel';
import Skeleton from 'react-loading-skeleton';
import { fetchSubcategories } from '../../../../services/api';
import 'react-alice-carousel/lib/alice-carousel.css'; // Ensure carousel styles are imported

const SubcategoryCarousel = ({ category, onCardClick }) => {
    const { data: subcategories, isLoading, error } = useQuery({
        queryKey: ['subcategories', category._id],
        queryFn: () => fetchSubcategories(category._id),
        enabled: !!category._id,
    });

    // Responsive settings for the carousel
    const responsive = {
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        992: { items: 5 },
        1200: { items: 6 }, // Optional: Add more breakpoints for larger screens
    };

    // Determine if controls should be shown
    const showControls =
        subcategories?.length > responsive[992].items ||
        subcategories?.length > responsive[768].items ||
        subcategories?.length > responsive[576].items ||
        subcategories?.length > responsive[0].items;

    const carouselItems = subcategories?.map((subcategory, index) => (
        <div
            key={subcategory._id || index}
            style={{
                padding: '0.8rem', // Use relative units
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    border: '0.5px solid #ccc',
                    borderRadius: '8px',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    height: 'auto', // Allow height to adjust
                    minHeight: '12rem', // Minimum height for consistency
                    width: '100%', // Full width of the carousel item
                    minWidth: '10rem', // Maximum width to prevent oversized cards
                    maxWidth: '10rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                }}
                onClick={() => onCardClick(subcategory, subcategory._id)}
            >
                <div
                    style={{
                        backgroundColor: '#fff',
                        width: '90%',
                        maxWidth: '10rem',
                        aspectRatio: '4 / 3', // Maintain aspect ratio for image container
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem',
                    }}
                >
                    <img
                        src={subcategory.icon}
                        alt={subcategory.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            background: 'transparent',
                        }}
                    />
                </div>
                <h6
                    style={{
                        fontSize: '0.875rem', // Responsive font size
                        margin: '0.125rem',
                        color: '#333',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '90%',
                    }}
                >
                    {subcategory.name}
                </h6>
            </div>
        </div>
    )) || [];

    const skeletonItems = Array(5).fill().map((_, index) => (
        <div
            key={index}
            style={{
                padding: '0.5rem',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    border: '0.5px solid #ccc',
                    borderRadius: '8px',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    height: 'auto',
                    minHeight: '12rem',
                    width: '100%',
                    maxWidth: '12rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                }}
            >
                <Skeleton
                    height="70%"
                    width="90%"
                    style={{ borderRadius: '4px', marginBottom: '0.75rem' }}
                />
                <Skeleton height="0.875rem" width="60%" />
            </div>
        </div>
    ));

    if (!isLoading && (!Array.isArray(subcategories) || subcategories.length === 0)) {
        return null;
    }

    return (
        <div className="carousel-wrapper" style={{ position: 'relative', width: '100%' }}>
            {isLoading ? (
                <AliceCarousel
                    mouseTracking
                    items={skeletonItems}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    autoPlay={false}
                    infinite={false}
                    disableDotsControls
                    disableButtonsControls
                />
            ) : (
                <AliceCarousel
                    mouseTracking
                    items={carouselItems}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    autoPlay={false}
                    infinite={carouselItems.length > 1}
                    disableDotsControls
                    disableButtonsControls={!showControls}
                    paddingLeft={0} // Optional: Add padding to prevent edge clipping
                    paddingRight={40}
                />
            )}
        </div>
    );
};

export default SubcategoryCarousel;