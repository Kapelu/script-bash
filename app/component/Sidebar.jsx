import Link from 'next/link'

export default function Sidebar() {
	return (
		<>
			<aside className=''>
				<Link href='./'> Home </Link>
				<Link href='./componentes'> Componentes </Link>
				<Link href='./propiedades'> Propiedades </Link>
				{/* <Link href='./clase3'> Clase 3 </Link>
                <Link href='./clase4'> Clase 4 </Link> */}
			</aside>
		</>
	)
}
