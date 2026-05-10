'use client';

export const STREETLIGHT_DOWNLOAD_URL =
  'https://github.com/MQ-06/STREETLIGHT-PK/releases/download/v1.0.0/app-release.apk';

const buttonClassName =
  'inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B0F14] shadow-[0_0_18px_rgba(244,185,66,0.45),0_0_42px_rgba(244,185,66,0.22)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(244,185,66,0.55)] sm:px-8 sm:py-3.5 sm:text-sm';

type DownloadStreetLightCTAProps = {
  downloadUrl?: string;
  variant?: 'banner' | 'button';
  showPlaceholderNote?: boolean;
  className?: string;
};

export default function DownloadStreetLightCTA({
  downloadUrl = STREETLIGHT_DOWNLOAD_URL,
  variant = 'banner',
  showPlaceholderNote = false,
  className = '',
}: DownloadStreetLightCTAProps) {
  if (variant === 'button') {
    return (
      <a
        href={downloadUrl}
        target="_blank"
        rel="noreferrer"
        className={`${buttonClassName} ${className}`.trim()}
      >
        Download App
      </a>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-col items-stretch justify-between gap-5 rounded-2xl border border-white/15 bg-[#0a0c10]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:flex-row md:items-center md:gap-8 md:p-8">
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Download StreetLight</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
            Help your city improve one report at a time.
          </p>
        </div>
        <a href={downloadUrl} target="_blank" rel="noreferrer" className={buttonClassName}>
          Download App
        </a>
      </div>
      {showPlaceholderNote ? (
        <p className="mt-4 text-xs text-white/65">Download link placeholder. Replace with your final APK URL.</p>
      ) : null}
    </div>
  );
}
