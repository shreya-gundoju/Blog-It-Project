import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MusicComponent } from './music/music.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { HistoryComponent } from './history/history.component';
import { SportsComponent } from './sports/sports.component';
import { FoodComponent } from './food/food.component';
import { TravelComponent } from './travel/travel.component';
import { FinanceComponent } from './finance/finance.component';
 
const routes: Routes = [
{path:'articles',component:ArticleListComponent},
{path:'articles/:id',component:ArticleDetailsComponent},
{path:'music',component:MusicComponent},
{path:'tech',component:TechComponent},
{path:'health',component:HealthComponent},
{path:'history',component:HistoryComponent},
{path:'sports',component:SportsComponent},
{path:'food',component:FoodComponent},
{path:'travel',component:TravelComponent},
{path:'finance',component:FinanceComponent}  
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }