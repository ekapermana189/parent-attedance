import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {

  get name(){
  return this.registrationForm.get('name');
}

get email(){
  return this.registrationForm.get('email');
}

get phone(){
  return this.registrationForm.get('phone');
}

get street(){
  return this.registrationForm.get('address.street');
}

get city(){
  return this.registrationForm.get('address.city');
}

get state(){
  return this.registrationForm.get('address.state');
}

get zip(){
  return this.registrationForm.get('address.zip');
}
 
public errorMessages = {
  name:[
    { type:'required', message:'Name is required' },
    { type:'maxlength', message:'terserah ludah' }
  ],
  email:[
    { type:'required', message:'Email is required' },
    { type:'pattern', message:'Please Enter a Valid email address' }
  ],
  phone:[
    { type:'required', message:'Phone is required' },
    { type:'pattern', message:'Please Enter a Valid phone number' }
  ],
  street:[
    { type:'required', message:'Street is required' },
    { type: 'maxlength',
      message :'Street name can be longer than 100 character'}
  ],
  city:[
    { type:'required', message:'City is required' },
    { type: 'maxlength',
      message :'City name can be longer than 100 character'}
  ],
  state:[
    { type:'required', message:'State is required' },
    { type: 'maxlength',
      message :'State name can be longer than 100 character'}
  ],
  zip:[
    { type:'required', message:'Zip is required' },
    { type: 'maxlength',
      message :'Zip name can be longer than 100 character'}
  ]
};

  registrationForm  = this.formBuilder.group({
    name:['',[Validators.required, Validators.maxLength(100)]],
    email:['',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
        ]
      ],
    phone:['',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
  ],
    address: this.formBuilder.group({
      street:['',[Validators.required, Validators.maxLength(100)]],
      city:['',[Validators.required, Validators.maxLength(100)]],
      state:['',[Validators.required, Validators.maxLength(100)]],
      zip:['',[Validators.required, Validators.maxLength(100)]]
    })
   
  });

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
  }

  public submit(){
    console.log(this.registrationForm.value);
  }
}
