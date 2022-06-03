import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CustomPreloadingStrategyService } from './modules/shared/services/custom-preloading-strategy.service';
import { QuicklinkStrategy } from 'ngx-quicklink'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './modules/shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule),
    data: { preload: true },
  },
  {
    path: 'cms',
    loadChildren: () => import('./modules/cms/cms.module').then(m => m.CmsModule),
    canActivate: [ AdminGuard ],
    data: { preload: true },
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    /* preloadingStrategy: PreloadAllModules, */
    /* preloadingStrategy: CustomPreloadingStrategyService, */
    preloadingStrategy: QuicklinkStrategy,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
