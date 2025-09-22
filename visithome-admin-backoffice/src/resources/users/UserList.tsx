import { List, Datagrid, TextField, EmailField, DateField, ImageField, ShowButton } from 'react-admin'

export const UserList = () => (
	<List>
		<Datagrid>
			<TextField source="uid" label="User ID" />
			<TextField source="display_name" label="Display Name" />
			<EmailField source="email" />
			<ImageField source="photo_url" label="Photo" />
			<DateField source="created_time" label="Created" showTime />
			<ShowButton />
		</Datagrid>
	</List>
)
