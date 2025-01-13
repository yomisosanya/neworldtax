// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './components/PageArticle'
import './App.css'
// import './index.css'
import './styles/index.css'
import PageHeader from './components/PageHeader'
import PageArticle from './components/PageArticle'
import PageFooter from './components/PageFooter'
import PageNav from './components/PageNav'
import CalendlyButton from './components/CalendlyButton'

function App(){
  return (
    <>
    <div id="page">
      <PageHeader />
      <div id="content">
        <PageNav />
        <PageArticle />
      </div>
      <div id="footer">
        <CalendlyButton />
        <PageFooter />
      </div>
    </div>
    </>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
