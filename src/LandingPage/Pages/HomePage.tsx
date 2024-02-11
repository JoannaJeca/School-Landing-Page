import { NavLink } from "react-router-dom"


const HomePage = () => {
  return (
      <div className="w-full h-[90vh] bg-blue-100 flex justify-center items-center ">
          <div className="flex justify-center items-center flex-col">
              <h1 className="text-[43px] text-center font-extrabold w-[50%] ">Explore our range of services designed to support you</h1>
        <p className="w-[56%] mt-8 text-[18px] text-center">A goal to empower students with tools and resources to navigate the challenges of academic life more effectively. Learning how to leverage technology to enhance productivity, organization, and learning outcomes.</p>
        <NavLink to="/">
    <button className="btn bg-blue-800 text-white  hover:bg-blue-900 mt-5">Get started now</button>
        </NavLink>
          </div>
          
    </div>
  )
}

export default HomePage