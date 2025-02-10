/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { postMessage } from "@/utils/actions/postMessage";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

export interface IFormInput {
  _id: string;
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      const res = await postMessage(data);
      console.log(res);
      if (res.insertedId) {
        Swal.fire("Message posted successfully !!!");

        router.push("/");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <section className="  rounded-xl  mx-auto min-h-screen">
      <div className=" flex justify-center items-center h-[500px] w-[40%] mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container  bg-gray-300 text-black p-6 rounded-lg"
        >
          <div className="space-y-2">
            <div className="col-span-full sm:col-span-3 space-y-2">
              <label htmlFor="name" className=" font-semibold  ">
                Your name
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3 space-y-2">
              <label htmlFor="email" className="font-semibold ">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
              />
            </div>
            <div className="col-span-full space-y-2">
              <label htmlFor="textarea" className="font-semibold ">
                Write to us
              </label>
              <textarea
                {...register("message")}
                id="textarea"
                placeholder="Write to us"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
              />
            </div>
            <button className="bg-[#e67e22] text-white px-4 py-2  flex items-center gap-4 rounded-lg ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
