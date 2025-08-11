import './App.css'

function App() {


  return (
    <div className='h-screen bg-black'>
      <div className='h-[95vh] bg-red-300'></div>
      <div className='w-full bg-white flex p-4'>
        <input className='flex-1' type="text" />
        <button className='bg-purple-600 text-white'>Send Message</button>
      </div>
    </div>
  )
}

export default App
