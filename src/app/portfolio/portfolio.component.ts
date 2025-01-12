import { Component, ElementRef, ViewChild } from '@angular/core';

interface IPortfolio {
    id: string
    src: string

}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


  portfolioList :IPortfolio[] = [
    {
      id: "1",
      src:"/poert1.png",
    },
    {
      id: "2",
      src:"/port2.png",
    },
    {
      id: "3",
      src:"/port3.png",
    },
    {
      id: "4",
      src:"/poert1.png",
    },
    {
      id: "5",
      src:"/port2.png",
    },
    {
      id: "6",
      src:"/port3.png",
    },
  ]
    isModalOpen = false;
    modelSrc :string = '' ;


    showModel(src :string):void {

      this.isModalOpen = true;

      this.modelSrc = src ;
      console.log(src)

    }

    closeModal(): void {
      this.isModalOpen = false;
    }


}
