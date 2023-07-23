
export default function AppTitle(props)  {
   const {titles="Box Ofiice", subtitles="Are you Looking for a movie?"} = props;
    return(
        <div>
            <h1>{titles}</h1>
            <p>{subtitles}</p>
        </div>
    ) 
    };
    
   