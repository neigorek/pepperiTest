

window.onload = function () {

    const form = document.forms[0],

          out = form.output,

          input = form.input,

          add = form.add,

          sName = form.sName,

          sVal = form.sVal,

          del = form.del,

          show = form.show,

          res = document.getElementById('res');

    add.addEventListener('click', function (e) {

        e.preventDefault()

        if (input.value.split('=').length - 1 == 1 && input.value.slice(-1) != '=' && input.value.length > 0

            && input.value.includes('=') && input.value[0] != '=' ) {

            out.options[out.options.length] = new Option(input.value);

            input.value = '';

            input.style = 'border: 1px groove black'

        }
        else {
            input.style = 'border: 1px groove red'
        }

    }, false)

    sName.addEventListener('click', function (e) {

        e.preventDefault();

        masss = [...out.querySelectorAll('option')]

        masss.sort((a, b) => a.text.split('=')[0] == b.text.split('=')[0] ? 0 : a.text.split('=')[0] <

        b.text.split('=')[0] ? -1 : 1);

        masss.forEach(item => out.appendChild(item));

        masss = null;


    }, false)

    sVal.addEventListener('click', function (e) {

        e.preventDefault();

        masss = [...out.querySelectorAll('option')]

        masss.sort((a, b) => a.text.split('=')[1] == b.text.split('=')[1] ? 0 : a.text.split('=')[1] <

        b.text.split('=')[1] ? -1 : 1);

        masss.forEach(item => out.appendChild(item));

        masss = null;



    }, false)

    del.addEventListener('click', function (e) {

        e.preventDefault()

        if (out.length > 0){

            out.remove(out.selectedIndex)

        }


    }, false)

    show.addEventListener('click', function (e) {

        masss = [...out.querySelectorAll('option')]

        e.preventDefault()

        var doc = document.implementation.createDocument("", "", null);

        var pairsElem = doc.createElement("pairs");



        for (var i = 0, l = masss.length; i < l ; i++ ){

            var newPair = doc.createElement('pair');

            newPair.setAttribute('id', i + 1)

            newPair.setAttribute('first', masss[i].value.split('=')[0]);

            newPair.setAttribute('second', masss[i].value.split('=')[1]);

            pairsElem.appendChild(newPair);

            newPair = null;
        }

        doc.appendChild(pairsElem)

        var serial = new XMLSerializer();

        res.innerText = serial.serializeToString(doc);
    })

    
}




