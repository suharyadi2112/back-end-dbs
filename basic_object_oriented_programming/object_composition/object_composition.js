class Developer {

  constructor(name) {
    this.name = name;
  }
 
  commitChanges() { //method biasa di dalam class
    console.log(`${this.name} is committing changes...`);
  }

}
 
/*
* 
fungsi sebagai object creator
*
*/
function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} is building UI...`);
    }
  }
}
 
function canBuildAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API...`);
    }
  }
}
 
function canDeployApp(developer) {
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploying app...`);
    }
  }
}
/***/ 



/******/
function createFrontEndDeveloper(name) {
  const developer = new Developer(name); //panggil super class utama "Developer"

  /*Object.assign() adalah sebuah method pada objek global di JavaScript yang digunakan untuk menggabungkan dua atau lebih objek menjadi satu objek baru.*/
  return Object.assign(developer, canBuildUI(developer)); // Object.assign(target, source(sumber));
}
 
function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}
 
function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}
 
function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer)); // Object.assign(target, source(sumber));
}
/******/


 
// const frontEndDeveloper = createFrontEndDeveloper('Fulan');
// frontEndDeveloper.commitChanges();
// frontEndDeveloper.buildUI();
// console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);
 
// const backEndDeveloper = createBackEndDeveloper('Fulana');
// backEndDeveloper.commitChanges();
// backEndDeveloper.buildAPI();
// console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);
 
// const devOpsDeveloper = createDevOps('Fulani');
// devOpsDeveloper.commitChanges();
// devOpsDeveloper.deployApp();
// console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);
 
const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
  
/* 
  instanceof adalah operator pada JavaScript yang digunakan untuk memeriksa apakah suatu objek merupakan instance dari suatu kelas tertentu atau turunan dari kelas tersebut.
*/
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);
 
