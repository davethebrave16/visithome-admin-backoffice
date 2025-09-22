import { Admin, Resource } from 'react-admin'
import { dataProvider } from './providers/dataProvider'
import { authProvider } from './providers/authProvider'
import { Layout } from './layout/Layout'
import { theme } from './theme'
import { UserList, UserShow } from './resources/users'
import Login from './components/Login'
import './App.css'

function App() {
	return (
		<Admin
			dataProvider={dataProvider}
			authProvider={authProvider}
			layout={Layout}
			theme={theme}
			loginPage={Login}
			title="VisitHome Admin Backoffice"
		>
			<Resource 
				name="user" 
				list={UserList} 
				show={UserShow}
				options={{ label: 'Users' }}
			/>
		</Admin>
	)
}

export default App
