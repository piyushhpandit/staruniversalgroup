import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../../utils/theme"; // or useTheme() if you added ThemeProvider
import wedding1 from '../../assets/wedding/wedding1.jpg';
import wedding2 from '../../assets/wedding/wedding2.jpg';
import wedding3 from '../../assets/wedding/wedding3.jpg';
import wedding4 from '../../assets/wedding/wedding4.jpg';
import wedding5 from '../../assets/wedding/wedding5.jpg';
import wedding6 from '../../assets/wedding/wedding6.jpg';
import wedding7 from '../../assets/wedding/wedding7.jpg';
import wedding8 from '../../assets/wedding/wedding8.jpg';
import wedding9 from '../../assets/wedding/wedding9.jpg';
import wedding10 from '../../assets/wedding/wedding10.jpg';
import wedding11 from '../../assets/wedding/wedding11.jpg';
import wedding12 from '../../assets/wedding/wedding12.jpg';
import wedding13 from '../../assets/wedding/wedding13.jpg';
import wedding14 from '../../assets/wedding/wedding14.jpg';
import wedding15 from '../../assets/wedding/wedding15.jpg';
import wedding16 from '../../assets/wedding/wedding16.jpg';

import corporate1 from '../../assets/corporate/corporate1.jpg';
import corporate2 from '../../assets/corporate/corporate2.jpg';
import corporate3 from '../../assets/corporate/corporate3.jpg';
import corporate4 from '../../assets/corporate/corporate4.jpg';
import corporate5 from '../../assets/corporate/corporate5.jpg';
import corporate6 from '../../assets/corporate/corporate6.jpg';
import corporate7 from '../../assets/corporate/corporate7.jpg';
import corporate8 from '../../assets/corporate/corporate8.jpg';
import corporate9 from '../../assets/corporate/corporate9.jpg';
import corporate10 from '../../assets/corporate/corporate10.jpg';
import corporate11 from '../../assets/corporate/corporate11.jpg';
import corporate12 from '../../assets/corporate/corporate12.jpg';
import corporate13 from '../../assets/corporate/corporate13.jpg';
import corporate14 from '../../assets/corporate/corporate14.jpg';
import corporate15 from '../../assets/corporate/corporate15.jpg';
import corporate16 from '../../assets/corporate/corporate16.jpg';
import corporate17 from '../../assets/corporate/corporate17.jpg';

import EventsHeader from "./eventHeader";
import Footer from "../../components/footer";
const weddingImages = [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7, wedding8, wedding9, wedding10, wedding11, wedding12, wedding13, wedding14, wedding15, wedding16];
const corporateImages = [corporate1, corporate2, corporate3, corporate4, corporate5, corporate6, corporate7, corporate8, corporate9, corporate10, corporate11, corporate12, corporate13, corporate14, corporate15, corporate16, corporate17];

const Images = () => {
    const [selected, setSelected] = useState("wedding");

    const getImages = () => {
        if (selected === "wedding") return weddingImages;
        if (selected === "corporate") return corporateImages;
        return [];
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
            <EventsHeader />
            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: theme.spacing.md, marginTop: "100px" }}>
                {["wedding", "corporate"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelected(type)}
                        style={{
                            padding: theme.spacing.sm + " " + theme.spacing.md,
                            borderRadius: theme.borderRadius.xl,
                            border: "none",
                            cursor: "pointer",
                            fontSize: theme.typography.body.medium.fontSize,
                            background:
                                selected === type
                                    ? theme.services[type === "wedding" ? "events" : "foundation"].gradient
                                    : theme.colors.dark.card,
                            color: theme.colors.text.primary,
                            transition: theme.transitions.medium,
                            boxShadow: selected === type ? theme.shadows.md : theme.shadows.sm,
                        }}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            {/* Collage */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            marginTop: theme.spacing.lg,
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: theme.spacing.sm,
                        }}
                    >
                        {getImages().map((src, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    borderRadius: theme.borderRadius.lg,
                                    overflow: "hidden",
                                    boxShadow: theme.shadows.md,
                                }}
                            >
                                <motion.img
                                    src={src}
                                    alt=""
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default Images;
