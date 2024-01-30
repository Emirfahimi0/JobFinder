type TJobTypes = "Full-Time" | "Part-Time" | "FreeLance" | "Contract" | "Internship";

interface JobInformation {
  jobTitle: string;
  companyTitle: string;
  salaryRange: string;
  srcPath: string;
  jobTypes: TJobTypes;
}
