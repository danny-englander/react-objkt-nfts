import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Meta = () => {
  return (
    <>
     <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        <title>Surreal Flowers and Other Wonders</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      </HelmetProvider>
    </>
  )
}

export default Meta
