import PromptSync from "prompt-sync";

import { addAttivita,visualat,calcel,modific } from './index.js';
let prompt = PromptSync();

let a;

do {
    console.log("Scegli cosa vuoi fare");

    console.log(" 0=agiungi attivita, 1=cancelazione di attivita , 2=modifica di attivita,3=visualizzare le attivata" );
    a = prompt("");

    switch(a){
    
        case '0':{
        let name =prompt("Scrivi il nome di attivita = ");
        addAttivita(name);
        break;
            }
        case '1':
                {
                 let name12=prompt("Scrivi lo sport che vuoi eliminare = ");
                  calcel(name12);
              break;
                }
                case '2':
                    {
                let name3=prompt("Scriviv nome dello sport che voui madificare = ");
                let name4=prompt("scrivi la modifica = ");
                modific(name3,name4);
                    }
        case '3':
            {
        visualat();
        
        break;
            }
        }
}while(a!=4)


