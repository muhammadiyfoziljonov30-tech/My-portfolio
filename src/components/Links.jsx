import { NavLink } from "react-router";
import ContactDesigned from "./UI/ContactDesigned";


export default function Links() {
  return (
    <div className="flex items-center justify-between mt-5">
      <div>
        logo
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-4 mb-5">
          <p>+998-99-999-99-99</p>
          <a href="@fooz1lov">@fooz1lov</a>
        </div>
        <div className="flex items-center pl-10 pr-1 py-1 bg-white rounded-full">
          <NavLink to={'/'} className={`my-font px-10 border-r border-r-gray-400`}>Home</NavLink>
          <NavLink to={'/about'} className={`my-font px-10 border-r border-r-gray-400`}>About</NavLink>
          <NavLink to={'/work'} className={`my-font px-10 border-r border-r-gray-400`}>Work</NavLink>
          <NavLink to={'/process'} className={`my-font px-10`}>The Process</NavLink>
          <NavLink to={'/contact'} className={`my-font`}><ContactDesigned /></NavLink>
        </div>
      </div>
    </div>
  )
}
