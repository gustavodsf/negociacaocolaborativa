//HotJar
"use client";

import Script from "next/script";
import * as gtag from "../gtag";

const HotJar = () => {
  return (
    <Script
      strategy="afterInteractive"
      id="hotjar"
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${gtag.NEXT_HOTJAR_TRACKING_ID},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
      }}
    />
  );
};

export default HotJar;
