import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMedicalHistory } from 'app/shared/model/medical-history.model';

@Component({
    selector: 'jhi-medical-history-detail',
    templateUrl: './medical-history-detail.component.html'
})
export class MedicalHistoryDetailComponent implements OnInit {
    medicalHistory: IMedicalHistory;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ medicalHistory }) => {
            this.medicalHistory = medicalHistory;
        });
    }

    previousState() {
        window.history.back();
    }
}
