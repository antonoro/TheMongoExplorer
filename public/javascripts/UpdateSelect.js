const selectForm = document.querySelector("#SelectFormDB");

const populateDataCollections = datalist => {
    const datalistUl = document.querySelector("#datalist");
  
    datalistUl.innerHTML = "";
  
    datalist.forEach(d => {
      const dataLi = document.createElement("li");
  
      // UPDATE PARAMS NAME AND GRADE
      dataLi.textContent = `${d.name} : ${d.grade}`;
  
      datalistUl.appendChild(dataLi);
    });
  };

const onSelectDB = evento => {
    const query = document.querySelector("#selectoridDB option:checked").value;
    console.log("DB SELECTEDDDD");
    fetch(`/selectDB/${query}`)
        .then(res => res.json())
        .then(populateDataCollections);

    evento.preventDefault();

};

selectForm.addEventListener("submit", onSelectDB);