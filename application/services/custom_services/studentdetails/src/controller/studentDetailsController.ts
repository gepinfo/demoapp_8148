import { Request, Response } from 'express';
import { studentDetailsService } from '../service/studentDetailsService';
import { CustomLogger } from '../config/Logger'
let studentDetails = new studentDetailsService();

export class studentDetailsController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentDetails.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentDetailsController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentDetailsController.ts: Delete');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentDetails.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentDetailsController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentDetailsController.ts: Update');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentDetails.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentDetailsController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentDetailsController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    studentDetails.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentDetailsController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentDetailsController.ts: GetNounCreatedBy');
    })}


}