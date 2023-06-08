import { createStore } from 'redux'

export interface IDefaultState {
	posts: string[]
}

interface IAction {
	type: string
	payload: string
}

const defaultState: IDefaultState = {
	posts: [],
}

const reducer = (state: IDefaultState = defaultState, action: IAction) => {
	switch (action.type) {
		case 'ADD_POST':
			return { ...state, post: state.posts.push(action.payload) }

		default:
			return state
	}
}

export const store = createStore(reducer)
