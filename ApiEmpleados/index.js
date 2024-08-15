const express = require('express');
const app = express();
const port = 3000;
require('./config/db');
const employee = require('./schema/employee');
app.use(express.json());


app.get('/api/employee', async (req, res) => {

    try {
            //obtener todos los empleados
    const employees = await employee.find();

            res.json({ employees})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


app.post('/api/employee', (req, res) => {
    //calcular la cantidad de dias trabajados segun las fechas iniciales y finales
    const dateinit = new Date(req.body.dateinit);
    const dateend = new Date(req.body.dateend);
    const dayworked = (dateend - dateinit) / (1000 * 60 * 60 * 24);
    req.body.dayworked = dayworked;
    //calcular las cesantias con la formula salario * dias trabajados / 360
    const severance = req.body.salary * dayworked / 360;
    req.body.severance = severance;
    
    //agregar a la api el atributo interesesCesantias que correspondea un 12% de cesantias
    const interestAmounts = severance * 0.12
    req.body.interestAmounts = interestAmounts;

    const newEmployee = new employee(req.body);
    newEmployee.save()
    res.json(newEmployee)

})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
