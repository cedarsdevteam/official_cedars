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
    toggleLoader()

  return (
    <div id="page-loader" className="text-center">
        <div className="loader"></div>
    </div>
  )
}

export function toggleLoader() {
    const loader = document.querySelector('#page-loader');
    
    window.onload = () =>{
        loader.classList.toggle('active')
        setTimeout(() => {
            loader.classList.toggle('active')
        }, 2000)
    }
    
    window.onbeforeunload = () => {
        loader.classList.toggle('active')
    
        setTimeout(() => {
            loader.classList.toggle('active')
        }, 2000)
    }
}

export default Loader;