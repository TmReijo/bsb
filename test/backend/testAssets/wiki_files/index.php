// Shuffle for election candidates
// Lähde: [[m:MediaWiki:Common.js]]

function dshuf(){
                var shufsets=new Object()
                var rx=new RegExp('dshuf'+'\\s+(dshufset\\d+)', 'i') 
                var divs=document.getElementsByTagName("div")
                for (var i=0; i<divs.length; i++){
                        if (rx.test(divs[i].className)){
                                if (typeof shufsets[RegExp.$1]=="undefined"){ 
                                        shufsets[RegExp.$1]=new Object() 
                                        shufsets[RegExp.$1].inner=[] 
                                        shufsets[RegExp.$1].member=[]
                                }
                                        shufsets[RegExp.$1].inner.push(divs[i].innerHTML) 
                                        shufsets[RegExp.$1].member.push(divs[i]) 
                        }
                }
                for (shufset in shufsets){
                        shufsets[shufset].inner.sort(function() {return 0.5 - Math.random()})
                        for (var i=0; i<shufsets[shufset].member.length; i++){
                                shufsets[shufset].member[i].innerHTML=shufsets[shufset].inner[i]
                                shufsets[shufset].member[i].style.display="block"
                        }
                }
 
}
 
addOnloadHook(dshuf);