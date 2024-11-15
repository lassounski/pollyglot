export default function Header() {
    return(
        <div className="flex justify-center items-center bg-[url('./src/assets/worldmap.png')] bg-center h-48 w-full">
          <img src="./src/assets/parrot.png" className="h-24 mr-4"/>
          <div>
            <h1 className='text-bold text-green-600 text-4xl font-bold font-bigShoulders'>PollyGlot</h1>
            <p className='text-white font-medium text-sm'>Perfect Translation Every Time</p>
          </div>
        </div>
    )
}