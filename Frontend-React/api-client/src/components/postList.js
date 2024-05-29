import RecipeReviewCard from './post';

export default function PostList({posts}) {
    return (
        posts.map(post =>
        <RecipeReviewCard post={post} key={post.id} />
        )

)
}
