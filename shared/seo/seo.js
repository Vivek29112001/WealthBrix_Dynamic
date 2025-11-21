"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `WealthBrix - ${title}`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
