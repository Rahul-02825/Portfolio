import React from 'react';
import Navbar from './components/Navbar';
import About from './About'
import Projects from './Projects'


const App = () => {
  return (
    <div className='bg-black'>
      <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 bg-black">
      <section id="home" className="h-screen bg-black flex items-center justify-center">
          <div className="max-w-4xl mx-auto p-8">
            <p className='text-l text-gray-300 mb-2'>I'm Rahul K, Full stack developer</p>
            <h1 className="text-5xl font-extrabold mb-6 text-white">I love to create</h1>
            <button className='px-3 py-1 bg-white text-black'>Ping me</button>
          </div>
        </section>
        <section id="about" className="h-screen bg-black flex justify-center items-center ">
          <About/>       
        </section>
        <section id="projects" className="h-screen bg-black flex justify-center items-center">         
          <Projects/>
        </section>       

      </div>
    </div>
    </div>
    
  );
};

export default App;
