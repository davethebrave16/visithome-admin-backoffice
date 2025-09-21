import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard: React.FC = () => {
	const { currentUser, logout } = useAuth()

	const handleLogout = async () => {
		await logout()
	}

	return (
		<div className="dashboard-container">
			<nav className="navbar">
				<div className="navbar-content">
					<h1 className="navbar-title">
						VisitHome Admin Backoffice
					</h1>
					<div className="navbar-user">
						<span className="user-info">
							Welcome, {currentUser?.displayName || currentUser?.email}
						</span>
						<button
							onClick={handleLogout}
							className="logout-button"
						>
							Logout
						</button>
					</div>
				</div>
			</nav>

			<main className="main-content">
				<div className="dashboard-card">
					<h2 className="dashboard-title">
						Admin Dashboard
					</h2>
					<p className="dashboard-description">
						Welcome to the VisitHome admin panel. You are successfully authenticated.
					</p>
					<div className="user-details">
						<div className="user-detail-item">
							<strong>Email:</strong> {currentUser?.email}
						</div>
						<div className="user-detail-item">
							<strong>User ID:</strong> {currentUser?.uid}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Dashboard
