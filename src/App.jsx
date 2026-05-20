import React ,{useState} from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])



  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask=[...task];
    copyTask.push({title,details})

    setTask(copyTask)


    setTitle('');
    setDetails('');
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
          submitHandler(e)
      }} className='flex lg:w-1/2 flex-col items-start p-10 gap-4'>

      <h1 className='text-4xl font-bold'>Add Notes</h1>

      <input type="text" placeholder='Enter Notes Heading'
        className='px-5 py-2 font-medium w-full border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
         />

      <textarea type="text" placeholder='Enter Notes detail' 
        className='px-5 py-2 font-medium w-full h-32 border-2 outline-none rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

      <button className='bg-white active:scale-90 w-full font-medium text-black px-5 py-2 rounded'>Add Notes</button>

      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function(elem,idx){
            return <div key={idx} className=' flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]'>
              {/* <h2 className='absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs'><X  size={16} strokeWidth={2.75} color='#ffffff'/></h2> */}
              <div className="">
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{deleteNote(idx)}} className='w-full cursor-pointer bg-red-500 py-1 text-xs rounded font-bold active:scale-95 text-white'>Delete</button>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App