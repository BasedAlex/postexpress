import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { IDefaultState } from '../../store'

const Posts = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}
	const allPosts = useSelector((state: IDefaultState) => state.posts)
	const handleAddPost = () => {
		dispatch({ type: 'ADD_POST', payload: value })
		setValue('')
	}

	return (
		<div>
			Posts
			<div>
				{allPosts.map((post: string, idx: number) => (
					<div key={idx}>{post}</div>
				))}
				<input value={value} onChange={e => handleChange(e)} />
				<button onClick={() => handleAddPost()}>Add post</button>
			</div>
		</div>
	)
}

export default Posts
