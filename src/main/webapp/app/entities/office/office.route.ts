import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Office } from 'app/shared/model/office.model';
import { OfficeService } from './office.service';
import { OfficeComponent } from './office.component';
import { OfficeDetailComponent } from './office-detail.component';
import { OfficeUpdateComponent } from './office-update.component';
import { OfficeDeletePopupComponent } from './office-delete-dialog.component';
import { IOffice } from 'app/shared/model/office.model';

@Injectable({ providedIn: 'root' })
export class OfficeResolve implements Resolve<IOffice> {
    constructor(private service: OfficeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Office> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Office>) => response.ok),
                map((office: HttpResponse<Office>) => office.body)
            );
        }
        return of(new Office());
    }
}

export const officeRoute: Routes = [
    {
        path: 'office',
        component: OfficeComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['FINANCE_ADMIN'],
            defaultSort: 'id,asc',
            pageTitle: 'Offices'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'office/:id/view',
        component: OfficeDetailComponent,
        resolve: {
            office: OfficeResolve
        },
        data: {
            authorities: ['FINANCE_ADMIN'],
            pageTitle: 'Offices'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'office/new',
        component: OfficeUpdateComponent,
        resolve: {
            office: OfficeResolve
        },
        data: {
            authorities: ['FINANCE_ADMIN'],
            pageTitle: 'Offices'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'office/:id/edit',
        component: OfficeUpdateComponent,
        resolve: {
            office: OfficeResolve
        },
        data: {
            authorities: ['FINANCE_ADMIN'],
            pageTitle: 'Offices'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const officePopupRoute: Routes = [
    {
        path: 'office/:id/delete',
        component: OfficeDeletePopupComponent,
        resolve: {
            office: OfficeResolve
        },
        data: {
            authorities: ['FINANCE_ADMIN'],
            pageTitle: 'Offices'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
