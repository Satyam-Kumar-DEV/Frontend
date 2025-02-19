import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CarouselComponent],
})
export class HomeComponent {
  headerProductList: any[] = [
    {
      title: 'Eyeglasses',
      image: '../../../assets/images/product-img.webp',
    },
    {
      title: 'Sunglasses',
      image: '../../../assets/images/product-img.webp',
    },
    {
      title: 'Screenglasses',
      image: '../../../assets/images/product-img.webp',
    },
    {
      title: 'Contactlense',
      image: '../../../assets/images/product-img.webp',
    },
  ];

  carouselItems: any[] = [
    {
      title: 'Round',
      image: '../../../assets/images/carousel-img.webp',
    },
    {
      title: 'Cat-Eye',
      image: '../../../assets/images/carousel-img.webp',
    },
    {
      title: 'Clubmaster',
      image: '../../../assets/images/carousel-img.webp',
    },
    {
      title: 'Transparent',
      image: '../../../assets/images/carousel-img.webp',
    },
    {
      title: 'Blend Edit',
      image: '../../../assets/images/carousel-img.webp',
    },
    {
      title: 'Air Clip On',
      image: '../../../assets/images/carousel-img.webp',
    },
    {
      title: 'Contactlense',
      image: '../../../assets/images/carousel-img.webp',
    },
  ];
}
