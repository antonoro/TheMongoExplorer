const selectForm  =document.querySelector('#SelectForm');

const populateData = datalist => {
    const datalistUl = document.querySelector("#datalist");
  
    datalistUl.innerHTML = "";
  
    datalist.forEach(d => {
      const dataLi = document.createElement("li");
  
      // UPDATE PARAMS NAME AND GRADE
      dataLi.textContent = `${d.name} : ${d.grade}`;
  
      datalistUl.appendChild(dataLi);
    });
  };

const onSelect = evento => {
    const query = document.querySelector("#selectorid option:checked").value;

    //Maybe change handle url
    fetch(`/datalist/${query}`)
        .then(res => res.json())
        .then(populateData);

    evento.prventDefault();

};

selectForm.addEventListener("submit", onSelect)