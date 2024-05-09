
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const studentDetailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   age: { type: Number }
})

const studentDetailsModel = mongoose.model('studentDetails', studentDetailsSchema, 'studentDetails');
export default studentDetailsModel;
