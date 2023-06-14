import Image from "next/image"

export default function Clase5() {
	return (
		<>
			<h1 className=""> Uso de imagenes en NextJS </h1>
			
			<Image className="image" src='/assets/logo-react.png' width={400} height={400} alt="React"/>


			

		</>
	)
}
