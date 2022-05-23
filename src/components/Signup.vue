<template>
  <form @submit="signup">
    <div class="main">
    <div class="modal-signup-heading">
                 <slot/>
                 <p class="modal-signup-name">Sign Up</p>
                 
                 <p class="modal-signup-child-name">It's quick and easy.</p>
                 <img src="../assets/close.png" alt="close" @click="TogglePopup()" >
             </div>
             
             <div class="modal-signup-name">
                       
                <input type="text" v-model="fname" placeholder="First name">
                   &nbsp;&nbsp;&nbsp;
                <input type="text" v-model="lname" placeholder="Last name">
                           
             </div>
             
             <div class="modal-signup-email">
                       
                <input type="email" v-model="email" placeholder="Phone number or email">
                       
             </div>
                   
             <div class="modal-signup-password">
                       
                 <input type="password"  v-model="password" placeholder="Password">
                       
              </div>
                   
              <div class="modal-date-birth">
                 
                 <label for="">Birthday</label>
                 
                 <div class="modal-date-alert">
                     
                     <a >&#63;</a>
                     
                 </div>
                  
              </div>
              
              <div class="modal-date-selection">  
                <select  class="select">
                   <option >Months</option>
                   <option>Jan</option>
                   <option>Feb</option>
                   <option>Mar</option>
                   <option>abr</option>
                   <option>may</option>
                   <option>Jun</option>
                   <option>Jul</option>
                   <option>Aug</option>
                   <option>Sep</option>
                   <option>Oct</option>
                   <option>Nov</option>
                   <option>Dec</option>
                </select>
                &nbsp;&nbsp;
                 <select  class="select">
                   <option >Days</option>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                   <option>6</option>
                   <option>7</option>
                   <option>8</option>
                   <option>9</option>
                   <option>10</option>
                   <option>11</option>
                   <option>12</option>
                   <option>13</option>
                   <option>14</option>
                   <option>15</option>
                   <option>16</option>
                   <option>17</option>
                   <option>18</option>
                   <option>19</option>
                   <option>20</option>
                   <option>21</option>
                   <option>22</option>
                   <option>23</option>
                   <option>24</option>
                   <option>25</option>
                   <option>26</option>
                   <option>27</option>
                   <option>28</option>
                   <option>29</option>
                   <option>30</option>
                   <option>31</option>

                </select>
                &nbsp;&nbsp;
                 <select  class="select">
                  <option  >Years</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                </select>
              </div>
              
              
              <div class="modal-gender">
                 
                 <label for="">Gender</label>
                 
                 <div class="modal-gender-alert">
                     
                     <a >&#63;</a>
                     
                 </div>
                  
              </div>
              
              <div class="modal-gender-choice">
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Femal</label>
                     
                     <input type="radio" >
                     
                 </div>
                 &nbsp;&nbsp;
                 <div class="modal-gender-name">
                     
                     <label for="">Male</label>
                     
                     <input type="radio">
                     
                 </div>
                 &nbsp;&nbsp;
                 <div class="modal-gender-name">
                     
                     <label for="">Custom</label>
                     
                     <input type="radio">
                     
                 </div>
                  
              </div>
              
              <div class="modal-signup-terms">
                  
                <h3> By clicking Sign Up, you agree to our<router-link class="rlink" to=""> Terms, Data Policy and Cookie Policy.</router-link> You may receive SMS notifications from us and can opt out at any time.</h3>  

              </div>
              <br>

              <div class="validation">
                 <h3 v-for="e in error" v-bind:key="e.id">
                    {{e}}
                 </h3>
              </div>

              <div class="modal-signup-button">
                  
                  <button>Sign Up</button>
                  
              </div>
    </div>           
  </form>
</template>

<script>
export default {
  name: 'Signup',
  props: ['TogglePopup'],
 data() {
   return {
     error:[],
     fname:null,
     lname:null,
     email:null,
     password:null,
     minChars:3,
     maxChars:8,
 
   }
 },
 methods: {
   signup(e)
   {
     if(this.fname && this.password && this.lname && this.email) {
       console.log("login is done")
     }
     this.error=[];

     if(!this.fname){
       this.error.push("FirstName required.");
     }
     if(!this.fname){
       this.error.push("LastName required.");
     }
     if(!this.email){
       this.error.push("Email required.");
     }
     if(!this.password){
       this.error.push("Password required");
     }
      if(this.password && this.password.length > this.maxChars){
         this.error.push(`Password cant be more than  ${ this.maxChars}  characters`);
     }
     if(this.fname && this.fname.length < this.minChars){
         this.error.push(`FirstName cant be less than  ${ this.minChars}  characters`);
     }
     if(this.lname && this.lname.length < this.minChars){
         this.error.push(`LastName cant be less than  ${this.minChars}   characters`);
     }
     console.warn("errors",this.error);
     e.preventDefault();
   },

 }
  
}
</script>

<style scoped lang="scss">
form{
  width: 430px;
  height: 530px;
  margin: auto;
  margin-top: 100px;
  background-color: white;
  position: relative;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1),
  0 8px 16px rgba(0,0,0,0.1) ; 

  position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	display: flex;
	align-items: center;
	justify-content: center;

  
}


.modal-close{
   
    position: absolute;
    right:10px;
    top:10px;
    font-size: 20px;
    color: #aaa;
    cursor: pointer;
}
.modal-signup-heading{
    
    width: 100%;
    margin-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    
   
}
.modal-signup-heading .modal-signup-name{
    
    font-size: 30px;
    font-weight: bold;
}
.modal-signup-heading .modal-signup-child-name{
    
    font-size: 17px;
    color: #606770;
    text-align: left;
    font-weight: normal;
}
.modal-signup-name{
    color: #1c1e21;
    font-size: 32px;
    width: 100%;
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    
}
.modal-signup-name input[type=text]{
    
    width: 48%;
    padding:8px;
    font-size: 17px;
    border: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #eee;
}

.modal-signup-email{
    
    width: 100%;
    display: flex;
    margin-top: 10px;
}
.modal-signup-email input[type=email]{
    
    width: 100%;
    padding:8px;
    font-size: 17px;
    border: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #eee;
}

.modal-signup-password{
    
    width: 100%;
    display: flex;
    margin-top: 10px;
    
}
.modal-signup-password input[type=password]{
    
    width: 100%;
    padding:8px;
    font-size: 17px;
    border: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #eee;
}
.modal-date-birth{
    
   width: 100%;
   margin-top: 10px;
   display: flex;
   align-items: center;
}
.modal-date-alert{
    
    width: 15px;
    height: 15px;
    display: inline-block;
    background-color: #aaa;
    font-size: 12px;
    border-radius: 50%;
    text-align: center;
    color: white;
    margin-left: 3px;
}
.modal-date-selection{
    
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    height: 32px;
    
}
.select-choice{
    
    width: 33%;
    
}
.select{
 
    width: 96%;
    padding: 5px;
    border-radius: 5px;
    font-size: 17px;
    border: none;
    border: 1px solid #ccc;
    color: #080808;
}
.modal-gender{
    
   width: 100%;
   margin-top: 10px;
   display: flex;
   align-items: center; 
}
.modal-gender-alert{
    
    width: 15px;
    height: 15px;
    display: inline-block;
    background-color: #aaa;
    font-size: 12px;
    border-radius: 50%;
    text-align: center;
    color: white;
    margin-left: 3px;
}
.modal-gender-choice{
   
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}
.modal-gender-name{
    
     width: 32%;
     border: 1px solid #ccc;
     padding: 5px;
     border-radius: 5px;
     font-size: 17px;
     display: flex;
     justify-content: space-between;
     align-items: center;
}
.modal-signup-terms h3{
    width: 100%;
    margin-top: 15px; 
    font-size: 12px;
    text-align: left;
    color: #777;
    font-weight: 100;
}
.modal-signup-terms h3 .rlink{
    width: 100%;
    margin-top: 15px; 
    font-size: 12px;
    text-align: left;
    color: #385898;
    font-weight: 100;
}

.modal-signup-button{
    
    width: 100%;
    max-width: 200px;
    margin: auto;
    margin-top: 20px;
}
.modal-signup-button button{ 
    
    width: 100%;
    padding: 10px;
    background-color:#32cd32;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;  

}
.validation{
    font-size: 10px;
    font-weight: 100;
    color: #f02849;
    font-family: 'segoe UI';

  }
  img{
     position: absolute;
    right: 10px;
    top: 12px;
    z-index: 2;
    width: 30px;
  }
</style>