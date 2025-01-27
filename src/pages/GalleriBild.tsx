import { useParams } from "react-router-dom"
import { H1WhiteSecond } from "../components/styled/Fonts";

export const GalleriBild = () => {

  const { id } = useParams();



  return (<>
  <H1WhiteSecond>Min galleribild</H1WhiteSecond>

  Bild: {id}
  
  
  </>)
}