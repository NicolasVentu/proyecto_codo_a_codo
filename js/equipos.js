
fetch('https://fakestoreapi.com/users?limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles").innerHTML=cad;
})
fetch('https://fakestoreapi.com/users?sort=desc&limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles2").innerHTML=cad;
})

fetch('https://fakestoreapi.com/users?limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles3").innerHTML=cad;
})


fetch('https://fakestoreapi.com/users?sort=desc&limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles4").innerHTML=cad;
})

fetch('https://fakestoreapi.com/users?limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles5").innerHTML=cad;
})
        
fetch('https://fakestoreapi.com/users?sort=desc&limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles6").innerHTML=cad;
})

fetch('https://fakestoreapi.com/users?limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles7").innerHTML=cad;
})       
 
fetch('https://fakestoreapi.com/users?sort=desc&limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles8").innerHTML=cad;
})       

fetch('https://fakestoreapi.com/users?sort=desc&limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles9").innerHTML=cad;
}) 

fetch('https://fakestoreapi.com/users?sort=desc&limit=9')
.then(response=>response.json())
.then(data=>{
     console.log(data)

     let cad=`<table class="planteles">
     <thead>
         <tr>
             <th colspan="5">plantel</th>
         </tr>
   
 
         <tr>
             <td>Pocision</td>
             <td>Nombre</td>
             <td>Goles</td>
             <td>Amariilas</td>
             <td>Rojas</td>
         </tr>
     </thead>

     `
     for(elemento of data){
        cad=cad+`
        <tbody>
    <tr>
    <td>${elemento.address.city}</td>
    <td>${elemento.name.firstname} ${elemento.name.lastname}</td>
    <td>${elemento.id}</td>
    <td>${elemento.address.number}</td>
    <td>${elemento.__v}</td>

    </tr>
           
    </tbody>

    `
     }

     cad=cad+`</table>`

    document.querySelector("#planteles10").innerHTML=cad;
}) 