import { Request, Response } from 'express';
import {studentDetailsDao} from '../dao/studentDetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';









let studentDetails = new studentDetailsDao();

export class studentDetailsService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentDetailsService.ts: Delete')
     let  studentDetailsId = req.params.id;
     studentDetails.Delete(studentDetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentDetailsService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentDetailsService.ts: Update')
     let  studentDetailsData = req.body;
     studentDetails.Update(studentDetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentDetailsService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentDetailsService.ts: Create')
     let  studentDetailsData = req.body;
     studentDetails.Create(studentDetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentDetailsService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentDetailsService.ts: GetNounCreatedBy')
     let  studentDetailsData = { created_by: req.query.createdby };
     studentDetails.GetNounCreatedBy(studentDetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentDetailsService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}