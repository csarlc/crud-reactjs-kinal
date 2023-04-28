import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { formOptions, sendData } from '../Helpers/FormUserHelper';
export const FormUser = ({tittleButton, userProp, option}) => {
    const [user, setUser] = useState(userProp);
    const {register, handleSubmit, formState: {errors}}= useForm(formOptions)

    useEffect(() => {
      setUser({...user, password: ""})
      
    }, [])

    const crud = async () => {
        await sendData(user, option);
      };
    
  return (
    <form onSubmit={handleSubmit(crud)}>
        <div className='form-group'>
        <label className="text-black">Nombre de usuario</label>
        <input {...register("username")} type="text" value={user.username}
        onChange={({target: {value}})=>{
            setUser({...user, username: value})

        }}
          className="form-control"/>
          {errors.username && (<span className="text-danger">{errors.username.message}</span>)}
        </div>
        <div className='form-group'>
        <label className="text-black">Correo Electrónico</label>
        <input {...register("email")} type="text" value={user.email} 
        onChange={({target: {value}})=>{
            setUser({...user, email: value})

        }}
          className="form-control"/>
          {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
        </div>
        <div className='form-group'>
        <label className="text-black">Contraseña</label>
        <input {...register("password")} type="password" value={user.password}
        onChange={({target: {value}})=>{
            setUser({...user, password: value})

        }}
          className="form-control"/>
          {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
        </div>
        <br/>
        <button type='submit' className='btn btn-success'>{tittleButton}</button>
    </form>
  )
}
