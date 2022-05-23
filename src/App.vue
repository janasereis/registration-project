<template>
  <div id="app">
    <form @submit="login" >
    <input class="email" type="text" v-model="name" placeholder="Email or phone number"/>
    <br>
    <input class="email" type="password" v-model="password" placeholder="Password"/>
    <br>
    <button  type="submit">Log In</button><br>
      <div class="validation">
         <h3 v-for="e in error" v-bind:key="e.id">
           {{e}}
         </h3>
       </div>
    <router-link class="f-pws" to="#">Forget Password?</router-link>
    <br>
    <div class="line"></div>
    <br>
    <button type="button" class="btn2" @click="() => TogglePopup('buttonTrigger')" > Create new account </button>
  </form>
  

  <div class="f-container">
    <img src="./assets/Facebook.png" alt="facebook">
    <p>Connect with friends and the world around you on Facebook.</p>
  </div>

  <div class="sub-link">
     <h3><router-link class="rlink" to="">Create a Page </router-link> for a celebrity, band or business.</h3>
  </div>
<!--signup component-->
    <Signup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
      
    </Signup>
    
<!--footer component-->
    <Footer/>
  </div>
</template>


<script>

import Footer from './components/Footer.vue'
import Signup from './components/Signup.vue'
import {ref} from 'vue'

export default {
  name:'app',
  components:{
    Footer,
    Signup
  },
  setup() {
    const popupTriggers = ref({
      buttonTrigger:false,
     
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
    return {
     Signup,
     popupTriggers,
     TogglePopup
    }
  },
  
  data() {
   return {
     error:[],
     name:null,
     password:null,
     maxChars:8,
   }
 },
 methods: {
   login(e)
   {
     if(this.name && this.password) {
       console.log("login is done")
     }
     this.error=[];

     if(!this.name){
       this.error.push("Email required");
     }
     if(!this.password){
       this.error.push("Password required");
     }
       if(this.password && this.password.length > this.maxChars){
         this.error.push(`Password cant be more than  ${ this.maxChars}  characters`);
     }
     console.warn("errors",this.error);
     e.preventDefault();
   }
 }

}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f0f2f5;
}

*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
}

body{
  width: 100%;
  background-color: #f0f2f5;
  
}
form{
  background-color: #fff;
  position: absolute;
  width: 320px;
  height: 300px;
  padding: 10px 5px 20px 5px;
  margin: 10vh 850px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  top: 55px;
   
}

input[type='password'] {
  display: block;
  background-color: #fff;
  margin: auto;
  border: 1.5px solid rgb(200,200,200);
  width: 200px;
  padding: 10px 40px;
  border-radius: 5px;
  color: rgb(92, 92, 92);
  font-family: 'segoe UI';
  font-size: 15px;
  text-align: left;
}
.email {
  display: block;
  background-color: #fff;
  margin: auto;
  border: 1.5px solid rgb(200,200,200);
  width: 200px;
  padding: 10px 40px;
  border-radius: 5px;
  color: black;
  font-family: 'segoe UI';
  font-size: 15px;
  text-align: left; 
}

button[type='submit']{
  border: none;
  background-color: #1877f2;
  color: white;
  margin: auto;
  width: 283px;
  display: block;
  border-radius: 5px;
  padding: 10px 0;
  font-weight: bold;
  cursor: pointer;
}

.f-pws{
  margin: auto;
  color: #1877f2;
  font-family: 'segoe UI';
  font-weight: 400;
}

.line{
  border-top: 1px solid #222;
  opacity: 0.2;
  margin-top: 15px;
}

.btn2 {
    color: #fff;
    font-weight: bold;
    background-color: #42b72a;
    border: none;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;
    
}

  .sub-link h3 {
    width: 270px;
    position: relative;
    color: black;
    font-family: 'segoe UI',Arial;
    margin-top: 118px;
    padding: 50px;
    font-size: 12px;
    font-weight: 600; 
    left: 820px;
  }

  .sub-link h3 .rlink{
    color: black;
    font-weight: bold;
    font-size: 13px;
  }

  .f-container {
    width: 350px;
    margin-left: 300px;
    margin-top: 30vh;
    font-family: 'segoe UI',Roboto,"san francisco" ;
  }

  .f-container img {
    width: 250px;
    margin-right: 100px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    word-spacing: 3px;
    margin-top: 0px;
    text-align: left;
  }
  .validation{
    font-size: 10px;
    font-weight: 100;
    color: #f02849;
    font-family: 'segoe UI';

  }
</style>
