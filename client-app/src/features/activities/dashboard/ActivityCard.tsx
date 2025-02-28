import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";

type Props = {
    activity: Activity;
}

export default function ActivityCard({activity}: Props) {
  return (
    <Card sx={{borderRadius: 2, boxShadow: 3, p: 2}}>
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>{activity.date}</Typography>
            <Typography variant="body2" color="text.secondary">{activity.description}</Typography>
            <Typography variant="subtitle2" color="text.secondary">{activity.city}, {activity.venue}</Typography>
        </CardContent>
        <CardActions sx={{display: "flex", justifyContent: "space-between", pb: 2}}>
            <Chip label={activity.category} variant="outlined" color="primary" />
            <Button variant="contained" color="primary" size="small">View</Button>
        </CardActions>
    </Card>
  )
}
