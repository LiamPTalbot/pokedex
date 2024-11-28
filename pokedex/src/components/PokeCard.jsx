import { useEffect } from "react"

export function PokeCard(props) {
    const { selectedPokemon } = props

    useEffect(() => {
        // if loading, exit logic
        // check if the selected pokemon info is avail in cache
        //1. define the cache
        //2. check if the selected pokemon is in the cache, otherwise fetch from API
        // if we fetch from API make sure to save the info to the cache for next time
    }, [ selectedPokemon ])

    return (
        <>
        </>
    )
}