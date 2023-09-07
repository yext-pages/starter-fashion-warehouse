export interface BlogStarter_headerLinks {
  label?: string;
  uRL?: string;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface ComplexImageType {
  image: ImageType;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface BlogStarter_footerLinks {
  label?: string;
  uRL?: string;
}

export interface SiteEntity {
  blogStarter_headerLinks: BlogStarter_headerLinks[];
  logo: ComplexImageType;
  blogStarter_footerLinks: BlogStarter_footerLinks[];
}

export interface Blog {
  name: string;
  slug: string;
  datePosted: string;
  primaryPhoto: ComplexImageType;
  blogStarter_body: any;
  blogStarter_blogAuthor: string;
  blogStarter_description: string;
  blogStarter_metaDescription: string;
  blogStarter_keywords: string;
}

export interface BlogStarter_featuredBlogs {
  id?: string;
  name?: string;
  slug?: string;
  primaryPhoto?: ComplexImageType;
  blogStarter_description?: string;
  datePosted?: string;
}

export interface Home {
  id: string;
  name: string;
  blogStarter_coverPhoto: ComplexImageType;
  blogStarter_heading: string;
  blogStarter_subHeading: string;
  slug: string;
  blogStarter_featuredBlogs: BlogStarter_featuredBlogs[];
}

export interface Interval {
  start: string;
  end: string;
}

export interface DayHour {
  openIntervals?: Interval[];
  isClosed?: boolean;
}

export interface HolidayHours {
  date: string;
  openIntervals?: Interval[];
  isClosed?: boolean;
  isRegularHours?: boolean;
}

export interface Hours {
  monday?: DayHour;
  tuesday?: DayHour;
  wednesday?: DayHour;
  thursday?: DayHour;
  friday?: DayHour;
  saturday?: DayHour;
  sunday?: DayHour;
  holidayHours?: HolidayHours[];
  reopenDate?: string;
}

export interface Address {
  line1?: string;
  line2?: string;
  line3?: string;
  sublocality?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  extraDescription?: string;
  countryCode?: string;
}

export interface Location {
  slug: string;
  id: string;
  name: string;
  hours: Hours;
  photoGallery: ComplexImage[];
  address: Address;
}
