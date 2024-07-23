import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center items-center shadow-sm shadow-white text-white w-auto   my-32 h-2/3'>
        <div className='flex flex-col sm:flex-row '>
            <div className='flex flex-col m-2 w-1/2'>
                <h3 className='text-center font-bold text-3xl m-5'>About Me</h3>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt quaerat illum rem esse nisi nemo blanditiis 
                    ipsum ducimus magnam ea possimus nulla sapiente illo, quibusdam, suscipit, dignissimos in adipisci! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sapiente, nemo dignissimos laboriosam accusamus ipsa autem porro rem nam optio aperiam
                     eum? Provident, error delectus minus quas obcaecati excepturi blanditiis.</p>          
            </div>
            <div className='m-2 w-1/2'>
                {/* image */}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis voluptas tenetur, placeat autem recusandae, aliquam optio iste officia 
                accusamus dolor rem minima eveniet vero doloremque delectus ipsa harum. Molestias, quibusdam.
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam reprehenderit, fuga quibusdam voluptatibus non? Culpa ipsum iure
                     officia libero sit dolor, natus modi odio maiores ullam. Facilis, illo totam.</p>
            </div>

        </div>
    </div>
    
  )
}
export default About
