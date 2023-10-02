//  There are two types of memory location in javaScrip.

// (1) Stack(premitive data type)    ||    (2)  Heap(non premitive data type)

                 // Exmples are as follows

                  // Stack( copy  the location)
               let myFirstName= "sami" ;
               
               let mySecondName= myFirstName;

               myFirstName= "Asad"

               console.log(myFirstName);
               console.log(mySecondName);


               // Heap (call by refference)

              let userOne= {

               userEmail: "sami@gmail.com" ,
                name: " sami"
              }

              let userTwo= userOne;

              userTwo.userEmail= "asad@hmail.com"

                console.log(userOne.userEmail);
                console.log(userTwo.userEmail);




