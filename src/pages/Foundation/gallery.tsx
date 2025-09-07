import React, { useState } from "react";
import { motion } from "framer-motion";
import { theme } from "../../utils/theme";


import Footer from "../../components/footer";
import ngo1 from '../../assets/ngo/ngo1.jpg';
import ngo2 from '../../assets/ngo/ngo2.jpg';
import ngo3 from '../../assets/ngo/ngo3.jpg';
import ngo4 from '../../assets/ngo/ngo4.jpg';
import ngo5 from '../../assets/ngo/ngo5.jpg';
import ngo6 from '../../assets/ngo/ngo6.jpg';
import ngo7 from '../../assets/ngo/ngo7.jpg';
import ngo8 from '../../assets/ngo/ngo8.jpg';
import ngo9 from '../../assets/ngo/ngo9.jpg';
import ngo10 from '../../assets/ngo/ngo10.jpg';
import ngo11 from '../../assets/ngo/ngo11.jpg';
import ngo12 from '../../assets/ngo/ngo12.jpg';
import ngo13 from '../../assets/ngo/ngo13.jpg';
import ngo14 from '../../assets/ngo/ngo14.jpg';
import ngo15 from '../../assets/ngo/ngo15.jpg';
import ngo16 from '../../assets/ngo/ngo16.jpg';
import ngo17 from '../../assets/ngo/ngo17.jpg';
import ngo18 from '../../assets/ngo/ngo18.jpg';
import ngo19 from '../../assets/ngo/ngo19.jpg';
import ngo20 from '../../assets/ngo/ngo20.jpg';
import ngo21 from '../../assets/ngo/ngo21.jpg';
import ngo22 from '../../assets/ngo/ngo22.jpg';
import ngo23 from '../../assets/ngo/ngo23.jpg';
import ngo24 from '../../assets/ngo/ngo24.jpg';
import ngo25 from '../../assets/ngo/ngo25.jpg';
import ngo26 from '../../assets/ngo/ngo26.jpg';
import FoundationHeader from "./foundationHeader";


const allImages = [
    ngo1, ngo2, ngo3, ngo4, ngo5, ngo6, ngo7, ngo8, ngo9, ngo10,
    ngo11, ngo12, ngo13, ngo14, ngo15, ngo16, ngo17, ngo18, ngo19, ngo20,
    ngo21, ngo22, ngo23, ngo24, ngo25, ngo26
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image, index) => {
        setSelectedImage({ src: image, index });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: theme.colors.dark.primary,
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily,
                padding: theme.spacing.lg,
            }}
        >
            <FoundationHeader />

            {/* Gallery Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    marginTop: "120px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: theme.spacing.md,
                    maxWidth: "1400px",
                    margin: "120px auto 0",
                    padding: `0 ${theme.spacing.md}`,
                }}
            >
                {allImages.map((src, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openModal(src, index)}
                        style={{
                            borderRadius: theme.borderRadius.lg,
                            overflow: "hidden",
                            boxShadow: theme.shadows.md,
                            cursor: "pointer",
                            aspectRatio: "4/3",
                            position: "relative",
                        }}
                    >
                        <motion.img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover",
                                transition: theme.transitions.medium,
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                        />
                        
                        {/* Hover overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "rgba(0, 0, 0, 0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontSize: "14px",
                                fontWeight: "500",
                            }}
                        >
                            Click to view
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal for full-size image */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0, 0, 0, 0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                        cursor: "pointer",
                        padding: theme.spacing.lg,
                    }}
                >
                    <motion.img
                        src={selectedImage.src}
                        alt={`Gallery image ${selectedImage.index + 1}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            objectFit: "contain",
                            borderRadius: theme.borderRadius.lg,
                            boxShadow: theme.shadows.xl,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    />
                    
                    {/* Close button */}
                    <button
                        onClick={closeModal}
                        style={{
                            position: "absolute",
                            top: theme.spacing.lg,
                            right: theme.spacing.lg,
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "none",
                            color: "white",
                            fontSize: "24px",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: theme.transitions.fast,
                        }}
                    >
                        ×
                    </button>
                </motion.div>
            )}

            <Footer />
        </div>
    );
};

export default Gallery;