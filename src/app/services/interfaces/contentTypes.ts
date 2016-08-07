import { Content } from './content';

/* type from API = 'date-period' */
interface DatePeriodContent extends Content {
  dateTo: Date;
  dateFrom: Date;
  heading: string;
  subheading: string;
  text: string;
}

/* type from API = 'quote' */
interface QuoteContent extends Content {
  text: string;
}

/* type from API = 'skill' */
interface SkillContent extends Content {
  skillName: string;
  percent: string;
}
