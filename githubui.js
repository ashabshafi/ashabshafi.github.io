class UI{
    constructor()
    {
        this.profile =document.querySelector("#profile");
    }
    
    showProfile(user)
    {   this.clearAlert();
        this.profile.innerHTML=`
        <div class="card caard-body mb-3>
        <div class="row>
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}"
        target=_blank" 
        class="btn btn-primary btn-block mb-4">view profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary">Public Repos: ${user.public_repos} </span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.following}</span>
        <br><br>
        <ul class="list-group">
        <li class="list-group-item">Company:${user.company}</li>
        <li class="list-group-item">Website/blog:${user.blog}</li>
        <li class="list-group-item">Location:${user.location}</li>
        <li class="list-group-item">Createdat:${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div> `;
    }
    clearProfile(){
        this.profile.innerHTML="";
    }
    showAlert(msg,class_Name){
        this.clearAlert();
        let div=document.createElement('div');
        div.className=class_Name;
        div.appendChild(document.createTextNode(msg));
        let container= document.querySelector('.searchContainer');
        let search= document.querySelector('.search');
        container.insertBefore(div,search);
    }
    clearAlert()
    {
        let currentAlert=document.querySelector(".alert");
        if (currentAlert)
        {
            currentAlert.remove();
        }
    }
}