import { useState, useEffect } from "react";

// components
import Container from "./components/Container";
import Title from "./components/Title";
import Options from "./components/Options";

// styles
import "./App.css";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState("");
  const [inputVLalue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState("Yes");
  const [copiedCode, setCopiedCode] = useState(false);

  return (
    <div className="App">
      <Container>
        <Title />
        <Options />
      </Container>
    </div>
  );
}

export default App;
