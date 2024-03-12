let id_form = document.getElementById("id_form");
let activity_name = document.getElementById("activity_name");
let activity_note = document.getElementById("activity_note");
let img_Approved = '<img src="./images/aprovado.png" alt="Emoji Celebrando"/>';
let img_Reproved = '<img src="./images/reprovado.png" alt="Emoji Triste"/>';
let activity = [];
let notes = [];
let lines = '';
let minNote = prompt("Digite a Nota mínima:")



id_form.addEventListener("submit", function(e){;
    e.preventDefault();
    addlines()
    update_note()

})

function addlines(){

    if(activity.includes(activity_name.value)){
        alert(`A atividade: ${activity_name.value} já foi inserida.`)

        activity_name.value = "";
        activity_note.value = "";

    }else{
        
        activity.push(activity_name.value)
        notes.push(parseFloat(activity_note.value))
       
        let line = `<tr>
                        <td>${activity_name.value}</td>
                        <td>${activity_note.value}</td>
                        <td>${activity_note.value >= minNote ? img_Approved : img_Reproved}</td>
                    </tr>`;
        lines += line;

        update_table()
    }

};

function update_table(){
    let body_table = document.querySelector("tbody");
    body_table.innerHTML = lines; 
   
    activity_name.value = "";
    activity_note.value = "";

};

function update_note() {
    let average_final = calculate_average();

    document.getElementById("average_final_note").innerHTML = average_final;

    let resul2 = document.getElementById("average_final_result");

    
    if (average_final >= minNote) {
       
        resul2.innerHTML = "Aprovado";
        resul2.style.backgroundColor = "green";
        resul2.style.color = "#fff";
        resul2.style.padding = "0px";
        resul2.style.fontWeight = "bold";
        resul2.style.borderRadius = "3px";
        resul2.style.width= "10px"
    } else {
        resul2.innerHTML = "Reprovado";
        resul2.style.backgroundColor = "red";
        resul2.style.color = "#fff";
        resul2.style.padding = "0px";
        resul2.style.fontWeight = "bold";
        resul2.style.borderRadius = "3px";
        resul2.style.width= "10px"
    }
};


function calculate_average(){
    let sum_notes = 0
    
    for(i = 0; i < notes.length; i++)
        sum_notes += notes[i]
        return sum_notes / notes.length
};
    

