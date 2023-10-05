function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente !')
    }else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = `idade calcuada: ${idade}`
        var gen = 'alguém'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if(fSex[0].checked){
            gen = 'Homem'
            
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'homemcrianca.png')
            }else if(idade < 21){
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }

        } else if(fSex[1].checked){
            gen = 'Mulher'

            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'mulhercrianca.png')
            }else if(idade < 21){
                img.setAttribute('src', 'mulherjovem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulta.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }

        }else{
            alert('[ERRO] Defina o sexo !')
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}