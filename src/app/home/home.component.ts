import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public traiCay = ['Táo', 'Nho', 'Cam', 'Quýt', 'Mít'];
  public traiCay2 = [
    {ten: 'Táo', gia: 15, haGia: true},
    {ten: 'Nho', gia: 2, haGia: false},
    {ten: 'Cam', gia: 3, haGia: false},
    {ten: 'Quýt', gia: 30, haGia: true},
    {ten: 'Mít', gia: 40, haGia: true}
];
  constructor() { }

  ngOnInit(): void {
    console.log('trai cay = ', this.traiCay2)
  }

}
