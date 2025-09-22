import { Show, SimpleShowLayout, TextField, EmailField, DateField, ImageField, UrlField } from 'react-admin'

export const UserShow = () => (
	<Show>
		<SimpleShowLayout>
			<TextField source="uid" label="User ID" />
			<TextField source="display_name" label="Display Name" />
			<EmailField source="email" />
			<ImageField source="photo_url" label="Photo" />
			<UrlField source="photo_url" label="Photo URL" />
			<DateField source="created_time" label="Created" showTime />
		</SimpleShowLayout>
	</Show>
)
