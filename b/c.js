matriz= new Array;
matriz=[
["k","a","s","s","a","s","s","i","n","o","m","r","m","c","f","r","f","r","r","c"],       
["p","l","s","s","a","s","s","i","n","o","m","r","m","c","p","r","p","r","r","a"],        
["r","q","s","s","a","s","s","i","n","o","m","r","m","c","p","r","p","r","r","v"],
["y","u","s","s","a","s","s","i","n","o","m","r","m","c","p","r","p","r","r","a"], 
["b","i","s","s","a","s","s","i","b","o","m","r","m","c","l","r","l","r","n","l"],
["w","m","s","s","a","s","s","i","e","o","m","n","m","c","o","n","o","n","n","e"],
["l","i","s","s","a","s","s","i","r","o","m","n","m","c","o","n","o","n","n","i"],
["w","s","s","s","a","s","e","i","s","o","l","n","l","c","o","n","o","n","n","r"],
["d","t","s","s","a","s","n","i","e","o","l","n","l","c","ç","n","ç","n","n","o"],
["a","a","s","s","a","s","g","i","r","o","g","n","g","c","ç","n","e","u","u","b"],
["g","a","s","s","a","s","e","i","k","o","g","u","g","c","e","u","e","u","u","b"],
["u","d","r","u","i","d","n","i","e","o","g","u","g","c","b","u","b","u","u","b"],
["a","a","s","s","a","s","h","i","r","o","g","u","d","c","b","c","v","c","c","b"],
["r","a","s","s","a","s","e","i","n","o","d","c","d","c","v","c","v","ç","ç","b"],
["d","a","s","s","a","s","i","i","n","o","d","ç","d","c","x","ç","x","ç","ç","b"],
["a","a","s","s","a","s","r","i","n","o","d","ç","d","c","x","ç","j","ç","ç","b"],
["q","a","n","e","c","r","o","m","a","n","t","e","w","g","d","v","e","i","r","o"],
["ç","k","ç","h","y","n","a","k","h","b","y","ç","y","c","j","i","j","i","i","b"],
["ã","c","s","s","a","z","z","i","n","o","w","i","h","t","v","s","f","i","i","b"],
["o","e","l","f","o","p","s","i","n","o","y","i","y","c","f","i","f","a","a","b"]];


document.write("<table border='1'>");
for(linha=0; linha < 20; linha++){
    document.write("<tr>");
        for(col=0; col < 20; col++){
            document.write("<td>");
                document.write(matriz[linha][col]);  
        if(linha==0){
           let t= document.getElementById(matriz[col]).value;
           let h= t.substring(4,39);
            document.write("<div class='cores'>"+h+"</div>");
        }                           
}
document.write("</td> </tr>"); 
document.write("<br>");
} 
document.write("</table>");