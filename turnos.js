//const nombre = document.getElementById("nombre").value;
  //const email = document.getElementById("email").value;
  //const telefono = document.getElementById("telefono").value;
//function validarFormulario() {
  //  if (nombre === "") {
    //  alert("Por favor, ingrese su nombre.");
     // return false;
    //}
  
    //if (email === "" || !email.includes("@")) {
      //alert("Por favor, ingrese un correo electrónico válido.");
      //return false;
    //}
    
    //if (telefono === "") {
      //  alert("Por favor, ingrese su telefono.");
        //return false;
      //}
    //return true;
  //}
        
  const formBtn1 = document.getElementById("btn-1");
  const formBtnPrev2 = document.getElementById("btn-2-prev");
    const formBtnNext2 = document.querySelector("#btn-2-next")

        // Button listener of form 1
        formBtn1.addEventListener("click", function(e) {
            gotoNextForm(formBtn1, formBtnNext2, 1, 2)
            e.preventDefault()
        })


        // Previous button listener of form 2
        formBtnPrev2.addEventListener("click", function(e) {
            gotoNextForm(formBtnNext2, formBtn1, 2, 1)
            e.preventDefault()
        })

        // Button listener of form 2
      formBtnNext2.addEventListener("click", function(e) {
        document.querySelector(`.step--2`).classList.remove("step-active")
          document.querySelector(`.step--3`).classList.add("step-active")
           formBtnNext2.parentElement.style.display = "none"
          //  document.querySelector(".form--message").innerHTML = `
   //<h1 class="form--message-text">Tu turno confirmado fue para el dia </h1>`
            e.preventDefault()
       })

        function generarResumen() {
            // Obtener los valores de los campos del formulario
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const telefono = document.getElementById("telefono").value;
            const dia = document.getElementById("dia").value;
            const horario = document.getElementById("horario").value;
        
            document.querySelector(".form--mensaje").innerHTML = `Nombre: ${nombre}<br>
                             Correo electrónico: ${email}<br>
                             Telefono: ${telefono}<br>
                             Dia: ${horario} <br>
                             Horario: ${dia}`;
          }

        const gotoNextForm = (prev, next, stepPrev, stepNext) => {
            // Get form through the button
            const prevForm = prev.parentElement
            const nextForm = next.parentElement
            const nextStep = document.querySelector(`.step--${stepNext}`)
            const prevStep = document.querySelector(`.step--${stepPrev}`)
                // Add active/inactive classes to both previous and next form
            nextForm.classList.add("form-active")
            nextForm.classList.add("form-active-animate")
            prevForm.classList.add("form-inactive")
                // Change the active step element
            prevStep.classList.remove("step-active")
            nextStep.classList.add("step-active")
            setTimeout(() => {
                prevForm.classList.remove("form-active")
                prevForm.classList.remove("form-inactive")
                nextForm.classList.remove("form-active-animate")
            }, 1000)
        }

        const formBtnNext3 = document.getElementById("btn-3-next");
        formBtnNext3.addEventListener("click", function(e) {
            document.querySelector(`.step--3`).classList.remove("step-active")
              document.querySelector(`.step--4`).classList.add("step-active")
               formBtnNext3.parentElement.style.display = "none"
              document.querySelector(".form--message").innerHTML = `
       <h1 class="form--message-text">Tu turno fue confirmado </h1>`
                e.preventDefault()
           })
  
           
        