import * as yup from "yup";
import {useState} from 'react';
import  CustomInput  from "../components/costumInput";
import axios from "axios";
import cookies from "nookies";
import {useRouter} from "next/router";
import { useFormik} from "formik";
import Loader from "../components/loader";
import Image from 'next/image';
import AlertRed from "../components/Alert/AlertRed"
const Signin = () => {
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true)
      // setMessage(values.userName);
      try {
        const res = await axios.post(
          "https://newdcs.nwsesys.com/dcs-service/login",
          {
            username: values.userName.toUpperCase(),
            password: values.password,
            appName: "DCS-APP",
          }
        );
        setLoading(false);
        if (res.status == 200 && res.data!=null && res.data.accessToken!=null) {
          cookies.set(null, "token", res.data.accessToken, { path: "/" });
          setSubmitted(true);
          router.replace("/");
        }else{
          setMessage(<AlertRed message="System has an error!!!"/>)
        }
      } catch (e) {
        console.log("error: " + e);
      }
    },
    validationSchema: yup.object({
      userName: yup.string().trim().required("user name is required"),
      password: yup.string().trim().required("password is required"),
    }),
  });
  return (
    <>
    {loading?<Loader/>:""}
      <div className="container mx-auto   grid place-items-center h-screen ">
        <div className=" lg:w-1/2 sm:w-96  mx-auto shadow-2xl bg-gray-100  rounded-xl  ">
          <div className=" shadow-inner p-10">
            <div className="text-center">             
              <div className=" mx-auto w-48 bg-mint text-mint fill-current">
                    <Image
                        src={"/assets/images/logo-nwse.png"}
                        alt="Picture of the author"
                        width={200}
                        height={100} 
                        >
                    </Image>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <CustomInput
                onBlur={formik.handleBlur}
                name="userName"
                id="userName"
                type="text"
                value={formik.values.userName}
                onChange={formik.handleChange}
                placeholder="User Name"
                label="User Name"
              />
              {formik.touched.userName && formik.errors.userName && (
                <span className='text-red-400'>{formik.errors.userName}</span>
              )}
              <CustomInput
                onBlur={formik.handleBlur}
                name="password"
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                label="Password"
              />
               {formik.touched.password && formik.errors.password && (
                  <span className='text-red-400'>{formik.errors.password}</span>
                )}
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300  rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                    required=""
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <div className="flex items-start mb-6">
               
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login </button>
              </div>
              <div className="flex flex-row  mt-5 ">{message}</div>

              <button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Light tooltip</button>
              <div id="tooltip-light" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip">
                  Tooltip content
                  <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
