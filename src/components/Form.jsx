import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit , reset } = useForm();

  const handleFormSubmit = (data) =>{
    handleFormSubmitData(data);
    reset();
  } 

  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('name')} type='text' className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='Name' />
        <input {...register('email', { required: true })} type='email' className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='Email' />
        <input {...register('image')} type='text' className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='Image Url' />
        <input type="submit" className='px-5 py-1 rounded-md bg-blue-500 text-white font-semibold' />
      </form>
    </div>
  );
};

export default Form;
