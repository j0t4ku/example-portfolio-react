import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import deved from '/dev-ed-wave.png'
import design from '/design.png'
import code from '/code.png'
import consulting from '/consulting.png'
import web1 from '/web1.png';
import web2 from '/web2.png';
import web3 from '/web3.png';
import web4 from '/web4.png';
import web5 from '/web5.png';
import web6 from '/web6.png';




function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <div className={darkMode ? "dark" : ""}>

        <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 '>
          <section className='min-h-screen'>

            {/* NavBar*/}
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons dark:text-white'>J0t4ku</h1>
              <ul className='flex items-center'>
                <li>
                  <div className='px-4 py-2 dark:bg-gray-100 dark:text-gray-600 rounded-full text-white bg-gray-600'>
                  <BsFillMoonStarsFill onClick={() => { setDarkMode(!darkMode) }} className='cursor-pointer text-2xl' />
                  </div>
                </li>
                <li><a href="#" className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
              </ul>
            </nav>

            {/* */}
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Joel Florentin</h2>
              <h3 className='text-2xl py-2  md:text-3xl'>Fullstack Developer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
                Desarrolador web junior, dedicado a su trabajo con profesionalidad y responsabilidad.
              </p>
            </div>

            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>

            <div className='mt-20  relative'>
              <div className='mx-auto justify-center items-center bg-gradient-to-b from-teal-500 rounded-full w-[15rem] h-[15rem] overflow-hidden'>
                <img src={deved} alt="" className='object-cover h-full'/>
              </div>
            </div>

          </section>

          <section className='min-h-screen'>

            <div>
              <h3 className='text-2xl py-2 '>Service I offer</h3>
              <p className='text-md py-5 leading-8 text-gray-800'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum,
                nulla ac congue tristique, metus lacus ornare ligula, efficitur commodo orci nibh sit amet ex
                <span className='text-teal-500'> react.js </span> and
                <span className='text-teal-500'>Django</span>
              </p>
            </div>

            <div className='lg:flex'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <div className="flex flex-col justify-center items-center"><img src={design} alt="" className='' width={100} height={100} /></div>
                <h3 className='text-xl font-medium pt-5 pb-2'>Beautiful Desings</h3>
                <p className='py-2'>
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Desing tools i use</h4>
                <p className='text-gray-800 py-1'>Photohop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <div className="flex flex-col justify-center items-center"><img src={code} alt="" className='' width={100} height={100} /></div>
                <h3 className='text-lg font-medium pt-8 pb-2'> Code your dream project</h3>
                <p className='py-2'>
                  Do you have an idea for your next great website? Let's make it a
                  reality.
                </p>
                <h4 className='py-4 text-teal-600'>Desing tools i use</h4>
                <p className='text-gray-800 py-1'>Photohop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <div className="flex flex-col justify-center items-center"><img src={consulting} alt="" className='' width={100} height={100} /></div>
                <h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
                <p className='py-2'>
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className='py-4 text-teal-600'>Desing tools i use</h4>
                <p className='text-gray-800 py-1'>Photohop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>

            </div>

          </section>

          <section className="py-10">
            <div>
              <h3 className='text-2xl py-2 '>
                Portfolio
              </h3>
              <p className='text-md py-5 leading-8 text-gray-800'>
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
            </div>

            <div className='flex flex-col py-10 lg:flex-row lg:flex-wrap gap-10' >
              <div className='basis-1/4  flex-1'><img src={web1} className="rounded-lg  object-cover "  alt="" /></div>
              <div className='basis-1/4  flex-1'><img src={web2} className="rounded-lg  object-cover "  alt="" /></div>
              <div className='basis-1/4  flex-1'><img src={web3} className="rounded-lg  object-cover "  alt="" /></div>
              <div className='basis-1/4  flex-1'><img src={web4} className="rounded-lg  object-cover "  alt="" /></div>
              <div className='basis-1/4  flex-1'><img src={web5} className="rounded-lg  object-cover "  alt="" /></div>
              <div className='basis-1/4  flex-1'><img src={web6} className="rounded-lg  object-cover "  alt="" /></div>
            </div>

          </section>

        </main>
      </div>
    </div>
  )
}

export default App
