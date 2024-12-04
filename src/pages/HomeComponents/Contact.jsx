import { FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { db } from "../../config/firebase"
import { addDoc, collection} from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { Element } from "react-scroll"

const Contact = () => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required()
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmitHandler = async (data) => {
        try{
            const docref = await addDoc(collection(db, "contacts"), data);
            toast.success("data added successfully", {
                position: "bottom-right"
            })
        }catch(e){
            toast.error("some error occured", {
                position: "bottom-right"
            })
            console.log("some error occured", e)
        }
        reset()
    }
  return (
    <Element name="contact">
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
                            to="mailto:smayowa176@gmail.com"
                            className="flex gap-2 items-center w-full md:w-1/2 bg-[#fff] dark:bg-[#001122] p-6 rounded-xl h-full relative overflow-hidden my-4"
                        >
                            <FaEnvelope className="text-2xl" /> <span>Email</span>
                        </Link>
                        <Link
                            to="https:wa.me/2349032073275"
                            className="flex gap-2 items-center w-full md:w-1/2 bg-[#fff] dark:bg-[#001122] p-6 rounded-xl h-full relative overflow-hidden"
                        >
                            <FaWhatsapp className="text-2xl" /> <span>Whatsapp</span>
                        </Link>
                    </div>
                    <div className="basis-1/2 ">
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className="mb-4">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" className="bg-[#fff] dark:bg-[#001122] w-full p-4 rounded-xl" {...register("name")} />
                                <p className="text-xs text-rose-600 mt-1">  {errors.name?.message} </p>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="bg-[#fff] dark:bg-[#001122] w-full p-4 rounded-xl" placeholder="johndoe@email.com" {...register("email")} />
                                <p className="text-xs text-rose-600 mt-1">  {errors.email?.message} </p>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" className="bg-[#fff] dark:bg-[#001122] w-full p-4 rounded-xl" placeholder="Enter Message" {...register("message")}></textarea>
                                <p className="text-xs text-rose-600 mt-1">  {errors.message?.message} </p>
                            </div>
                            <input type="submit" value="Send Message" className="bg-gray-300 dark:bg-[#001122] cursor-pointer border-2  w-full p-4 rounded-xl inline-block" />
                        </form>
                    </div>
                </div>
            </div>
            < ToastContainer />
        </div>
    </Element>
  )
}

export default Contact