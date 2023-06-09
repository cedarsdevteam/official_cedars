import React, { useEffect } from 'react';

const Loader = () => {

    useEffect(() => {
        // This code will run after component is mounted
        initLoader()
    
        // return () => {
        //   // This code will run when the component is unmounted
        // };
      }, [])

  return (
    <div id="page-loader" className="text-center">
        <div className="loader"></div>
    </div>
  )
}

function initLoader() {

        const loader = document.querySelector('#page-loader');

        if(loader)
        loader.classList.add('active')

        setTimeout(() => {
            if(loader)
            loader.classList.remove('active')
        }, 2000)

    // window.onloadstart
    window.onbeforeunload = () => {
        const loader = document.querySelector('#page-loader');
        
        loader.classList.toggle('active')
        setTimeout(() => {
            loader.classList.remove('active')
        }, 2000)
    }

}

export function toggleLoader() {
    const loader = document.querySelector('#page-loader');

    if(loader)
    loader.classList.add('active')

    setTimeout(() => {
        if(loader)
        loader.classList.remove('active')
    }, 1500)
}

export default Loader;