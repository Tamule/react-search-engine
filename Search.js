import React , {useState} from 'react';



export default function Search() {
    const [city, setCity] = useState (" ");
    const [query , setQuery] = useState (" ");

   function handleSubmit (event) {
   event.preventDefault();
   setQuery(`It is currently 20°C in ${city} `);
   }
    function updateCity(event) {
        setCity(event.target.value);
    }

  return (
    <div className="Search">
        <form onSubmit ={handleSubmit} >
            <input type="search" placeholder="Search a city..." onChange={updateCity} />
            <input type="submit" value="search" />
             
        </form>
        <h2>{query}</h2>
    </div>
   
  );
}
