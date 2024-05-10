import { ApplicationMenuType } from "../types/applicationMenu";

const applicationMenu:ApplicationMenuType[] = [{
    label: "Patient Demographics",
    dataSource:"patientDemographics.json" 
  },{
    label: "Authorization For Disclosure Of Health Information",
    dataSource:"authorizationForDisclosureOfHealthInformation.json"
  },{
    label: "Consent For Medical Care And Treatment",
    dataSource:"consentForMedicalCareAndTreatment.json"
  }];

export default applicationMenu