const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    sallary: String,
    email: String,
    department: String
},{
    timestamps: true
});

const employee = mongoose.model('employee',EmployeeSchema);

class EmployeeModel{

    create=(req)=>{
        console.log(" req in model ",req);
        return new Promise((resolve, reject) => {
            employee.create(req).then(data=>{
                console.log("success full",data);
                resolve(data);
            }).catch(err=>{
                console.log(err);
                reject(err);
            })
          })
    }

    read = ()=>{
        return new Promise((resolve,reject)=>{
            employee.find().then(data =>{
                resolve(data)
            }).catch(err =>{
                reject(err)
            })
        })
    }

    update = (id)=>{
        return new Promise((resolve, reject) =>{
            employee.findByIdAndUpdate()
            .then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    delete = ()=>{
        return new Promise((resolve,reject)=>{
            employee.findOneAndDelete(
                {_id: "60067882d29c441e0cdf605c"}
            ).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}

module.exports = new EmployeeModel()