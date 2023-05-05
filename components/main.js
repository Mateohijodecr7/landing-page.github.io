/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const main = () => {
  return (
    <>
      <section id="HOME" className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              data-aos="fade-right"
              className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
            >
              Mateo <br />
              Santana
            </h1>
            <br/>
            <p
              data-aos="fade-right"
              data-aos-delay="30"
              data-aos-duration="800"
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            >
              Soy un programador front-end con experiencia en el desarrollo de soluciones web basadas en HTML, CSS y JavaScript. <br />
              Me apasiona crear interfaces de usuario atractivas, funcionales y accesibles, que cumplan con los estándares de calidad y usabilidad. <br />
              He trabajado en proyectos de diversos sectores, como educación, turismo, comercio electrónico y salud, utilizando frameworks como React y Next. <br />
              Me considero una persona proactiva, creativa y con ganas de seguir aprendiendo y mejorando mis habilidades como desarrollador web.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
              <Link
                data-aos="fade-right"
                data-aos-delay="40"
                data-aos-duration="900"
                href="https://github.com/Mateohijodecr7"
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <div className="flex items-center  ">
                  <img className="h-6 w-6" src="/github.png"  alt="github" />

                  <p className="pl-2">GitHub</p>
                </div>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left"  className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className='imgmia' src="/me.jpeg" alt="Mateo Santana" />
          </div>
        </div>
      </section>    
      <br/>
    </>
  );
};

export default main;
