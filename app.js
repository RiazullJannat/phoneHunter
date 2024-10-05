const loader=document.getElementById('loader');
const mainURL= " https://openapi.programmingd-hero.com/api/phones?search="
const search=document.getElementById('search-field');
const showAll=document.getElementById('show-all');
const noFound=document.getElementById('no-found-message');
const phonesContainer=document.getElementById('phones-container');
const allPhonesContainer=document.getElementById('all-phones-container');


const loadAllPhons=async ()=>{
    console.log("wow 3 second gone...");
    let searchValue=search.value;
    let finalURL=`${mainURL}${searchValue}`;
    try{
        let res= await (await(fetch(finalURL))).json();
        let sixPhones=res.data.slice(1, 7);
        if(res.status){
            noFound.classList.add('d-none');
            sixPhones.forEach(element => {
                console.log(element)
                phonesContainer.innerHTML+=`
                <div class="card" style="width: 18rem;">
                    <img src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.phone_name}</h5>
                        <p class="card-text">${element.slug}</p>
                        <a href="#" class="btn btn-primary">Show details</a>
                    </div>
                </div>
                `
            });
            showAll.classList.remove('d-none');        
            showAll.addEventListener('click',()=>{
                phonesContainer.classList.add('d-none');
                res.data.forEach(element=>{
                    allPhonesContainer.innerHTML+=`
                    <div class="card" style="width: 18rem;">
                        <img src="${element.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.phone_name}</h5>
                            <p class="card-text">${element.slug}</p>
                            <a href="#" class="btn btn-primary">Show details</a>
                        </div>
                    </div> `
                })
                allPhonesContainer.classList.toggle('d-none');
            })
        } else{
            noFound.classList.remove('d-none');
            showAll.classList.add('d-none');
        }
        loader.classList.add('d-none');
    }
    catch(error){
        alert(error)
    }
    
}




const handleSearch=()=>{
    loader.classList.remove('d-none');
    setTimeout(()=>{
        loadAllPhons();
    },3000);
}

document.getElementById('btn-search').addEventListener('click',handleSearch);