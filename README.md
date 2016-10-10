## AUBG Student Government Web Client

### Motivation
  This project is intended to facilitate the processes of the Student Government and provide information about the student organizations in AUBG. It comes with a CMS and functinality to manage student applications for clubs and other activities. Students are also able write evaluations (anonymously) for the faculty members in AUBG.

### Contributions
  The source code of this project is open for modifications by AUBG students (in fact, AUBG students are strongly encouraged to continue developing this project, as it is for their own good). Pull requests will be reviewed by me (Hristo Georgiev). If you'd like to actively contribute and you have the skills for it, contact me and I will make you a collaborator.

### Requirements
 * Node version >= 5.0 
 * NPM version >=  3.0.
 
### Installation

```bash
  # clone our repo
  # --depth 1 removes all but one .git commit history
  git clone --depth 1 https://github.com/Centroida/sg-app-client.git

  # change directory to our repo
  cd sg-app-client

  # install the repo with npm
  npm install

  # start the server
  npm start

  # use Hot Module Replacement
  npm run server:dev:hmr
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser
 

### API Documentation
This application communicates with a RoR API. You can find the API documentation here:
[http://sgaubg.herokuapp.com/apipie](http://sgaubg.herokuapp.com/apipie)
 
