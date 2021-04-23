import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';


const CardComponent = ({
    data,
    text,
    value = data.confirmed.value,
}) => {

    return (
        <CardContent>
            <Typography color="textSecondary" variant="h7" >
                {text}
            </Typography>
            <Typography variant="h5" >
                <CountUp
                    start={0}
                    end={value}
                    separator=","
                />
            </Typography>
            <Typography>
                Last Updated at
                </Typography>
            <Typography color="textSecondary" variant="body" >
                {new Date(data.lastUpdate).toDateString()},
                </Typography>
            <Typography color="textSecondary" variant="body" >
                {new Date(data.lastUpdate).toLocaleTimeString()}
            </Typography>
            <Typography variant="body" component="p">
                All The {text} cases of COVID-19
                </Typography>
            <Typography>
                {data.country}
            </Typography>

        </CardContent>
    );
}

export default CardComponent;