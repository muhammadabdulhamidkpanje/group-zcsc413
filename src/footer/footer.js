import { Link } from "react-router-dom"

const Footer = ()=>{
    return(
        <section className="flex w-full h-[150px] bg-black justify-around">
            <div className=" text-white flex flex-col justify-around">
                <h3 className="text-xl">Usefull links</h3>
                <Link to="/">Home</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/contact-us">Contact us</Link>

            </div>
            <div className="text-white">
            <h3 className="text-xl">About Us</h3>
            <p> An assignment done by some dedicated student as a requirement for Bsc in computer science </p>

            </div>

        </section>
    )
}

export default Footer