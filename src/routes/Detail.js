import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Detail(){
    // useParams()는 라우터로 넘겨준 변수를 받아올 수 있음. url의 상세정보를 받아옴.  
    const id  = useParams();

    const getMovies = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        ).json();
    }

    useEffect(() => {
        getMovies();
    },[]);

    return <h1>Detail</h1>
}
export default Detail; 