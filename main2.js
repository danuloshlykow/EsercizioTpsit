import PromptSync from "prompt-sync";

import { addAttivita,visualat } from './index.js';
let prompt = PromptSync();

let a;

do {
    console.log("Scegli cosa vuoi fare");

    console.log(" 0=agiungi attivita, 1=cancelazione di attivita , 2=modifica di attivita,3=visualizzare le attivata" );
    a = prompt("");

    switch(a){
    
        case '0':{
        let name =prompt("Ведите название активности = ");
        addAttivita(name);
        break;
            }
        case '3':
            {
        visualat();
        
        break;
            }
        }
}while(a!=4)


