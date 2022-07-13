import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers";

/**
 * 
 * 1. componente
 * 2. tarea implmentar onNavigateBack
 * 3. useMemo
 */
export const HeroPage = () => {
  
  const navigate =  useNavigate();
  const {id} = useParams();

  const hero =  useMemo(()=> getHeroesById(id), [id]);//Cuando id cambie, se dispara la funcion getHeroesById
  
  const onNavigateBack = ()=>{
    navigate(-1); //regresa al previo
    
  };

  if(!hero) {
    return <Navigate to="/marvel"/>
  }

  return (
    <div className="row mt-5">      
      <div className="col-4">
        <img 
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>Back</button>
      </div>
    </div>
  )
}
