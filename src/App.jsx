import TypingAnimation from "./TypingAnimation.jsx"

import imagesearch from "./assets/imagesearch.png"
import todo from "./assets/todo.png"
import pass from "./assets/pass.png"
import quotes from "./assets/quotes.png"
import cryptocurrency from "./assets/cryptocurrency.png"
import bgre from "./assets/bgre.png"
import age from "./assets/age.png"
import weather from "./assets/weather.png"
import clock from "./assets/clock.png"
function App() {


  return (
    <>
    <TypingAnimation />
    <section class="text-gray-600 ">
  <div class="container px-5 mx-auto">
    <div class="flex flex-wrap -mt-4 md:space-y-0 space-y-6 md:mx-12 mx-2">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg ">
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={imagesearch} alt="Logo" class="object-cover object-center h-full w-full"/>
        </div>
        <h2 class="text-xl font-medium title-font mt-5">Text o Speech</h2>
        <p class="text-base leading-relaxed mt-2">Transform text into lifelike speech with our intuitive Text-to-Speech application.Experience seamless conversion of written words into spoken audio with our innovative Text-to-Speech solution.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://text-to-speech-converter-app.vercel.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer" href="https://github.com/Moin06-dev/Text-to-Speech-Converter-App">Github
          </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg" >
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={pass} alt="Logo" class="object-cover object-center h-full w-full"/>
         
        </div>
        <h2 class="text-xl font-medium title-font mt-5">Password Generator</h2>
        <p class="text-base leading-relaxed mt-2">Generate strong and secure passwords effortlessly with our Password Generator. Customize password length and complexity to protect your digital assets effectively.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://random-password-generator-delta-puce.vercel.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer " href="https://github.com/Moin06-dev/Random-Password-Generator">Github
          </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg">
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={todo} alt="Logo" class="object-cover object-center h-full w-full"/>
         
        </div>
        <h2 class="text-xl font-medium title-font  mt-5">Todo List</h2>
        <p class="text-base leading-relaxed mt-2">Stay organized with our intuitive To-Do List app. Manage tasks efficiently and stay on top of your daily activities with ease.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://to-do-task-bay.vercel.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer" href="https://github.com/Moin06-dev/To-Do-Task">Github
          </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg">
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={quotes} alt="Logo" class="object-cover object-center h-full w-full" />
      
        </div>
        <h2 class="text-xl font-medium title-font  mt-5">Quotes Generator</h2>
        <p class="text-base leading-relaxed mt-2">Inspire and motivate with our Quotes Generator. Discover wisdom and positivity with every click.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://quotes-app-web.netlify.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer" href="https://github.com/Moin06-dev/quotes-app">Github
          </a>
      </div>

      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg">
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={cryptocurrency} alt="Logo" class="object-cover object-center h-full w-full"/>
      
        </div>
        <h2 class="text-xl font-medium title-font  mt-5">cryptocurrency</h2>
        <p class="text-base leading-relaxed mt-2"> Explore the world of cryptocurrency with our innovative platform. Stay informed, trade securely, and embrace the future of digital finance.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://cryptocurrency-website-app.netlify.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer" href="https://github.com/Moin06-dev/cryptocurrency-website-app">Github
          </a>
      </div>

      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg">
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={bgre} alt="Logo" class="object-cover object-center h-full w-full"/>
      
        </div>
        <h2 class="text-xl font-medium title-font  mt-5">Image Background Transition App</h2>
        <p class="text-base leading-relaxed mt-2">Elevate your photos with our Image Background Transition App. Effortlessly change backgrounds and create stunning visuals in just a few clicks.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://imagebackgroundremoverapp.netlify.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer" href="https://github.com/Moin06-dev/image-background-transition-app/tree/main">Github
          </a>
      </div>

      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg">
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={age} alt="Logo" class="object-cover object-center h-full w-full"/>
      
        </div>
        <h2 class="text-xl font-medium title-font  mt-5">Age Finder</h2>
        <p class="text-base leading-relaxed mt-2">Calculate anyone's age instantly with our Age Finder. Simple, accurate, and perfect for various applications.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://agefinderapp.netlify.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer" href="https://github.com/Moin06-dev/age-calculator-app/tree/main">Github
          </a>
      </div>

      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg">
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={weather} alt="Logo" class="object-cover object-center h-full w-full"/>
      </div>
        <h2 class="text-xl font-medium title-font  mt-5">Weather web live</h2>
        <p class="text-base leading-relaxed mt-2">Stay updated with real-time weather information using our Weather Web Live application. Access accurate forecasts, radar maps, and weather alerts effortlessly.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://weatherappweblive.netlify.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer" href="https://github.com/Moin06-dev/weather-app">Github
          </a>
      </div>

      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border border-white rounded-lg">
        <div class="rounded-lg h-64 overflow-hidden border">
        <img src={clock} alt="Logo" class="object-cover object-center h-full w-full"/>
      </div>
        <h2 class="text-xl font-medium title-font  mt-5">Live Clock Web</h2>
        <p class="text-base leading-relaxed mt-2">Stay synchronized with our Live Clock Web application. Accurately display current time across different time zones with ease.</p>
        <a class="mt-3 text-indigo-500 mr-6 inline-flex items-center hover:underline cursor-pointer" href="https://digitalliveclockweb.netlify.app/">View Project
          </a>
          <a class="mt-3 text-indigo-500 inline-flex items-center hover:underline cursor-pointer" href="https://github.com/Moin06-dev/digital-clock-app">Github
          </a>
      </div>


      

    </div>
    </div>
  </div>
</section>
</>
  )
}

export default App