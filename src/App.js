import "./App.css";

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th className="title-type">Type</th>
          <th className="title">Botão Primário</th>
          <th className="title">Botão Secundário</th>
          <th className="title">Botão Terciário</th>
          <th className="title">Cursor</th> 
        </tr>
        <tr>
          <td className="type-button">Default</td>
          <td className="base default-primary"><a href="/">Default Primary</a></td>
          <td className="base default-secondary"><a href="/">Default Secondary</a></td>
          <td className="base default-tertiary"><a href="/">Default Tertiary</a></td>
          <td className="base"><img src="/images/pointer.svg" alt=""></img></td>
        </tr>
        <tr>
          <td className="type-button">Hover</td>
          <td className="base hover-primary"><a href="/">Hover Primary</a></td>
          <td className="base hover-secondary"><a href="/">Hover Secondary</a></td>
          <td className="base hover-tertiary"><a href="/">Hover Tertiary</a></td>
          <td className="base"><img src="/images/pointer.svg" alt=""></img></td>
        </tr>
        <tr>
          <td className="type-button">Focus</td>
          <td className="base focus-primary"><a href="/">Focus Primary</a></td>
          <td className="base focus-secondary"><a href="/">Focus Secondary</a></td>
          <td className="base focus-tertiary"><a href="/">Focus Tertiary</a></td>
          <td className="base"><img src="/images/pointer.svg" alt=""></img></td>
        </tr>
        <tr>
          <td className="type-button">Disabled</td>
          <td className="base disabled-primary"><a href="/">Disabled Primary</a></td>
          <td className="base disabled-secondary"><a href="/">Disabled Secondary</a></td>
          <td className="base disabled-tertiary"><a href="/">Disabled Tertiary</a></td>
          <td className="base"><img src="/images/disabled.svg" alt=""></img></td>
        </tr>
        <tr>
          <td className="type-button">Loading</td>
          <td className="base loading-primary"><a href="/"><img src="/images/loading.svg" alt=""></img> Loading Primary</a></td>
          <td className="base loading-secondary"><a href="/"><img src="/images/loading.svg" alt=""></img> Loading Secondary</a></td>
          <td className="base loading-tertiary"><a href="/"><img src="/images/loading.svg" alt=""></img> Loading Tertiary</a></td>
          <td className="base"><img src="/images/loading-pointer.svg" alt=""></img></td>
        </tr>
        <tr>
          <td className="type-button">Movable</td>
          <td className="base mobile-primary"><a href="/"><img src="/images/mobile.svg" alt=""></img> Movable Primary</a></td>
          <td className="base mobile-secondary"><a href="/"><img src="/images/mobile.svg" alt=""></img> Movable Secondary</a></td>
          <td className="base mobile-tertiary"><a href="/"><img src="/images/mobile.svg" alt=""></img> Movable Tertiary</a></td>
          <td className="base"><img src="/images/group.svg" alt=""></img></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
