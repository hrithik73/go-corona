import React from "react"
import CardComponent from "./CardComponent"
import Grid from "@material-ui/core/Grid"
import styles from "./Cards.module.css"

const Cards = ({ data }) => {
  //   const active = data.confirmed.value - data.recovered.value - data.deaths.value

  return (
    <div className={styles.container}>
      <Grid
        container
        className={styles.card}
        spacing={4}
        justify="center"
        alignItems="center"
      >
        <Grid xs={10} md={3} item className={styles.confirmed}>
          <CardComponent text="Confirmed" data={data} value={data.cases} />
        </Grid>
        <Grid xs={10} md={3} item className={styles.recoverd}>
          <CardComponent text="Recoverd" data={data} value={data.recovered} />
        </Grid>
        <Grid xs={10} md={3} item className={styles.death}>
          <CardComponent text="Deaths" data={data} value={data.deaths} />
        </Grid>
        <Grid xs={10} md={3} item className={styles.active}>
          <CardComponent text="Active Cases" data={data} value={data.active} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
