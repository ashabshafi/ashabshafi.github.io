let searchBtn =document.querySelector('#searchBtn');
let searchUser=document.querySelector('#searchUser');
let clearBtn2=document.querySelector('#clearButton');
let ui= new UI();
clearBtn2.addEventListener('click',function()
{
    searchUser.value="";
});
searchBtn.addEventListener('click', (e) => {
    let userText=searchUser.value;
    if(userText !=''){
        //alert(userText);
        //fetch-api
        fetch(`https://api.github.com/users/${userText}`)
        .then(result =>result.json())
        .then(data =>{
            //alert(data);
            if(data.message == 'Not Found')
            {
                //alert
                ui.showAlert("user not found", "alert alert-danger");
            }
            else
            {
                ui.showProfile(data);
            }
           
        })}
        else
        {
            //cler prp
            ui.clearProfile();
        }
    
    });