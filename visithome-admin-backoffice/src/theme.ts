import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#007fa9',
			dark: '#063349',
			light: '#4a9bb8'
		},
		secondary: {
			main: '#b3d9e6',
			light: '#e6f4f8',
			dark: '#4a9bb8'
		},
		background: {
			default: '#f8fafc',
			paper: '#ffffff'
		}
	},
	typography: {
		fontFamily: 'TT Commons, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
		h1: {
			fontWeight: 600
		},
		h2: {
			fontWeight: 600
		},
		h3: {
			fontWeight: 600
		},
		h4: {
			fontWeight: 600
		},
		h5: {
			fontWeight: 600
		},
		h6: {
			fontWeight: 600
		}
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					background: 'linear-gradient(135deg, #007fa9 0%, #063349 100%)',
					boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				contained: {
					background: 'linear-gradient(135deg, #007fa9 0%, #063349 100%)',
					'&:hover': {
						background: 'linear-gradient(135deg, #063349 0%, #007fa9 100%)'
					}
				}
			}
		}
	}
})
