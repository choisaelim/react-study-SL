import React from 'react';

const Child = ({children}) => {
    return (
        <div>
            <h3>{children}</h3>
        </div>
    );
};

export default Child;