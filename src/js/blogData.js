import { initialPosts } from './initialPosts.js'
export default () => {
	console.log('[INIT] blogData loaded')

	return {
		posts: [...initialPosts],
		search: '',
		formOpened: false,
		newPost: {
			id: 3,
			title: '',
			description: '',
			likes_count: 0,
			created_at: new Date().toLocaleString,
			author_name: '',
		},
		validatePost() {
			this.errors = {}

			if (!this.newPost.title || this.newPost.title.trim().length < 5) {
				this.errors.title = 'Название должно содержать минимум 5 символов'
			}

			if (!this.newPost.description || this.newPost.description.trim() == '') {
				this.errors.description = 'Пожалуйста, заполните описание'
			}

			if (!this.newPost.author_name || this.newPost.author_name.trim() == '') {
				this.errors.author_name = 'Пожалуйста, заполните имя автора'
			}

			return Object.keys(this.errors).length === 0
		},
		get filteredPosts() {
			return this.search
				? this.posts.filter(post =>
						post.title.toLowerCase().includes(this.search.toLowerCase())
				  )
				: this.posts
		},
		addPost() {
			if (!this.validatePost()) return
			this.posts.push({
				...this.newPost,
				id: crypto.randomUUID(),
				likes_count: 0,
				created_at: new Date().toLocaleString(),
			})

			this.newPost = { title: '', description: '', author_name: '' }
			this.formOpened = false
		},
		deletePost(id) {
			this.posts = this.posts.filter(post => post.id !== id)
		},
	}
}
