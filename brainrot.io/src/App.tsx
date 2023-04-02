import { useState, useEffect} from 'react';
import './App.css';
import _ids from "./ids.json"
import imageToAdd from "./brclean.png";
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
  _ids.forEach((_id) => {
    queue.enqueue(_id)
  });

  const changeVideo = async (event) => {
    event.target.firstChild.src = "https://www.tiktok.com/embed/" + pullNextId(queue);
    const a = await waitForRender();
    console.log(event.target.firstChild.contents().find("css-uq19z6 e1hu91t76").text());
    console.log(event.target.firstChild.contentWindow);
    console.log(event.target.firstChild.contentDocument);
    console.log(document.querySelector(".css-uq19z6"));
  };

  const init = () => {
    const streams = [];
    for (let i = 0; i < 4; i++) {
      const embed_src = "https://www.tiktok.com/embed/" + pullNextId(queue);
      streams.push(<div className="stream-container" onClick={changeVideo}>
                      <iframe className="stream" src={embed_src} scrolling="no"></iframe>
                   </div>);
    }
    return streams
  };
    
  return (
    <div className="App">
      <img style={{ width: "12%", height: "18%" }} src={imageToAdd} alt="brlogo"></img>
      <div id="panel">
        {init()}
      </div>
    </div>
  )
};

export default App;
