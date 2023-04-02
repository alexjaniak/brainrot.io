import { useState, useEffect} from 'react';
import './App.css';
import _ids from "./ids.json"

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

function App() {
  const queue = new Queue<string>()
  _ids.forEach((_id) => {
    queue.enqueue(_id)
  })
  
  const init = () => {
    const streams = [];
    for (let i = 0; i < 4; i++) {
      const embed_src = "https://www.tiktok.com/embed/" + pullNextId(queue);
      streams.push(<div className="stream-container">
                      <iframe className="stream" src={embed_src} scrolling="no"></iframe>
                   </div>);
    }
    return streams
  }

  console.log(_ids);
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
