import { NavLink, useRouteError } from "react-router-dom"

export const  ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return  <div className="">
        <h1 className='text-4xl font-bold text-center mt-10'>ErrorPage</h1>
        {error&&error.data}
        <NavLink><button>Back To Home</button></NavLink>
    </div>
}