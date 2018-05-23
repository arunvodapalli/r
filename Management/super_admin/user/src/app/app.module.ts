import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Services

import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { AddCityComponent } from './add-city/add-city.component';
import { CitiesComponent } from './cities/cities.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { BranchesComponent } from './branches/branches.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomOrdersComponent } from './custom-orders/custom-orders.component';
import { BulkOrdersComponent } from './bulk-orders/bulk-orders.component';
import { DeliveryBoysComponent } from './delivery-boys/delivery-boys.component';
import { MasterDatabaseComponent } from './master-database/master-database.component';
import { LocalAdPostingComponent } from './local-ad-posting/local-ad-posting.component';
import { GlobalAdPostingComponent } from './global-ad-posting/global-ad-posting.component';
import { CareerPortalComponent } from './career-portal/career-portal.component';
import { TemporaryEmployeesComponent } from './temporary-employees/temporary-employees.component';
import { PermanentEmployeesComponent } from './permanent-employees/permanent-employees.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AddSubCategoriesComponent } from './add-sub-categories/add-sub-categories.component';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { CategoryBannerImagesComponent } from './category-banner-images/category-banner-images.component';
import { SubCategoryBannerImagesComponent } from './sub-category-banner-images/sub-category-banner-images.component';
import { CabsComponent } from './cabs/cabs.component';
import { DepartmentSuperAdminComponent } from './department-super-admin/department-super-admin.component';
import { CitySuperAdminComponent } from './city-super-admin/city-super-admin.component';
import { BranchAdminComponent } from './branch-admin/branch-admin.component';
import { BranchSubAdminComponent } from './branch-sub-admin/branch-sub-admin.component';
import { CmsComponent } from './cms/cms.component';
import { WebsiteViewsComponent } from './website-views/website-views.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { BusinessPlansComponent } from './business-plans/business-plans.component';
import { BusinessAnalysisComponent } from './business-analysis/business-analysis.component';
import { CustomerAnalysisComponent } from './customer-analysis/customer-analysis.component';
import { VendorAnalysisComponent } from './vendor-analysis/vendor-analysis.component';
import { OrderAnalysisComponent } from './order-analysis/order-analysis.component';
import { CashManagementComponent } from './cash-management/cash-management.component';
import { SearchAnalysisComponent } from './search-analysis/search-analysis.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'vendors',
    component: VendorsComponent
  },
  {
    path: 'businesses',
    component: BusinessesComponent
  },
  {
    path: 'add-city',
    component: AddCityComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'add-branch',
    component: AddBranchComponent
  },
  {
    path: 'branches',
    component: BranchesComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'custom-orders',
    component: CustomOrdersComponent
  },
  {
    path: 'bulk-orders',
    component: BulkOrdersComponent
  },
  {
    path: 'delivery-boys',
    component: DeliveryBoysComponent
  },
  {
    path: 'master-database',
    component: MasterDatabaseComponent
  },
  {
    path: 'local-ad-posting',
    component: LocalAdPostingComponent
  },
  {
    path: 'global-ad-posting',
    component: GlobalAdPostingComponent
  },
  {
    path: 'career-portal',
    component: CareerPortalComponent
  },
  {
    path: 'temporary-employees',
    component: TemporaryEmployeesComponent
  },
  {
    path: 'permanent-employees',
    component: PermanentEmployeesComponent
  },
  {
    path: 'add-categories',
    component: AddCategoriesComponent
  },
  {
    path: 'add-sub-categories',
    component: AddSubCategoriesComponent
  },
  {
    path: 'create-business',
    component: CreateBusinessComponent
  },
  {
    path: 'category-banner-images',
    component: CategoryBannerImagesComponent
  },
  {
    path: 'sub-category-banner-images',
    component: SubCategoryBannerImagesComponent
  },
  {
    path: 'cabs',
    component: CabsComponent
  },
  {
    path: 'department-super-admin',
    component: DepartmentSuperAdminComponent
  },
  {
    path: 'city-super-admin',
    component: CitySuperAdminComponent
  },
  {
    path: 'branch-admin',
    component: BranchAdminComponent
  },
  {
    path: 'branch-sub-admin',
    component: BranchSubAdminComponent
  },
  {
    path: 'cms',
    component: CmsComponent
  },
  {
    path: 'website-views',
    component: WebsiteViewsComponent
  },
  {
    path: 'push-notifications',
    component: PushNotificationsComponent
  },
  {
    path: 'business-plans',
    component: BusinessPlansComponent
  },
  {
    path: 'business-analysis',
    component: BusinessAnalysisComponent
  },
  {
    path: 'customer-analysis',
    component: CustomerAnalysisComponent
  },
  {
    path: 'vendor-analysis',
    component: VendorAnalysisComponent
  },
  {
    path: 'order-analysis',
    component: OrderAnalysisComponent
  },
  {
    path: 'cash-management',
    component: CashManagementComponent
  },
  {
    path: 'search-analysis',
    component: SearchAnalysisComponent
  },
  {
    path: 'transaction-history',
    component: TransactionHistoryComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    MenuBarComponent,
    CustomersComponent,
    VendorsComponent,
    BusinessesComponent,
    AddCityComponent,
    CitiesComponent,
    AddBranchComponent,
    BranchesComponent,
    OrdersComponent,
    CustomOrdersComponent,
    BulkOrdersComponent,
    DeliveryBoysComponent,
    MasterDatabaseComponent,
    LocalAdPostingComponent,
    GlobalAdPostingComponent,
    CareerPortalComponent,
    TemporaryEmployeesComponent,
    PermanentEmployeesComponent,
    AddCategoriesComponent,
    AddSubCategoriesComponent,
    CreateBusinessComponent,
    CategoryBannerImagesComponent,
    SubCategoryBannerImagesComponent,
    CabsComponent,
    DepartmentSuperAdminComponent,
    CitySuperAdminComponent,
    BranchAdminComponent,
    BranchSubAdminComponent,
    CmsComponent,
    WebsiteViewsComponent,
    PushNotificationsComponent,
    BusinessPlansComponent,
    BusinessAnalysisComponent,
    CustomerAnalysisComponent,
    VendorAnalysisComponent,
    OrderAnalysisComponent,
    CashManagementComponent,
    SearchAnalysisComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
