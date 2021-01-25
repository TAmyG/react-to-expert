import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        search: q,
    });

    const { search } = formValues;

    //const heroesFiltered = getHeroesByName(search);
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]); //prevent function invoke from query

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
    };
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Sear Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="search"
                            placeholde="Find your hero"
                            className="form-control"
                            onChange={handleInputChange}
                            value={search}
                            autoComplete="off"
                        ></input>
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {q === '' && (
                        <div className="alert alert-info">Search a Hero</div>
                    )}

                    {q !== '' && heroesFiltered.length === 0 && (
                        <div className="alert alert-warning">
                            There is no a hero with: {q}
                        </div>
                    )}

                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
