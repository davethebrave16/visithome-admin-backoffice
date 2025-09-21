import React from 'react'

const Loading: React.FC = () => {
	return (
		<div className="loading-container">
			<div className="loading-content">
				<img 
					src="/VisitHome__03_Badge_Gradient.svg" 
					alt="VisitHome Logo" 
					className="loading-logo"
				/>
				<div className="loading-spinner"></div>
				<p className="loading-text">Loading...</p>
			</div>
		</div>
	)
}

export default Loading
