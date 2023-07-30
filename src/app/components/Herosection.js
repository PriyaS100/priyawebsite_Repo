import React from 'react';
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const Herosection = ({title, imageUrl}) => {
    return (
      <main className={heroStyles.main_section}>
          <div className={styles.container}>
              <div className={styles.grid_two_section}>
                  <div className={heroStyles.hero_content}>
                      <h1>{title}</h1>
                      <p>Find best entertainment here.. Explore and enjoy the free movies. </p>

                      <Link href="/movie">
                      <button>
                          Explore Movies
                      </button>
                      </Link>
                  </div>

                  <div className={heroStyles.hero_image}>
                      {/* eslint-disable-next-line react/jsx-no-undef */}
                      <Image src={imageUrl} alt="Watching Movies" height={500} width={500}>
                      </Image>
                  </div>

              </div>
          </div>

      </main>
    );
};

export default Herosection;