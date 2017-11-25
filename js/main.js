// /* CLASSES IN JAVASCRIPT EXAMPLE USE */
// class user{
//     constructor(f_name , l_name , password, email , phone_number){
//         this.f_name = f_name;
//         this.l_name = l_name;
//         this.password = password;
//         this.email = email;
//         this.phone_number = phone_number;
//         this.avatar = "http://wicklownews.net/wp-content/uploads/2015/08/Minion.jpg";
//     }
// }
//
// function get_info(){
//     let users = new user(document.getElementById("f_name").value , document.getElementById("l_name").value , document.getElementById("password").value,
//         document.getElementById("email").value , document.getElementById("phone_number").value ,
//     );
//     var el = document.querySelector('form');
//     var matches = el.querySelectorAll('input[name]');
//     for (var m = 0; m < users.length; m++){
//         var user_arr = users[m];
//     }
//     document.write(`
//            <table>
//                 <tr>
//
//                 </tr>
//            </table>
//     `)
// }



/* CLASSA CARE SE NUMESTE DEVELOPER
*
* cu constructor astfel incit obiectele care rezulta din aceasta clasa sa avem proprietatile
* nume prenume experienta salariu
*
* */

// class developer{
//     constructor(nume , prenume , experience , salary){
//         this.nume = nume;
//         this.prenume = prenume;
//         this.experience = experience;
//         this.salary = salary;
//     }
//     show_info(){
//         document.write(`
//             <table border="1px">
//                 <tr>
//                     <td>
//                         Nume
//                     </td>
//                     <td>
//                         ${this.nume}
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         Prenume
//                     </td>
//                     <td>
//                         ${this.prenume}
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         Experienta
//                     </td>
//                     <td>
//                         ${this.experience}
//                     </td>
//                 </tr>
//                 <tr>
//                      <td>
//                         Salariu
//                     </td>
//                     <td>
//                         ${this.salary}
//                     </td>
//                 </tr>
//             </table>
//         `)
//     }
// }
//
// var dev = new developer(prompt("Introduceti Numele dvs") , prompt("Introduceti Prenumele dvs."),
//             prompt("Introduceti experienta dvs") , prompt("Introduceti salariul dvs."));
// dev.show_info();


//
// class Image{
//     constructor(url , w, h){
//
//         //////////  Prototype //////
//         this.src = url;
//         this.width = w;
//         this.height = h;
//         //////////////////////////
//     }
//     show(){
//         document.write(
//             `
//                 <img src="${this.src} width='${this.width} height='${this.height}'"/>
//             `
//         )
//     }
//     ceva(){
//
//     }
//
// }
// /////////// Obiectul real
// var logo = new Image("https://soyeon12.files.wordpress.com/2013/07/dm2_minion_dave_020.jpg" , 120 , 60);
// var baner = new Image("https://www.independent.ie/incoming/article34320338.ece/ALTERNATES/h342/minions1.jpg" , 320 , 800);

// logo.show();
// baner.show();

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
        document.getElementById("trees").innerHTML = `
            <table border="1px">
                <tr> 
                    <th> 
                        Proprietatile bradului
                    </th>
                    <th> 
                        Valoarile
                    </th>
                </tr> 
                <tr> 
                    <td> 
                        Inaltimea bradului
                    </td>
                    <td> 
                        ${bradulet.inaltime}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Specia bradului
                    </td>
                    <td> 
                        ${bradulet.specie}
                    </td>
                </tr>
                 <tr> 
                    <td> 
                        Unde a fost crescut bradul
                    </td>
                    <td> 
                        ${bradulet.provenenta}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Culoarea bradului
                    </td>
                    <td> 
                        ${bradulet.culoare}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Virsta bradului
                    </td>
                    <td> 
                        ${bradulet.virsta}
                    </td>
                </tr>
                 <tr> 
                    <td> 
                        Pretul bradului
                    </td>
                    <td> 
                        ${bradulet.pret}
                    </td>
                </tr>
            </table>
            
            <table border="1px"> 
                <tr> 
                    <th> 
                        Proprietatile bradului
                    </th>
                    <th> 
                        Valoarile
                    </th>
                </tr>
                <tr> 
                    <td> 
                        Inaltimea bradului
                    </td>
                    <td> 
                        ${brad.inaltime}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Specia bradului
                    </td>
                    <td> 
                        ${brad.specie}
                    </td>
                </tr>
                 <tr> 
                    <td> 
                        Unde a fost crescut bradul
                    </td>
                    <td> 
                        ${brad.provenenta}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Culoarea bradului
                    </td>
                    <td> 
                        ${brad.culoare}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Virsta bradului
                    </td>
                    <td> 
                        ${brad.virsta}
                    </td>
                </tr>
                 <tr> 
                    <td> 
                        Pretul bradului
                    </td>
                    <td> 
                        ${brad.pret}
                    </td>
                </tr>
            </table>
            
            <table border="1px"> 
                 <tr> 
                    <th> 
                        Proprietatile bradului
                    </th>
                    <th> 
                        Valoarile
                    </th>
                </tr>
                <tr> 
                    <td> 
                        Inaltimea bradului
                    </td>
                    <td> 
                        ${brad_mare.inaltime}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Specia bradului
                    </td>
                    <td> 
                        ${brad_mare.specie}
                    </td>
                </tr>
                 <tr> 
                    <td> 
                        Unde a fost crescut bradul
                    </td>
                    <td> 
                        ${brad_mare.provenenta}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Culoarea bradului
                    </td>
                    <td> 
                        ${brad_mare.culoare}
                    </td>
                </tr>
                <tr> 
                    <td> 
                        Virsta bradului
                    </td>
                    <td> 
                        ${brad_mare.virsta}
                    </td>
                </tr>
                 <tr> 
                    <td> 
                        Pretul bradului
                    </td>
                    <td> 
                        ${brad_mare.pret}
                    </td>
                </tr>
            </table>
        `;

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

var bradulet = new Brad("185 cm" , "Pin" , "In sera" , "Verde imperial" , "1 ani" , "1200 lei");
var brad = new Brad("320 cm" , "Pin" , "In sera" , "Verde spanac" , "2.5 ani" , "2550 lei");
var brad_mare = new Brad("490 cm" , "Pin" , "In parc" , "Verde gazon" , "5 ani" , "3500 lei");


/* show facem la brad si sa se deseneze bradul prin document.write prin css  si sa fie identic cu parametrii care intra
*   la crearea obiectului
* */
bradulet.show_brad();
brad.show_brad();
brad_mare.show_brad();



