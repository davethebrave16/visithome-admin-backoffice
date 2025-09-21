import React from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Loading from './components/Loading'
import './App.css'

const AppContent: React.FC = () => {
	const { currentUser, loading } = useAuth()

	if (loading) {
		return <Loading />
	}

	return currentUser ? <Dashboard /> : <Login />
}

function App() {
	return (
		<AuthProvider>
			<AppContent />
		</AuthProvider>
	)
}

export default App
