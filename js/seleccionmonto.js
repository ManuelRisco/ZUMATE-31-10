function setValor(value) {

    const buttons = document.querySelectorAll('.btn-warning');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById('monto').value = value;

    const activeButton = Array.from(buttons).find(btn => btn.value === value);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    document.getElementById('resultado').innerText = `Has seleccionado S/${value}`;
}