import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:
                        'url(https://www.okchicas.com/wp-content/uploads/2019/05/Fondos-de-pantalla-Disney-2.jpg)',
                }}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>
                <p className="journal__entry-content">Hola munod ipsum</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
