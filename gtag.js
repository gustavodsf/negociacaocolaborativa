export const NEXT_PUBLIC_GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID7
export const NEXT_HOTJAR_TRACKING_ID = process.env.NEXT_PUBLIC_HOTJAR_TRACKING_ID

export const pageview = url => {
  window.gtag("config", NEXT_PUBLIC_GOOGLE_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};