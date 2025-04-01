document.addEventListener("DOMContentLoaded", function () {
    const matrixForm = document.getElementById("matrix-form");
    const matrixContainer = document.getElementById("matrix-container");
    const resultContainer = document.getElementById("result-container");

    matrixForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const rows = parseInt(document.getElementById("rows").value);
        const cols = parseInt(document.getElementById("cols").value);
        
        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            alert("Por favor, ingrese valores válidos para filas y columnas.");
            return;
        }
        
        matrixContainer.innerHTML = "";
        createMatrixInputs(matrixContainer, rows, cols, "Matriz 1", "matrix1");
        createMatrixInputs(matrixContainer, rows, cols, "Matriz 2", "matrix2");
        
        const sumButton = document.createElement("button");
        sumButton.textContent = "Sumar Matrices";
        sumButton.addEventListener("click", () => sumMatrices(rows, cols));
        matrixContainer.appendChild(sumButton);
    });

    function createMatrixInputs(container, rows, cols, title, prefix) {
        const section = document.createElement("div");
        section.innerHTML = `<h3>${title}</h3>`;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const input = document.createElement("input");
                input.type = "number";
                input.id = `${prefix}-${i}-${j}`;
                input.style.width = "50px";
                section.appendChild(input);
            }
            section.appendChild(document.createElement("br"));
        }
        container.appendChild(section);
    }

    function sumMatrices(rows, cols) {
        let matrix1 = [], matrix2 = [], result = [];

        for (let i = 0; i < rows; i++) {
            matrix1[i] = [];
            matrix2[i] = [];
            result[i] = [];
            for (let j = 0; j < cols; j++) {
                let val1 = parseFloat(document.getElementById(`matrix1-${i}-${j}`).value);
                let val2 = parseFloat(document.getElementById(`matrix2-${i}-${j}`).value);
                
                if (isNaN(val1) || isNaN(val2)) {
                    alert("Todos los valores deben ser numéricos.");
                    return;
                }
                
                matrix1[i][j] = val1;
                matrix2[i][j] = val2;
                result[i][j] = val1 + val2;
            }
        }
        displayResult(result);
    }

    function displayResult(matrix) {
        resultContainer.innerHTML = "<h3>Matriz Resultante</h3>";
        matrix.forEach(row => {
            resultContainer.innerHTML += row.join(" ") + "<br>";
        });
    }
});
