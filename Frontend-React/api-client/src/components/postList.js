
import Post from "./post"
export default function PostList({ posts }) {
        
        const  post = posts.map(p =>
                        <Post post={p} key = {p.id} />
                        
                )
        
        return (<div className='p-3 px-md-5 py-5 d-flex flex-column   justify-content-center'>
                {post}
        </div>
)       
}
