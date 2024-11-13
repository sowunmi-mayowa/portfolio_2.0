import { FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"
const Contact = () => {
  return (
    <div className='bg-[#f9f9f9] dark:bg-[#162c42] font-montserrat'>
        <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl py-8 md:py-16'>
            <div className='flex justify-between gap-6 md:items-center flex-col md:flex-row'>
                <div className="basis-1/2">

                    <div>
                        <h3 className='capitalize text-2xl md:text-4xl font-bold'>let's talk</h3>
                        <p className="text-sm lg:text-md max-w-[300px] lg:max-w-sm py-4">If you have any questions, proposals, or just want to
                        have a chat, feel free to get in touch.</p>
                    </div>
                    <Link
                        to="#"
                        className="flex gap-2 items-center w-full md:w-1/2 bg-[#fff] dark:bg-[#001122] p-6 rounded-xl h-full relative overflow-hidden my-4"
                    >
                        <FaEnvelope className="text-2xl" /> <span>Email</span>
                    </Link>
                    <Link
                        to="#"
                        className="flex gap-2 items-center w-full md:w-1/2 bg-[#fff] dark:bg-[#001122] p-6 rounded-xl h-full relative overflow-hidden"
                    >
                        <FaWhatsapp className="text-2xl" /> <span>Whatsapp</span>
                    </Link>
                </div>
                <div className="basis-1/2 ">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="John Doe" className="bg-[#fff] dark:bg-[#001122] w-full p-4 rounded-xl" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="bg-[#fff] dark:bg-[#001122] w-full p-4 rounded-xl" placeholder="johndoe@email.com" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" className="bg-[#fff] dark:bg-[#001122] w-full p-4 rounded-xl" placeholder="Enter Message"></textarea>
                        </div>
                        <input type="submit" value="Send Message" className="bg-gray-300 dark:bg-violet-600 border-2  w-full p-4 rounded-xl inline-block" />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact