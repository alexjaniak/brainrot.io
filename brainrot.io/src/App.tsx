import { useState, useEffect} from 'react';
import './App.css';
//import _ids from "./ids.json"

var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.6.3.min.js";


class Queue<T> {
  public constructor(
      private elements: Record<number, T> = {},
      private head: number = 0,
      private tail: number = 0
  ) { }

  public enqueue(element: T): void {
      this.elements[this.tail] = element;
      this.tail++;
  }

  public dequeue(): T {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;

      return item;
  }

  public peek(): T {
      return this.elements[this.head];
  }

  public get length(): number {
      return this.tail - this.head;
  }

  public get isEmpty(): boolean {
      return this.length === 0;
  }
}

function pullNextId(queue: Queue<string>) {
  return queue.dequeue();
}

function waitForRender() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000)
  })
}


function App() {
  const queue = new Queue<string>()

  const _ids = ["owtfveqKv_s", "P7WbYt7q7Ks", "NEZSa5NEREs", "oM0P1yNUstc", "P7WbYt7q7Ks"];
  _ids.forEach((_id) => {
    queue.enqueue(_id)
  });

  function formatLink(id_: string) {
    return "https://www.youtube.com/embed/" + id_ + "?autoplay=1&mute=1&enablejsapi=1";
  }

  const changeVideo = async (event) => {
    event.target.firstChild.src = formatLink(pullNextId(queue));
  };


  const init = () => {
    const streams = [];
    for (let i = 0; i < 4; i++) {
      const embed_src = formatLink(pullNextId(queue));
      streams.push(<div className="stream-container" onClick={changeVideo}>
                      <iframe className="stream" src={embed_src} allow="autoplay"></iframe>
                   </div>);
    }
    return streams
  };

    
  return (
    <div className="App">
      <h1>Brain Rot</h1>
      <div id="panel">
        {init()}
      </div>
    </div>
  )
};

export default App;
