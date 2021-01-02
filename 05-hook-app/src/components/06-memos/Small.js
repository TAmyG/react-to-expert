import React from 'react';

export const Small = React.memo(({ value }) => {
    //Render the component only when the state change
    console.log(':(');
    return <small>{value}</small>;
});
