import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { CategoriesComponent } from './categories/categories.component';

import { MusicComponent } from './music/music.component';
import { HistoryComponent } from './history/history.component';
import { HealthComponent } from './health/health.component';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { FinanceComponent } from './finance/finance.component';
import { FoodComponent } from './food/food.component';
import { TravelComponent } from './travel/travel.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent,
    LatestArticlesComponent,
    FeaturedArticlesComponent,
    CategoriesComponent,
    MusicComponent,
    HistoryComponent,
    HealthComponent,
    TechComponent,
    SportsComponent,
    FinanceComponent,
    FoodComponent,
    TravelComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  exports:[LatestArticlesComponent, 
    MusicComponent,
    HistoryComponent,
    HealthComponent,
    TechComponent
  ]
})
export class ArticlesModule { }
