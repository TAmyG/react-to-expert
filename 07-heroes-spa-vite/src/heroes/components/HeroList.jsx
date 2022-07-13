import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

/**
 * 
 * Tarea que implementen el herolist
 * Implementar card hero
 * Implementar use memo
 */
export const HeroList = ({publisher}) => {

    const heroes = useMemo(()=> getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map(hero=> 
                // <li key={hero.id}>{hero.superhero}</li>
                <HeroCard key={hero.id} {...hero}/>
            )
        }
    </div>
  )
}
