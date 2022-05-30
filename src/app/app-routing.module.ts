import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CustomPreloadingStrategyService } from './modules/shared/services/custom-preloading-strategy.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule),
    data: { preload: true },
  },
  {
    path: 'cms',
    loadChildren: () => import('./modules/cms/cms.module').then(m => m.CmsModule),
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
    preloadingStrategy: CustomPreloadingStrategyService,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
