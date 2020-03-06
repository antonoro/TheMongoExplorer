
const formSubmit = document.querySelector("#SelectFormDB");
console.log("formSubmit", formSubmit);

const collformSubmit = document.querySelector("#SelectFormCOLL");
console.log("collformSubmit", collformSubmit);

const addDocformSubmit = document.querySelector("#DocumentAdd");
console.log("addDocSubmit", addDocformSubmit);



const populateCollections = datalist => {
    const datalistUl = document.querySelector("#selectoridCOLL");
  
    datalistUl.innerHTML = "";
  
    datalist.forEach(d => {
      const dataLi = document.createElement("option");
  
      dataLi.textContent = `${d.name}`;
  
      datalistUl.appendChild(dataLi);
    });
  };

  const populateDataCollections = datalist => {
    const datalistUl = document.querySelector("#collectioncontent");
  
    datalistUl.innerHTML = "";
  
    datalist.forEach(d => {
      const dataLi = document.createElement("li");
      
      dataLi.textContent = `${d.name} (${d.country})`;
  
      datalistUl.appendChild(dataLi);
    });
  };

const onSelectDB = evento => {
  
  const query = document.querySelector("#selectoridDB option:checked").value;
  console.log("La query", query);
  console.log("ON SELECTTT DB");
  console.log(`/databases/${query}`);
  fetch(`/databases/${query}`)
      .then(res =>{
        console.log("Status of fetch", res.status);
        res.json().then(populateCollections);
      })

  evento.preventDefault();

};

const onSelectColl = evento => {
  
  const dbname = document.querySelector("#selectoridDB option:checked").value;
  const query = document.querySelector("#selectoridCOLL option:checked").value;
  console.log("El dbname", dbname);
  console.log("La query", query);
  console.log("ON SELECTTT COLL");
  console.log(`/collections/${dbname}+${query}`);
  fetch(`/collections/${dbname}+${query}`)
      .then(res =>{
        console.log("Status of fetch", res.status);
        res.json().then(populateDataCollections);
      })

  evento.preventDefault();

};

const onSelectAddDoc = evento => {
  
  const dbname = document.querySelector("#selectoridDB option:checked").value;
  const query = document.querySelector("#selectoridCOLL option:checked").value;
  const documentAdded = document.querySelector("#DocumentAdd");
  console.log("El dbname", dbname);
  console.log("La query", query);
  console.log("Document added is:", documentAdded);
  console.log("ON SELECTTT DOC");
  console.log("THIS IS THE PATH",`/documents/add/${dbname}+${query}+${documentAdded[0].value}+${documentAdded[1].value}`);
  fetch(`/document/add/${dbname}+${query}+${documentAdded[0].value}+${documentAdded[1].value}`)
      .then(res =>{
        console.log("Status of fetch", res.status);
        res.json().then(populateDataCollections);
      })

  evento.preventDefault();

};

formSubmit.addEventListener("submit", onSelectDB);
collformSubmit.addEventListener("submit", onSelectColl);
addDocformSubmit.addEventListener("submit", onSelectAddDoc);
