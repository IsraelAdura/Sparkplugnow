(function(){  
            new Awesomplete(nameStr, {
            list: ["Israel", "David", "Chidera", "Memuna", "Afeez", "Alex", "Zubair","Suleiman", "Tobi","Stephen","Lekan","Olumide","Adewumi","Adura","Popoola","Haruna","Okehi","Obadina","Santos","Ojo","Omoniyi","Nnakwue","Aruna","Bashiru"]
             });

        (function(){
            var meetSpark=document.getElementById("sparkConnect");
            var sosIcons =meetSpark.getElementsByTagName("img") 
            var favIcons =meetSpark.getElementsByClassName("fa");                 
            var connect=document.getElementById("toSpark");

            connect.addEventListener('click',function(){
            sosIcons[0].className="animated infinite fadeIn";
            favIcons[0].className="fa fa-twitter-square animated infinite zoomIn";
            favIcons[1].className="fa fa-github-square animated infinite fadeIn";
           });
          }());  


            //slide show

            var image=document.getElementsByTagName("img");
            var images = ["images/sparkstudents.jpg","images/israel.jpg","images/david.jpg","images/memuna.jpg","images/lekan.jpg","images/chidera.jpg","images/afeez.jpg","images/stephen.jpg","images/zubair.jpg","images/tobi.jpg","images/sule.jpg","images/alex.jpg","images/olumide.jpg"];
            var image1= image[0];
            var count = 1;
            function slideImages(){
                image1.src = images[count];
                count++
                if (count >= images.length){
                    count = 0;
                }
            } 
            var startSlideshow = setInterval(slideImages,3000);

            function stopSlide(){
                clearInterval(startSlideshow); 
             };
            // Person constructor
            function Person(myname,skills,contact,about){
                    this.myname = myname;
                    this.skills =skills;
                    this.contact =contact;
                    this.about =about;

                }

            var israel = new Person("Israel Adura","Full stack developer(Trainee)<br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT<br>Jquery<br>Java","israeladura@hotmail.com<br>israeladura@gmail.com<br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)8100160703</em><br><ul class='list-inline list-unstyled'><li><a href='https://www.github.com/IsraelAdura'><img src ='images/git.png'></a><li><a href='http://bit.ly/2lsTl3r'><img src ='images/linkedin.png'></a></li> <li><a href='https://facebook.com/israel.adura.7'><img src ='images/facebook.png'></a></li>  <li><a href='https://twitter.com/aduraisrael'><img src ='images/twitter.png'></a></li>","Israel Adura is a web and app developer,Tech enthusiast and a microbiologist.<br>Purpose driven and goal oriented he looks at the world from lenses tinted with positivity.<br>With huge interest in the enthralling worlds of computers,astronomy,and literature,he always has new things to explore,learn and enjoy.He likes taking up new challenges,and achieving positive results,as a good challenge solved makes one even better!");

            var david = new Person("David Popoola","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT<br>Jquery,<br>Node.Js<br>PHP<br>App Development","davieedpopoola@gmail.com<br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)8124916894</em><br><ul class='list-inline list-unstyled'><li><a href='https://www.github.com/DavidPops'><img src ='images/git.png'></a><li><li><a href='https://facebook.com/thedavidpopoola'><img src ='images/facebook.png'></a></li>  <li><a href='https://twitter.com/thedavidpopoola'><img src ='images/twitter.png'></a></li>"," David is a young adult, passionate about building the future of Africa and the world with tech.<br> He believes that the future should not only be built in Silicon Valley, but also right here from the heart of Africa, right here in Lagos, Nigeria. "); 

            var memuna = new Person ("Haruna Memuna","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT<br>Jquery,<br>Java<br>SQL<br>Ember.js","mmharuna16@gmail.com <br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)7030579464</em><br><ul class='list-inline list-unstyled'><li><a href='https://www.github.com/Memuna01'><img src ='images/git.png'></a></li><li><a href='https://linkedin.com/memuna-ojonugwa-haruna'><img src ='images/linkedin.png'></a></li><li><a href='https://facebook.com/memuna.haruna.73?_rdr'><img src ='images/facebook.png'></a></li>  <li><a href='https://twitter.com/HMemuna'><img src ='images/twitter.png'></a></li>","An Electrical/Electronics Engineer from the prestigious ,federal university of technology Minna(FUTMINNA)<br>Memuna is a lady who is deeply fascinated with coding and everything software related ,and seeks to hugely impact the society positivity through technology.");

            var lekan = new Person ("Omoniyi Lekan","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT","lekanomoniyi@yahoo.com<br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)8157322146</em><br><ul class='list-inline list-unstyled'><li><a href='https//:www.github.com/thislekan'><img src ='images/git.png'></a></li>  <li><a href='https://twitter.com/thislekan'><img src ='images/twitter.png'></a></li>","Lekan Omoniyi is an Electrical Engineering graduate, a former Telecommunication Engineer<br>who picked an interest in programming, with a burning passion to learn software development.");

            var chidera = new Person ("Chidera Okehi","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT","<i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)9091988828</em><br><ul class='list-inline list-unstyled'><li><a href='https//:facebook.com/'><img src ='images/facebook.png'></a></li>  <li><a href='https://twitter.com/chiideera'><img src ='images/twitter.png'></a></li>","A content developer and manager,Chidera is very passionate about information and information technology and how it affects the society,she is on a journey of self discovery,and wants to become a software developer");   

            var afeez = new Person ("Afeez Aruna","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT<br>Python","<i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)7063016920</em><br/><ul class='list-inline list-unstyled'><li><a href='https//:www.github.com/arunaafeez'><img src ='images/git.png'></a></li>  <li><a href='https//:linkedin.com/arunaafeez'><img src ='images/linkedin.png'></a></li> <li><a href='https://facebook.com/lilfizco'><img src ='images/facebook.png'></a></li>  <li><a href='https://twitter.com/hancho_aa'><img src ='images/twitter.png'></a></li>","Tech nerd and very addictive to learning new things,Afeez is very aware of his immediate environment which classes him as an observative person. He is an introvert, but can easily switch when need be,The last version, being his passion about leadership development in youths. This has lead him through several organizations,e.g. AIESEC,Common Purpose Organization,UK."); 

            var stephen = new Person ("Stephen Ojo","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT","ojboy42@yahoo.com<br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)8107441596</em><br><ul class='list-inline list-unstyled'><li><a href='https://github.com/Ripplz'><img src ='images/git.png'></a></li> <li><a href='https://linkedin.com/in/stephen-ojo-5a4734119/'><img src ='images/linkedin.png'></a></li> <li><a href='https://facebook.com/ojo.ripplz'><img src ='images/facebook.png'></a></li>  <li><a href='https://twitter.com/_ripplz'><img src ='images/twitter.png'></a></li>","A Unilag undergraduate studying Computer Engineering and hoping to create code that would change the world; in the future that is.<br>Tech Writer at <a href='http://techlector.com' target='blank'> TechLector</a>"); 

            var zubair = new Person ("Zubair Santos","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT","<i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)9097343064</em><br><ul class='list-inline list-unstyled'><li><a href='https://facebook.com/'><img src ='images/facebook.png'></a></li>  <li><a href='https://twitter.com/zubairthedream'><img src ='images/twitter.png'></a></li>","Zubair, a university of lagos trained medical practitioner,is passionate about coding and how it can be utilized in solving problems in the society ,especially in the health sector  ");    

            var tobi= new Person("Obadina Tobi","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT<br>Python","brielview@yahoo.com<br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)8189732723</em><br><ul class='list-inline list-unstyled'><li><a href='https://facebook.com/'><img src ='images/facebook.png'></a></li>  <li><a href='https://twitter.com/brielview'><img src ='images/twitter.png'></a></li>","Tobi,is very passsionate about coding and seeks to develop software and contribute to technology that will impact the society positivity"); 

            var alex = new Person ("Alexander Nnakwue","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT","alex.nnakwue@gmail.com<br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)</em><br><ul class='list-inline list-unstyled'><li><a href='https://github.com/firebase007'><img src ='images/git.png'></a></li>  <li><a href='https://linkedin.com/in/alexander-nnakwue'><img src ='images/linkedin.png'></a></li> <li><a href='https://facebook.com/account/alexanderchinedu'><img src ='images/facebook.png'></a></li> <li><a href='https://twitter.com/chukwunedum_'><img src ='images/twitter.png'></a></li>","With a background in Mechanical engineering from Nigeria's foremost and prestigious University of Ibadan, Ibadan. <br>Alex is passionate and enthusiastic about new technology and the internet of things.<br> One of his reasons for going this path is to build on his problem solving abilities and in the process harness the beauty of technology.<br>Also, he has been learning how to write, and hopes that one day he would make a great writer.<br>He hopes to develop the neccessary skills needed to build a professional portfolio as a software engineer and would also love to contribute to open source projects");

            var sule= new Person("Suleiman Bashiru","Full stack developer(Trainee) <br>HTML/CSS<br>BOOTSTRAP<br>JAVASCRIPT","kayusbash@gmail.com<br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+(234)8080662649</em><br><ul class='list-inline list-unstyled'><li><a href='https://github.com/suleimanbashiru'><img src ='images/git.png'></a></li> <li><a href='https://linkedin.com/in/suleimanbashiru'><img src ='images/linkedin.png'></a></li><li><a href='https://twitter.com/S__bashiru'><img src ='images/twitter.png'></a></li>","Enthusiastic about coding and wishes to use software and technology to achieve positive change");  

             var olumide = new Person ("Adewumi Olumide<br/><span style='color:#deae20; font-style:italic;font-weight:normal;font-family:courier new,courier,monospace;'>Founder</span>","Web developer<br>Project Manager<br>Software Developer<br>App Developer<br/>Software Consultant,<br>Everything information Technology","sparkplugnow@gmail.com<br><i style='padding-right:10px;'><img src = 'images/fone.png' height='15px' width='15px'></i><em>+1(647)9075461</em><br><ul class='list-inline list-unstyled'><li><a href='https://linkedin.com/in/olumide-adewumi-10351a26'><img src ='images/linkedin.png'></a></li>  <li><a href='https://twitter.com/olumide'><img src ='images/twitter.png'></a></li>","Olumide Adewumi,<br>Learner + Teacher + Gidilounge + Sparkplug<br>@olumide is one of Nigeria's leading Techpreneur,he is the CEO,  <a href='http://gidilounge.com' target='blank'> Gidilounge</a> and Founder/president of <a href='http://sparkplugnow.com' target='blank'> Sparkplugnow</a> ,a social enterprise aimed at fixing education with code.<br>Olumide is passionate about using techology to solve problems in the society.");

                //variables
            var Pskills= document.getElementById("Pskills");
            var Pname= document.getElementById("Pname");
            var Pabout= document.getElementById("Pabout");
            var Pcontact= document.getElementById("Pcontact");
            var message= document.getElementById("message");
            var button= document.getElementById("button");
            var image= document.getElementsByTagName("img")[0];
            var form=document.getElementsByTagName('form')


       // form.onsubmit= function(e){

            
         button.onclick= function(e){
             e.preventDefault(e);
                     //if name entered
                group(["ISRAEL","ADURA","ICODE"],israel,"israel");
                group(["DAVID","POPOOLA"],david,"david");
                group(["MEMUNA","HARUNA"],memuna,"memuna");
                group(["LEKAN","OMONIYI"],lekan,"lekan");
                group(["CHIDERA","OKEHI"],chidera,"chidera");
                group(["AFEEZ","HARUNA"],afeez,"afeez");
                group(["STEPHEN OJO"],stephen,"stephen");
                group(["TOBI","OBADINA"],tobi,"tobi");
                group(["ZUBAIR","SANTOS"],zubair,"zubair");
                group(["SULE","SULEIMAN"],sule,"sule");
                group(["ALEX","NNAKWUE"],alex,"alex");
                group(["OLUMIDE","ADEWUMI"],olumide,"olumide");

                    //if no name entered,or number entered
                group2(["",name*1,]);

        }
            //display function
        function group(id,person,string){  
            var nameStr= document.getElementById("nameStr");
            var name =nameStr.value.toUpperCase();
            var image= document.getElementsByTagName("img")[0];
            var content=document.getElementById("content");
            stopSlide();
            id.map(function(ext){
                if (name == ext){
                    image.src = "images/" + string + ".jpg";
                    content.style.display ="block";
                    Pname.innerHTML = person.myname;  
                    Pcontact.innerHTML = person.contact; 
                    Pskills.innerHTML = person.skills;
                    Pabout.innerHTML=person.about; 
                    message.innerHTML = " ";
                    }
                })                            
             }
                             
        function group2(id){  
            var nameStr= document.getElementById("nameStr");
            var name =nameStr.value.toUpperCase();
            var image= document.getElementsByTagName("img")[0];
            var content=document.getElementById("content");
            stopSlide();
            id.map(function(ext){
                if (name == ext){
                    Pname.innerHTML = "";
                    image.src = "images/profile.png";
                    content.style.display ="none";
                    message.style.color = "red";
                    message.innerHTML = " Please enter a Name";
                        }
                    })               
                }
            //button.addEventListener('click',function(){        
        function dropdown(person,string){  
            stopSlide();
            var image= document.getElementsByTagName("img")[0];
            var content=document.getElementById("content");
            image.src = "images/" + string + ".jpg";
            content.style.display ="block";
            Pname.innerHTML = person.myname;  
            Pcontact.innerHTML = person.contact; 
            Pskills.innerHTML = person.skills;
            Pabout.innerHTML=person.about; 
            message.innerHTML = " ";
            
            }
                                  
            var div=document.querySelectorAll('.div');

            div[0].addEventListener('mouseover',function(){
            dropdown(israel,"israel");
            });  
            div[1].addEventListener('mouseover',function(){ 
            dropdown(david,"david");
            });  
            div[2].addEventListener('mouseover',function(){
            dropdown(memuna,"memuna");
            });
            div[3].addEventListener('mouseover',function(){
            dropdown(chidera,"chidera");
            });
            div[4].addEventListener('mouseover',function(){
            dropdown(tobi,"tobi");
            });
            div[5].addEventListener('mouseover',function(){
            dropdown(zubair,"zubair");
            });
            div[6].addEventListener('mouseover',function(){
            dropdown(stephen,"stephen");
            });
            div[7].addEventListener('mouseover',function(){
            dropdown(lekan,"lekan");
            });
            div[8].addEventListener('mouseover',function(){
            dropdown(alex,"alex");
            });
            div[9].addEventListener('mouseover',function(){
            dropdown(sule,"sule");
            });
            div[10].addEventListener('mouseover',function(){
            dropdown(afeez,"afeez");
            });
            div[11].addEventListener('mouseover',function(){
            dropdown(olumide,"olumide");
            });

                                                       
}());