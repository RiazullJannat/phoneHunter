const loader=document.getElementById('loader');
const mainURL= " https://openapi.programming-hero.com/api/phones?search="
const search=document.getElementById('search-field');
const showAll=document.getElementById('show-all');
const noFound=document.getElementById('no-found-message');


const loadAllPhons=async ()=>{
    console.log("wow 3 second gone...");
    let searchValue=search.value;
    let finalURL=`${mainURL}${searchValue}`;
    let res= await (await(fetch(finalURL))).json()
    console.log(res.status);
    if(res.status){
        showAll.classList.remove('d-none');
        noFound.classList.add('d-none');
        showAll.addEventListener('click',()=>{
            console.log(res.data);
        })
    } else{
        noFound.classList.remove('d-none');
        showAll.classList.add('d-none');
    }
    console.log((res.data).slice(1,7));
    loader.classList.add('d-none');
}




const handleSearch=()=>{
    
    loader.classList.remove('d-none');


    setTimeout(()=>{
        loadAllPhons();
    },3000)
}

document.getElementById('btn-search').addEventListener('click',handleSearch);