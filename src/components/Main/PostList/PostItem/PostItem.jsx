import { useContext } from "react"
import { PostListContext } from "../../../../contexts/PostListContext"

const PostItem = ({ id, index, topic, image, input, tags }) => {

	const { deletePost } = useContext(PostListContext)
	const deleteHandler = () => deletePost(id)


	return (
		<div className="card m-2 bg-danger p-2 text-dark bg-opacity-10 shadow p-3 mb-5 bg-body rounded card text-center" style={{ width: '25rem' }}>
			<img src={image} className="card-img-top shadow-lg p-3 mb-2 bg-body rounded" alt='img' />
			<div className="card-body justify-content-md-center">
				<h5 className="card-title m-1">{index + 1}. {topic}</h5>
				<p className="card-text">{input}</p>
				<p ><small className="text-muted">#{tags}</small></p>
				<button onClick={deleteHandler} type="button" className="btn btn-primary">Удалить пост</button>
			</div>
		</div>
	)
}

export default PostItem