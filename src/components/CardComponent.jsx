import React from "react"
import { CardContent, Typography } from "@material-ui/core"
import CountUp from "react-countup"

const CardComponent = ({ data, text, value }) => {
  console.log(data.updated)
  return (
    <CardContent style={{ margin: "10px" }}>
      <Typography color="textSecondary" variant="h6">
        {text}
      </Typography>
      <Typography variant="h4">
        <CountUp start={0} end={value} separator="," />
      </Typography>
      <Typography>Last Updated at</Typography>
      <Typography color="textSecondary" variant="subtitle1">
        {new Date(data.updated).toDateString()},
      </Typography>
      <Typography color="textSecondary" variant="subtitle1">
        {new Date(data.updated).toLocaleTimeString()}
      </Typography>
      <Typography variant="subtitle1" component="p">
        All The {text} cases of COVID-19
      </Typography>
      <Typography>{data.country}</Typography>
    </CardContent>
  )
}

export default CardComponent
