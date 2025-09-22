import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#007fa9',
			dark: '#063349',
			light: '#4a9bb8',
			contrastText: '#ffffff'
		},
		secondary: {
			main: '#b3d9e6',
			light: '#e6f4f8',
			dark: '#4a9bb8',
			contrastText: '#063349'
		},
		background: {
			default: '#f8fafc',
			paper: '#ffffff'
		},
		text: {
			primary: '#1e293b',
			secondary: '#64748b'
		},
		grey: {
			50: '#f8fafc',
			100: '#f1f5f9',
			200: '#e2e8f0',
			300: '#cbd5e1',
			400: '#94a3b8',
			500: '#64748b',
			600: '#475569',
			700: '#334155',
			800: '#1e293b',
			900: '#0f172a'
		}
	},
	typography: {
		fontFamily: 'TT Commons, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
		h1: {
			fontWeight: 700,
			fontSize: '2.5rem',
			lineHeight: 1.2
		},
		h2: {
			fontWeight: 700,
			fontSize: '2rem',
			lineHeight: 1.3
		},
		h3: {
			fontWeight: 600,
			fontSize: '1.5rem',
			lineHeight: 1.4
		},
		h4: {
			fontWeight: 600,
			fontSize: '1.25rem',
			lineHeight: 1.4
		},
		h5: {
			fontWeight: 600,
			fontSize: '1.125rem',
			lineHeight: 1.4
		},
		h6: {
			fontWeight: 600,
			fontSize: '1rem',
			lineHeight: 1.4
		},
		body1: {
			fontSize: '1rem',
			lineHeight: 1.6
		},
		body2: {
			fontSize: '0.875rem',
			lineHeight: 1.6
		}
	},
	shape: {
		borderRadius: 12
	},
	spacing: 8,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#f8fafc'
				}
			}
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					background: 'linear-gradient(135deg, #007fa9 0%, #063349 100%)',
					boxShadow: '0 4px 20px rgba(0, 127, 169, 0.15)',
					zIndex: 1200
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontWeight: 600,
					borderRadius: 8,
					padding: '8px 16px'
				},
				contained: {
					background: 'linear-gradient(135deg, #007fa9 0%, #063349 100%)',
					boxShadow: '0 4px 14px rgba(0, 127, 169, 0.25)',
					'&:hover': {
						background: 'linear-gradient(135deg, #063349 0%, #007fa9 100%)',
						boxShadow: '0 6px 20px rgba(0, 127, 169, 0.35)',
						transform: 'translateY(-1px)'
					},
					'&:active': {
						transform: 'translateY(0)'
					}
				},
				outlined: {
					borderColor: '#007fa9',
					color: '#007fa9',
					'&:hover': {
						backgroundColor: 'rgba(0, 127, 169, 0.04)',
						borderColor: '#063349'
					}
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 16,
					boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
					border: '1px solid rgba(226, 232, 240, 0.8)'
				},
				elevation1: {
					boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
				},
				elevation2: {
					boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
				},
				elevation3: {
					boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
				}
			}
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 16,
					boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
					border: '1px solid rgba(226, 232, 240, 0.8)'
				}
			}
		},
		MuiTableContainer: {
			styleOverrides: {
				root: {
					borderRadius: 16,
					overflow: 'hidden',
					boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
				}
			}
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					backgroundColor: '#f8fafc'
				}
			}
		},
		MuiTableCell: {
			styleOverrides: {
				head: {
					fontWeight: 600,
					color: '#1e293b',
					fontSize: '0.875rem',
					textTransform: 'uppercase',
					letterSpacing: '0.05em',
					borderBottom: '2px solid #e2e8f0',
					padding: '16px 12px'
				},
				body: {
					fontSize: '0.875rem',
					color: '#334155',
					padding: '16px 12px',
					borderBottom: '1px solid #f1f5f9'
				}
			}
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: 'rgba(0, 127, 169, 0.04)'
					},
					'&:last-child td': {
						borderBottom: 0
					}
				}
			}
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					fontWeight: 500
				},
				filled: {
					backgroundColor: '#007fa9',
					color: '#ffffff'
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: 8,
						'&:hover .MuiOutlinedInput-notchedOutline': {
							borderColor: '#007fa9'
						},
						'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
							borderColor: '#007fa9',
							borderWidth: 2
						}
					}
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontWeight: 500,
					color: '#475569'
				}
			}
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					minHeight: '64px !important',
					padding: '0 24px'
				}
			}
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					borderRadius: '0 16px 16px 0',
					border: 'none',
					boxShadow: '4px 0 20px rgba(0, 0, 0, 0.1)'
				}
			}
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					margin: '4px 8px',
					'&:hover': {
						backgroundColor: 'rgba(0, 127, 169, 0.08)'
					},
					'&.Mui-selected': {
						backgroundColor: 'rgba(0, 127, 169, 0.12)',
						'&:hover': {
							backgroundColor: 'rgba(0, 127, 169, 0.16)'
						}
					}
				}
			}
		},
		MuiAvatar: {
			styleOverrides: {
				root: {
					backgroundColor: '#007fa9',
					fontWeight: 600
				}
			}
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					'&:hover': {
						backgroundColor: 'rgba(0, 127, 169, 0.08)'
					}
				}
			}
		}
	}
})
