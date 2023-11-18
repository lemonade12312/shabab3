        // Create a new anchor (link) element
        var link1 = document.createElement("a");
        var link2 = document.createElement("a");
        var link3 = document.createElement("a");
        var link4 = document.createElement("a");
        var link5 = document.createElement("a");
        var link6 = document.createElement("a");

        var paragraph = document.getElementById("text");
        var newline="\n";

        // Set the href attribute (URL)
        link1.href = "https://www.youtube.com/watch?v=LsGcIkevyHM";
        link2.href = "https://www.youtube.com/watch?v=Ds8eFKg2GMQ";
        link3.href = "https://www.youtube.com/watch?v=7eAdsUbXkaQ";
        link4.href = "https://pornhub.com/";
        link5.href = "https://www.youtube.com/watch?v=N1M1EjjvQxk";
        link6.href = "https://www.youtube.com/watch?v=hKdg0AFQ-g8";

        // Set the link text
        link1.textContent = "اشلون تتعلم الطيران بثواني";
        link2.textContent = "روكيت ليج كلبس";
        link3.textContent = "علاقة السمك بالطب";
        link4.textContent = "special gift";
        link5.textContent = "freddy fazbar ? ur ur a ur";
        link6.textContent = "لا تضغط";

        // Append the link to the body or any other element
       

document.getElementById("mybutton").onclick = function(){
    const mycheckbox = document.getElementById("MK");
    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");


    if(MK.checked){
    paragraph.appendChild(link1);
        setTimeout(function() {
            document.getElementById("text").innerHTML = "راد يصير طيار لول";
        }, 2000);
    
}

else
    if(zahora.checked){
    paragraph.appendChild(link2);
        setTimeout(function() {
            document.getElementById("text").innerHTML = "طيزك فلات از فك";
        }, 2000);
}
else

    if(alawi.checked){
    paragraph.appendChild(link3);
        setTimeout(function() {
            document.getElementById("text").innerHTML = "طبيب زربه";
        }, 2000);
}
else

    if(eyodi.checked){
    paragraph.appendChild(link4);
        setTimeout(function() {
            document.getElementById("text").innerHTML = "terraria is خره";
        }, 2000);
}
else

    if(hamodi.checked){
    paragraph.appendChild(link5);
        setTimeout(function() {
            document.getElementById("text").innerHTML = "U FAT FUCK";
        }, 2000);
}
else

    if(laymona.checked){
    paragraph.appendChild(link6);
        setTimeout(function() {
            document.getElementById("text").innerHTML = "اويلي عليك جيزوووووز";
        }, 2000);
}
else{
    document.getElementById("text").innerHTML="يا حمار اختار شيء وبعدين اضغط الزر ";
        // After 2000 milliseconds (2 seconds), set inner HTML to an empty string
        setTimeout(function() {
            document.getElementById("text").innerHTML = "";
        }, 2000);
    }
}
