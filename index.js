
let attivita =[];
/**
 * Aggiunge una nuova attività alla lista delle attività.
 * 
 * @function
 * @param {string} name - Il nome di attività da aggiungere.
 * @returns {void}
 */
function addAttivita(name)
{
attivita.push(name);
}
/**
 * Visualizza tutte le attività presenti nella lista.
 * 
 * @function
 * @returns {void}
 */

function visualat()
{
    for(let a=0;a<attivita.length;a++)
    {
        console.log((a+1) +"." +attivita[a]);
    }
}

/**
 * Elimina un'attività dalla lista.
 * Se  attività non esiste, stampa un messaggio di errore.
 * 
 * @function
 * @param {string} name - Il nome di attività da eliminare.
 * @returns {void}
 */
function calcel(name)
{
    let prova=true;
for(let a=0;a<attivita.length;a++)
{
    if(name==attivita[a])
    {
      attivita.splice(a,1);
      console.log("attivita e stata eliminata");
    }else{
    prova=false;
    }

}
if(prova==false)
{
    console.log("attivita non esiste");
}
}
/**
 * Modifica un'attività esistente.
 * Se l'attività non esiste, stampa un messaggio di errore.
 * 
 * @function
 * @param {string} name - Il nome di attività da modificare.
 * @param {string} name1 - Il nuovo nome di attività.
 * @returns {void}
 */
function modific(name,name1)
{
    let sc=false;
    for(let a=0;a<attivita.length;a++)
    {
        if(name==attivita[a])
            {   
              attivita[a]=name1;
            }else{
           sc=true;
            }
        
    }
    if(sc==true)
        {
            console.log("attivita non e stata trovata");
        }

}

export {addAttivita,visualat,calcel,modific};

