let element = document.getElementById("template");
function fetchData() {
  window
    .fetch("./JSON/data1.json")
    .then(data => {
      data
        .json()
        .then(value => {
          for (val of value) {
            element.innerHTML = ` ${element.innerHTML}<option value=${val}>${val}</option>`;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
fetchData();


function show(ele) {
  window
    .fetch("./JSON/data2.json")
    .then(value => {
      value.json().then(res => {
        var option = ele.options[ele.selectedIndex];
        let dataValue = [...res].filter(x => {
          let data = option.value;
          return x.ship_id === data;
        });
        console.log(dataValue[0]);
        let final = document.getElementById("output");
        console.log(final);
        let imag = document.getElementById('image');
        imag.src = dataValue[0].image;
        let id = document.getElementById("ship_id");
        id.textContent = "Ship id : " + dataValue[0].ship_id;
        let name = document.getElementById("ship_name");
        name.textContent = "Ship name : " + dataValue[0].ship_name;
        let mission = dataValue[0].missions[0].name;
        console.log(mission)
        let goal = document.getElementById('missions');
        goal.textContent = "Missions : " +  mission;
        
        // final.innerHTML = `<h1>${dataValue[0].ship_name}</h1>`;
        // final.innerHTML = `<h2>${dataValue[0].ship_type}</h2>`;
      });
    })
    .catch(err => console.log(err));
}
// let abc = async () => {
//     let new1 = await window.fetch("./JSON/data1.json");
//     let final = await new1.json();
//     console.log(final);
//     for (val of final) {
//         element.innerHTML = `${element.innerHTML}<option value="">${val}</option>`;
//     }
// }
// abc();
