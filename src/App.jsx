import React from 'react'
import { useState } from 'react'

function App() {
  return (
    <>
      <article style={{ display: "flex", alignItem: "center", color: "#fff" }}>
        <header>
          <img src="./src/assets/littleBoy.jpg" alt="" />
          <div>
            <strong>Franco Matias Castaño</strong>
            <span>@FCast</span>
          </div>
        </header>
        <aside>
          <button>
            Seguir
          </button>
        </aside>
      </article>
    </>
  )
}

export default App
