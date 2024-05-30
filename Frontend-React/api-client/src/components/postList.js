import Post from './post';

export default function PostList({posts}) {
    return (<div className='p-5 d-flex flex-column   justify-content-center'>
            {posts.map(post =>
                    
                        <Post post={post} key={post.id} />
                    
                )}
        </div>
)
}
