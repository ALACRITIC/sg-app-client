import {BaseModel} from "./base_model";
import {ApplicationSubmission} from "./application_submission.model";
export class ApplicationTemplate extends BaseModel {
    name:string;
    description:string;
    document:string;
    application_submissions:Array<ApplicationSubmission>
}