import React,{ useEffect, useState } from 'react';
import Head from 'next/head'

export default function Home() {
    const [active,setActive] = useState()
    const careers = ['Developers','Designers','Bloggers','Artists','Awesomeness']

    useEffect(() => {
        let counter = 0;
        const setCounter = () => {
            counter++;
            if (counter == careers.length) counter = 0;
        }
        const interval = setInterval(() => {
            setActive(careers[counter]);
            setCounter()
        }, 1300)
        return () => clearInterval(interval);
    },[])
  return (
    <div className="container">
      <Head>
        <title>Creative Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h1 className='title'>1010</h1>
            <code>{active}</code>
      </main>

      <footer>
        <a
            href="https://github.com/1010-C"
        >
          <img src="/github.svg" alt="github" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
            margin: 0;
            font-size: 100px;
            letter-spacing: 20px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }
        .logo{
            height: 26px;
            width: 26px;
            transition: .3s ease;
        }
        .logo:hover{
            height: 32px;
            width: 32px;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 10px;
          font-size: 25px;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
