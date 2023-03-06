import { useState, useEffect, useRef } from "react";



export function useSearch(){
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);


    useEffect(()=>{
        if(isFirstInput.current){
            isFirstInput.current = search === "";
            return
        }
    
        if(search === ""){
            setError("No se puede dejar vacio");
            return
        }

        if(search.length < 3){
            setError("Debe ingresar mas de 3 caracteres");
            return
        };

        if(search.match(/^\d+$/)){
            setError("No puede contener un número")
            return
          }

          setError(null);
    },[search])

    return { search, setSearch, error};
}