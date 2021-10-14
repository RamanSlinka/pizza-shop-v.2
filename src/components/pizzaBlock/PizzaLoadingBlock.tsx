import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {


    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <circle cx="132" cy="142" r="115" />
            <rect x="0" y="274" rx="6" ry="6" width="280" height="23" />
            <rect x="0" y="311" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="418" rx="6" ry="6" width="93" height="31" />
            <rect x="137" y="409" rx="25" ry="25" width="140" height="46" />
        </ContentLoader>
    )
};

export default PizzaLoadingBlock;