import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userData: any;

  constructor(private fireauth : AngularFireAuth, private router : Router) { 

    // this.fireauth.authState.subscribe((user) => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user')!);
    //   } else {
    //     localStorage.setItem('user', 'null');
    //     JSON.parse(localStorage.getItem('user')!);
    //   }
    // });
  }

  printall() {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
      this.userData = user;
           localStorage.setItem('user', JSON.stringify(this.userData));
           let data = JSON.parse(localStorage.getItem('user')!);

          //  this.fireauth.currentUser.reload();

          // user.reload();

          // this.fireauth.onIdTokenChanged(function (user) {
          //   if (user && user.uid) {
          //     if (user.emailVerified) {
          //      //Stuff you want to do
          //     }
          //   }
          // })

       

           console.log(this.isLoggedIn());
           console.log(data);
      }
    });
  }

// login(email : string , password : string) {

//   return this.fireauth
//   .signInWithEmailAndPassword(email, password)
//   .then((result) => {
//     this.userData(result.user);
//     this.fireauth.authState.subscribe((user) => {
//       if (user) {
//         this.router.navigate(['home']);
//       }
//     });
//   })
//   .catch((error) => {
//     // window.alert(error.message);
//     window.alert("this aint working");
    
//   });

  login(email : string , password : string) {

    this.fireauth.authState.subscribe((user) => {
      if (user) {
      this.userData = user;
           localStorage.setItem('user', JSON.stringify(this.userData));
           let data = JSON.parse(localStorage.getItem('user')!);
      }
    });
    
  this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
    // localStorage.setItem('user', email);

   
    
    this.router.navigate(['home']);
  }, err => {
    alert('Invail Email or Password');
    
  })
   
}


register(email : string , password : string) {
  this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
    this.router.navigate(['/login']);
    alert('Regsistration Successful!');
  }, err => {
    alert(err.message);
    this.router.navigate(['/login']);
  })

}

logout() {
  this.fireauth.signOut().then( () => {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
    
  })

}

isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user')!);
  return user !== null ? true : false;
}

// isLoggedIn(): boolean {
//   const user = JSON.parse(localStorage.getItem('currentuser')!);
//   return user !== null && user.emailVerified !== false ? true : false;
// }

}