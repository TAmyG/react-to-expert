import { HeroList } from "../components";

/**
 * 
 * por que no se usa un state, porque la data es cruda y no va cambiar
 * 2. crear Hero List
 * 3.  Crear Tarjeta para Heroe
 */
export const DcPage = () => {
  return (
    <>
      <h1>DcPage</h1>
      <hr />
      <HeroList publisher={'DC Comics'} />

    </>
  )
}
