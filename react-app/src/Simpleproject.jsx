import React from 'react'

const Simpleproject = () => {
     const courses = [
    { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
    { id: 2, name: 'JavaScript Advanced', progress: 45, instructor: 'Mike Johnson', nextLesson: 'Async/Await', color: 'purple' },
    { id: 3, name: 'UI/UX Design', progress: 90, instructor: 'Emily Chen', nextLesson: 'Color Theory', color: 'pink' },
  ];
     const assignments = [
    { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
    { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
    { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
  ];
    const stausDates = [
        {
            id:1,
            title:'average grade',
            value:'88%',
            icon: '📊',

        },
          {
            id:2,
            title:'courses',
            value:3,
            icon: '📘',

        },
           {
            id:3,
            title:'study hours',
            value:'45hrs',
            icon: '🕰️',

        },
          {
            id:4,
            title:'Assgnm',
            value:12,
            icon: '📝',

        },
        

      
    ]
    const announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];
   
  return (
    <div className='w-full min-h-screen bg-grey-100  p-5 bg-gray-100'>
      {/* welcome section */}
      <div className='bg-white shadow-sm mb-3 w-full max-w-1/2 mx-auto rounded-2xl  overflow-hidden'>
        <div className='flex justify-between items-center gap-4 p-6 flex-wrap'>
            <div className='py-2'>
                <h1 className='text-2xl capitalize'>welcome back,student</h1>
                <p>here,s what is happening with your course today.</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <span className='font-semibold'>🔔</span>
                <span className='w-8 h-8 rounded-full bg-orange-500 text-center'>s</span>
            </div>

        </div>
      </div>
      
       {/* couse section */}
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-10 '>
          
          {
            stausDates.map(stausDate=>(
                <div className='bg-white  p-4 rounded-lg shadow-lg'  key={stausDate.id}>
                    <div className='flex gap-3 items-center'>
                        <div>
                           <h2 className=''>{stausDate.icon}</h2>
                            

                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text- capitalize'>{stausDate.title}</p>
                            <span className='text-3xl '>{stausDate.value}</span>
                           
                        </div>
                        
                    </div>

                </div>
            ))
          }

       </div>
       {/* couse progress */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white shadow-2xl rounded-sm'>
                <h2 className='ml-6 capitalize text-xl font-bold'>course progress</h2>
               {
                courses.map(course=>(
                    <div key={course.id} >
                        <div className=''>
                            <div>

                                {/* title,progress*/}
                                <div className='flex justify-between p-3 border-b-2 border-slate-200 py-3.5 last:border-b-0'>
                                    <h2 className='font-medium capitalize text-gray-800'>{course.name}</h2>
                                    <span className=' font-bold text-sm text-slate-900'></span>
                                    <span className='text-gray-600'>{course.progress}%</span>
                                  
                                                                      
                                </div>
                                {/* border */}
                                <div>
                                  
                                </div>
                                {/* sub title */}
                                <div className='flex justify-between p-3'>
                                    <h2 className='text-sm capitalize text-gray-600'>{course.nextLesson}</h2>
                                    <span className='capitalize text-gray-600'>{course.instructor}</span>
                                </div>
                            </div>

                        </div>
                     
                    </div>
                ))
               }

            </div>
             {/*  */}
            <div className='bg-white shadow-2xl rounded-sm'>
               <h2 className='text-2xl font-semibold text-gray-800 mb-4 capitalize'> Upcoming Assignments</h2>
               { assignments.map(assgnment=>(
                <div key={assgnment.id} className='grid grid-cols-1  gap-6 row-span-2 '>
                   <div className='bg-white shadow-2xl rounded-sm border-r-4 border-slate-600 py-3.5  gap-2'>
                     {/* ass title */}
                     <div className='flex justify-between'>
                        <h2 className='font-medium text-gray-800'>{assgnment.title}</h2>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${assgnment.status === 'completed' ? 'bg-green-100 text-green-800' :
                          assgnment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                        {assgnment.status}
                      </span>
                     </div>
                     {/* sub title and date */}
                     <div className='flex justify-between'>
                        <h2 className='text-sm text-gray-500'>{assgnment.course}</h2>
                        <span text-xs text-gray-500 mt-1>{assgnment.dueDate}</span>
                     </div>
                   </div>
                
                   
                   </div>
                   
        
               ))}
                  {/*  announcements */}
               
              <div className='bg-grey-200 rounded-2xl shadow-3xl p-3 mt-6' >
                <h2 className='text-2xl font-semibold text-gray-800 mb-4 capitalize'>  announcements</h2>
                      {announcements.map(announcement=>(
                        <div key={announcement.id}>
                            <p className='font-medium text-gray-600'>{announcement.title}</p>
                            <span className='text-sm text-gray-500 mt-1'>{announcement.message}</span>
                           <p className='"text-xs text-gray-400 mt-1'>{announcement.time}</p>
                        
                        </div>
                      ))}

                      </div>



            </div>

         </div>

       
        
     

    </div>


  )
}

export default Simpleproject
