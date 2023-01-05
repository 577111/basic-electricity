var icon =document.querySelector('.icon');
var icon1=icon.querySelector('.icon1');
var icon2=icon.querySelector('.icon2');
var icon3=icon.querySelector('.icon3');
var sidebar=document.querySelector('.sidebar');
var work=document.querySelector('.work');
var nav=sidebar.querySelector('ul');


icon.addEventListener('click',(e)=>{
  
    icon.style.opacity = '0';
    nav.style.transform='scaleX(1)'
    
    sidebar.style.transform='scaleX(1)';
    sidebar.style.transition = '.3s';
    
  }
)
var doc=document.querySelector('.work');
var ln=sidebar.querySelector('div');
console.log(ln);


ln.addEventListener('click',(e)=>{
  sidebar.style.transform='scaleX(0)';
  icon.style.opacity ='1';
  nav.style.transform='scaleX(0)'
});


const home=()=>{
  work.innerHTML=``
}

const suggestion = () =>{
  work.innerHTML = `<h1>Suggestion Sheet</h1>
  <ol>
    <li>পাঁচটি পিপিই এর নাম লিখ।<p>উঃ অ্যাপ্রোন, হেলমেট,গগলস,সেফটি সু,হ্যান্ড গ্লোভস</p></li>
    
    <li>ফেজ তারে সুইচ সংযোগ করতে হয় কেন?
      <p>উঃ ফেজ তারে সুইচ না লাগালে লোডে বিদ্যুতের উপস্থিত থাকায় কাজ করার সময় দূর্ঘটনা ঘটতে পারে</p>
    </li>
    
     <li>তিন ধরনের হোল্ডারের নাম লিখ।
        <p>উঃ ব্যাটেন হোল্ডার,প্যান্ডেট হোল্ডার,ব্রাকেট হোল্ডার</p>
     </li>
     
    <li>একটি বাতিকে দুই স্থান হতে নিয়ন্ত্রন এর সার্কিট আঁক।
      <p>উঃ </p>
    </li>
    
      <li>ফ্লোরসেন্ট বাতির প্রধান অংশের নাম লিখ।
        <p>উঃ টিউব লাইট,চোক লাইট,স্টার্টার,হোল্ডার,পরিবাহি তার।</p>
      </li>
      
    <li>টু-ওয়ে সুইচ কোথায় ব্যবহার করা হয়?
      <p>উঃ সিঁড়ি ঘরের বাতিতে।</p>
    </li>
    
    <li>ইলেকট্রিক শর্ট সার্কিটে উৎপন্ন আগুন নিবারণে কোন পদার্থ ব্যবহার করা উচিত নয়?
      <p>উঃ পানি</p>
    </li>  
  
    <li>ওয়্যার স্টিপারের কাজ কি?
      <p>উঃ তারের উপরের ইন্সুলেশন ছাড়ানো ওয়্যার স্টিপারের </p>
    </li>
    
    <li>মেগারের নরমাল স্পীড কত?
      <p>উঃ ১২০rpm---১৬০rpm</p>
    </li>  
  </ol>`;
}

const current = () =>{
  work.innerHTML=``
}

const circuit = () =>{
  work.innerHTML=`  <h1>Circuit</h1> 
  <ol>
      <li>সার্কিট কাকে বলে? 
    <p>
      উঃ কারেন্ট চলাচলের সম্পূর্ণ পথকে সার্কিট বলে।
    </p>
    
    <li> সার্কিট কত প্রকার ও কি কি?
    <p>
      সার্কিট তিন প্রকার। যথা। ১) সম্পূর্ণ সার্কিট, ২) অসম্পূর্ণ সার্কিট, ৩) শক সার্কিট
    </p>
    </li>
    
    <li>সার্কিট সংযোগ কত প্রকার ও কি কি?
      <p>উঃ ৩ প্রকার।
      ১) সিরিজ  সংযোগ  ২) প্যারালাল সংযোগ  ৩) মিশ্র সংযোগ  </p>
    </li>
    
     <li>সিরিজ সংযোগ কাকে বলে?
     
        <p>উঃ যে সার্কিটে বিদ্যুৎ চলাচলের একটিমাত্র পথ থাকে তাকে সিরিজ সার্কিট বলে।</p>
     </li>
     
    <li>প্যারালাল সার্কিট কাকে বলে?
      <p>উঃ যে সার্কিটে কারেন্ট চলাচলের এক বা একাধিক পথ থাকে তাকে প্যারালাল সার্কিট বলে।</p>
    </li>
    
      <li>মিশ্র সার্কিট কাকে বলে?
        <p>উঃ যে সার্কিটে কিছু সংযোগ সিরিজ এবং কিছু সংযোগ  প্যারালালে স্থাপন করা হয় তাকে মিশ্র সার্কিট বলে। </p>
      </li>
      
    <li>
      <p>উঃ</p>
    </li>
    
    <li>
      <p>উঃ পানি</p>
    </li>  
  
    <li>
      <p> </p>
    </li>
    
    <li>
      <p>উঃ</p>
    </li>  
  </ol>`
}

const joint = ()=>{
   work.innerHTML=`<h1>
   তারের জোড়া
   <h1/>
   <ol>
     
      <li>পিগটেল জোড়া </li>
      <li>বেল হ্যাঙ্গার জোড়া</li> 
      <li>ওয়েস্টার্ণ ইউনিয়ন জোড়া </li>
      <li>ব্রিটানিয়া জোড়া</li> 
      <li>স্ক্রেপ্ট জোড়া</li> 
      <li>ডুবলেক্স জোড়া </li>
      <li> সাধারণ টেপ জোড়া</li>
      <li>টার্ন ব্যাক জোড়া </li>
      <li> মোচড়ানো টেপ জোড়া</li>
      <li> বাট স্প্লিস জোড়া</li>
      <li>নট টেপ জোড়া </li>
      <li> টেপ স্লিপ</li>
   
   </ol>
   
   `
  
}
