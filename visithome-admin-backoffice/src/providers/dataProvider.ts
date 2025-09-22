import type { DataProvider } from 'react-admin'
import { 
	collection, 
	query, 
	orderBy, 
	where, 
	limit, 
	getDocs, 
	doc, 
	getDoc
} from 'firebase/firestore'
import { db } from '../firebase'

export const dataProvider: DataProvider = {
	getList: async (resource, params) => {
		try {
			const { perPage } = params.pagination || { page: 1, perPage: 10 }
			const { field, order } = params.sort || { field: 'created_time', order: 'DESC' }
			const filters = params.filter || {}
			
			const collectionRef = collection(db, resource)
			let q = query(collectionRef)
			
			// Apply sorting
			if (field && order) {
				q = query(q, orderBy(field, order.toLowerCase() as 'asc' | 'desc'))
			}
			
			// Apply filters
			Object.entries(filters).forEach(([key, value]) => {
				if (value && key !== 'q') {
					q = query(q, where(key, '>=', value), where(key, '<=', value + '\uf8ff'))
				}
			})
			
			// Apply search filter (q parameter)
			if (filters.q) {
				q = query(q, where('display_name', '>=', filters.q), where('display_name', '<=', filters.q + '\uf8ff'))
			}
			
			// Apply pagination
			q = query(q, limit(perPage))
			
			const snapshot = await getDocs(q)
			const data = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}))
			
			// Get total count (simplified - in production you'd want to optimize this)
			const totalSnapshot = await getDocs(collection(db, resource))
			const total = totalSnapshot.size
			
			return {
				data: data as any[],
				total
			}
		} catch (error) {
			console.error('getList error:', error)
			throw error
		}
	},
	
	getOne: async (resource, params) => {
		try {
			const docRef = doc(db, resource, String(params.id))
			const docSnap = await getDoc(docRef)
			
			if (docSnap.exists()) {
				const data = { id: docSnap.id, ...docSnap.data() }
				return { data: data as any }
			} else {
				throw new Error('Document not found')
			}
		} catch (error) {
			console.error('getOne error:', error)
			throw error
		}
	},
	
	getMany: async () => {
		return { data: [] }
	},
	
	getManyReference: async () => {
		return { data: [], total: 0 }
	},
	
	create: async () => {
		throw new Error('Create not implemented')
	},
	
	update: async () => {
		throw new Error('Update not implemented')
	},
	
	updateMany: async () => {
		throw new Error('UpdateMany not implemented')
	},
	
	delete: async () => {
		throw new Error('Delete not implemented')
	},
	
	deleteMany: async () => {
		throw new Error('DeleteMany not implemented')
	}
}
