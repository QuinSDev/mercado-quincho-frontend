import React from 'react'
import { MenuQuinchos } from '../components/MenuQuinchos';
import { QuinchosList } from '../components/QuinchosList';
import { QuinchoForm } from '../components/QuinchoForm';

export const Home = () => {
  return (
    <>
    <MenuQuinchos />
    <QuinchosList />
    {/*<QuinchoForm />*/}
    </>
  )
}
