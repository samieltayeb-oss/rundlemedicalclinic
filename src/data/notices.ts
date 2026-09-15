export type ClinicNotice = {
  enabled: boolean;
  severity: "info" | "important" | "closure";
  title?: string;
  message: string;
  startAt?: string;
  endAt?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const activeNotice: ClinicNotice = {
  enabled: false, // Set to true to activate
  severity: "important",
  title: "Holiday Hours",
  message: "We will be operating on reduced hours this weekend.",
  cta: {
    label: "View Hours",
    href: "/contact"
  }
};
