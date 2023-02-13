function carregar() {
    let num = 5;
    
        do {
            num = Number(window.prompt('tabuada do ',5))
            if (isNaN(num)) {
                window.alert("Por favor digite um número válido")
            }
        } while (isNaN(num))
        
        let res = window.document.getElementById("res")
        let txt = ""
    
        for (let c = 1; c <= 10; c++) {
            res.innerHTML += `${num} x ${c} = ${num*c} <br/>`
            txt += `${num} x ${c} = ${num*c} \n`
            console.log(num,c)
        }
        window.alert(txt)
    }