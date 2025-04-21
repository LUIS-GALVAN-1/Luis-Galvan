let medicamento1 = 0;
let medicamento2 = 0;
let totalPacientes = 0;
let pacientesMedicamento1 = 0;
let pacientesMedicamento2 = 0;

document.getElementById('medicamento-form').addEventListener('submit', function(event) {
    event.preventDefault();
    medicamento1 = parseInt(document.getElementById('medicamento1').value);
    medicamento2 = parseInt(document.getElementById('medicamento2').value);
    document.getElementById('medicamento-form').style.display = 'none';
    document.getElementById('paciente-form').style.display = 'block';
});

function registrarPaciente() {
    const sistolica = parseInt(document.getElementById('sistolica').value);
    const diastolica = parseInt(document.getElementById('diastolica').value);
    let tipoMedicamento = 0;
    let dosis = 0;

    if (sistolica < 69 && diastolica < 48 && medicamento2 >= 6) {
        tipoMedicamento = 2;
        dosis = 6;
        medicamento2 -= 6;
        pacientesMedicamento2++;
    } else if (sistolica >= 143 && sistolica < 177 && diastolica >= 92 && diastolica < 124 && medicamento1 >= 6) {
        tipoMedicamento = 1;
        dosis = 6;
        medicamento1 -= 6;
        pacientesMedicamento1++;
    } else if (sistolica >= 177 && sistolica < 198 && diastolica >= 124 && diastolica < 142 && medicamento1 >= 10) {
        tipoMedicamento = 1;
        dosis = 10;
        medicamento1 -= 10;
        pacientesMedicamento1++;
    } else if (sistolica >= 198 && sistolica < 246 && diastolica >= 142 && diastolica < 169 && medicamento1 >= 18) {
        tipoMedicamento = 1;
        dosis = 18;
        medicamento1 -= 18;
        pacientesMedicamento1++;
    } else if (sistolica >= 246 && diastolica >= 169 && medicamento1 >= 35) {
        tipoMedicamento = 1;
        dosis = 35;
        medicamento1 -= 35;
        pacientesMedicamento1++;
    } else if (sistolica >= 162 && diastolica < 86 && medicamento1 >= 17) {
        tipoMedicamento = 1;
        dosis = 17;
        medicamento1 -= 17;
        pacientesMedicamento1++;
    }

    totalPacientes++;
    actualizarResultados();

    if (medicamento1 <= 0 || medicamento2 <= 0) {
        alert("Se han agotado los medicamentos.");
        document.getElementById('paciente-form').style.display = 'none';
    }
}

function actualizarResultados() {
    document.getElementById('total-pacientes').textContent = `Total de pacientes atendidos: ${totalPacientes}`;
    
    const porcentajeMed1 = totalPacientes ? ((pacientesMedicamento1 / totalPacientes) * 100).toFixed(2) : 0.00;
    const porcentajeMed2 = totalPacientes ? ((pacientesMedicamento2 / totalPacientes) * 100).toFixed(2) : 0.00;

    document.getElementById('medicamento1-entregados').textContent = `Pacientes con Medicamento 1: ${pacientesMedicamento1} (${porcentajeMed1}%)`;
    document.getElementById('medicamento2-entregados').textContent = `Pacientes con Medicamento 2: ${pacientesMedicamento2} (${porcentajeMed2}%)`;
}
