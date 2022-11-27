import { useState, useEffect  } from "react"

function Favoritos(){

    const [favorites, setFavorites] = useState([]);

    const getFavorites = () => {
        const favsInLocal = localStorage.getItem("favs");
        setFavorites(JSON.parse(favsInLocal));
    }
    
    useEffect(getFavorites,[])

    return (
        <>
        </>
    )
};

export default Favoritos;