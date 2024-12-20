import ProjectCardComponent from "@/app/components/projectCard"


const Project = () => {
  
  const CardsProjects = [
    {
        src: "/staticweb.png",
        detail: "The amazon ecommerce static website is developed only using HTML and CSS",
        h3: "Ecommerce Static Wedsite",
        link: "https://ecommerce-clone-website.vercel.app/"
    },
    {
        src: "/organicplantweb.JPG",
        detail: "The Organic Plant website is crafted using Next.js and fully custom CSS",
        h3: "Organic Plants",
        link: "https://organic-plants-custom-css.vercel.app/"
    },
    {
        src: "/todoApp.JPG",
        detail: "A TodoList app built with React to efficiently manage tasks using add and delete features",
        h3: "TodoList App",
        link: "./"
    },
    {
        src: "/countdownTimer.JPG",
        detail: "Built a Countdown Timer app with Next.js and styled using Tailwind CSS for a responsive design",
        h3: "CountDown Timer",
        link: "./"
    },
    {
        src: "/governorweb.jpg",
        detail: "Created a  multipage tailwind website using HTML, Tailwind Css, and Typescript for a clean and responsive design.",
        h3: "Tailwind Website",
        link: "https://multipage-tailwind-theta.vercel.app/"
    },
    // {
    //      src: "/resultApp.JPG",
    //      detail: "Built a Student Result app with Next.js for efficient result display and management",
    //      h3: "Student Result",
    //     link: "https://result-giaic.vercel.app/"
    // },
    {
        src: "/resumebuilder.png",
        detail: "A Simple Resume Builder App By Mueza",
        h3: "Editable Resume Builder App",
        link: "https://milestone-5-shareable-interactive-resume.vercel.app/"
    },
    {
        src: "/timerApp-02.JPG",
        detail: "Developed a simple Timer app using HTML, CSS,and TypeScript for basic time tracking.",
        h3: "CountDown Timer",
        link: "./"
    },
    // {
    //     src: "/resultapp002.JPG",
    //     detail: "A Simple Result App For Giaic Q2 Students.",
    //     h3: "Result App Giaic Q2",
    //     link: "https://result-app-coral.vercel.app/"
    // },
    {
        src: "/figmawebsite.png",
        detail: "This is the first website created by referencing a figma template,utilizing Next.js,Tailwind CSS,and Typescript as the core technologies.",
        h3: " Ecommerce Figma  Website",
        link: "https://uiuxhackathon-zeta.vercel.app/"
    },
    // {
    //     src: "/portfolio-02.JPG",
    //     detail: "This Is My 2nd Portfolio Website Built With NextJS,Tailwind & TypeScript",
    //     h3: "PortFolio 2nd Website",
    //     link: "https://portfolioweb02.vercel.app/"
    // },
    // {
    //     src: "/portfolio",
    //     detail: "This Is My 2nd Portfolio Website Built With NextJS,Tailwind & TypeScript",
    //     h3: "PortFolio 2nd Website",
    //     link: "https://portfolioweb02.vercel.app/"
    // },
];
  return (
    <>

        <h2 className="text-4xl font-semibold mb-6 text-center text-[#0a6335]">Projects</h2>
      
        <div className="mt-4 flex justify-center md:justify-center items-center flex-wrap md:overflow-y-scroll md:h-80 p-5">
        {CardsProjects.map((elem,i)=><ProjectCardComponent key={i} Project={elem}/>)}
        </div>


      
    </>
  )
}

export default Project



