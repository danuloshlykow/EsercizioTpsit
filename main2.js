import PromptSync from "prompt-sync";

import { addAttivita,visualat,calcel,modific } from './index.js';

/**
 * Crea una funzione con input
 * @type {Function}
 */
let prompt = PromptSync();

/**
 * Ciclo principale del programma che gestisce la scelta dell'utente.
 * 
 * Attende che l'utente scelga una delle opzioni: aggiungere, eliminare, modificare o visualizzare l'attività.
 * 
 * @returns {void}
 */

let a;

do {
    console.log("Scegli cosa vuoi fare ");

    console.log(" 0=agiungi attivita, 1=cancelazione di attivita , 2=modifica di attivita,3=visualizzare le attivata" );
    a = prompt("");

    switch(a){
    
        /**
         * Gestore per aggiungere una nuova attività.
         * 
         * @function
         * @returns {void}
         * @param {string} name -per aggiungere il nome di un'attività.
         */
        case '0':{
        let name =prompt("Scrivi il nome di attivita = ");
        addAttivita(name);
        break;
            }
             /**
         * Gestore per eliminare un'attività.
         * 
         * @function
         * @returns {void}
         *  @param {string} name12 -per elliminare un'attività .
         */
        case '1':
                {
                 let name12=prompt("Scrivi lo sport che vuoi eliminare = ");
                  calcel(name12);
              break;
                }
                  /**
         * Gestore per modificare un'attività.
         * 
         * @function
         * @returns {void}
         *  @param {string} name3 -per scegliere un'attivita per modificare .
         * @param {string} name4 -per inserire la modifica .
         */
                case '2':
                    {
                let name3=prompt("Scriviv nome dello sport che voui madificare = ");
                let name4=prompt("scrivi la modifica = ");
                modific(name3,name4);
                break;
                    }
                     /**
         * Gestore per visualizzare tutte le attività.
         * 
         * @function
         * @returns {void}
         */
        case '3':
            {
        visualat();
        
        break;
            }
        }
}while(a!=4)


