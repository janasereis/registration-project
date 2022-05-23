<template>
    <footer class="main-footer">
            <div class="footer-contents">
                <ol v-for="(obj, key) in  countriesJSON" :key="key">
                    <li><a href="#">{{obj.title}}</a></li>
                </ol>
                <li><button>+</button></li>
            </div>
        </footer>
</template>

<script>
export default {
    data: ()=>({
    countriesJSON:[
      {
          title:'English (US)',
      },
       {
          title:'العربية',
      },
       {
          title:'Français (France)',
      },
       {
          title:'Русский',
      },
       {
          title:'Deutsch',
      },
       {
          title:'Bahasa Indonesia',
      },
       {
          title:'Español',
      },
       {
          title:'Türkçe',
      },
       {
          title:'ภาษาไทย',
      },
       {
          title:'Português (Brasil)',
      },
       {
          title:'Italiano'
      },
    ]
  })
  
}
</script>


<style scoped>

.main-footer {
    background: white;
    height: 200px;
}
.footer-contents {
   
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
}
footer ol {
    display: inline-block;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 10px 0;
}

footer ol:first-child li:last-child button {
    background-color: #f5f6f7;
    border: 1px solid #ccd0d5;
    outline: none;
    color: #4b4f56;
    padding: 0 8px;
    font-weight: 700;
    font-size: 16px;
}
li{
    padding-right: 15px;
    font-size: 12px;
    color: #8a8d91;
    display: inline-block;
}
li a {
    text-decoration: none;
    color: #8a8d91;
}
li a:hover{
    text-decoration: underline;
}
button{
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 1px;
        padding-right: 1px;
}
</style>