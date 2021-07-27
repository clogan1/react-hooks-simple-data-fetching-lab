// create your App component here
import React, { useState, useEffect } from 'react'

function App() {
   const [dogImg, setDogImg] = useState(null)

    useEffect( () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setDogImg(data.message))
    }, [])

    if (!dogImg) return <p>Loading...</p>


    function renderDog(dog) {
        return (
            <>
            <img src={dog} alt="A Random Dog"></img>
            </>
        )
    }

    return (
        <div>
            {renderDog(dogImg)}
        </div>
    )
}

export default App;
