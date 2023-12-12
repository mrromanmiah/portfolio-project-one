import { FaEnvelope, FaHome, FaMobile } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pmn2mdp', 'template_u3smylw', form.current, 'ouP-KKXFkVtjFREdn')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: 'Good job!',
                    text: 'You sent the message!',
                    icon: 'success',
                }).then(() => {
                    form.current.reset();
                });
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="my-10 lg:mx-40 md:mx-20 mx-10 mb-20">
            <div>
                <h1 className="text-3xl text-[#91ff00] font-bold text-center">Contact Me</h1>
            </div>


            <div className="items-center">

                <div>
                    <form className="card-body" ref={form} onSubmit={sendEmail}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered bg-[#91ff00] bg-opacity-20 text-white" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered bg-[#91ff00] bg-opacity-20 text-white" name="email" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Message</span>
                            </label>
                            <input className="textarea h-20 p-4 rounded-lg bg-[#91ff00] bg-opacity-20 text-white" type="text" name="message" id="" placeholder="Write your message..." />


                        </div>
                        <div className="flex justify-center mx-auto mt-6">
                            <input className="bg-[#91ff00] border-2 border-[#91ff00] px-4 py-2 text-black font-semibold rounded hover:border-2 hover:border-[#91ff00] hover:bg-[#91ff00] hover:bg-opacity-10 hover:text-white flex items-center gap-2 text-center" type="submit" value="Send" />

                        </div>
                    </form>
                </div>
                <div className="text-xl font-semibold mt-20">
                    <p className="flex items-center gap-4 text-white"><FaHome className="text-[#91ff00]"></FaHome> Motijheel, Dhaka, Bangladesh</p>
                    <p className="flex items-center gap-4 text-white"><FaEnvelope className="text-[#91ff00]"></FaEnvelope> mrromanmiah@gmail.com</p>
                    <p className="flex items-center gap-4 text-white"><FaMobile className="text-[#91ff00]"></FaMobile> +880 17XX XXXXXX</p>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;