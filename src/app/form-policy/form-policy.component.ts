import { Component, OnInit } from '@angular/core';

import { InsurancePolicy } from '../../classes/InsurancePolicy';
import { PolicyType } from '../../classes/PolicyType';
import { PolicyService } from '../policy.service';


@Component({
  selector: 'app-form-policy',
  templateUrl: './form-policy.component.html',
  styleUrls: ['./form-policy.component.scss'],
  providers: [
    PolicyService
  ]
})
export class FormPolicyComponent implements OnInit {

  insurancePolicy: InsurancePolicy = new InsurancePolicy();
  policies: PolicyType[];
  policyType: PolicyType;

  constructor(public policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getList().then(data => {
      this.policies = data;
      this.policyType = this.policies[0];
    });
  }

  onSaveData() {
    console.log(this.insurancePolicy, this.policyType)
  }

}
