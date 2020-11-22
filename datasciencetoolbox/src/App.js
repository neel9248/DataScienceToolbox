import './App.css';
import React from 'react';

function App() {

  return (
    <div>
      <h1 class="title">DataScience Toolbox</h1>
      <ul>
        <li><a href="http://localhost:6901/?password=orange">Orange</a></li>
        <li><a href="http://localhost:8787">Rstudio</a></li>
        <li><a href="http://localhost:1000">VScode</a></li>
        <li><a href="http://localhost:8888/lab?">Jupyter Lab</a></li>
        <li><a href="https://www.pdesas.org/Profile/Account/Login">IBM SAS</a></li>
        <li><a href="http://localhost:9000">SonarQube/Scanner</a></li>
        <li><a href="http://localhost:12345">Markdown</a></li>
        <li>Tensorflow: run "docker exec -it datasciencetoolbox_tensorflowapp_1 bash" in terminal</li>
        <li>Git: run "docker exec -it datasciencetoolbox_gitapp_1 /bin/sh" in terminal</li>
        <li>Tableau run "docker exec -it datasciencetoolbox_tableauapp_1 bash" in terminal</li>
        <li>Hadoop: run "docker exec -it datasciencetoolbox_hadoopapp_1 bash" in terminal</li>
        <li>Spark: run "docker exec -it datasciencetoolbox_sparkapp_1 bash" in terminal</li>
      </ul>
    </div>

  );
}

export default App;
