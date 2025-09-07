// pages/Nepal.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme, createHoverCard } from '../../../utils/theme';
import napal1 from '../../../assets/travel/nepal/nepal1.jpg';
import nepal2 from '../../../assets/travel/nepal/nepal2.jpg';
import nepal3 from '../../../assets/travel/nepal/nepal3.jpg';
import nepal4 from '../../../assets/travel/nepal/nepal4.jpg';
import nepal5 from '../../../assets/travel/nepal/nepal5.jpg';
import nepal6 from '../../../assets/travel/nepal/nepal6.jpg';
import nepal7 from '../../../assets/travel/nepal/nepal7.jpg';
import nepal8 from '../../../assets/travel/nepal/nepal8.jpg';
import nepal9 from '../../../assets/travel/nepal/nepal9.jpg';
import nepal10 from '../../../assets/travel/nepal/nepal10.jpg';
import TravelHeader from '../travelHeader';

const Nepal = () => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);

    const packages = [
        {
            title: "Classic Nepal Tour",
            duration: "4 Nights / 5 Days",
            description: "Explore Kathmandu and Pokhara with cultural and scenic highlights.",
            image: napal1
        },
        {
            title: "All in One Nepal Tour",
            duration: "6 Nights / 7 Days",
            description: "Discover the best of Nepal – culture, heritage, and landscapes in one trip.",
            image: nepal2
        },
        {
            title: "Discover Nepal Tour",
            duration: "9 Nights / 10 Days",
            description: "An immersive journey covering major attractions and hidden gems of Nepal.",
            image: nepal9
        },
        {
            title: "Experience Nepal Tour",
            duration: "7 Nights / 8 Days",
            description: "A mix of cultural sightseeing and adventure experiences in Nepal.",
            image: nepal4
        },
        {
            title: "Lumbini & Pokhra Nepal Tour",
            duration: "6 Nights / 7 Days",
            description: "Visit the birthplace of Buddha along with the scenic Pokhara valley.",
            image: nepal5
        },
        {
            title: "Pokhra Package",
            duration: "5 Nights / 6 Days",
            description: "Relax and enjoy the serene lakes and mountains of Pokhara.",
            image: nepal6
        },
        {
            title: "Pokhra & Nagarkot Package",
            duration: "5 Nights / 6 Days",
            description: "Enjoy Himalayan sunrise in Nagarkot along with Pokhara’s beauty.",
            image: nepal7
        },
        {
            title: "Pokhra & Gorkha Trip",
            duration: "6 Nights / 7 Days",
            description: "Combine natural beauty of Pokhara with historic charm of Gorkha.",
            image: nepal8
        },
        {
            title: "Everest Mountain Flight",
            duration: "1 Hour",
            description: "A breathtaking flight over Mt. Everest – a once in a lifetime experience.",
            image: nepal3
        },
        {
            title: "Everest Base Camp Trek",
            duration: "12 Days",
            description: "An adventurous trek to the base camp of the world's highest mountain.",
            image: nepal10
        }
    ];

    return (
        <div style={{
            padding: theme.spacing.xxl,
            fontFamily: theme.typography.fontFamily,
            background: theme.colors.dark.primary,
            color: theme.colors.text.primary,
            minHeight: "100vh"
        }}>
            <TravelHeader />
            <h1 style={{
                ...theme.typography.heading.h1,
                textAlign: "center",
                marginBottom: theme.spacing.xl,
                color: theme.services.travel.primary
            }}>
                Nepal Tour Packages
            </h1>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: theme.spacing.lg
            }}>
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        style={{
                            ...createHoverCard("travel", hovered === index),
                            overflow: "hidden"
                        }}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img
                            src={pkg.image}
                            alt={pkg.title}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderTopLeftRadius: theme.borderRadius.xl,
                                borderTopRightRadius: theme.borderRadius.xl
                            }}
                        />
                        <div style={{ padding: theme.spacing.md }}>
                            <h3 style={theme.typography.heading.h3}>{pkg.title}</h3>
                            <p style={{
                                ...theme.typography.body.small,
                                color: theme.colors.text.secondary,
                                margin: "4px 0"
                            }}>
                                {pkg.duration}
                            </p>
                            <p style={{
                                ...theme.typography.body.medium,
                                color: theme.colors.text.tertiary,
                                marginBottom: theme.spacing.md
                            }}>
                                {pkg.description}
                            </p>
                            <button
                                onClick={() => navigate('/contact')}
                                style={{
                                    background: theme.services.travel.gradient,
                                    border: "none",
                                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                                    borderRadius: theme.borderRadius.md,
                                    color: theme.colors.text.primary,
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    transition: theme.transitions.medium,
                                    width: "100%"
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = 0.9}
                                onMouseLeave={(e) => e.target.style.opacity = 1}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nepal;
