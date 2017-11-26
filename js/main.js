/* CLASSES IN JAVASCRIPT EXAMPLE USE */
class user{
    constructor(f_name , l_name , password, email , phone_number){
        this.f_name = f_name;
        this.l_name = l_name;
        this.password = password;
        this.email = email;
        this.phone_number = phone_number;
        this.avatar = "http://wicklownews.net/wp-content/uploads/2015/08/Minion.jpg";
    }
}

function get_info(){
    let users = new user(document.getElementById("f_name").value , document.getElementById("l_name").value , document.getElementById("password").value,
        document.getElementById("email").value , document.getElementById("phone_number").value ,
    );
    var el = document.querySelector('form');
    var matches = el.querySelectorAll('input[name]');
    for (var m = 0; m < users.length; m++){
        var user_arr = users[m];
    }
    document.write(`
           <table>
                <tr>

                </tr>
           </table>
    `)
}

class developer{
    constructor(nume , prenume , experience , salary){
        this.nume = nume;
        this.prenume = prenume;
        this.experience = experience;
        this.salary = salary;
    }
    show_info(){
        document.write(`
            <table border="1px">
                <tr>
                    <td>
                        Nume
                    </td>
                    <td>
                        ${this.nume}
                    </td>
                </tr>
                <tr>
                    <td>
                        Prenume
                    </td>
                    <td>
                        ${this.prenume}
                    </td>
                </tr>
                <tr>
                    <td>
                        Experienta
                    </td>
                    <td>
                        ${this.experience}
                    </td>
                </tr>
                <tr>
                     <td>
                        Salariu
                    </td>
                    <td>
                        ${this.salary}
                    </td>
                </tr>
            </table>
        `)
    }
}

var dev = new developer(prompt("Introduceti Numele dvs") , prompt("Introduceti Prenumele dvs."),
            prompt("Introduceti experienta dvs") , prompt("Introduceti salariul dvs."));
dev.show_info();



class Image{
    constructor(url , w, h){

        //////////  Prototype //////
        this.src = url;
        this.width = w;
        this.height = h;
        //////////////////////////
    }
    show(){
        document.write(
            `
                <img src="${this.src} width='${this.width} height='${this.height}'"/>
            `
        )
    }
    ceva(){

    }

}
/////////// Obiectul real
var logo = new Image("https://soyeon12.files.wordpress.com/2013/07/dm2_minion_dave_020.jpg" , 120 , 60);
var baner = new Image("https://www.independent.ie/incoming/article34320338.ece/ALTERNATES/h342/minions1.jpg" , 320 , 800);

logo.show();
baner.show();

class Brad{
    constructor(height , specie , provenenta , culoare, virsta, pret){
        this.inaltime = height;
        this.specie = specie;
        this.provenenta = provenenta;
        this.culoare = culoare;
        this.virsta = virsta;
        this.pret = pret;
    }
    show_brad(){

        document.getElementById("trees").innerHTML += `
            <div class="fir">
                <div class="fir__item"></div>
                <div class="fir__item"></div>
                <div class="fir__item"></div>
              
                <div class="fir__log"></div>
                
                <div class="orbs orbs-1"></div>
                <div class="orbs orbs-2"></div>
                <div class="orbs orbs-3"></div>
                <div class="orbs orbs-4"></div>
            </div>
        `;

        

        document.getElementById("trees").innerHTML += `
            <div class="fir2">
                <div class="fir__item2 fir__item"></div>
                <div class="fir__item2 fir__item"></div>
                <div class="fir__item2 fir__item"></div>
              
                <div class="fir__log2"></div>
                
                <div class="orbs2 orbs-5"></div>
                <div class="orbs2 orbs-6"></div>
                <div class="orbs2 orbs-7"></div>
                <div class="orbs2 orbs-8"></div>
            </div>
        `;

        document.getElementById("trees").innerHTML += `
            <div class="fir3">
                <div class="fir__item3 fir__item"></div>
                <div class="fir__item3 fir__item"></div>
                <div class="fir__item3 fir__item"></div>
              
                <div class="fir__log3"></div>
                
                <div class="orbs3 orbs-9"></div>
                <div class="orbs3 orbs-10"></div>
                <div class="orbs3 orbs-11"></div>
                <div class="orbs3 orbs-12"></div>
            </div>
        `;

    }
}

var bradulet = new Brad(prompt("Scrieti inaltimea primului brad") , prompt("Scrieti specia primului brad") ,
    prompt("Scrieti locul in care a fost crescut primul brad") , prompt("Scrieti culoarea primului brad") ,
    prompt("Scrieti virsta primului brad") , prompt("Scrieti pretul primului brad"));
var brad = new Brad(prompt("Scrieti inaltimea la al doilea brad") , prompt("Scrieti specia la al doilea brad") ,
    prompt("Scrieti locul in care a fost crescut al doilea brad") , prompt("Scrieti culoarea la al doilea brad") ,
    prompt("Scrieti virsta la al doilea brad") , prompt("Scrieti pretul la al doilea brad"));
var brad_mare = new Brad(prompt("Scrieti inaltimea la al treilea brad") , prompt("Scrieti specia la al treilea brad") ,
    prompt("Scrieti locul in care a fost crescut al treilea brad") , prompt("Scrieti culoarea la al treilea brad") ,
    prompt("Scrieti virsta la al treilea brad") , prompt("Scrieti pretul la al treilea brad"));

bradulet.show_brad();
brad.show_brad();
brad_mare.show_brad();



