import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp 