import React, { useEffect } from 'react';

const Loader = () => {

    useEffect(() => {
        // This code will run after component is mounted
        toggleLoader()
    
        // return () => {
        //   // This code will run when the component is unmounted
        // };
      }, [])


    // Toggle window
    initLoader()

  return (
    <div id="page-loader" className="text-center">
        <div className="loader"></div>
    </div>
  )
}

function initLoader() {
    
    window.onload = () =>{
        const loader = document.querySelector('#page-loader');

        if(loader)
        loader.classList.toggle('active')
        setTimeout(() => {
            if(loader)
            loader.classList.toggle('active')
        }, 2000)
    }
    
    window.onbeforeunload = () => {
        const loader = document.querySelector('#page-loader');
        
        loader.classList.toggle('active')
        setTimeout(() => {
            loader.classList.toggle('active')
        }, 2000)
    }

}

export function toggleLoader() {
    const loader = document.querySelector('#page-loader');

    loader.classList.toggle('active')
    setTimeout(() => {
        loader.classList.toggle('active')
    }, 1500)
}

export default Loader;