import React from 'react';

const Parent = ({name, children}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h1>{children}</h1>
        </div>
    );
};

export default Parent;