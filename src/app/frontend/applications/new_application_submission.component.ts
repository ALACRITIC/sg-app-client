
import {Component, OnChanges Input, Inject, ViewEncapsulation} from '@angular/core';
import {ApplicationTemplatesService} from "../../shared/services/application_templates.service";
import {ApplicationTemplate} from "../../shared/models/application_template.model";
import { NgStyle, NgClass} from "@angular/common";
import { FileUploader, FileItem} from "ng2-file-upload/ng2-file-upload";
import {ApplicationSubmissionsService} from "../../shared/services/application_submissions.service";

@Component({
    selector: 'new-application-submission',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: 'new_application_submission.template.pug',
    providers: [ApplicationSubmissionsService],
    styleUrls: ['new_application_submission.styles.css'],
})

export class NewApplicationSubmission implements OnChanges {
    @Input() template: ApplicationTemplate;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;

    constructor(private _templateService:ApplicationTemplatesService, @Inject('ApiEndpoint') private api: string ) {
        this.template = new ApplicationTemplate();
    }

    ngOnChanges(changes:any):void {
        let templateChange:ApplicationTemplate = changes.template.currentValue;
        if (templateChange) {
            this._templateService.get(templateChange.id).then(template => {
                    this.template = template;
                    this.uploader = new FileUploader({url: this.api + `/application_templates/${this.template.id}/application_submissions`});
            });
        }
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public sendSubmission(item:FileItem) {
        item.alias = "application_submission[document]";
        item.upload();
        this.uploader.onCompleteAll = () => {
            this.uploader.clearQueue();
        };
    }

}