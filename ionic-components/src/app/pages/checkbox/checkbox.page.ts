import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss']
})
export class CheckboxPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  entries = [
    {
      value: 'Jon Snow',
      isChecked: true,
      color: 'primary',
      disabled: false
    },
    {
      value: 'Daenerys Targaryen',
      isChecked: true,
      color: 'dark',
      disabled: false
    },
    {
      value: 'Arya Stark',
      isChecked: false,
      color: '',
      disabled: true
    },
    {
      value: 'Tyrion Lannister',
      isChecked: true,
      color: 'secondary',
      disabled: false
    },
    {
      value: 'Sansa Stark',
      isChecked: true,
      color: 'danger',
      disabled: false
    },
    {
      value: 'Cersei Lannister',
      isChecked: true,
      color: 'tertiary',
      disabled: false
    },
    {
      value: 'Stannis Baratheon',
      isChecked: true,
      color: 'medium',
      disabled: true
    }
  ];
}
