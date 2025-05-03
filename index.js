
let attivita =[];

function addAttivita(name)
{
attivita.push(name);
}
function visualat()
{
    for(let a=0;a<attivita.length;a++)
    {
        console.log((a+1) +"." +attivita[a]);
    }
}
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

export {addAttivita,visualat,calcel};

