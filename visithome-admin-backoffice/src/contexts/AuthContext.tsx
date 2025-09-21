import React, { createContext, useContext, useEffect, useState } from 'react'
import { 
	type User, 
	signInWithPopup, 
	signOut, 
	onAuthStateChanged 
} from 'firebase/auth'
import { auth, googleProvider } from '../firebase'

interface AuthContextType {
	currentUser: User | null
	login: () => Promise<void>
	logout: () => Promise<void>
	loading: boolean
	error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const isEmailAllowed = (email: string): boolean => {
		const allowedEmails = import.meta.env.VITE_AUTH_ACCOUNTS?.split(',') || []
		return allowedEmails.includes(email.trim())
	}

	const login = async () => {
		try {
			setError(null)
			const result = await signInWithPopup(auth, googleProvider)
			const user = result.user
			
			if (!isEmailAllowed(user.email || '')) {
				await signOut(auth)
				setError('User is not allowed to access')
				return
			}
		} catch (err) {
			setError('Authentication failed')
			console.error('Login error:', err)
		}
	}

	const logout = async () => {
		try {
			await signOut(auth)
		} catch (err) {
			setError('Logout failed')
			console.error('Logout error:', err)
		}
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user && !isEmailAllowed(user.email || '')) {
				signOut(auth)
				setCurrentUser(null)
				setError('User is not allowed to access')
			} else {
				setCurrentUser(user)
				setError(null)
			}
			setLoading(false)
		})

		return unsubscribe
	}, [])

	const value = {
		currentUser,
		login,
		logout,
		loading,
		error
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}
