
import { IFormField } from "./../exports/interfaces";

const FormField: React.FC<IFormField> = ({
  field,
  label,
  placeHolder,
  errors,
  errorMsg,
  register,
}) => {
  
  return (
    <div className={`flex flex-col w-full mb-5 md:mb-8 ${field !== 'comments' && 'md:w-45%'} 3xl:mb-16`}>
      <label className="font-sans font-medium text-xs md:text-sm 3xl:text-3xl">{label}</label>
      <input className="bg-beige border-b-2 border-gray py-2 outline-none focus:border-black md:text-lg 3xl:text-4xl " {...register(field, { required: errorMsg })} name={field} placeholder={placeHolder}></input>
      <span className="text-xs font-sans text-red">{errors && errors}</span>
    </div>
  );
};

export default FormField;
