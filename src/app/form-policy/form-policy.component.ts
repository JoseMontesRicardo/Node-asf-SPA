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
  policies: PolicyType[] = [
    {
      "_id": "5bd7c02aa3bef840fa266f5a",
      "name": "SOAT",
      "value": 300000,
      "insurancePolicys": []
    },
    {
      "_id": "5bd7c03cb07f3d41258d9bd0",
      "name": "Todo riesgo",
      "value": 900000,
      "insurancePolicys": []
    }
  ];
  policyType: PolicyType = this.policies[0];

  constructor(public policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getList().then(data => {
      console.log(data)
    });
  }

}
