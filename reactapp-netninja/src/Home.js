import BlogList from "./BlogList";
import {CircularProgress} from "@material-ui/core";
import useFetch from "./useFetch";
const Home = () => {

/*    let name = 'haris';
    const [name , setName] = useState('haris');
    const [age , setAge] = useState(25);
    const handleClick = () => {
        console.log('hello Haris');
        name = 'HarisRahat';
        console.log(name);
        setName('HarisRahat');
        setAge(30);
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }*/

/*    const [name , setName] = useState('mario');*/
/*    const handleDelete = (id) => {
        const newBLogs = blogs.filter((blog) => blog.id !== id );
        setBlogs(newBLogs);
    }*/
    const {data : blogs , isPending , error } = useFetch(' http://localhost:8000/blogs');
    return (
        <div className="home">
            {error && <div style={{color: "red" , paddingBottom: "4%"}}>{error}</div> }
            {isPending && <CircularProgress color="secondary" />}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs" />}
{/*            <button onClick={() => setName('Haris')}>Change Name</button>
            <p>{ name }</p>*/}
{/*            <BlogList blogs = {blogs.filter((blog)=> blog.author === 'mario')} title = "Mario's BLogs" />
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Haris', e)}>Click me again</button>*/}
        </div>
    );
}

export default Home;