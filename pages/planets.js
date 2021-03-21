import { gql, useQuery } from "@apollo/client";
import client from '../pages/api/apollo-client'



  
  

const getThat = gql`
{
  
    
    
    ships {
      name
      home_port
      image
    }
  
}

`;

export default function planets(ships)  {
  const { loading, error, data } = useQuery(getThat,{variables:{},});
  



  if (loading) return <p>Loading ...</p>;
   if (error) 
    return <p>Error: {error.message}</p>;
  console.log(data);
  return(
    <div >
    {data.ships.map((ship) => (
      <div key={ship.name} >
        <h3>{ship.name}</h3>
        <p>
          {ship.home_port} - {ship.image}
        </p>
      </div>
    ))}
  </div>
  )
  
 
  
  }