const service = require('../service/service')
class EmployeeController{
    create = (req,res) =>{
        console.log(req.body);
        service.createServices(req.body).then(data =>{
            return res.status(200).send(data);
        }).catch(err =>{
            return res.status(400).send(err);
        })
    }
    getEmployeeList = (req,res)=>{
        service.getEmployeeService().then(data =>{
            return res.send(data)
        }).catch(err=>{
            return res.send(err)
        })
    }
    updateEmployee = (req,res)=>{
        console.log(req);
        service.getEmployeeUpdateService(req.params.id).then(data=>{
            return res.send(data)
        }).catch(err=>{
            return res.send(err)
        })
    }
    deleteEmployee = ()=>{
        service.getEmployeeDeleteService().then(data=>{
            return res.send(data)
        }).catch(err=>{
            return res.send(err)
        })
    }
}
module.exports = new EmployeeController();