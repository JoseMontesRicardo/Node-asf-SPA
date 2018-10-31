import { Component, OnInit } from '@angular/core';

import { InsurancePolicy } from '../../classes/InsurancePolicy';
import { PolicyType } from '../../classes/PolicyType';
import { PolicyService } from '../policy.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


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

  async onSaveData() {
    try {
      this.insurancePolicy.policyType = this.policyType._id;
      console.log(this.insurancePolicy)
      await this.policyService.createInsurancePolicy(this.insurancePolicy);
      alert('Datos guardados correctamente')
      this.cleanObjects();
    } catch (error) {
    }
  }

  cleanObjects() {
    this.insurancePolicy = new InsurancePolicy();
    this.policyType = this.policies[0];
  }

}
