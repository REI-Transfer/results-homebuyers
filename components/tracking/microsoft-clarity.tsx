import Script from "next/script"

// Microsoft Clarity — site-wide session analytics. Env-var-driven with NO hardcoded
// id (mirrors GoFunnelTracking): reads NEXT_PUBLIC_CLARITY_ID; when unset/empty this
// renders nothing (a no-op), so it's inert until a deployment opts in. Loaded once at
// the root layout so it persists across SPA funnel-step navigation.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? ""

export function MicrosoftClarity() {
  if (!CLARITY_ID) return null // analytics disabled for this deployment

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
    </Script>
  )
}
