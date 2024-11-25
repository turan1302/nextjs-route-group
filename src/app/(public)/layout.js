"use client";
import React, {useLayoutEffect} from 'react';

const RootLayout = ({children}) => {

    useLayoutEffect(() => {
        const script = document.createElement('script');
        script.src = '/front/js/all.min.js';
        script.async = true;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <html lang="tr">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <title>Freelancer - Start Bootstrap Theme</title>
            <link rel="icon" type="image/x-icon" href="/front/assets/favicon.ico"/>

            <link href="/front/css/styles.css" rel="stylesheet"/>
            <link href="/front/css/all.min.css"
                  rel="stylesheet"/>

        </head>
        <body id="page-top">
        {children}

        <script src="/front/js/bootstrap.bundle.min.js" async></script>
        <script src="/front/js/scripts.js" async></script>
        <script src="/front/js/sb-forms-0.4.1.js" async></script>
        </body>
        </html>
    );
};

export default RootLayout;
