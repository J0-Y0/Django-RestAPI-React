import Post from "./post"
import { useEffect, useState  } from "react";
import axiosInstance from "../axios";
import { useParams } from "react-router-dom";

export default function PostDetail() {
    const [post, setPost] = useState("")
    const { string } = useParams(); // Extract the URL parameter
    useEffect(() => {
        try {

            async function fetchData() {
                // You can await here
                const response = await axiosInstance.get("posts/rrrrrrrrrrrrdddddddddddddddddddd");
                console.log("+++++++++++++++++++++++++++++++")
                // console.log(string)
                setPost(response.data)

            }

            fetchData();

        } catch (error) {
            // Handle error, such as displaying an error message to the user
            console.error("Error ;login :", error.message);
        }
    }, [])

    return (
        <div className='p-3 px-md-5 py-5 d-flex flex-column   justify-content-center'>
            <Post post = {post} />
        </div>
  
    )

}

