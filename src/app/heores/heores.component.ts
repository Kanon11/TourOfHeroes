import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {Heores} from '../mock-heores';
import{HeroService} from '../hero.service';
@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})

export class HeoresComponent implements OnInit 
{
  heroes:Hero[];

  constructor(private heroService:HeroService) 
  {

   }

  ngOnInit() 
  {
    this.getHeroes();
  }
  getHeroes()
  {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
