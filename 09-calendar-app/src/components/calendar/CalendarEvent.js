import React from 'react';

export const CalendarEvent = ({ event }) => {
    const { title, name, user } = event;

    return (
        <div>
            <strong>{title}</strong>
            <span>- {user.name}</span>
        </div>
    );
};
