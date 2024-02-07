type TJobTypes = "Full-Time" | "Part-Time" | "FreeLance" | "Contract" | "Internship";

interface JobInformation {
  jobTitle: string;
  companyTitle: string;
  salaryRange: string;
  srcPath: string;
  jobTypes: TJobTypes;
}

type jobsInformationType = "About" | "Qualification" | "Resposibilities";
type jobsCategoriesType = "Product" | "Design" | "Development" | "FreeLance" | "Management";
interface IJobInformation {
  title: string;
  companyTitle: string;
  description: { about: string; qualification: string; responsibilities: string };
}

interface responseJobs {
  company_logo_url: string;
  company_name: string;
  company_rating: string;
  company_review_link: string;
  company_reviews: number;
  date: string;
  job_location: string;
  job_title: string;
  job_url: string;
  multiple_hiring: string;
  next_page: string;
  page_number: number;
  position: number;
  salary: string;
  urgently_hiring: string;
}
