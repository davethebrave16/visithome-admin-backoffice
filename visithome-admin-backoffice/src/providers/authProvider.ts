import type { AuthProvider } from 'react-admin'
import { 
	signInWithPopup, 
	signOut, 
	onAuthStateChanged
} from 'firebase/auth'
import { auth, googleProvider } from '../firebase'

const isEmailAllowed = (email: string): boolean => {
	const allowedEmails = import.meta.env.VITE_AUTH_ACCOUNTS?.split(',') || []
	return allowedEmails.includes(email.trim())
}

export const authProvider: AuthProvider = {
	login: async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider)
			const user = result.user
			
			if (!isEmailAllowed(user.email || '')) {
				await signOut(auth)
				throw new Error('User is not allowed to access')
			}
			
			return Promise.resolve()
		} catch (error) {
			console.error('Authentication failed:', error)
			throw new Error('Authentication failed')
		}
	},
	
	logout: async () => {
		try {
			await signOut(auth)
			return Promise.resolve()
		} catch (error) {
			console.error('Logout failed:', error)
			throw new Error('Logout failed')
		}
	},
	
	checkAuth: () => {
		return new Promise((resolve, reject) => {
			onAuthStateChanged(auth, (user) => {
				if (user && isEmailAllowed(user.email || '')) {
					resolve()
				} else {
					reject()
				}
			})
		})
	},
	
	checkError: (error) => {
		const status = error.status
		if (status === 401 || status === 403) {
			return Promise.reject()
		}
		return Promise.resolve()
	},
	
	getIdentity: () => {
		return new Promise((resolve, reject) => {
			onAuthStateChanged(auth, (user) => {
				if (user && isEmailAllowed(user.email || '')) {
					resolve({
						id: user.uid,
						fullName: user.displayName || user.email || 'User',
						avatar: user.photoURL || undefined
					})
				} else {
					reject()
				}
			})
		})
	},
	
	getPermissions: () => Promise.resolve('admin')
}
