import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "./Main.JSX";
import {useEffect,useState} from 'react'

export default function HomePage(){
    const navbar =[
        "Home","About Us","Login","Get Started"
    ]

 
 
    return (
        <>
        <Header navbar ={navbar} />
        <Main />
        <Footer />
        
        </>
    )
}

