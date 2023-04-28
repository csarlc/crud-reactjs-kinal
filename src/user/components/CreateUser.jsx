import React from 'react'
import { FormUser } from './FormUser'
import {User} from '../models/ModelUser'
export const CreateUser = () => {
  return (
    <FormUser tittleButton="Crear Usuario" userProp={User} option={1}></FormUser>
  )
}
