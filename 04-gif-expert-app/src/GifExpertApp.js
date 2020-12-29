import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // Hooks
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <div>
            <h2>GifExperApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </div>
    );
};
