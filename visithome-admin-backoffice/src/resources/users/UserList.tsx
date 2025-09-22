import { 
	List, 
	Datagrid,
	TextField,
	EmailField,
	DateField,
	ImageField,
	ShowButton,
	TopToolbar,
	ExportButton,
	FilterButton,
	SearchInput
} from 'react-admin'

const UserFilters = [
	<SearchInput source="q" placeholder="Search users..." alwaysOn />
]

const ListActions = () => (
	<TopToolbar>
		<FilterButton />
		<ExportButton />
	</TopToolbar>
)

export const UserList = () => (
	<List 
		filters={UserFilters}
		actions={<ListActions />}
		sx={{
			'& .RaList-main': {
				backgroundColor: 'transparent'
			}
		}}
	>
		<Datagrid rowClick="show">
			<TextField source="uid" label="User ID" />
			<TextField source="display_name" label="Display Name" />
			<EmailField source="email" />
			<ImageField source="photo_url" label="Photo" />
			<DateField source="created_time" label="Created" showTime />
			<ShowButton />
		</Datagrid>
	</List>
)
