import React from "react";
import styles from "./searchInput.module.scss";

interface SearchInputProps {
    height?: number;
    width?: number;
    icon?: string;
}

export default function SearchInput({ height, width, icon }: SearchInputProps) {
    return (
        <input
            type="search"
            className="glass"
            style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundImage: icon ? `url(${icon})` : "none",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left 10px center",
                paddingLeft: icon ? "40px" : "10px",
                backgroundSize: "20px 20px", // Resize the icon to 20x20 pixels
            }}
        />
    );
}
