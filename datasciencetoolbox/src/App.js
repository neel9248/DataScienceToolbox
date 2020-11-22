import './App.css';
import React from 'react';

function App() {
  // var Docker = require('dockerode');
  // var docker = new Docker();

  return (
    <div>
      <h1 class="title">DataScience Toolbox</h1>
      <ul>
        <li><a href="http://localhost:6901">Orange</a></li>
        <li><a href="http://localhost:8787">Rstudio</a></li>
        <li><a href="http://localhost:8443">VScode</a></li>
        <li><a href="http://localhost:8888">Jupyter Lab</a></li>
        <li>Tensorflow: run "docker exec -it datasciencetoolbox_tensorflowapp_1 bash" in terminal"</li>
        <li>Git: run "docker exec -it datasciencetoolbox_gitapp_1 /bin/sh" in terminal"</li>
        <li>Hadoop: run "docker exec -it datasciencetoolbox_hadoopapp_1 bash" in terminal</li>
        <li>Spark: run "docker exec -it datasciencetoolbox_sparkapp_1 bash" in terminal</li>
        {/* <button onClick={tensor}>test</button> */}
      </ul>
    </div>

  );
}

export default App;
