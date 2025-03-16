import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { HomeBlogListComponent } from '../../shared/components/home-blog-list/home-blog-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    CarouselComponent,
    HomeBlogListComponent,
    MatTooltipModule,
  ],
})
export class HomeComponent {
  showScrollButton: boolean = false;
  headerProductList: any[] = [
    {
      title: 'Eyeglasses',
      image: '../../../assets/images/product-img.webp',
      moreDetails: [
        { title: 'Air Light-Weight', type: 'premium lense', price: '$500' },
        {
          title: 'Premium Eyeglasses',
          type: 'John jacob lense',
          price: '$500',
        },
      ],
    },
    {
      title: 'Sunglasses',
      image: '../../../assets/images/product-img.webp',
      moreDetails: [
        { title: 'Air Light-Weight', type: 'premium lense', price: '$500' },
        {
          title: 'Premium Eyeglasses',
          type: 'John jacob lense',
          price: '$500',
        },
      ],
    },
    {
      title: 'Screenglasses',
      image: '../../../assets/images/product-img.webp',
      moreDetails: [
        { title: 'Air Light-Weight', type: 'premium lense', price: '$500' },
        {
          title: 'Premium Eyeglasses',
          type: 'John jacob lense',
          price: '$500',
        },
      ],
    },
    {
      title: 'Contactlense',
      image: '../../../assets/images/product-img.webp',
      moreDetails: [
        { title: 'Air Light-Weight', type: 'premium lense', price: '$500' },
        {
          title: 'Premium Eyeglasses',
          type: 'John jacob lense',
          price: '$500',
        },
      ],
    },
  ];

  slideCarousel: any[] = [
    {
      img: '../../../assets/images/Desktop-5.webp',
      alt: 'carousel images',
    },
    {
      img: '../../../assets/images/Desktopwinter-edit-2.webp',
      alt: 'carousel images',
    },
    {
      img: '../../../assets/images/twysty-desktop-4.webp',
      alt: 'carousel images',
    },
    {
      img: '../../../assets/images/web-3.webp',
      alt: 'carousel images',
    },
    {
      img: '../../../assets/images/web-banner-Swaps-1.webp',
      alt: 'carousel images',
    },
  ];
  carouselItems: any[] = [
    {
      title: 'Round',
      image: '../../../assets/images/carousel-img.webp',
    },
    {
      title: 'Cat-Eye',
      image: '../../../assets/images/cateeye.webp',
    },
    {
      title: 'Clubmaster',
      image: '../../../assets/images/clubmaster.webp',
    },
    {
      title: 'Transparent',
      image: '../../../assets/images/rounds.webp',
    },
    {
      title: 'Blend Edit',
      image: '../../../assets/images/trans.webp',
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

  bloglist: any[] = [
    {
      title: 'Our New eyewear blog',
      image: '../../../assets/images/blogpost.webp',
      date: '22-feb-2024',
      commentCount: 0,
    },
    {
      title: 'Our New eyewear blog',
      image: '../../../assets/images/blogpost.webp',
      date: '22-feb-2024',
      commentCount: 9,
    },
    {
      title: 'Our New eyewear blog',
      image: '../../../assets/images/blogpost.webp',
      date: '22-feb-2024',
      commentCount: 7,
    },
    {
      title: 'Our New eyewear blog',
      image: '../../../assets/images/blogpost.webp',
      date: '22-feb-2024',
    },
    {
      title: 'Our New eyewear blog',
      image: '../../../assets/images/blogpost.webp',
      date: '22-feb-2024',
      commentCount: 8,
    },
    {
      title: 'Our New eyewear blog',
      image: '../../../assets/images/blogpost.webp',
      date: '22-feb-2024',
      commentCount: 10,
    },
  ];

  faqs = [
    {
      question: 'How are you different from other HVAC marketing companies?',
      answer:
        'We specialize in data-driven marketing strategies that help HVAC companies generate more leads and sales.',
      isOpen: false,
    },
    {
      question:
        'How long does it take to start seeing results with your HVAC marketing solutions?',
      answer:
        'Results vary, but many clients start seeing improvements in 4-6 weeks.',
      isOpen: false,
    },
    {
      question: 'Do you offer any guarantees?',
      answer:
        'Yes, we offer performance-based guarantees depending on the service package you choose.',
      isOpen: false,
    },
    {
      question: 'Can you explain this free HVAC CRM you offer?',
      answer:
        'Our CRM helps you manage leads, automate follow-ups, and track performance in one easy dashboard.',
      isOpen: false,
    },
    {
      question: 'Do I have to sign a long-term contract?',
      answer:
        'No, we offer flexible month-to-month plans with no long-term commitments.',
      isOpen: false,
    },
    {
      question:
        'How do you tailor HVAC advertising ideas to my specific market?',
      answer:
        'We analyze local trends, competitor strategies, and customer behavior to create personalized campaigns.',
      isOpen: false,
    },
    {
      question: 'How many HVAC leads can I expect each month?',
      answer:
        'Lead volume depends on your budget and market conditions, but we focus on maximizing your ROI.',
      isOpen: false,
    },
    {
      question: 'What can I expect from your HVAC marketing strategy session?',
      answer:
        'Our strategy session includes a deep dive into your business, competitive analysis, and actionable marketing recommendations.',
      isOpen: false,
    },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleFAQ(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
