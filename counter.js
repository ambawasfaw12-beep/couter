     let result = 0;

       document.getElementById("dec").onclick = function inc()  
        {
         result--
         document.getElementById("count").textContent =result
        }

        document.getElementById("reset").onclick = function inc()  
        {
         result=0
         document.getElementById("count").textContent =result
        }

        document.getElementById("inc").onclick = function inc()  
        {
         result++
         document.getElementById("count").textContent =result
        }