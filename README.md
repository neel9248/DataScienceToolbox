# DataScienceToolbox

Important note: This program works best with increased memory and disk space in docker. Please go to your docker dashboard, navigate to advanced resources, and increase the memory to 4gb and disk image size to 80gb.

In order to start this project, you must first clone this repository. Once you have cloned this repository notice the directory structure Datasciencetoolbox/datasciencetoolbox. Please cd into Datasciencetoolbox and datasciencetoolbox so the directory you reside in is datasciencetoolbox.

Make sure you run "docker system prune" in order to remove all unused containers, networks, and images

Please now execute the command "docker-compose up". This will pull all the service images from dockerhub and run the application. The docker hub repository is 
https://hub.docker.com/repository/docker/neel9248/toolbox.

Once running (may take a 15-20 minutes depending on computer) navigate to http://localhost:3000 in order to access applications. 



BELOW ARE THE METHODS TO ACCESS THE APPLICATIONS (I have the passwords for necessary applications listed, but you shouldn't have to input any of them):

Orange - click the link, if password is prompted (it should not be) type in "orange"

Rstudio - click the link, if credentials are prompted (it should not be) type in the username "rstudio" and the password "pass"

VScode - click the link

Jupyter Lab - click the link, if token is prompted (it should not be) type in "local-development"

IBM SAS - click the link and input account details

Sonarqube/SonarScanner - click the link to access Sonarqube, run "docker exec -it datasciencetoolbox_sonarqubeapp_1 bash" in order to access SonarScanner

Markdown - click the link to access markdown

Tensorflow - run "docker exec -it datasciencetoolbox_tensorflowapp_1 bash" in terminal

Firefox - click the link to access firefox

Git - click the link, navigate to applications on the vnc viewer, and select "Terminal Emulator". If password is prompted (it should not be) type in "git"

Tableau - run "docker exec -it datasciencetoolbox_tableauapp_1 bash" in terminal

Hadoop - run "docker exec -it datasciencetoolbox_hadoopapp_1 bash" in terminal

Spark - run "docker exec -it datasciencetoolbox_sparkapp_1 bash" in terminal

I borrowed-lines/used dockerfiles on github repositories to build some images. I'm putting them here for reference since it won't be evident in the code:

SonarScanner - https://github.com/kmlvision/python-sonar-scanner/blob/master/Dockerfile

VScode and Jupyter - https://github.com/caesarnine/data-science-docker-vscode-template

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DEMO AND CODE WALKTHROUGH: https://drive.google.com/file/d/1j-MvOyVR0jW49F1axBuS2RgvaqZTnIeZ/view





