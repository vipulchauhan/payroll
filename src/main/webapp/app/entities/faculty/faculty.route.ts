import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Faculty } from 'app/shared/model/faculty.model';
import { FacultyService } from './faculty.service';
import { FacultyComponent } from './faculty.component';
import { FacultyDetailComponent } from './faculty-detail.component';
import { FacultyUpdateComponent } from './faculty-update.component';
import { FacultyDeletePopupComponent } from './faculty-delete-dialog.component';
import { IFaculty } from 'app/shared/model/faculty.model';

@Injectable({ providedIn: 'root' })
export class FacultyResolve implements Resolve<IFaculty> {
    constructor(private service: FacultyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Faculty> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Faculty>) => response.ok),
                map((faculty: HttpResponse<Faculty>) => faculty.body)
            );
        }
        return of(new Faculty());
    }
}

export const facultyRoute: Routes = [
    {
        path: 'faculty',
        component: FacultyComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'Faculties'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'faculty/:id/view',
        component: FacultyDetailComponent,
        resolve: {
            faculty: FacultyResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Faculties'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'faculty/new',
        component: FacultyUpdateComponent,
        resolve: {
            faculty: FacultyResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Faculties'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'faculty/:id/edit',
        component: FacultyUpdateComponent,
        resolve: {
            faculty: FacultyResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Faculties'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const facultyPopupRoute: Routes = [
    {
        path: 'faculty/:id/delete',
        component: FacultyDeletePopupComponent,
        resolve: {
            faculty: FacultyResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Faculties'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
