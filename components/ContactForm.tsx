import { useRouter } from 'next/router'
import { motion } from "framer-motion";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { contactFormVariant } from "../exports/animations";
import { IContactForm } from "../exports/interfaces";
import FormField from "./FormField";
import FormSubmitButton from "./FormSubmitButton";
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

  const onSubmit = async (data: IContactForm, ) => {


    const sendEmail = (serviceID: string, templateID:string , variables: any, userID: string) => {
      emailjs.send(serviceID, templateID, variables, userID).then((res) => {
        setIsLoading(false);
        router.push('/contact/success')
      }).catch(err => {
        console.error(err)
      })
    }



      setIsLoading(true);
     sendEmail(serviceID, templateID, data, userID)
    


  };

  return (
    <motion.div
      className="flex flex-col w-full pb-56 md:pb-0 md:pt-16 2xl:w-6/12 2xl:pt-24 3xl:pt-56"
      variants={contactFormVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full mt-5"
      >
        <div className="flex flex-col w-full md:flex-row md:justify-between ">
          <FormField
            register={register}
            label="FIRST NAME"
            field="firstName"
            placeHolder="Enter your first name"
            errors={errors?.firstName && errors.firstName.message}
            errorMsg="Please include your first name"
          />
          <FormField
            register={register}
            label="LAST NAME"
            field="lastName"
            placeHolder="Enter your last name"
            errors={errors?.lastName && errors.lastName.message}
            errorMsg="Please include your last name"
          />
        </div>
        <div className="flex flex-col w-full md:flex-row md:justify-between">
          <FormField
            register={register}
            label="EMAIL"
            field="email"
            placeHolder="Enter your email"
            errors={errors?.email && errors.email.message}
            errorMsg="Please include your email"
          />
          <FormField
            register={register}
            label="COMPANY"
            field="company"
            placeHolder="Enter your company name"
            errors={errors?.company && errors.company.message}
            errorMsg="Please include your company"
          />
        </div>
        <FormField
          register={register}
          label="COMMENTS"
          field="comments"
          placeHolder="Enter your message"
        />

        <FormSubmitButton
            isLoading={isLoading}
        />
      </form>
    </motion.div>
  );
};

export default ContactForm;
