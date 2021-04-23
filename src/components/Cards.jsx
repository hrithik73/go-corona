import React from 'react';
import CardComponent from './CardComponent';
import Grid from "@material-ui/core/Grid";

import styles from "./Cards.module.css"




const Cards = ({ data }) => {

    const active = data.confirmed.value - data.recovered.value - data.deaths.value;

    return (
        <div className={styles.container} >
            <Grid container className={styles.card} spacing={4} justify="center"   alignItems="center"
  >
                <Grid xs={12}
                    md={2} item className={styles.death} >
                    <CardComponent
                        text="Confirmed"
                        data={data}
                        value={data.confirmed.value}

                    />
                </Grid>
                <Grid xs={12}
                    md={2} item className={styles.death} >
                    <CardComponent
                        text="Recoverd"
                        data={data}
                        value={data.recovered.value}
                    />
                </Grid>
                <Grid xs={12}
                    md={2} item className={styles.death} >
                    <CardComponent
                        text="Deaths"
                        data={data}
                        value={data.deaths.value}

                    />
                </Grid>
                <Grid xs={12}
                    md={2} item className={styles.death} >
                    <CardComponent
                        text="Active Cases"
                        data={data}
                        value={active}
                    />
                </Grid>

            </Grid>
        </div >

    );
}

export default Cards