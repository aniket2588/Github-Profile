const url = "https://api.github.com/users/"
const main = document.querySelector("#main")
const searchbox=document.querySelector("#search")

const getuser = async (username) => {
    const response = await fetch(url + username)
    const data = await response.json()
    console.log(data);

    const card = `
<div class="card">

            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin-pop" >
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>
                <div class="repos">
                  
                </div>

            </div>
        </div>
`
main.innerHTML=card

getRepos(username)
}

getuser("a")

const getRepos=async (username)=>{  
    const repos = document.querySelector(".repos")
        const response= await fetch(url+username+"/repos") 
        const data=await response.json()
        console.log(data);

        data.forEach((items)=>{
               const elemt=document.createElement("a")
               elemt.classList.add("repo")
               elemt.setAttribute("href",items.html_url)
               elemt.innerHTML=items.name
               elemt.target="_blank";
               repos.appendChild(elemt)
               console.log(elemt);
        });
}


const formsubmit= ()=>{
    if(searchbox.value != ""){
    getuser(searchbox.value)
searchbox.value=""
    }

    return false
}

searchbox.addEventListener("focusout",function(){
    formsubmit()
})
{/* <a class="repo" target="_blank" href="#">Repo 1</a>
<a class="repo" target="_blank" href="#">Repo 2</a>
<a class="repo" target="_blank" href="#">Repo 3</a> */}