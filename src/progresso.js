const progresso = document.querySelector(".barra-progresso div")
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

function atualizarProgresso() {
    const total = checkboxes.length
    const checkboxesMarcados = Array.from(checkboxes).filter(checkbox => checkbox.checked).length

    const porcentagem = (checkboxesMarcados / total) * 100

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', atualizarProgresso)
        progresso.style.width = porcentagem + '%'
    })

    console.log(`marcados: ${checkboxesMarcados}, porcentagem: ${porcentagem}, total ${total}`)
}
atualizarProgresso()