const IP="192.168.200.4";
const PORT=3001;
const URL="http://"+IP+":"+PORT+"/";


export const  getAllLaptops=(fnRefreshList)=>{
    fetch(
        URL+"laptops"
    ).then(
        (response)=>{ return response.json()}
    ).then(
        (body)=>{ 
            fnRefreshList(body);
        }
    ); 
}

export const saveLaptopRest=(laptop,fnShowMessage)=>{
    const config={
        method:"POST",
        headers:{ "Content-Type": "application/json"},
        body:JSON.stringify({
            marca:laptop.marca,
            procesador:laptop.procesador,
            memoria:laptop.memoria,
            disco:laptop.disco
        })
    }
        fetch(
            URL+"laptops",config
        ).then(response=>response.json())
        .then((body)=>{ 
            fnShowMessage("Se creó un nuevo registro");
            console.log(body);
    
        });
    }

    export const updateLaptopRest=(laptop,fnShowMessage)=>{
        const config={
            method:"PUT",
            headers:{ "Content-Type": "application/json"},
            body:JSON.stringify({
                id:laptop.id,
                marca:laptop.marca,
                procesador:laptop.procesador,
                memoria:laptop.memoria,
                disco:laptop.disco
            })
        }
            fetch(
                URL+"laptops/"+laptop.id,config
            ).then(response=>response.json())
            .then((body)=>{ 
                fnShowMessage("Se actualizó el registro");
                console.log(body);
        
            });
        }

        export const deleteLaptopRest=(laptop,fnShowMessage)=>{
            const config={
                method:"DELETE"
            }
                fetch(
                    URL+"laptops/"+laptop.id,config
                ).then(response=>response.json())
                .then((body)=>{ 
                    fnShowMessage("Se ha eliminado la laptop");
                    console.log(body);
            
                });
            }