const model = require('../model/model')

class EmployeeService{

    createServices=(req)=>{
        console.log("Request data in service->",req);
        return model.create(req).then(data =>{
            return ({
                message:"Register successfully",
                data});
        }).catch(err =>{
            return ({
                meesage:"Failed to register",
                err});
        })
    }
    getEmployeeService =()=>{
         return model.read().then(data=>{
            return data
        }).catch(err=>{
            return err
        })
    }
    getEmployeeUpdateService = (id)=>{
        return model.update(id).then(data=>{
            return data
        }).catch(err=>{
            return err
        })
    }
    getEmployeeDeleteService = ()=>{
        return model.delete().then(data=>{
            return data
        }).catch(err=>{
            return err
        })
    }
}
module.exports = new EmployeeService();