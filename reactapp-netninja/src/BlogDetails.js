import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {CircularProgress} from "@material-ui/core";

const BlogDetails = () => {
    const { id } = useParams();
    const { data :blog , isPending , error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method: "DELETE"
        }).then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            { isPending && <CircularProgress color="secondary" />}
            { error && <div style={{color: "red" , paddingBottom: "4%"}}>{error}</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
    );
}
export default BlogDetails;