import React from 'react';
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url= "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en"
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '409d2c46acmsh7b9882f9def8572p15d08bjsn573a151d8e65',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }

    };

    const res = await fetch(url,options);
    const data = await res.json();
    const main_data  = data.titles;
    console.log(data)
    return (
        <>

            <section className={styles.moviesection}>
                <div className={styles.container}>
          <h2>Series & Movies</h2>
                    <div className={styles.card_section}>
            {
                main_data.map((curElem) =>{
                    return <MovieCard key={curElem.id} {...curElem}/>
            })
            }
                    </div>
                </div>
            </section>
        </>
    );
};

export default movie;