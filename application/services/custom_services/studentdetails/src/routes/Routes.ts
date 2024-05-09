import { Request, Response, NextFunction } from "express";
import { studentDetailsController } from '../controller/studentDetailsController';


export class Routes {
    private studentDetails: studentDetailsController = new studentDetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/studentDetails/:id').delete(this.studentDetails.Delete);
app.route('/studentDetails').put(this.studentDetails.Update);
app.route('/studentDetails').post(this.studentDetails.Create);
app.route('/studentDetails/userid/created_by').get(this.studentDetails.GetNounCreatedBy);
     }

}