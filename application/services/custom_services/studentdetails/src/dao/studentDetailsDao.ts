import * as mongoose from 'mongoose';
import studentDetailsModel from '../models/daomodels/studentDetails';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class studentDetailsDao {
    private studentDetails = studentDetailsModel;

    

    constructor() { }
    
    public async Delete(studentDetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDetailsDao.ts: Delete');

    

    
    
    
    this.studentDetails.findByIdAndRemove(studentDetailsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDetailsDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(studentDetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDetailsDao.ts: Update');

    

    
    
    
    this.studentDetails.findOneAndUpdate({ _id: studentDetailsData._id }, studentDetailsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDetailsDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(studentDetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDetailsDao.ts: Create');

    let temp = new studentDetailsModel(studentDetailsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDetailsDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(studentDetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDetailsDao.ts: GetNounCreatedBy');

    

    
    
    
    this.studentDetails.aggregate(([
                        { $match: { $and: [{ created_by: studentDetailsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentDetailsDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}