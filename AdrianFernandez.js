html {
    padding: 0;
    margin: 0;
}

body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.main-wrapper {
    padding: 30px;
}
  
.info-container {
    display: flex;
    justify-content: space-evenly;
}
  
.info-rrss {
    background-color: rgb(28, 104, 100);
    min-height: 100px;
  
}
  
.rrss {
    margin: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
  
.rrss a {
    color: white;
    text-decoration: none;
}
  
.rrss i {
    padding: 10px;
    transform: scale(1.5);
}
.rrss i:hover {
    transform: scale(2)
}
  
@media all and (min-width: 520px) {
    .info-container {
      display: flex;
    }
  
    .rrss {
      flex-direction: row;
      justify-content: space-around;
      max-width: 500px;
      margin: 0 auto;
      padding: 20px 0;
    }
  
    .rrss li {
      display: flex;
      flex-direction: row;
    }
  
    .personal-info {
      margin-left: 30px;
    }
}