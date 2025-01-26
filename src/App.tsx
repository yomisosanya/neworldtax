// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './components/PageArticle'
import './App.css'
import './styles/index.css'
import PageHeader from './components/PageHeader'
import PageFooter2 from './components/PageFooter2'
import PageNavBar from './components/PageNavBar'
import PageSidebar from './components/PageSidebar'
import Promotion from './components/Promotion'
// import Promo1 from './components/Promo1'
// import Promo2 from './components/Promo2'
// import Promo3 from './components/Promo3'

import PageRequirement from './components/PageRequirement'
import PageWordArt from './components/PageWordArt'


export default function App(){
  return (
    <>
    <div 
        id="base"
        style={{backgroundColor: '#f8f9f9'}}
    >
       <div
         id="base-header"
       >
         <PageHeader />
         <PageNavBar />
       </div>
        <div 
            id="base-content" 
            // className=''
            // style={{
            //   display: 'flex',
            //   flexWrap: 'wrap'
            // }}
        >
            <PageSidebar />
            <PageWordArt />
            <PageRequirement />
        </div>
        <Promotion />
        {/* <Promo3 />
        <Promo2 />
        <Promo1 /> */}
        <div 
            id="base-footer"
            // style={{height: 'fit-content'}}
        >
            <PageFooter2 />
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

