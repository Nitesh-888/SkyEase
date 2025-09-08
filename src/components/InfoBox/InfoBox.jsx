import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import brokenCloud from "../../assets/broken_cloud.jpg";
export default function InfoBox ({weatherInfo : info}){
    let icon_url = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;
    return (
        <div className='flex flex-col items-center mt-5'>
            <p className='bold'>Infobox</p>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={brokenCloud}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div className='flex justify-center items-center bg-blue-300'>
                            {info.city}
                            <img src={icon_url} alt="" />
                        </div>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temperature : {info.temp}</div>
                        <div>min temp : {info.tempMin}</div>
                        <div>max temp : {info.tempMax}</div>
                        <div>feels Like : {info.feelsLike}</div>
                        <div>humidity: {info.humidity}</div>
                        <div>weather describe as : {info.desc}</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}