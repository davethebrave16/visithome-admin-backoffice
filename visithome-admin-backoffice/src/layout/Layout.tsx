import { Layout as ReactAdminLayout, TitlePortal, UserMenu } from 'react-admin'
import { AppBar as MuiAppBar } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(MuiAppBar)({
	background: 'linear-gradient(135deg, #007fa9 0%, #063349 100%)',
	boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
})

const CustomAppBar = () => (
	<StyledAppBar>
		<TitlePortal />
		<UserMenu />
	</StyledAppBar>
)

export const Layout = (props: any) => (
	<ReactAdminLayout {...props} appBar={CustomAppBar} />
)
