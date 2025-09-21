import React from 'react'

const Loading: React.FC = () => {
	return (
		<div className="loading-container">
			<div className="text-center">
				<div className="loading-spinner"></div>
				<p className="loading-text">Loading...</p>
			</div>
		</div>
	)
}

export default Loading
